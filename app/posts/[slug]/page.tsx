import React from 'react';
import { notFound } from 'next/navigation';

// Import your custom post components
// Note: These are imported from the parent folder (app/posts/)
import AttentionRoutingPost from '../AttentionRoutingPost';
import CombinatorialOptimizationPost from '../CombinatorialOptimizationPost';
import RLNotesPost from '../RLNotesPost';

// Define the type for the URL parameters
interface PostPageProps {
  params: {
    slug: string;
  };
}

// 1. Map your slugs to the corresponding React Components
const POSTS_MAP: Record<string, React.ComponentType> = {
  '2024-10-28-Attention-Learn-To-Solve-Routing-Problems': AttentionRoutingPost,
  '2024-10-28-Combinatorial-Optimization-Intro': CombinatorialOptimizationPost,
  '2024-10-31-Notes-on-RL-an-Introduction': RLNotesPost,
};

/**
 * 2. generateStaticParams
 * Required for 'output: export'. explicit list of all slugs 
 * that this dynamic route should handle.
 */
export async function generateStaticParams() {
  return Object.keys(POSTS_MAP).map((slug) => ({
    slug,
  }));
}

/**
 * 3. PostPage Component (Server Component)
 * Looks up the component based on the slug and renders it.
 */
export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  
  // Find the component that matches the URL slug
  const PostComponent = POSTS_MAP[slug];

  // If no matching component exists for this slug, return 404
  if (!PostComponent) {
    notFound();
  }

  // Render the specific TSX component
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <PostComponent />
    </div>
  );
}