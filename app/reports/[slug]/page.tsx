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
import AudioSignalProcessingReport from '../AudioSignalProcessingReport';
import WasteLogisticsArchitectureReport from '../WasteLogisticsArchitectureReport';

// Define the registry
const REPORT_COMPONENTS: Record<string, React.ComponentType> = {
  // Reverted to clean slugs as per previous fix
  'anime-gen': AnimeGenModelReport,
  'gen-arch': GenerativeArchitectureReport,
  'local-ai': LocalAICodingReport,
  'semantic': SemanticSearchReport,
  'strategic': StrategicPipelineReport,
  'timeseries': TimeSeriesReport,
  'vrp': VRPReport,
  'audio-signal-proc': AudioSignalProcessingReport,
  'waste-logistics-architecture': WasteLogisticsArchitectureReport,
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
    // FIX: Removed "h-full" to allow natural scrolling with the new header
    <div className="animate-in fade-in duration-500 flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950">

      {/* Main Content Container */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-12">
        <div className="mb-6">
          <Link
            href="/reports"
            className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors w-fit group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Reports List
          </Link>
        </div>

        <h1 className="text-3xl font-bold mb-6 capitalize text-slate-900 dark:text-white">
          {slug.replace(/-/g, ' ')} Report
        </h1>

        <ReportComponent />
      </main>
    </div>
  );
}
