import React from 'react';
import { notFound } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PostWrapper from '@/src/components/PostWrapper';

// Define the type for the URL parameters
interface PostPageProps {
  params: {
    slug: string;
  };
}

// Map slugs to the corresponding HTML file names in public/posts/
const POSTS_HTML_MAP: Record<string, string> = {
  '2024-10-28-Attention-Learn-To-Solve-Routing-Problems': 'Attention_Learn_to_Solve_Routing_Problem.html',
  '2024-10-28-Combinatorial-Optimization-Intro': 'Combinatorial_Optimization_an_Introduction.html',
  '2024-10-31-Notes-on-RL-an-Introduction': 'Notes_on_RL_an_Introduction.html',
};

/**
 * generateStaticParams
 * Required for 'output: export'. Explicit list of all slugs 
 * that this dynamic route should handle.
 */
export async function generateStaticParams() {
  return Object.keys(POSTS_HTML_MAP).map((slug) => ({
    slug,
  }));
}

/**
 * PostPage Component (Server Component)
 * Looks up the HTML filename based on the slug and renders the PostWrapper.
 */
export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const htmlFileName = POSTS_HTML_MAP[slug];

  // If no matching file exists for this slug, return 404
  if (!htmlFileName) {
    notFound();
  }

  // Render the PostWrapper with the static HTML file
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
          <Link
            href="/posts"
            className="flex items-center text-slate-600 dark:text-slate-400 hover:text-blue-500 transition-colors w-fit group"
          >
            <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Posts List
          </Link>
        </div>
      <PostWrapper htmlFileName={htmlFileName} title={slug} />
    </div>
  );
}