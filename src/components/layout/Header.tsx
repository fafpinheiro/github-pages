'use client';

// Add useState to manage the menu open/closed state
import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  User, 
  Code, 
  Wrench, 
  Tv, 
  FileText,
  PenTool,
  Menu, // Import Menu icon for the closed state
  X     // Import X icon for the open state
} from 'lucide-react';

const NAV_ITEMS = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'About', href: '/content/about', icon: User },
  { label: 'Projects', href: '/content/projects', icon: Code },
  { label: 'Reports', href: '/content/reports', icon: FileText },
  { label: 'Tools', href: '/content/tools', icon: Wrench },
  { label: 'Posts', href: '/content/posts', icon: PenTool },
  { label: 'Media', href: '/content/media', icon: Tv },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    // Make the header visible ONLY on small screens (md:hidden)
    <header className="w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 sticky top-0 z-50 **md:hidden**">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title Area */}
          <div className="flex-shrink-0">
            <Link href="/" className="font-bold text-xl text-slate-900 dark:text-white flex items-center gap-2" onClick={closeMobileMenu}>
              <span className="text-blue-500">ACF</span>
              <span>Harbinger</span>
            </Link>
          </div>

          {/* DESKTOP Navigation Links (Hidden on small screens - this nav block is removed or simplified in mobile-only header) */}
          {/* We are removing the hidden md:flex block as the whole component is now md:hidden */}

          {/* MOBILE Menu ButtonTrigger (Always visible in this now mobile-only component) */}
          <div className="flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {/* This logic is correct for hamburger/X toggle */}
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE Menu Dropdown Container */}
      {/* Conditionally render based on state */}
      {isMobileMenuOpen && (
        <div className="absolute w-full bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-lg z-40 animate-in slide-in-from-top-2">
          {/* ... (Menu rendering logic remains the same) ... */}
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || (item.href !== '/' && pathname?.startsWith(item.href));
              
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`
                    flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors duration-200
                    ${isActive 
                      ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400' 
                      : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
                    }
                  `}
                >
                  <Icon size={20} className="mr-3" />
                  {item.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}