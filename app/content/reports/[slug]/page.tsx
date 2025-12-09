import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import ReportWrapper from '@/src/components/ReportWrapper';

// Configuration: Map the slug to the Base Filename (no extension) and Title
const REPORTS_DATA: Record<string, { baseName: string; title: string }> = {
  'anime-gen': { 
    baseName: 'Anime_Gen_Model', 
    title: 'Anime Generation Model' 
  },
  'gen-arch': { 
    baseName: 'Generative_Architecture', 
    title: 'Generative Architecture' 
  },
  'local-ai': { 
    baseName: 'Local_AI_Coding', 
    title: 'Local AI Coding' 
  },
  'semantic': { 
    baseName: 'Semantic_Search', 
    title: 'Semantic Search' 
  },
  'strategic': { 
    baseName: 'Strategic_Generative_Pipeline', 
    title: 'Strategic Generative Pipeline' 
  },
  'timeseries': { 
    baseName: 'TimeSeries_Forecasting', 
    title: 'Time Series Forecasting' 
  },
  'vrp': { 
    baseName: 'VRP', 
    title: 'Vehicle Routing Problem' 
  },
  'audio-signal-proc': { 
    baseName: 'Audio_Signal_Processing', 
    title: 'Audio Signal Processing' 
  },
  'waste-logistics-architecture': { 
    baseName: 'Waste_Logistics_Architecture', 
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

/**
 * Loads and processes the report assets from the new directory structure:
 * - HTML: /public/reports/html/[baseName].html
 * - CSS:  /public/reports/css/[baseName].css
 * - JS:   /public/reports/javascript/[baseName].js
 */
function loadReportAssets(baseName: string) {
  const basePath = path.join(process.cwd(), 'public', 'reports');
  
  // Paths
  const htmlPath = path.join(basePath, 'html', `${baseName}.html`);
  const cssPath = path.join(basePath, 'css', `${baseName}.css`);
  const jsPath = path.join(basePath, 'javascript', `${baseName}.js`);

  let bodyContent = '';
  let styleContent = '';
  let inlineScriptContent = '';

  // 1. Load HTML (Required)
  try {
    const rawHtml = fs.readFileSync(htmlPath, 'utf8');
    
    // Clean up HTML: Extract content inside <body> or return raw if no body tag
    const bodyMatch = rawHtml.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    bodyContent = bodyMatch ? bodyMatch[1] : rawHtml;

    // Remove any leftover <script> or <style> tags from the HTML to be safe
    bodyContent = bodyContent.replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '');
    bodyContent = bodyContent.replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '');

  } catch (err) {
    console.error(`HTML file not found for: ${baseName}`, err);
    throw new Error('Report HTML missing');
  }

  // 2. Load CSS (Optional)
  try {
    if (fs.existsSync(cssPath)) {
      let rawCss = fs.readFileSync(cssPath, 'utf8');
      
      // Scope the CSS to .report-content to prevent global leaks
      rawCss = rawCss.replace(/(^|[\s,}])\b(body|html)\b(?=[\s,{])/gi, '$1.report-content');
      styleContent = rawCss;
    }
  } catch (err) {
    console.warn(`CSS file not found for: ${baseName}`);
  }

  // 3. Load Javascript (Optional)
  try {
    if (fs.existsSync(jsPath)) {
      let rawJs = fs.readFileSync(jsPath, 'utf8');

      // PRE-PROCESSING:
      // A. Remove problematic immediate calls if present (for Semantic Search only)
      rawJs = rawJs.replace(/updateLoss\s*\(\s*['"]contrastive['"]\s*\)\s*;?/g, '// Removed problematic updateLoss initialization call');

      // B. Handle DOMContentLoaded Logic
      // ---------------------------------------------------------
      // FIX: Dynamically select regex based on file structure.
      // 1. Lazy Match (Default): Stops at first "});". Safe for files where functions follow the listener (Anime Gen).
      // 2. Greedy Match (Semantic): Consumes everything. Required for files with nested "});" inside the listener.
      // ---------------------------------------------------------
      let domLoadedRegex = /document\.addEventListener\s*\(\s*['"]DOMContentLoaded['"]\s*,\s*(\(\)\s*=>\s*|function\s*)\s*{([\s\S]*?)}\s*\)\s*;/i;
      
      if (baseName === 'Semantic_Search') {
         domLoadedRegex = /document\.addEventListener\s*\(\s*['"]DOMContentLoaded['"]\s*,\s*(\(\)\s*=>\s*|function\s*)\s*{([\s\S]*)}\s*\)\s*;/i;
      }

      const initMatch = rawJs.match(domLoadedRegex);
      
      let initCode = '';
      if (initMatch) {
        initCode = initMatch[2].trim();
        // Remove the listener block from the main script to avoid duplication
        rawJs = rawJs.replace(domLoadedRegex, '');
        
        // Semantic Search Cleanup (inside extracted code)
        initCode = initCode.replace(/updateLoss\s*\(\s*['"]contrastive['"]\s*\)\s*;?/g, '// Removed initialization via loadReportAssets clean-up');
      }

      // C. Expose Functions to Window (Crucial for onclick handlers in HTML)
      // FIX: Robust regex that matches arguments AND the opening brace '{'.
      // Converts: "function myFunc(arg) {" -> "window.myFunc = function(arg) {"
      rawJs = rawJs.replace(/function\s+([a-zA-Z0-9_]+)\s*\(([^)]*)\)\s*{/g, 'window.$1 = function($2) {');

      // Combine: Global Definitions + Initialization Code
      inlineScriptContent = `${rawJs}\n\n// --- Initialization ---\n${initCode}`;
      
      // Re-add specific initialization calls if needed (like the default state for Semantic Search)
      if (baseName === 'Semantic_Search') {
         inlineScriptContent += `\nif(window.updateLoss) window.updateLoss('contrastive');\n`;
      }
    }
  } catch (err) {
    console.warn(`JS file not found for: ${baseName}`);
  }

  return { bodyContent, styleContent, inlineScriptContent };
}

export default function ReportPage({ params }: PageProps) {
  const { slug } = params;
  const reportConfig = REPORTS_DATA[slug];

  if (!reportConfig) {
    return notFound();
  }

  let parsedData = { bodyContent: '', styleContent: '', inlineScriptContent: '' };
  
  // Script dependencies (like Chart.js) - You might want to move this to config if it varies
  const scriptFiles = [
    'https://cdn.jsdelivr.net/npm/chart.js' 
  ];

  try {
    parsedData = loadReportAssets(reportConfig.baseName);
  } catch (error) {
    console.error(`Error loading assets for ${reportConfig.baseName}:`, error);
    notFound();
  }

  return (
    <div className="animate-in fade-in duration-500 flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">
      
      <main className="flex-1 w-full pb-12">
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
            scripts={scriptFiles}
            inlineScript={parsedData.inlineScriptContent}
            title={reportConfig.title} 
          />
        </div>
      </main>
    </div>
  );
}