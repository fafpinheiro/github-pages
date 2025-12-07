'use client';
import React from 'react';

const AnimeGenModelReport: React.FC = () => {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  return (
    <div className="w-full h-[calc(100vh-8rem)] bg-white rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-800">
      <iframe src={`${basePath}/reports/Anime_Gen_Model.html`} className="w-full h-full border-none" title="Anime Generation Model Report" />
    </div>
  );
};
export default AnimeGenModelReport;