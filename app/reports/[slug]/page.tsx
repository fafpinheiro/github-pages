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
  'anime-gen': AnimeGenModelReport,
  'gen-arch': GenerativeArchitectureReport,
  'local-ai': LocalAICodingReport,
  'semantic': SemanticSearchReport,
  'strategic': StrategicPipelineReport,
  'timeseries': TimeSeriesReport,
  'vrp': VRPReport,
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
        {slug.replace(/-/g, ' ')} Report
      </h1>
      
      <ReportComponent />
    </div>
  );
}