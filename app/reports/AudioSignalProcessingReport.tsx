'use client';
import React from 'react';

const AudioSignalProcessingReport: React.FC = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className="w-full h-[calc(100vh-8rem)] bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-800">
      <iframe src={`${basePath}/reports/Audio_Signal_Processing.html`} className="w-full h-full border-none" title="Audio Signal Processing Report" />
    </div>
  );
};
export default AudioSignalProcessingReport;