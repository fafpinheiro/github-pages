import React from 'react';
import { Brain, Code, Cpu, Gamepad2, FileText } from 'lucide-react';
import SectionHeading from '@/src/components/ui/SectionHeading';
import GlassCard from '@/src/components/ui/GlassCard';
import Badge from '@/src/components/ui/Badge';
import pageImage from '@/assets/images/Ella-Purnell-Jinx-Arcane-League-of-Legends.webp'; 

export default function ProjectsPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      
       <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-2xl aspect-[21/9] rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <img 
            src={pageImage.src}
            alt="Jinx Arcane"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Projects</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">A showcase of my research, development, and engineering work.</p>
      </div>

      {/* AI Research */}
      <section>
        <SectionHeading title="AI Research" icon={<Brain className="text-pink-500" />} />
        <div className="grid gap-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Contrastive Learning Transformer (CLT)</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              For Label Efficient Semantic Segmentation. Explored transformer architectures to improve segmentation with limited labeled data.
            </p>
            <div className="flex gap-2">
                <Badge>Deep Learning</Badge>
                <Badge>Computer Vision</Badge>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Multimodal Graph Neural Network (MGNN)</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              For Automatic Generation of Coherent Image Descriptions. Leveraging graph structures to connect visual features with semantic text generation.
            </p>
            <div className="flex gap-2">
                <Badge>GNN</Badge>
                <Badge>NLP</Badge>
            </div>
          </GlassCard>

           <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">WSmart Route+</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-4">
              Reinforcement Learning agent for Waste Collection routing optimization.
            </p>
            <div className="flex gap-2">
                <Badge>Reinforcement Learning</Badge>
                <Badge>Optimization</Badge>
            </div>
          </GlassCard>
        </div>
      </section>

      {/* Web Development */}
      <section>
        <SectionHeading title="Web Development" icon={<Code className="text-blue-500" />} />
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">EBEC 2020 Website</h3>
            <p className="text-sm text-slate-500 mt-1">Event website for BEST Engineering Competition.</p>
          </GlassCard>
           <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Personal Portfolio</h3>
            <p className="text-sm text-slate-500 mt-1">This website, built with Next.js and Tailwind.</p>
          </GlassCard>
        </div>
      </section>

      {/* Hardware & Software */}
      <section>
        <SectionHeading title="Hardware & Software" icon={<Cpu className="text-green-500" />} />
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Hacker Entertainment System (HES)</h3>
            <p className="text-sm text-slate-500 mt-1">A custom entertainment system built on embedded hardware.</p>
          </GlassCard>
           <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">HS-Robot</h3>
            <p className="text-sm text-slate-500 mt-1">Robotics project developed at HackerSchool.</p>
          </GlassCard>
        </div>
      </section>

      {/* Game Development */}
      <section>
        <SectionHeading title="Game Development" icon={<Gamepad2 className="text-purple-500" />} />
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Project Emerald</h3>
            <p className="text-sm text-slate-500 mt-1">A game development exploration.</p>
          </GlassCard>
           <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Project Fishes</h3>
            <p className="text-sm text-slate-500 mt-1">Aquatic simulation and gameplay mechanics.</p>
          </GlassCard>
        </div>
      </section>
      
       {/* Bibliography */}
      <section>
        <SectionHeading title="Bibliography" icon={<FileText className="text-slate-500" />} />
        <GlassCard className="p-6">
            <ul className="space-y-4 text-sm text-slate-600 dark:text-slate-400">
                <li>
                    <strong>An Introduction to Deep Reinforcement Learning</strong> - François-Lavet, V., et al. (2018). Foundations and Trends® in Machine Learning.
                </li>
                 <li>
                    <strong>Reinforcement Learning for Combinatorial Optimization: A Survey</strong> - Mazyavkina, N., et al. (2020). arXiv.
                </li>
            </ul>
        </GlassCard>
      </section>

    </div>
  );
}