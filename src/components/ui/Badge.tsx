import React from 'react';

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-xs rounded text-slate-600 dark:text-slate-300 font-medium">
    {children}
  </span>
);

export default Badge;