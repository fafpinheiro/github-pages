'use client'; // This directive marks the file as a Client Component

import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Sidebar from '../src/components/layout/Sidebar'; // Using absolute imports with @/
import Footer from '../src/components/layout/Footer';

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

const ClientLayoutWrapper: React.FC<ClientLayoutWrapperProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeSection] = useState<string>('home'); // Simplified for this example

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

  // --- Mobile Menu Logic ---
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

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="absolute inset-0 bg-white dark:bg-slate-900 p-8 flex flex-col space-y-6">
          <button 
            onClick={toggleMenu}
            className="self-end p-2 mb-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
          {['Home', 'About', 'Publications', 'Blog', 'Projects'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="text-2xl font-medium font-display hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item}
            </a>
          ))}
          <button onClick={toggleTheme} className="flex items-center space-x-2 text-xl mt-4 p-2 rounded-lg bg-slate-100 dark:bg-slate-800">
            {darkMode ? <Sun size={20} className="text-yellow-500"/> : <Moon size={20} />}
            <span>Toggle {darkMode ? 'Light' : 'Dark'} Mode</span>
          </button>
        </div>
      </div>

      <div className="flex max-w-7xl mx-auto">
        <Sidebar 
          activeSection={activeSection} 
          darkMode={darkMode} 
          toggleTheme={toggleTheme} 
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