import React from 'react';
import { usePathname } from 'next/navigation'; // Import usePathname for client-side functionality

interface SidebarItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  isCollapsed: boolean;
}

// Get the base path from environment variables (set by Next.js based on next.config.js)
// Use a fallback of an empty string for root deployment, or the base path if set.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const SidebarItem: React.FC<SidebarItemProps> = ({ href, icon, label, active, isCollapsed }) => {
  
  // CRITICAL FIX: Ensure all internal links are prefixed with the basePath
  const finalHref = href === '/' ? basePath || '/' : `${basePath}${href}`;

  return (
    <a 
      href={finalHref} // Use the calculated href
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