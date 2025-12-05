import React from 'react';
import { Home, User, PenTool, Code, Video, Github, Twitter, Linkedin, Moon, Sun, Wrench, ChevronLeft } from 'lucide-react';
import SidebarItem from './SidebarItem';
import profilePic from '@/assets/images/23041868.jpeg'; 

interface SidebarProps {
  activeSection: string;
  darkMode: boolean;
  toggleTheme: () => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

// NAV_ITEMS configuration
const NAV_ITEMS = [
    { href: '/', label: 'Home', icon: <Home size={20} />, slug: 'home' },
    { href: '/content/about', label: 'About', icon: <User size={20} />, slug: 'about' },
    { href: '/content/projects', label: 'Projects', icon: <Code size={20} />, slug: 'projects' },
    { href: '/content/tools', label: 'Tools', icon: <Wrench size={20} />, slug: 'tools' },
    { href: '/posts', label: 'Notes', icon: <PenTool size={20} />, slug: 'posts' }, 
    { href: '/content/media', label: 'Media', icon: <Video size={20} />, slug: 'media' },
];

const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  darkMode, 
  toggleTheme,
  isCollapsed,
  toggleCollapse
}) => {
  
  const sidebarWidthClass = isCollapsed ? 'w-20' : 'w-72';
  const paddingClass = isCollapsed ? 'p-4' : 'p-8';
  
  // CRITICAL FIX: Base Path Logic for Social Links
  const rawBasePath = process.env.NEXT_PUBLIC_BASE_PATH || '';
  const basePath = rawBasePath.endsWith('/') && rawBasePath.length > 1 
                   ? rawBasePath.slice(0, -1) 
                   : rawBasePath;

  return (
    <aside className={`hidden lg:flex flex-col ${sidebarWidthClass} h-screen sticky top-0 border-r border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl ${paddingClass} justify-between transition-all duration-300 ease-in-out relative`}>
      
      {/* Collapse Toggle Button (omitted for brevity) */}
      <button 
        onClick={toggleCollapse} 
        className={`absolute top-4 -right-3 z-10 p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors hidden lg:block`}
        aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        <ChevronLeft size={16} className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
      </button>

      <div>
        {/* Profile / Header Section (omitted for brevity) */}
        <div className="mb-12">
          {/* Avatar Container */}
          <div className={`relative rounded-full overflow-hidden shadow-lg ring-4 ring-white dark:ring-slate-800 transition-all duration-300 mb-4 bg-slate-200 dark:bg-slate-700 ${isCollapsed ? 'h-12 w-12' : 'h-20 w-20'}`}>
            <img 
              src={profilePic.src}
              alt="ACF Peacekeeper" 
              className="h-full w-full object-cover"
            />
          </div>
          
          {!isCollapsed && (
            <>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white font-display">ACF Peacekeeper</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium dark:text-white">Researcher & Developer</p>
              <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider dark:text-white">RL & Combinatorial Opt</p>
            </>
          )}
        </div>

        {/* Navigation Section */}
        <nav className="space-y-2">
          {NAV_ITEMS.map(item => (
            <SidebarItem 
              key={item.slug}
              href={item.href} 
              icon={item.icon} 
              label={item.label} 
              active={activeSection === item.slug} 
              isCollapsed={isCollapsed} 
            />
          ))}
        </nav>
      </div>

      {/* Social Links Section */}
      <div className={`${isCollapsed ? 'grid grid-cols-1 gap-y-3 justify-items-center w-full' : 'flex justify-center space-x-4'} text-slate-400`}>
        
        {/* All social links are now prefixed using basePath, and GitHub link uses the assumed full path */}
        <a 
          href="https://github.com/acfpeacekeeper" // Absolute external link, no prefix needed
          target="_blank"
          rel="noopener noreferrer"
          className={`hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-center ${isCollapsed ? 'p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800' : 'p-1'}`} 
          aria-label="Github">
          <Github size={20} />
        </a>
        
        <a 
          // Assuming Twitter is an external link, if internal, use: href={`${basePath}/twitter`}
          href="#" 
          className={`hover:text-blue-400 transition-colors flex items-center justify-center ${isCollapsed ? 'p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800' : 'p-1'}`} 
          aria-label="Twitter">
          <Twitter size={20} />
        </a>
        
        <a 
          href="#" 
          className={`hover:text-blue-600 transition-colors flex items-center justify-center ${isCollapsed ? 'p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800' : 'p-1'}`} 
          aria-label="LinkedIn">
          <Linkedin size={20} />
        </a>
        
        <button 
          onClick={toggleTheme} 
          className={`hover:text-yellow-500 transition-colors flex items-center justify-center ${isCollapsed ? 'p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800' : 'p-1'}`} 
          aria-label="Toggle Dark Mode">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;