import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import ReportWrapper from '@/src/components/ReportWrapper';

// Configuration: Map the clean URL slug to the specific HTML file and Title
const REPORTS_DATA: Record<string, { file: string; title: string }> = {
  'anime-gen': { 
    file: 'Anime_Gen_Model.html', 
    title: 'Anime Generation Model' 
  },
  'gen-arch': { 
    file: 'Generative_Architecture.html', 
    title: 'Generative Architecture' 
  },
  'local-ai': { 
    file: 'Local_AI_Coding.html', 
    title: 'Local AI Coding' 
  },
  'semantic': { 
    file: 'Semantic_Search.html', 
    title: 'Semantic Search' 
  },
  'strategic': { 
    file: 'Strategic_Generative_Pipeline.html', 
    title: 'Strategic Generative Pipeline' 
  },
  'timeseries': { 
    file: 'TimeSeries_Forecasting.html', 
    title: 'Time Series Forecasting' 
  },
  'vrp': { 
    file: 'VRP.html', 
    title: 'Vehicle Routing Problem' 
  },
  'audio-signal-proc': { 
    file: 'Audio_Signal_Processing.html', 
    title: 'Audio Signal Processing' 
  },
  'waste-logistics-architecture': { 
    file: 'Waste_Logistics_Architecture.html', 
    title: 'Waste Logistics Architecture' 
  },
};

export async function generateStaticParams() {
  return Object.keys(REPORTS_DATA).map((slug) => ({
    slug: slug,
  }));
}

interface PageProps {
  params: { slug: string };
}

// Helper to parse HTML and scope its styles
function parseHtmlFile(fileContent: string) {
  // 1. Extract and SCOPE Styles
  const styleMatches = fileContent.match(/<style[^>]*>([\s\S]*?)<\/style>/gi) || [];
  const styleContent = styleMatches.map(s => {
    let css = s.replace(/<\/?style[^>]*>/gi, '');
    // Regex to safely replace 'body' or 'html' with '.report-content'
    css = css.replace(/(^|[\s,}])\b(body|html)\b(?=[\s,{])/gi, '$1.report-content');
    return css;
  }).join('\n');

  // 2. Extract Scripts with SRC (Exclude Tailwind CDN)
  const scriptSrcMatches = fileContent.match(/<script[^>]+src=["']([^"']+)["'][^>]*><\/script>/gi) || [];
  const scriptFiles = scriptSrcMatches.map(s => {
    const match = s.match(/src=["']([^"']+)["']/);
    if (!match) return null;
    const src = match[1];
    
    // Block Tailwind CDN and Polyfills
    if (src.includes('cdn.tailwindcss.com') || src.includes('polyfill.io')) return null;
    
    return src;
  }).filter((s): s is string => Boolean(s));

  // 3. Extract Inline Scripts (logic)
  const allScriptMatches = fileContent.match(/<script[^>]*>([\s\S]*?)<\/script>/gi) || [];
  let initializationCode = "";
  
  const processedScripts = allScriptMatches
    .filter(s => !s.includes('src='))
    .map(s => {
      let content = s.replace(/<\/?script[^>]*>/gi, '');

      // Step A: Find and extract the body of the document.addEventListener('DOMContentLoaded', ...)
      // Captures various function/arrow function syntaxes
      const initMatch = content.match(/document\.addEventListener\s*\(\s*['"]DOMContentLoaded['"]\s*,\s*(\(\)\s*=>\s*|function\s*)\s*{([\s\S]*?)}\s*\)\s*;/);
      if (initMatch) {
          // Store the inner code (e.g., initResourceChart(); renderModelList(); ...)
          initializationCode = initMatch[2].trim(); 
          
          // Remove the entire listener block from the content
          content = content.replace(initMatch[0], '// Removed original DOMContentLoaded listener block');
      }
      
      // Step B: CRITICAL FIX: Expose named functions to 'window' for onclick handlers
      // This converts hoisted function declarations to window assignments (non-hoisted expressions)
      content = content.replace(/function\s+([a-zA-Z0-9_]+)\s*\(/g, 'window.$1 = function(');

      // Remove the problematic updateLoss initialization call in Semantic Search if it exists
      content = content.replace(/updateLoss\s*\(\s*['"]contrastive['"]\s*\)\s*;/g, '// Removed problematic updateLoss initialization call');

      return content;
    });
  
  let inlineScriptContent = processedScripts.join('\n');

  // Step C: Append the extracted initialization code at the very end.
  // This ensures all window.func assignments are completed before the calls are made.
  if (initializationCode) {
      inlineScriptContent += `\n\n// START Report Initialization Code (Manually appended after all function definitions)\n`;
      inlineScriptContent += initializationCode;
      inlineScriptContent += `\n// END Report Initialization Code\n`;
  }
  
  // 4. Extract Main Content (Logic remains the same)
  const mainMatch = fileContent.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  let bodyContent = mainMatch ? mainMatch[1] : ''; 
  
  if (!bodyContent) {
      const bodyMatch = fileContent.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
      bodyContent = bodyMatch ? bodyContent[1] : '';
  }

  bodyContent = bodyContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');

  return { styleContent, scriptFiles, inlineScriptContent, bodyContent };
}

export default function ReportPage({ params }: PageProps) {
  const { slug } = params;
  const reportConfig = REPORTS_DATA[slug];

  if (!reportConfig) {
    return notFound();
  }

  const filePath = path.join(process.cwd(), 'public', 'reports', reportConfig.file);
  let parsedData = { styleContent: '', scriptFiles: [] as string[], inlineScriptContent: '', bodyContent: '' };

  try {
    const fileContent = fs.readFileSync(filePath, 'utf8');
    parsedData = parseHtmlFile(fileContent);
  } catch (error) {
    console.error(`Error reading file ${reportConfig.file}:`, error);
    notFound();
  }

  return (
    <div className="animate-in fade-in duration-500 flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      
      {/* Main Content Container */}
      <main className="flex-1 w-full pb-12">
        
        {/* Inner Wrapper for Alignment */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="mb-6 pt-10">
            <Link
              href="/content/reports"
              className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors w-fit group"
            >
              <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Reports List
            </Link>
          </div>

          <h1 className="text-3xl font-bold mb-6 capitalize text-slate-900 dark:text-white">
            {reportConfig.title}
          </h1>

          <ReportWrapper 
            content={parsedData.bodyContent}
            styles={parsedData.styleContent}
            scripts={parsedData.scriptFiles}
            inlineScript={parsedData.inlineScriptContent}
            title={reportConfig.title} 
          />
        </div>
      </main>
    </div>
  );
}