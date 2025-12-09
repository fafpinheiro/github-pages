import React from 'react';
import { PenTool, Calendar, Star, Github, ExternalLink, Code, MapPin, ArrowRight } from 'lucide-react';
// ClientLayoutWrapper is removed from imports as it is now in layout.tsx
import GlassCard from '../src/components/ui/GlassCard';
import SectionHeading from '../src/components/ui/SectionHeading';
import Badge from '../src/components/ui/Badge';
import { BlogPost, Project } from '../src/types';

/**
 * Mock Data
 */
const BLOG_POSTS: BlogPost[] = [
  { 
    id: '2024-10-31-Notes-on-RL-an-Introduction', // <--- CORRECT SLUG
    date: 'Oct 31, 2024', 
    category: 'RL', 
    title: 'Notes on RL: An Introduction', 
    excerpt: 'A deep dive into the foundational concepts of Reinforcement Learning, exploring Markov Decision Processes (MDPs) and basic policy iteration methods.', 
    tags: ['Basics', 'Theory'] 
  },
  { 
    id: '2024-10-28-Attention-Learn-To-Solve-Routing-Problems', // <--- CORRECT SLUG
    date: 'Oct 28, 2024', 
    category: 'Deep Learning', 
    title: 'Attention: Learn To Solve Routing Problems', 
    excerpt: 'Analyzing the application of Attention mechanisms in Neural Combinatorial Optimization. How transformers can replace heuristics for TSP and VRP.', 
    tags: ['Routing', 'Attention'] 
  },
  { 
    id: '2024-10-28-Combinatorial-Optimization-Intro', // <--- CORRECT SLUG
    date: 'Oct 28, 2024', 
    category: 'Math', 
    title: 'Combinatorial Optimization Intro', 
    excerpt: 'An introduction to the field of Combinatorial Optimization, focusing on complexity classes (P vs NP) and exact vs. heuristic solving methods.', 
    tags: ['Optimization'] 
  }
];

// Reconstructed based on your projects.md
const PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'WSmart Route+',
    description: 'A Reinforcement Learning agent designed to optimize Waste Collection routing. This project explores how RL agents can learn efficient paths in dynamic environments compared to traditional heuristics.',
    links: [{ label: 'Paper', url: '#', icon: <ExternalLink size={14} /> }],
    stats: 'RL Agent',
    icon: undefined,
    iconColorClass: ''
  },
  {
    id: 'p2',
    title: 'Multimodal Graph Neural Network',
    description: 'Research on Automatic Generation of Coherent Image Descriptions. This MGNN model leverages graph structures to bridge the gap between visual features and semantic text generation.',
    links: [{ label: 'View Research', url: '/content/projects', icon: <ExternalLink size={14} /> }],
    stats: 'GNN',
    icon: undefined,
    iconColorClass: ''
  },
  {
    id: 'p3',
    title: 'Personal Portfolio',
    description: 'The website you are looking at right now. Built with Next.js 14, TypeScript, and Tailwind CSS to serve as a digital garden for my research and projects.',
    links: [{ label: 'Source', url: 'https://github.com/acfharbinger', icon: <Github size={14} /> }],
    stats: 'Next.js',
    icon: undefined,
    iconColorClass: ''
  }
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-16 pt-8">
        <div className="space-y-6 max-w-2xl">
          <Badge variant="default" className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300">
            Available for Research Collaboration
          </Badge>
          <h1 className="text-5xl font-display font-bold text-slate-900 dark:text-white leading-tight">
            Exploring the intersection of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">AI</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Optimization</span>.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
            I'm a researcher and developer focused on <strong>Reinforcement Learning</strong> and <strong>Combinatorial Optimization</strong>. 
            Currently working at <a href="https://www.inesc-id.pt/" className="text-blue-600 hover:underline decoration-blue-300 underline-offset-4">INESC-ID</a> and teaching at <a href="https://tecnico.ulisboa.pt/" className="text-blue-600 hover:underline decoration-blue-300 underline-offset-4">IST</a>.
          </p>
          <div className="flex gap-4 pt-2">
            <a href="/github-pages/content/about" className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors flex items-center gap-2">
              About Me <ArrowRight size={18} />
            </a>
            <a href="/github-pages/content/projects" className="px-6 py-3 bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white rounded-lg font-medium hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
              View Projects
            </a>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading title="Latest Posts" icon={<PenTool className="text-purple-500" />} />
          <a href="/posts" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
            View all <ArrowRight size={14} />
          </a>
        </div>
        
        <div className="grid gap-6">
          {BLOG_POSTS.map((post) => (
            <GlassCard key={post.id} className="group hover:border-blue-500/30 transition-colors">
              <div className="p-6">
                <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                  <span className="text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  <a href={`/github-pages/posts/${post.id}`}>{post.title}</a>
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex gap-2">
                  {post.tags.map(tag => (
                    <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Latest Projects Section */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <SectionHeading title="Latest Projects" icon={<Code className="text-blue-500" />} />
          <a href="/content/projects" className="text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">
            View portfolio <ArrowRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project) => (
            <GlassCard key={project.id} className="h-full flex flex-col">
              <div className="p-6 flex-1">
                <h4 className="text-lg font-bold font-display flex items-center gap-3 text-slate-900 dark:text-white">
                  {project.title}
                  {project.stats && (
                    <span className="hidden sm:flex items-center gap-1 text-xs font-medium px-2 py-0.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-500 rounded-full border border-yellow-200 dark:border-yellow-800">
                      <Star size={10} fill="currentColor" /> {project.stats}
                    </span>
                  )}
                </h4>
                <p className="text-slate-600 dark:text-slate-400 text-sm mt-2 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex items-center gap-4 text-sm mt-auto">
                  {project.links && project.links.map((link, idx) => (
                    <a 
                      key={idx} 
                      href={link.url}
                      className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 transition-colors font-medium"
                    >
                      {link.icon} {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </>
  );
}