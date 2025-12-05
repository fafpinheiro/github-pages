// src/components/layout/Sidebar.tsx

import React from 'react';
import { Home, User, PenTool, Code, Video, Github, Twitter, Linkedin, Moon, Sun, Wrench, ChevronLeft } from 'lucide-react';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  activeSection: string;
  darkMode: boolean;
  toggleTheme: () => void;
  isCollapsed: boolean;
  toggleCollapse: () => void;
}

// NAV_ITEMS remains the same
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
  // *** NEW: Conditional padding class ***
  const paddingClass = isCollapsed ? 'p-4' : 'p-8';
  
  return (
    // 1. Use the new conditional padding class
    <aside className={`hidden lg:flex flex-col ${sidebarWidthClass} h-screen sticky top-0 border-r border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl ${paddingClass} justify-between transition-all duration-300 ease-in-out relative`}>
      
      {/* Collapse Button: Adjust positioning slightly due to reduced padding */}
      <button 
        onClick={toggleCollapse} 
        className={`absolute top-4 ${isCollapsed ? '-right-3' : '-right-3'} z-10 p-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors hidden lg:block`}
        aria-label={isCollapsed ? "Expand Sidebar" : "Collapse Sidebar"}
      >
        <ChevronLeft size={16} className={`transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`} />
      </button>

      <div>
        <div className={`mb-12`}> 
          {/* Logo/Avatar Placeholder (Remains the same as previous step's refinement) */}
          <div className={`h-12 w-12 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 mb-4 flex items-center justify-center text-white text-xl font-bold shadow-lg ring-4 ring-white dark:ring-slate-800 transition-all duration-300 ${isCollapsed ? '' : 'h-20 w-20 text-2xl'}`}>
            AP
          </div>
          
          {/* Text Content - Hide when collapsed (Remains the same) */}
          {!isCollapsed && (
            <>
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white font-display">ACF Peacekeeper</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium dark:text-white">Researcher & Developer</p>
              <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider dark:text-white">CSE & Math</p>
            </>
          )}
        </div>

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

      {/* Social Links (Remains the same) */}
      <div className={`flex space-x-4 ${isCollapsed ? 'justify-center space-x-0 flex-col items-center space-y-4' : 'justify-center'} text-slate-400`}>
        <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors p-1" aria-label="Github"><Github size={20} /></a>
        <a href="#" className="hover:text-blue-400 transition-colors p-1" aria-label="Twitter"><Twitter size={20} /></a>
        <a href="#" className="hover:text-blue-600 transition-colors p-1" aria-label="LinkedIn"><Linkedin size={20} /></a>
        <button onClick={toggleTheme} className="hover:text-yellow-500 transition-colors p-1" aria-label="Toggle Dark Mode">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;