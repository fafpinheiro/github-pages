import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

// Import co-located report components
import AnimeGenModelReport from '../AnimeGenModelReport';
import GenerativeArchitectureReport from '../GenerativeArchitectureReport';
import LocalAICodingReport from '../LocalAICodingReport';
import SemanticSearchReport from '../SemanticSearchReport';
import StrategicPipelineReport from '../StrategicPipelineReport';
import TimeSeriesReport from '../TimeSeriesReport';
import VRPReport from '../VRPReport';

// Define the registry
const REPORT_COMPONENTS: Record<string, React.ComponentType> = {
  'Anime_Gen_Model.html': AnimeGenModelReport,
  'Generative_Architecture.html': GenerativeArchitectureReport,
  'Local_AI_Coding.html': LocalAICodingReport,
  'Semantic_Search.html': SemanticSearchReport,
  'Strategic_Generative_Pipeline.html': StrategicPipelineReport,
  'TimeSeries_Forecasting.html': TimeSeriesReport,
  'VRP.html': VRPReport,
};

// Generate static params for build time
export async function generateStaticParams() {
  return Object.keys(REPORT_COMPONENTS).map((slug) => ({
    slug: slug,
  }));
}

interface PageProps {
  params: { slug: string };
}

export default function ReportPage({ params }: PageProps) {
  const { slug } = params;
  const ReportComponent = REPORT_COMPONENTS[slug];

  if (!ReportComponent) {
    return notFound();
  }

  // Logic to clean the slug for display in the page title
  const displayTitle = slug
    .replace(/\.html$/, '') // 1. Remove the '.html' extension
    .replace(/_/g, ' ');    // 2. Replace underscores with spaces
  
  return (
    <div className="animate-in fade-in duration-500 flex flex-col h-full">
      <div className="mb-4">
        <Link 
          href="/reports"
          className="flex items-center text-slate-600 dark:text-slate-400 hover:text-orange-500 transition-colors w-fit"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Reports
        </Link>
      </div>
      
      <h1 className="text-2xl font-bold mb-4 capitalize text-slate-900 dark:text-white">
        {/* Use the cleaned display title */}
        {displayTitle} Report
      </h1>
      
      <ReportComponent />
    </div>
  );
}