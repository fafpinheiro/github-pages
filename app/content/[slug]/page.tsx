import React from 'react';
import { notFound } from 'next/navigation';
// Import all specific page components created from Markdown
import AboutPage from '../about/page';
import ProjectsPage from '../projects/page';
import ToolsPage from '../tools/page';
import MediaPage from '../media/page';

// Define a map to link slug strings to the component functions
const ContentComponents: Record<string, React.FC> = {
  'about': AboutPage,
  'projects': ProjectsPage,
  'tools': ToolsPage,
  'media': MediaPage,
};

// Define the type for the URL parameters
interface ContentPageProps {
  params: {
    slug: string;
  };
}

// 1. Generate Static Params (REQUIRED for static export)
// This tells Next.js which slugs to build during the compile step.
export async function generateStaticParams() {
  return [
    { slug: 'about' },
    { slug: 'projects' },
    { slug: 'tools' },
    { slug: 'media' },
  ];
}

export default function ContentPage({ params }: ContentPageProps) {
  const { slug } = params;

  // 2. Look up the component based on the slug
  const Component = ContentComponents[slug];

  if (!Component) {
    // If the slug doesn't match any component, return a 404 page
    notFound();
  }

  // 3. Render the correct component
  return <Component />;
}