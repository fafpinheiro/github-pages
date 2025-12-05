import React from 'react';
import { usePathname } from 'next/navigation'; // Keep usePathname for active state

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isCollapsed: boolean;
}

// CRITICAL HARD FIX: Define the required GitHub Pages subdirectory path explicitly.
// This ensures that even if process.env fails during the static export, 
// the correct path is compiled directly into the HTML.
const GITHUB_PAGES_BASE_PATH = '/github-pages';

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon, label, active, isCollapsed }) => {
  
  // 1. Determine if the path is the root path ('/')
  const isRootPath = href === '/';
  
  // 2. Construct the final href manually:
  // If it's the root path, the final href is just the base path.
  // If it's any other path, it is basePath + href (e.g., '/github-pages' + '/content/about')
  const finalHref = isRootPath 
    ? GITHUB_PAGES_BASE_PATH 
    : `${GITHUB_PAGES_BASE_PATH}${href}`;

  return (
    <a 
      href={finalHref} // Use the hardcoded prefixed link
      title={isCollapsed ? label : undefined} // Add tooltip on hover when collapsed
      // Conditional Layout:
      // - Collapsed: 'justify-center px-0' -> Centers the icon perfectly in the sidebar width.
      // - Expanded: 'space-x-3 px-4' -> Standard list layout with text.
      className={`flex items-center py-3 rounded-lg font-medium transition-all duration-200 
        ${isCollapsed ? 'justify-center px-0' : 'space-x-3 px-4'} 
        ${
        active 
          ? 'bg-blue-50 text-blue-600 dark:bg-slate-800 dark:text-blue-400' 
          : 'text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800'
      }`}
    >
      {icon}
      {/* Hide label text when collapsed */}
      {!isCollapsed && <span>{label}</span>}
    </a>
  );
};

export default SidebarItem;