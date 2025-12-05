import React from 'react';

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon, label, active }) => (
  <a 
    href={href}
    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
      active 
        ? 'bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400' 
        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
    }`}
  >
    {icon}
    <span>{label}</span>
  </a>
);

export default SidebarItem;