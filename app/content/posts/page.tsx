import React from 'react';
import { PenTool, Calendar, ArrowRight } from 'lucide-react';
import { getAllPostSlugs, getMarkdownData } from '@/lib/markdown';
import GlassCard from '@/src/components/ui/GlassCard';
import SectionHeading from '@/src/components/ui/SectionHeading';
import Badge from '@/src/components/ui/Badge';
import { PostData } from '@/lib/markdown'; 
import pageImage from '@/assets/images/G7HNekqXUAAueb6.jpg';

// 1. Define the categories here to match your Home page
const POSTS_CATEGORY_MAP: Record<string, string> = {
  '2024-10-28-Attention-Learn-To-Solve-Routing-Problems': 'Deep Learning',
  '2024-10-28-Combinatorial-Optimization-Intro': 'Math',
  '2024-10-31-Notes-on-RL-an-Introduction': 'Reinforcement Learning',
};

// Extend PostData to include the selected/generated excerpt
const POSTS_EXCERPT_MAP: Record<string, string> = {
  '2024-10-28-Attention-Learn-To-Solve-Routing-Problems': 'A deep dive into the foundational concepts of Reinforcement Learning, exploring Markov Decision Processes (MDPs) and basic policy iteration methods.',
  '2024-10-28-Combinatorial-Optimization-Intro': 'Analyzing the application of Attention mechanisms in Neural Combinatorial Optimization. How transformers can replace heuristics for TSP and VRP.',
  '2024-10-31-Notes-on-RL-an-Introduction': 'An introduction to the field of Combinatorial Optimization, focusing on complexity classes (P vs NP) and exact vs. heuristic solving methods.',
};

interface PostWithExcerpt extends PostData {
  excerpt: string;
}

// Helper to fetch, process, and sort ALL posts
async function getAllPosts(): Promise<PostWithExcerpt[]> {
  const slugs = getAllPostSlugs();
  
  const posts = await Promise.all(
    slugs.map(async ({ slug }) => {
      const data = await getMarkdownData(slug);
      
      // 2. Resolve the Excerpt
      let excerpt: string;
      const mapExcerpt = POSTS_EXCERPT_MAP[slug];
      if (mapExcerpt) {
        excerpt = mapExcerpt;
      } else {
        const plainText = data.contentHtml.replace(/<[^>]+>/g, '');
        excerpt = plainText.slice(0, 160) + (plainText.length > 160 ? '...' : '');
      }

      // 3. Resolve the Category (Use Map -> Fallback to Markdown Data -> Fallback to 'Uncategorized')
      const category = POSTS_CATEGORY_MAP[slug] || data.category || 'Uncategorized';
      
      return { 
        ...data, 
        category, // Override with the mapped category
        excerpt 
      };
    })
  );

  return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

export default async function NotesIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-2xl aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/20">
          <img 
            src={pageImage.src}
            alt="Jinx from Arcane"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
        
      {/* Header Section */}
      <div className="text-center mb-12">
          <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Notes & Thoughts</h1>
          <p className="text-slate-600 dark:text-slate-400 mt-2">
            A collection of articles on Reinforcement Learning, Math, and Engineering.
          </p>
      </div>

      {/* Posts Grid */}
      <section>
          <SectionHeading title={`All Posts (${posts.length})`} icon={<PenTool className="text-purple-500" />} />
          
          <div className="grid gap-6">
            {posts.length > 0 ? (
              posts.map((post) => (
                <GlassCard key={post.slug} className="group hover:border-blue-500/30 transition-colors">
                  <div className="p-6">
                    {/* Metadata */}
                    <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                      {/* Render the Category */}
                      <span className="text-blue-600 dark:text-blue-400 font-medium">
                        {post.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      <a href={`/github-pages/content/posts/${post.slug}`} className="hover:underline decoration-blue-500/30 underline-offset-4">
                        {post.title}
                      </a>
                    </h3>
                    
                    <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 items-center justify-between mt-auto">
                      <div className="flex gap-2">
                          {post.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                          ))}
                      </div>
                      <a href={`/github-pages/content/posts/${post.slug}`} className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                          Read more <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </GlassCard>
              ))
            ) : (
              <div className="text-center py-12 text-slate-500">
                No posts found.
              </div>
            )}
          </div>
      </section>
    </div>
  );
}