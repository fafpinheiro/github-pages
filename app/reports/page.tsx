'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, ExternalLink } from 'lucide-react';
import SectionHeading from '@/src/components/ui/SectionHeading';
import GlassCard from '@/src/components/ui/GlassCard';

const REPORTS = [
  { id: 'anime-gen', title: 'Anime Generation Model', category: 'Deep Learning', slug: 'anime-gen' },
  { id: 'gen-arch', title: 'Generative Architecture', category: 'Architecture', slug: 'gen-arch' },
  { id: 'local-ai', title: 'Local AI Coding', category: 'DevOps', slug: 'local-ai' },
  { id: 'semantic', title: 'Semantic Search', category: 'NLP', slug: 'semantic' },
  { id: 'strategic', title: 'Strategic Generative Pipeline', category: 'Strategy', slug: 'strategic' },
  { id: 'timeseries', title: 'Time Series Forecasting', category: 'Data Science', slug: 'timeseries' },
  { id: 'vrp', title: 'Vehicle Routing Problem', category: 'Optimization', slug: 'vrp' },
];

export default function ReportsIndexPage() {
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
            <Link key={report.id} href={`/reports/${report.slug}`} className="group">
              <GlassCard className="p-6 h-full hover:border-orange-500/50 transition-colors cursor-pointer">
                <div className="flex justify-between items-start">
                    <div>
                        <span className="text-xs font-bold text-orange-500 uppercase tracking-wider">{report.category}</span>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1 group-hover:text-orange-500 transition-colors">{report.title}</h3>
                    </div>
                    <ExternalLink size={18} className="text-slate-400 group-hover:text-orange-500" />
                </div>
                <p className="text-sm text-slate-500 mt-4">Click to view full HTML report.</p>
              </GlassCard>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}