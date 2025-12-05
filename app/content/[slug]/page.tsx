import React from 'react';
import { getMarkdownData, getAllPostSlugs, getAllPageSlugs, PostData } from '@/lib/markdown';
import ClientLayoutWrapper from '@/app/ClientLayoutWrapper';
import GlassCard from '@/src/components/ui/GlassCard';
import { notFound } from 'next/navigation';

// 1. Generate all static paths (slugs) at build time for both posts and pages
export async function generateStaticParams() {
  const postSlugs = getAllPostSlugs().map(p => ({ slug: p.slug }));
  const pageSlugs = getAllPageSlugs().map(p => ({ slug: p.slug }));
  
  // Combine all slugs into a single list
  return [...postSlugs, ...pageSlugs];
}

// 2. Define the page component
export default async function ContentPage({ params }: { params: { slug: string } }) {
  let postData: PostData;
  
  try {
    // Uses the generic function to fetch data from either _posts or pages/
    postData = await getMarkdownData(params.slug);
  } catch (e) {
    // If the file is not found, render Next.js's 404 page
    console.error(`Failed to load content for slug: ${params.slug}`, e);
    notFound();
  }

  return (
    <ClientLayoutWrapper>
      <section className="py-12">
        <GlassCard className="p-8 lg:p-12">
          {/* Page Header */}
          <header className="mb-8 border-b border-slate-200 dark:border-slate-700 pb-4">
            <h1 className="text-4xl font-bold font-display text-slate-900 dark:text-white mb-2">
              {postData.title}
            </h1>
            {postData.date && postData.date !== new Date().toISOString().slice(0, 10) && (
                <p className="text-sm text-slate-500 dark:text-slate-400">
                    Published: {new Date(postData.date).toDateString()}
                </p>
            )}
          </header>

          {/* Page Content (Rendered HTML) */}
          <div 
            className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
          />
        </GlassCard>
      </section>
    </ClientLayoutWrapper>
  );
}