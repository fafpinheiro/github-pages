import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
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

// Generate static params for build time
export async function generateStaticParams() {
  return Object.keys(REPORTS_DATA).map((slug) => ({
    slug: slug,
  }));
}

interface PageProps {
  params: { slug: string };
}

export default function ReportPage({ params }: PageProps) {
  const { slug } = params;
  const reportConfig = REPORTS_DATA[slug];

  if (!reportConfig) {
    return notFound();
  }

  return (
    <div className="animate-in fade-in duration-500 flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mb-6">
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

        {/* Render the single reusable wrapper */}
        <ReportWrapper 
          htmlFileName={reportConfig.file} 
          title={reportConfig.title} 
        />
      </main>
    </div>
  );
}