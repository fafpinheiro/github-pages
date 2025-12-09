'use client';

import React from 'react';

interface PostWrapperProps {
  htmlFileName: string;
  title?: string;
}

const PostWrapper: React.FC<PostWrapperProps> = ({ htmlFileName, title }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <div className="w-full h-[calc(100vh-8rem)] bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-800">
      <iframe 
        src={`${basePath}/posts/${htmlFileName}`} 
        className="w-full h-full border-none" 
        title={title || 'Post Content'} 
      />
    </div>
  );
};

export default PostWrapper;