import React from 'react';
import { Calendar, BookOpen, Tag } from 'lucide-react';
import SectionHeading from '@/src/components/ui/SectionHeading';
import GlassCard from '@/src/components/ui/GlassCard';
import Badge from '@/src/components/ui/Badge';

export default function RLNotesPost() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header */}
      <div className="space-y-4 border-b border-slate-200 dark:border-slate-800 pb-8">
        <div className="flex flex-wrap gap-2 mb-4">
            {['ML', 'RL', 'DL'].map(tag => (
                <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
        </div>
        <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white leading-tight">
          Notes on Reinforcement Learning: An Introduction (2nd edition)
        </h1>
         <div className="flex items-center gap-4 text-slate-500 text-sm">
            <span className="flex items-center gap-1"><Calendar size={16} /> Oct 31, 2024</span>
        </div>
      </div>

      {/* Intro */}
      <GlassCard className="p-8 prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300">
        <p className="mb-4">
            Here are some notes I took when reading the second edition of the <a href="/assets/docs/literature/books/RLbook2020.pdf" className="text-blue-600 dark:text-blue-400 hover:underline">Reinforcement Learning: An Introduction</a> book.
        </p>
        <p className="mb-4">
            If you want to get into Reinforcement Learning, or are just interested in Artificial Intelligence in general, I highly recommend that you read this book!
        </p>
        <p>
            It does require some mathematical background to read and understand everything (mostly Linear Algebra, Probabilities, Statistics, and some Calculus), but it is overall one of the best - and most exhaustive - introductory books about Reinforcement Learning out there.
        </p>
      </GlassCard>

      {/* Chapter 1 */}
      <section>
         <SectionHeading title="Chapter 1: Introduction" icon={<BookOpen className="text-green-500" />} />
         <GlassCard className="p-6 text-slate-700 dark:text-slate-300">
            <p>
                Reinforcement learning is learning what to do - how to map situations to actions - so as to maximize a numerical reward signal. The learner is not told which actions to take, but instead must discover which actions yield the most reward by trying them.
            </p>
         </GlassCard>
      </section>

      {/* Part I: Tabular Solution Methods */}
      <section>
        <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4 mt-8">Part I: Tabular Solution Methods</h2>
        
        <div className="space-y-6">
            <div className="pl-4 border-l-2 border-blue-500">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Chapter 2: Multi-armed Bandits</h3>
                <GlassCard className="p-6">
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">Section 2.1: A k-armed Bandit Problem</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Consider the following learning problem. You are faced repeatedly with a choice among k different options, or actions. After each choice you receive a numerical reward chosen from a stationary probability distribution that depends on the action you selected. Your objective is to maximize the expected total reward over some time period, for example, over 1000 action selections, or time steps.
                    </p>
                </GlassCard>
            </div>

            <div className="pl-4 border-l-2 border-purple-500">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Chapter 3: Finite Markov Decision Processes</h3>
                <GlassCard className="p-6">
                    <div className="mb-4">
                         <img 
                            src="/assets/images/literature/rl_mdp.png" 
                            alt="The agent-environment interaction in a Markov decision process." 
                            className="rounded-lg shadow-md max-w-full md:max-w-md mx-auto"
                        />
                         <p className="text-center text-xs text-slate-500 mt-2">The agent-environment interaction in a Markov decision process.</p>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-4">
                        MDPs are a classical formalization of sequential decision making, where actions influence not just immediate rewards, but also subsequent situations, or states, and through those future rewards. Thus MDPs involve delayed reward and the need to tradeoff immediate and delayed reward.
                    </p>
                    
                    <h4 className="font-bold text-slate-900 dark:text-white mb-2">The Agent-Environment Interface</h4>
                    <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                        p(s', r | s, a) \doteq \text\{'{'}Pr\{'}'}\{'{'}S_t = s', R_t = r | S_\{'{'}t-1\{'}'} = s, A_\{'{'}t-1\{'}'} = a\{'}'}
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        The function <code className="text-pink-500">p</code> defines the dynamics of the MDP.
                    </p>
                </GlassCard>
            </div>
        </div>
      </section>

      {/* Part II */}
      <section>
        <h2 className="text-2xl font-bold font-display text-slate-900 dark:text-white mb-4 mt-8">Part II: Approximate Solution Methods</h2>
        <div className="pl-4 border-l-2 border-orange-500">
            <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2">Chapter 13: Policy Gradient Methods</h3>
            <GlassCard className="p-6 text-slate-700 dark:text-slate-300">
                <p className="mb-4">
                    Methods that learn a parameterized policy that can select actions without consulting a value function. A value function may still be used to learn the policy parameter, but is not required for action selection.
                </p>
                <div className="bg-slate-100 dark:bg-slate-800 p-3 rounded-lg font-mono text-sm overflow-x-auto mb-4">
                    \pi(a|s, \theta) = \text\{'{'}Pr\{'}'}\{'{'}A_t = a | S_t = s, \theta_t = \theta\{'}'}
                </div>
                <p>
                     A state-value function baseline reduces the variance of the REINFORCE method without introducing bias. If the state-value function is (also) used to assess the policy's action selections, then it is called a <em>critic</em>, the policy is called an <em>actor</em>, and the overall algorithm is called an <em>actor-critic method</em>.
                </p>
            </GlassCard>
        </div>
      </section>
    </div>
  );
}