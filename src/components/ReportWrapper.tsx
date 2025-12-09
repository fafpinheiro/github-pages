'use client';

import React, { useEffect, useRef } from 'react';
import '@/src/styles/content.css';

interface ReportWrapperProps {
  content: string;       
  styles?: string;       
  scripts?: string[];    
  inlineScript?: string; 
  title: string;
}

const ReportWrapper: React.FC<ReportWrapperProps> = ({ 
  content, 
  styles, 
  scripts = [], 
  inlineScript, 
  title 
}) => {
  // Use a ref to ensure the initialization runs only once per content change
  const scriptsLoadedRef = useRef(false);

  useEffect(() => {
    // This effect runs after the component renders (with the new HTML content).
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

      // 2. Execute inline report logic safely
      if (inlineScript) {
        // Introduce a small delay (50ms) to ensure the DOM (specifically the <canvas> elements) 
        // has been fully rendered and sized by the browser layout engine before Chart.js attempts to draw.
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
            }
        }, 50); // 50ms delay to allow DOM sizing
      }
    };

    loadScriptsSequential();
    
    // Cleanup function to allow scripts to run again if content or slug changes
    return () => {
        scriptsLoadedRef.current = false;
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