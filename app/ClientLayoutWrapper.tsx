'use client'; // CRITICAL: Must be at the top for usePathname to work

import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { usePathname } from 'next/navigation'; // <-- Ensure this import is present
import Sidebar from '../src/components/layout/Sidebar'; 
import Footer from '../src/components/layout/Footer';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

const ClientLayoutWrapper: React.FC<ClientLayoutWrapperProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  
  // Use Next.js hook to get the current path
  const pathname = usePathname(); // This should now work correctly

  // Determine active section based on the path
  const getActiveSection = (path: string) => {
    // Standardize path to start resolving from the root
    if (path === '/') return 'home';

    // The logic below ensures that paths like:
    // /content/about -> 'about'
    // /posts -> 'posts'
    // /content/tools -> 'tools'
    const match = path.match(/^\/(?:content\/)?([a-z-]+)/);
    if (match) {
        // Return the matched slug (e.g., 'about', 'projects', 'posts')
        // Using match[1] works for both single segments (/posts) and nested segments (/content/about)
        return match[1];
    }
    return 'home';
  };
  
  const activeSection = getActiveSection(pathname);

  // --- Dark Mode Logic --- (omitted for brevity)
  useEffect(() => {
    // Initialization: Check local storage or system preference
    const storedTheme = localStorage.getItem('theme');
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (storedTheme === 'dark' || (!storedTheme && isSystemDark)) {
      setDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleSidebarCollapsed = () => setIsSidebarCollapsed(!isSidebarCollapsed);

  // --- Mobile Menu Logic --- (omitted for brevity)
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'dark bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
        <span className="font-bold text-xl tracking-tight font-display">ACF Peacekeeper</span>
        <button 
          onClick={toggleMenu}
          className="p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Open Menu"
        >
          <Menu size={24} />
        </button>
      </div>

      <div className="flex max-w-7xl mx-auto">
        <Sidebar 
          activeSection={activeSection} 
          darkMode={darkMode} 
          toggleTheme={toggleTheme} 
          isCollapsed={isSidebarCollapsed}
          toggleCollapse={toggleSidebarCollapsed}
        />

        <main className="flex-1 p-6 lg:p-12 w-full max-w-4xl mx-auto">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default ClientLayoutWrapper;