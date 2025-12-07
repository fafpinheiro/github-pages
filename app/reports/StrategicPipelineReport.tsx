'use client';
import React from 'react';

const StrategicPipelineReport: React.FC = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className="w-full h-[calc(100vh-8rem)] bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-800">
      <iframe src={`${basePath}/reports/Strategic_Generative_Pipeline.html`} className="w-full h-full border-none" title="Strategic Pipeline Report" />
    </div>
  );
};
export default StrategicPipelineReport;