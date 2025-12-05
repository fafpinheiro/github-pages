import React from 'react';

const SectionHeading: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-2xl font-bold mb-8 font-display text-slate-900 dark:text-white">
    {children}
  </h3>
);

export default SectionHeading;