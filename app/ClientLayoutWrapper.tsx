'use client'; // This directive marks the file as a Client Component

import React, { useState, useEffect } from 'react';
import Sidebar from '../src/components/layout/Sidebar'; // Using absolute imports with @/
import Footer from '../src/components/layout/Footer';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

const ClientLayoutWrapper: React.FC<ClientLayoutWrapperProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection] = useState<string>('home');
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState<boolean>(false);

  // --- Dark Mode Logic ---
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

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'dark bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>

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