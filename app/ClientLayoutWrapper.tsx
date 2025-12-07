'use client'; 

import React, { useState, useEffect } from 'react';
// IMPORT FIX: Added 'X' to imports
import { Menu, X, Moon, Sun } from 'lucide-react'; 
import { usePathname } from 'next/navigation'; 
import Sidebar from '../src/components/layout/Sidebar'; 
import Footer from '../src/components/layout/Footer';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

const ClientLayoutWrapper: React.FC<ClientLayoutWrapperProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);
  
  const pathname = usePathname(); 

  // --- Omitted Dark Mode and getActiveSection logic for brevity (they remain unchanged) ---
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
  
  // --- Mobile Menu Logic ---
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  // FIX: Close mobile menu when the route changes (e.g., clicking a link in the menu)
  useEffect(() => {
    if (mobileMenuOpen) {
        setMobileMenuOpen(false);
    }
  }, [pathname]);


  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'dark bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
      {/* Main Layout Container */}
      <div className="flex max-w-7xl mx-auto">
        
        {/* Sidebar for Desktop */}
        <div className="hidden lg:block"> 
            <Sidebar 
                activeSection={activeSection} 
                darkMode={darkMode} 
                toggleTheme={toggleTheme} 
                isCollapsed={isSidebarCollapsed}
                toggleCollapse={toggleSidebarCollapsed}
            />
        </div>
        
        {/* Sidebar for Mobile (Full-screen overlay when menu is open) */}
        {mobileMenuOpen && (
            <div className="lg:hidden fixed inset-0 z-40 bg-white dark:bg-slate-900 overflow-y-auto">
                {/* Ensure the sidebar content fills the mobile overlay */}
                <Sidebar 
                    activeSection={activeSection} 
                    darkMode={darkMode} 
                    toggleTheme={toggleTheme} 
                    isCollapsed={false} // Force uncollapsed for mobile menu
                    toggleCollapse={toggleSidebarCollapsed} // Keep the toggle function even if hidden
                />
            </div>
        )}

        {/* Main Content Area */}
        {/* FIX: Added margin-top for mobile to account for the sticky header (p-4 + h-16) */}
        <main className="flex-1 p-6 lg:p-12 w-full max-w-4xl mx-auto pt-20 lg:pt-12">
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default ClientLayoutWrapper;