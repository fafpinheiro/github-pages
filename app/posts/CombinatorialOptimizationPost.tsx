import React from 'react';
import { Calendar, Brain, Tag } from 'lucide-react';
import SectionHeading from '@/src/components/ui/SectionHeading';
import GlassCard from '@/src/components/ui/GlassCard';
import Badge from '@/src/components/ui/Badge';

export default function CombinatorialOptimizationPost() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="flex flex-wrap gap-2 mb-4">
            {['ML', 'RL', 'CO'].map(tag => (
                <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
        </div>
        <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight">
          Combinatorial Optimization: An Introduction
        </h1>
         <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span className="flex items-center gap-1"><Calendar size={16} /> Oct 28, 2024</span>
        </div>
      </div>

      {/* Introduction */}
      <section>
        <SectionHeading title="Introduction" icon={<Brain className="text-purple-500" />} />
        <GlassCard className="p-8 prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
            <p className="mb-4">
                To understand what exactly Combinatorial Optimization means, we can start by understanding each term of the expression: Combinatorial and Optimization.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3">Combinatorial Problems</h3>
            <p className="mb-4">
                CO deals with a class of problems called combinatorial problems. These are a particular case of discrete problems - which are problems where the variables are assumed to take discrete values - that involve finding a ordered or unordered grouping which, given a finite (and usually large) set of objects, satisfy a given set of conditions.
            </p>
            <p className="mb-4">
                Combinations of elements from the set that may be encountered when trying to formulate a solution to a instance of this class of problems are called <em>candidate</em> or <em>feasible</em> solutions. Then, the <em>solutions</em> to this kind of problem are the feasible solutions that satisfy all required conditions.
            </p>

            <h4 className="text-lg font-bold text-slate-900 dark:text-white mt-4 mb-2">The Traveling Salesman Problem</h4>
            <p className="mb-2">
                One of the most well known combinatorial problems is the <em>Traveling Salesman Problem</em> (TSP), where, given a graph:
            </p>
            <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                G(N, E): N = \{'{'}v_1, ..., v_n\{'}'} \wedge E \subseteq \{'{'}(u, v): u, v \in N\{'}'}
            </div>
            <p className="mb-2">
                the objective is to find shortest path possible:
            </p>
             <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                s^* = \{'{'}\bar\{'{'}s\{'}'} \subseteq E: \forall s \subseteq E, \ \text\{'{'}dist\{'}'}(\bar\{'{'}s\{'}'}) \leq \text\{'{'}dist\{'}'}(s)\{'}'}
            </div>
            <p className="mb-4">
                that visits each of the nodes <code className="text-pink-500">v \in N</code> once and only once.
            </p>

            <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3">Optimization</h3>
            <p>
                Colloquially, optimization refers to the process of optimizing something, i.e., making something as effective or functional as possible. In mathematics and computer science, it refers to the selection of the best element (with regard to some criterion) from some set of available alternatives.
            </p>
        </GlassCard>
      </section>
    </div>
  );
}