import React from 'react';

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isCollapsed: boolean; 
}

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon, label, active, isCollapsed }) => (
  <a 
    href={href}
    className={`flex items-center py-3 rounded-lg font-medium transition-all duration-200 
      ${isCollapsed ? 'justify-center px-0' : 'space-x-3 px-4'} 
      ${
      active 
        ? 'bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400' 
        : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
    }`}
  >
    {icon}
    {/* 3. Conditionally render the label */}
    {!isCollapsed && <span>{label}</span>}
  </a>
);

export default SidebarItem;