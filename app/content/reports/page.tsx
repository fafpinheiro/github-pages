'use client';

import React, { useState } from 'react';
import { FileText, ArrowLeft, ExternalLink } from 'lucide-react';
import SectionHeading from '@/src/components/ui/SectionHeading';
import GlassCard from '@/src/components/ui/GlassCard';

// Configuration for your reports
const REPORTS = [
  { id: 'anime-gen', title: 'Anime Generation Model', filename: 'Anime_Gen_Model.html', category: 'Deep Learning' },
  { id: 'gen-arch', title: 'Generative Architecture', filename: 'Generative_Architecture.html', category: 'Architecture' },
  { id: 'local-ai', title: 'Local AI Coding', filename: 'Local_AI_Coding.html', category: 'DevOps' },
  { id: 'semantic', title: 'Semantic Search', filename: 'Semantic_Search.html', category: 'NLP' },
  { id: 'strategic', title: 'Strategic Generative Pipeline', filename: 'Strategic_Generative_Pipeline.html', category: 'Strategy' },
  { id: 'timeseries', title: 'Time Series Forecasting', filename: 'TimeSeries_Forecasting.html', category: 'Data Science' },
  { id: 'vrp', title: 'Vehicle Routing Problem', filename: 'VRP.html', category: 'Combinatorial Optimization' },
];

export default function ReportsPage() {
  const [selectedReport, setSelectedReport] = useState<string | null>(null);

  // Logic to handle GitHub Pages subdirectory path
  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const basePath = rawBasePath.endsWith('/') && rawBasePath.length > 1 
                   ? rawBasePath.slice(0, -1) 
                   : rawBasePath;

  const handleSelect = (filename: string) => {
    setSelectedReport(filename);
  };

  const handleBack = () => {
    setSelectedReport(null);
  };

  // View Mode: Display the selected report in an iframe
  if (selectedReport) {
    return (
      <div className="h-[calc(100vh-8rem)] flex flex-col animate-in fade-in duration-300">
        <button 
          onClick={handleBack}
          className="flex items-center text-slate-600 dark:text-slate-400 hover:text-orange-500 mb-4 transition-colors w-fit"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Reports
        </button>
        <div className="flex-grow bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-800">
          <iframe 
            src={`${basePath}/reports/${selectedReport}`} 
            className="w-full h-full border-none"
            title="Report Viewer"
          />
        </div>
      </div>
    );
  }

  // List Mode: Display cards for each report
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Research Reports</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Detailed technical analysis and strategic documents.</p>
      </div>

      <section>
        <SectionHeading title="Available Reports" icon={<FileText className="text-orange-500" />} />
        <div className="grid md:grid-cols-2 gap-6">
          {REPORTS.map((report) => (
            <div key={report.id} onClick={() => handleSelect(report.filename)} className="cursor-pointer group">
              <GlassCard className="p-6 h-full hover:border-orange-500/50 transition-colors">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{report.category}</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-orange-500 transition-colors">{report.title}</h3>
                    </div>
                    <ExternalLink size={18} className="text-slate-400 group-hover:text-orange-500" />
                </div>
                <p className="text-sm text-slate-500 mt-4">Click to view full HTML report.</p>
              </GlassCard>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}