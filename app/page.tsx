import React from 'react';
import { PenTool, Calendar, Star, Github, ExternalLink, Code, MapPin } from 'lucide-react';
import ClientLayoutWrapper from './ClientLayoutWrapper';
import GlassCard from '../src/components/ui/GlassCard';
import SectionHeading from '../src/components/ui/SectionHeading';
import Badge from '../src/components/ui/Badge';
import { BlogPost, Project, ProjectLink } from '../src/types';

/**
 * Mock Data
 */
const BLOG_POSTS: BlogPost[] = [
  { id: '1', date: 'Oct 31, 2024', category: 'RL', title: 'Notes on RL: An Introduction', excerpt: 'A deep dive into the foundational concepts of Reinforcement Learning, exploring Markov Decision Processes (MDPs) and basic policy iteration methods.', tags: ['Basics', 'Theory'] },
  { id: '2', date: 'Oct 28, 2024', category: 'Deep Learning', title: 'Attention: Learn To Solve Routing Problems', excerpt: 'Analyzing the application of Attention mechanisms in Neural Combinatorial Optimization. How transformers can replace heuristics for TSP and VRP.', tags: ['Routing', 'Attention'] },
  { id: '3', date: 'Oct 28, 2024', category: 'Math', title: 'Combinatorial Optimization Intro', excerpt: 'An introduction to the field of Combinatorial Optimization, focusing on complexity classes (P vs NP) and exact vs. heuristic solving methods.', tags: ['Optimization'] }
];

const PROJECTS: Project[] = [
  { id: 'p1', title: 'Neural Combinatorial Optimization Solver', description: 'A Python framework implementing various Deep Reinforcement Learning models to solve TSP and CVRP problems. Benchmarked against classical heuristics like LKH3.', icon: <Code size={24} />, iconColorClass: 'text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/50', stats: '128 Stars', links: [{ label: 'View Code', url: '#', icon: <Github size={14} /> }] },
  { id: 'p2', title: 'TalkMap Generator', description: 'A utility to visualize academic talks and conference travels on an interactive Leaflet map. Processes bibliography files to generate location markers.', icon: <MapPin size={24} />, iconColorClass: 'text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-900/50', links: [{ label: 'View Code', url: '#', icon: <Github size={14} /> }, { label: 'Live Demo', url: '#', icon: <ExternalLink size={14} /> }] }
];

const HomePageContent: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="mb-20 pt-4 lg:pt-12 scroll-mt-24">
        <GlassCard className="p-8 lg:p-12">
          <span className="inline-block px-3 py-1 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 dark:bg-blue-900/30 dark:text-blue-200 rounded-full mb-6 border border-blue-100 dark:border-blue-800">
            Welcome
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight font-display text-slate-900 dark:text-white">
            Exploring the intersection of <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Reinforcement Learning</span> & Optimization.
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
            I am a researcher focusing on solving complex routing problems using attention mechanisms and deep learning. Welcome to my personal knowledge base and portfolio.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#posts" className="px-6 py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-medium rounded-lg hover:bg-slate-800 dark:hover:bg-slate-200 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center gap-2">
              <PenTool size={18} />
              Read Latest Research
            </a>
            <a href="#contact" className="px-6 py-3 border border-slate-300 dark:border-slate-600 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-200">
              Contact Me
            </a>
          </div>
        </GlassCard>
      </section>

      {/* Posts Section */}
      <section id="posts" className="mb-20 scroll-mt-24">
        <div className="flex items-center justify-between mb-8">
          <SectionHeading>Latest Notes & Research</SectionHeading>
          <a href="#" className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline flex items-center gap-1">
            View Archive <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {BLOG_POSTS.map((post) => (
            <GlassCard key={post.id} className="p-6 hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900 cursor-pointer group flex flex-col h-full">
              <div className="text-sm text-slate-500 dark:text-slate-400 mb-3 flex items-center space-x-2">
                <Calendar size={14} />
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-slate-300 dark:bg-slate-600 rounded-full"></span>
                <span className="text-blue-600 dark:text-blue-400 font-medium">{post.category}</span>
              </div>
              <h4 className="text-xl font-bold mb-3 font-display text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h4>
              <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex gap-2 mt-auto">
                {post.tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="mb-20 scroll-mt-24">
        <SectionHeading>Selected Projects</SectionHeading>
        <div className="flex flex-col space-y-6">
          {PROJECTS.map((project) => (
            <GlassCard key={project.id} className="p-6 flex flex-col md:flex-row gap-6 items-start hover:bg-white/80 dark:hover:bg-slate-800/80">
              <div className={`w-full md:w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 ${project.iconColorClass}`}>
                {project.icon}
              </div>
              <div className="flex-1 w-full">
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
                <div className="flex items-center gap-4 text-sm">
                  {project.links.map((link, idx) => (
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
};

export default function Home() {
    return (
        <ClientLayoutWrapper>
            <HomePageContent />
        </ClientLayoutWrapper>
    )
}