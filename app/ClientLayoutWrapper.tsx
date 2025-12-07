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

  // --- getActiveSection Logic --- (Unchanged)
  const getActiveSection = (path: string) => {
    if (path === '/') return 'home';
    const match = path.match(/^\/(?:content\/)?([a-z-]+)/);
    if (match) {
        return match[1];
    }
    return 'home';
  };

  const activeSection = getActiveSection(pathname);

  // --- Dark Mode Logic --- (Unchanged, but complete code is here for context)
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && isSystemDark)) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
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

  // --- Mobile Menu Logic --- (Unchanged)
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

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
                {/* The Mobile Menu content is the uncollapsed Sidebar */}
                <Sidebar
                    activeSection={activeSection}
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                    isCollapsed={false} // Force uncollapsed for mobile menu
                    toggleCollapse={toggleSidebarCollapsed}
                />

                {/* Close Button within the Mobile Sidebar */}
                <button
                  onClick={toggleMenu}
                  className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors z-50"
                  aria-label="Close menu"
                >
                  <X size={24} />
                </button>
            </div>
        )}

        {/* Main Content Area */}
        <div className="flex-1">
            {/* Main Content Area */}
            {/* The pt-20 handles the space for the sticky mobile header */}
            <main className="flex-1 p-6 lg:p-12 w-full max-w-4xl mx-auto pt-20 lg:pt-12">
                {children}

                {/* FIX: Pass required props to Footer */}
                <Footer
                    darkMode={darkMode}
                    toggleTheme={toggleTheme}
                />
            </main>
        </div>
      </div>
    </div>
  );
};

export default ClientLayoutWrapper;
