'use client';

import React, { useEffect } from 'react';
import '@/src/styles/content.css';
import '@/src/styles/posts.css';
// import hljs from 'highlight.js'; // REMOVED: Do not use Highlight.js

interface PostWrapperProps {
  content: string; // The raw HTML content string (not filename)
  title?: string;
}

// ====================================================================
// STANDALONE UTILITY FUNCTION FOR SYNTAX HIGHLIGHTING (LITERAL FIX)
// Fixes: Ensures True/False/int/float are correctly classified as Grey Literals.
// ====================================================================
const highlightFunctionCalls = () => {
  // --- COLOR MAPPING ---
  const PURPLE_KEYWORDS = [
    'and', 'as', 'assert', 'async', 'await', 'break', 'case', 'class', 'continue', 
    'def', 'del', 'elif', 'else', 'except', 'finally', 'for', 'from', 'global', 
    'if', 'import', 'in', 'is', 'lambda', 'match', 'nonlocal', 'not', 'or', 
    'pass', 'raise', 'return', 'try', 'while', 'with', 'yield'
  ];
  
  const classMap = {
    keyword: 'hljs-keyword', // Purple
    literal: 'hljs-number', // Grey
    string: 'hljs-string', // Green
    blueIdentifier: 'hljs-custom-func-call', // Blue (for function names)
    orangeSymbol: 'hljs-symbol-op', // Orange (for operators and punctuation like =, +, *, (, ), ;)
  };

  // List of tokens that should be GREY
  const GREY_LITERALS_AND_TYPES = [
    'True', 'False', 'None', 'int', 'float', 'complex', 'str', 'list', 'tuple', 
    'dict', 'set', 'bool', 'frozenet', 'bytes', 'bytearray', 'memoryview', 'NoneType'
  ];

  // Regex to split code into ALL tokens
  const TOKENIZER = /(\b[a-zA-Z_][a-zA-Z0-9_]*\b|\b\d+(\.\d+)?\b|("|').*?(\3)|[^\s\w]|\s+)/g;

  document.querySelectorAll('pre code').forEach(codeBlock => {
    let rawContent = codeBlock.textContent || '';
    
    // Temporarily decode standard entities just in case they survived the initial DOM pass
    rawContent = rawContent.replace(/&lt;/g, '<')
                            .replace(/&gt;/g, '>')
                            .replace(/&amp;/g, '&'); 

    let highlightedTokens: string[] = [];
    let lastIndex = 0;
    let match: RegExpExecArray | null;
    
    const localTokenizer = new RegExp(TOKENIZER, 'g');
    localTokenizer.lastIndex = 0; 

    while ((match = localTokenizer.exec(rawContent)) !== null) {
      const token = match[0];
      const index = match.index;
      
      // Capture preceding whitespace/symbols
      if (index > lastIndex) {
        highlightedTokens.push(rawContent.substring(lastIndex, index));
      }

      let className: string | null = null;
      
      // 3.1. Classification Checks
      
      // --- Identifier Check ---
      const isIdentifier = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(token);

      if (isIdentifier) {
        // A. Check for Keywords (Purple)
        if (PURPLE_KEYWORDS.includes(token)) {
          className = classMap.keyword;
        }
        // B. Check for Literals and Types (Grey)
        else if (GREY_LITERALS_AND_TYPES.includes(token)) {
          className = classMap.literal;
        }
        // C. Check for Function Call Pattern (Blue)
        else {
          let lookaheadIndex = index + token.length; 
          let foundOpenParen = false;
          
          // Lookahead: Skip whitespace/operators to find the next meaningful token
          while (lookaheadIndex < rawContent.length) {
            const nextTokenMatch = rawContent.substring(lookaheadIndex).match(/(\s*([^\s\w]|\b[a-zA-Z_][a-zA-Z0-9_]*\b))/);
            
            if (!nextTokenMatch) break; 

            const nextToken = nextTokenMatch[2]; 

            if (!nextToken.match(/^\s+$/)) {
              if (nextToken === '(') {
                foundOpenParen = true;
              }
              break; 
            }
            lookaheadIndex += nextTokenMatch[0].length;
          }

          if (foundOpenParen) {
            className = classMap.blueIdentifier;
          }
        }
      } 
      
      // --- Non-Identifier Checks ---
      
      // D. Strings (Green)
      else if (token.match(/^("|').*?(\1)$/)) {
          className = classMap.string;
      } 
      // E. Numeric Literals (Grey) - Need to ensure only numbers are matched here.
      else if (token.match(/^\b\d+(\.\d+)?\b$/)) {
          className = classMap.literal;
      }
      // F. Symbols and Punctuation (Orange)
      else if (token.match(/^[^\s\w]$/)) { // Matches any single non-alphanumeric, non-whitespace character
          className = classMap.orangeSymbol;
      }
      
      // 3.2. Apply Span or push raw token
      if (className) {
          highlightedTokens.push(`<span class="${className}">${token}</span>`);
      } else {
          // Fallthrough: Variables, complex symbols/punctuation (RED by CSS default)
          highlightedTokens.push(token);
      }

      lastIndex = index + token.length;
    }

    // Push any remaining content
    if (lastIndex < rawContent.length) {
      highlightedTokens.push(rawContent.substring(lastIndex));
    }

    // --- 4. Update the innerHTML ---
    codeBlock.innerHTML = highlightedTokens.join('');
  });
};
// ====================================================================


const loadMathJax = () => {
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
  
  if (typeof window.MathJax !== 'undefined' && typeof window.MathJax.typeset === 'function') {
    window.MathJax.typesetClear!();
    window.MathJax.typeset!();
    return;
  }

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
  
  useEffect(() => {
    if (content) {
      loadMathJax();
    }
  }, [content]);

  useEffect(() => {
    if (content) {
      const container = document.querySelector('.post-container');
      if (container) {
        highlightFunctionCalls(); 
      }
    }
  }, [content]);
  
  return (
    <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-800 p-8">
      <div 
        className="post-container"
        dangerouslySetInnerHTML={{ __html: content }} 
      />
    </div>
  );
};

export default PostWrapper;

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
  }
}