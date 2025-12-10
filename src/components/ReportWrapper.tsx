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

  // 4. Load Polyfill: REMOVED DUE TO PREVIOUSLY IDENTIFIED NETWORK ERROR
  
  // 5. Load MathJax
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
        // Introduce a small delay (50ms) to ensure the DOM is ready for charts/scripts
        setTimeout(() => {
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
        
        // 🚨 CHART.JS CLEANUP FIX
        // This attempts to destroy all Chart.js instances associated with canvas elements
        // in the document, preventing the "Canvas is already in use" error on re-render.
        if (window.Chart) {
            try {
                // Iterate over all canvas elements to find and destroy existing charts
                document.querySelectorAll('canvas').forEach(canvasEl => {
                    const existingChart = window.Chart.getChart(canvasEl);
                    if (existingChart) {
                        existingChart.destroy();
                    }
                });
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