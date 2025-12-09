'use client';

import React from 'react';

interface ReportWrapperProps {
  htmlFileName: string;
  title: string;
}

const ReportWrapper: React.FC<ReportWrapperProps> = ({ htmlFileName, title }) => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  
  return (
    <div className="w-full h-[calc(100vh-8rem)] bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-800">
      <iframe 
        src={`${basePath}/reports/${htmlFileName}`} 
        className="w-full h-full border-none" 
        title={`${title} Report`} 
      />
    </div>
  );
};

export default ReportWrapper;