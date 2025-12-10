'use client';

import React, { useEffect, useRef } from 'react';
import '@/src/styles/content.css';
import '@/src/styles/reports.css';

interface ReportWrapperProps {
  content: string;       
  styles?: string;       
  scripts?: string[];    
  inlineScript?: string; 
  title: string;
}

const loadMathJax = () => {
  // 1. Configure MathJax if not already defined
  if (typeof window.MathJax === 'undefined') {
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']], 
        displayMath: [['$$', '$$'], ['\\[', '\\]']], 
      },
      svg: {
        fontCache: 'global'
      }
    };
  }
  
  // 2. If MathJax is already loaded and ready, just trigger a typeset
  if (typeof window.MathJax !== 'undefined' && typeof window.MathJax.typeset === 'function') {
    window.MathJax.typesetClear!();
    window.MathJax.typeset!();
    return;
  }

  // 3. Prevent duplicate script injection
  if (document.getElementById('MathJax-script')) {
    return;
  }
  
  // 4. Load MathJax
  const mathJaxScript = document.createElement('script');
  mathJaxScript.id = 'MathJax-script';
  mathJaxScript.async = true;
  mathJaxScript.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  document.head.appendChild(mathJaxScript);
};

const ReportWrapper: React.FC<ReportWrapperProps> = ({ 
  content, 
  styles, 
  scripts = [], 
  inlineScript, 
  title 
}) => {
  const scriptsLoadedRef = useRef(false);
  // FIX: Create a ref to the HTML content container div
  const contentRef = useRef<HTMLDivElement>(null);

  // Effect 1: Handles MathJax initial load and updates based on content
  useEffect(() => {
    if (content) {
      loadMathJax();
    }
  }, [content]);

  // Effect 2: Handles Report-specific Scripts (Charts, etc.)
  useEffect(() => {
    if (scriptsLoadedRef.current) return;
    scriptsLoadedRef.current = true;

    // FIX: Variable to hold the ID of the pending inline script timeout
    let timeoutId: number | undefined;

    const loadScriptsSequential = async () => {
      // 1. Load external scripts (like Chart.js) sequentially
      for (const src of scripts) {
        await new Promise<void>((resolve) => {
          if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = src;
          script.async = false;
          script.onload = () => resolve();
          script.onerror = () => {
            console.error(`Failed to load script: ${src}`);
            resolve();
          };
          document.body.appendChild(script);
        });
      }

      // 2. Execute inline report logic safely and force a final MathJax typeset
      if (inlineScript) {
        // Introduce a small delay to ensure the DOM is ready for charts/scripts
        // Store the timeout ID so we can cancel it on cleanup
        timeoutId = window.setTimeout(() => {
            try {
                const scriptEl = document.createElement('script');
                
                // Wrap in IIFE to prevent global variable collisions.
                const wrappedScript = `(function() {
                    ${inlineScript}
                })();`;

                scriptEl.textContent = wrappedScript;
                document.body.appendChild(scriptEl);
            } catch (err) {
                console.error("Error executing inline report script:", err);
            } finally {
                // Crucial: Force MathJax typeset AFTER inline scripts and delay have run
                if (window.MathJax && window.MathJax.typeset) {
                    window.MathJax.typesetClear!();
                    window.MathJax.typeset!();
                }
            }
        }, 50);
      } else {
         // If no inline script, ensure typeset runs immediately after external scripts load
         if (window.MathJax && window.MathJax.typeset) {
             window.MathJax.typesetClear!();
             window.MathJax.typeset!();
         }
      }
    };

    loadScriptsSequential();
    
    // Cleanup function: DESTROY CHART.JS INSTANCES AND RESET FLAG
    return () => {
        scriptsLoadedRef.current = false;
        
        // FIX 1: Clear the pending setTimeout (prevents stale script from running)
        if (timeoutId !== undefined) {
            window.clearTimeout(timeoutId);
        }
        
        // 🚨 FIX 2 & 3: ROBUST CHART.JS CLEANUP
        if (window.Chart && contentRef.current) { 
            try {
                // 1. Destroy existing chart instances
                const canvases = contentRef.current.querySelectorAll('canvas');

                canvases.forEach(canvasEl => {
                    const existingChart = window.Chart.getChart(canvasEl);
                    if (existingChart) {
                        existingChart.destroy();
                    }
                });

                // 2. 🌟 CRITICAL FIX: Forcefully clear the container's inner HTML 
                // This guarantees the canvas elements are physically removed from the DOM 
                // before the next render cycle, finally preventing the reuse error.
                contentRef.current.innerHTML = ''; 

            } catch (e) {
                console.warn("Error during Chart.js cleanup:", e);
            }
        }
    };
  }, [scripts, inlineScript, content]); 

  return (
    // Outer div structure (card styling)
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-800">
      
      {/* Inject Scoped Styles */}
      {styles && (
        <style dangerouslySetInnerHTML={{ __html: styles }} />
      )}

      {/* Inject HTML Content */}
      <div 
        ref={contentRef}
        className="post-container report-content py-10 space-y-20"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  );
};

export default ReportWrapper;

declare global {
  interface Window {
    MathJax: {
      tex: {
        inlineMath: string[][];
        displayMath: string[][];
      };
      svg: {
        fontCache: string;
      };
      typesetClear?: () => void; 
      typeset?: () => void; 
    } | undefined;
    Chart: any; // Added for Chart.js access in cleanup
  }
}