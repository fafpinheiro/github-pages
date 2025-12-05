import React from 'react';
import { Calendar, FileText, Tag } from 'lucide-react';
import SectionHeading from '@/src/components/ui/SectionHeading';
import GlassCard from '@/src/components/ui/GlassCard';
import Badge from '@/src/components/ui/Badge';

export default function AttentionRoutingPost() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="flex flex-wrap gap-2 mb-4">
            {['ML', 'RL', 'DL', 'GML', 'CO'].map(tag => (
                <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
        </div>
        <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight">
          Attention, Learn To Solve Routing Problems: Summary & Review
        </h1>
        <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span className="flex items-center gap-1"><Calendar size={16} /> Oct 28, 2024</span>
        </div>
      </div>

      {/* Content */}
      <GlassCard className="p-8 prose dark:prose-invert max-w-none">
        <p className="leading-relaxed text-slate-700 dark:text-slate-300 mb-6">
            The research paper <a href="/assets/docs/literature/papers/Attention_Solve_Routing.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">Attention, Learn To Solve Routing Problems</a> by Wouter Kool et al. introduces a new attention-based model — trained using the <a href="/assets/docs/literature/papers/williams92simple.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">REINFORCE Policy Gradient algorithm</a> with a greedy rollout baseline — to solve <a href="/assets/docs/literature/papers/rl_co.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">Combinatorial Optimization</a> tasks.
        </p>

        <SectionHeading title="Bibliography" icon={<FileText className="text-slate-500" />} />
        <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>
                <a href="/assets/docs/literature/papers/Attention_Solve_Routing.pdf" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Attention, Learn To Solve Routing Problems</a>
            </li>
            <li>
                <a href="/assets/docs/literature/papers/williams92simple.pdf" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">REINFORCE Policy Gradient algorithm</a>
            </li>
            <li>
                <a href="/assets/docs/literature/papers/rl_co.pdf" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Combinatorial Optimization</a>
            </li>
        </ul>
      </GlassCard>
    </div>
  );
}