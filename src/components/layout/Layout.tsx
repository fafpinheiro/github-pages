import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  
  // In a real app, this might be determined by intersection observers or route
  const [activeSection, setActiveSection] = useState<string>('home');

  // Handle Dark Mode Initialization and Toggle
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const isSystemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const storedTheme = localStorage.getItem('theme');
      
      if (storedTheme === 'dark' || (!storedTheme && isSystemDark)) {
        setDarkMode(true);
      }
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

  return (
    <div className={`min-h-screen transition-colors duration-300 font-sans ${darkMode ? 'dark bg-slate-900 text-slate-200' : 'bg-slate-50 text-slate-800'}`}>
      
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm sticky top-0 z-50 border-b border-slate-200 dark:border-slate-800">
        <span className="font-bold text-xl tracking-tight font-display">ACF Peacekeeper</span>
        <button 
          onClick={() => setMobileMenuOpen(true)}
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
            onClick={() => setMobileMenuOpen(false)}
            className="self-end p-2 mb-4 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg"
            aria-label="Close Menu"
          >
            <X size={28} />
          </button>
          {['Home', 'About', 'Publications', 'Blog', 'Projects'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMobileMenuOpen(false)}
              className="text-2xl font-medium font-display hover:text-blue-600 dark:hover:text-blue-400"
            >
              {item}
            </a>
          ))}
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
          
          <footer className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-20 pb-8 text-center md:text-left text-slate-500 text-sm">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p>&copy; {new Date().getFullYear()} ACF Peacekeeper. All rights reserved.</p>
              <div className="mt-4 md:mt-0 space-x-6 flex">
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">RSS</a>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Privacy</a>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Sitemap</a>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Layout;