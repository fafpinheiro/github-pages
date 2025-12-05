import React from 'react';
import { getMarkdownData, getAllPostSlugs, PostData } from '@/lib/markdown'; // Assuming lib is accessible via @/
import ClientLayoutWrapper from '@/app/ClientLayoutWrapper';
import GlassCard from '@/src/components/ui/GlassCard';

// 1. Generate all static paths (slugs) at build time
export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((post) => ({
    slug: post.slug,
  }));
}

// 2. Define the page component
export default async function PostPage({ params }: { params: { slug: string } }) {
  const postData: PostData = await getMarkdownData(params.slug);

  return (
    <ClientLayoutWrapper>
      <section className="py-12">
        <GlassCard className="p-8 lg:p-12">
          {/* Post Header */}
          <header className="mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
            <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white mb-2">
              {postData.title}
            </h1>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Published: {new Date(postData.date).toDateString()}
            </p>
          </header>

          {/* Post Content (Rendered HTML) */}
          <div 
            className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
        </GlassCard>
      </section>
    </ClientLayoutWrapper>
  );
}