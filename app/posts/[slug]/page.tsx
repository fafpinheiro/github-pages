import React from 'react';
import { notFound } from 'next/navigation';
import AttentionRoutingPost from '../AttentionRoutingPost';
import CombinatorialOptimizationPost from '../CombinatorialOptimizationPost';
import RLNotesPost from '../RLNotesPost';

// Map slugs to components
// Note: These keys match the markdown filenames without extension
const PostComponents: Record<string, React.FC> = {
  '2024-10-28-Attention-Learn-To-Solve-Routing-Problems': AttentionRoutingPost,
  '2024-10-28-Combinatorial-Optimization-Intro': CombinatorialOptimizationPost,
  '2024-10-31-Notes-on-RL-an-Introduction': RLNotesPost,
  
  // Adding simpler aliases for cleaner URLs if desired
  'attention-routing': AttentionRoutingPost,
  'combinatorial-optimization': CombinatorialOptimizationPost,
  'rl-notes': RLNotesPost,
};

interface PostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return Object.keys(PostComponents).map((slug) => ({ slug }));
}

export default function PostPage({ params }: PostPageProps) {
  const { slug } = params;
  const Component = PostComponents[slug];

  if (!Component) {
    notFound();
  }

  return <Component />;
}