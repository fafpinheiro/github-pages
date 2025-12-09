'use client';

import React, { useEffect } from 'react';
import '@/src/styles/posts.css'; // Make sure the path to your CSS is correct

interface PostWrapperProps {
  content: string; // The raw HTML content string (not filename)
  title?: string;
}

// Function to load and typeset MathJax
const loadMathJax = () => {
  // 1. Define the configuration for MathJax
  // This MUST be set on the window object before the main MathJax script is loaded
  if (typeof window.MathJax === 'undefined') {
    window.MathJax = {
      tex: {
        inlineMath: [['$', '$'], ['\\(', '\\)']], // Enables single dollar signs for inline math
        displayMath: [['$$', '$$'], ['\\[', '\\]']], // Ensures double dollar signs work for block math
      },
      svg: {
        fontCache: 'global'
      }
    };
  }
  
  // Check if MathJax is already loaded (it would exist on window.MathJax)
  // We must check if typeset exists before calling it
  if (typeof window.MathJax.typeset !== 'undefined') {
    // Clear any previous typesetting and typeset the new content
    // The optional chaining operator (?.) is often cleaner, but for clarity 
    // with the type guard above, we can assert non-nullability or rely on the check.
    window.MathJax.typesetClear!();
    window.MathJax.typeset!();
    return;
  }

  // Load MathJax scripts dynamically
  const polyfillScript = document.createElement('script');
  polyfillScript.src = "https://polyfill.io/v3/polyfill.min.js?features=es6";
  document.head.appendChild(polyfillScript);

  const mathJaxScript = document.createElement('script');
  mathJaxScript.id = 'MathJax-script';
  mathJaxScript.async = true;
  mathJaxScript.src = "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
  document.head.appendChild(mathJaxScript);
};


const PostWrapper: React.FC<PostWrapperProps> = ({ content }) => {
  // Use an effect to load MathJax after the component renders the content
  useEffect(() => {
    // Wait for the DOM to update with the new 'content' before attempting to typeset
    if (content) {
      loadMathJax();
    }
  }, [content]); // Rerun whenever the post content changes

  return (
    // The GlassCard styling (background, padding, shadow) remains.
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-800 p-8">
      {/* The 'post-container' class (from app/posts.css) now wraps the raw HTML. */}
      <div 
        className="post-container"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  );
};

export default PostWrapper;

// Extend Window interface for MathJax global object
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
      // FIX: Made these functions optional as they are only available after the script loads.
      // We also use the non-null assertion operator (!) in loadMathJax() for calls.
      typesetClear?: () => void; 
      typeset?: () => void;
    } | undefined;
  }
}