import React from 'react';
import { PenTool, Calendar, ArrowRight } from 'lucide-react';
// Import utility functions to fetch ALL posts
import { getAllPostSlugs, getMarkdownData } from '@/lib/markdown';
import GlassCard from '@/src/components/ui/GlassCard';
import SectionHeading from '@/src/components/ui/SectionHeading';
import Badge from '@/src/components/ui/Badge';
import { PostData } from '@/lib/markdown'; // Reusing your PostData interface

// Extend PostData to include the generated excerpt
interface PostWithExcerpt extends PostData {
    excerpt: string;
}

// Helper to fetch, process, and sort ALL posts
async function getAllPosts(): Promise<PostWithExcerpt[]> {
  // 1. Get ALL slugs from the file system (using the existing function)
  const slugs = getAllPostSlugs();
  
  // 2. Fetch the full data for EVERY slug concurrently
  const posts = await Promise.all(
    slugs.map(async ({ slug }) => {
      const data = await getMarkdownData(slug);
      
      // Generate a simple plain text excerpt from the HTML content for the preview
      // This is a common pattern to create previews for index pages
      const plainText = data.contentHtml.replace(/<[^>]+>/g, '');
      const excerpt = plainText.slice(0, 160) + (plainText.length > 160 ? '...' : '');
      
      return { 
        ...data, 
        excerpt 
      };
    })
  );

  // 3. Sort posts by date (descending: newest first)
  return posts.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
}

// This is the index page component for /content/posts
export default async function NotesIndexPage() {
  const posts = await getAllPosts();

  return (
    <div className="space-y-10 animate-in fade-in duration-500">
        
        {/* Header Section */}
        <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Notes & Thoughts</h1>
            <p className="text-slate-600 dark:text-slate-400 mt-2">
              A collection of articles on Reinforcement Learning, Math, and Engineering.
            </p>
        </div>

        {/* Posts Grid */}
        <section>
            {/* Reusing existing SectionHeading component */}
            <SectionHeading title={`All Posts (${posts.length})`} icon={<PenTool className="text-purple-500" />} />
            
            <div className="grid gap-6">
              {posts.length > 0 ? (
                posts.map((post) => (
                  // Reusing existing GlassCard component
                  <GlassCard key={post.slug} className="group hover:border-blue-500/30 transition-colors">
                    <div className="p-6">
                      {/* Metadata */}
                      <div className="flex items-center gap-3 text-sm text-slate-500 mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar size={14} /> {post.date}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600"></span>
                        <span className="text-blue-600 dark:text-blue-400 font-medium">
                          {post.category}
                        </span>
                      </div>
                      
                      {/* Title and Link */}
                      <h3 className="text-xl font-bold font-display text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <a href={`/github-pages/content/posts/${post.slug}`} className="hover:underline decoration-blue-500/30 underline-offset-4">
                          {post.title}
                        </a>
                      </h3>
                      
                      {/* Excerpt */}
                      <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      {/* Tags and Read More Link */}
                      <div className="flex flex-wrap gap-2 items-center justify-between mt-auto">
                        <div className="flex gap-2">
                            {post.tags.map(tag => (
                            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
                            ))}
                        </div>
                        <a href={`/github-pages/posts/${post.slug}`} className="text-sm font-medium text-blue-600 dark:text-blue-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
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