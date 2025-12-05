import React from 'react';
import { Home, User, PenTool, Code, Video, Github, Twitter, Linkedin, Moon, Sun } from 'lucide-react';
import SidebarItem from './SidebarItem';

interface SidebarProps {
  activeSection: string;
  darkMode: boolean;
  toggleTheme: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeSection, darkMode, toggleTheme }) => {
  return (
    <aside className="hidden lg:flex flex-col w-72 h-screen sticky top-0 border-r border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl p-8 justify-between">
      <div>
        <div className="mb-12">
          {/* In real Gatsby, use <StaticImage /> here */}
          <div className="h-20 w-20 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 mb-4 flex items-center justify-center text-white text-2xl font-bold shadow-lg ring-4 ring-white dark:ring-slate-800">
            AP
          </div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white font-display">ACF Peacekeeper</h1>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-1 font-medium">Researcher & Developer</p>
          <p className="text-xs text-slate-400 mt-2 uppercase tracking-wider">RL & Combinatorial Opt</p>
        </div>

        <nav className="space-y-2">
          <SidebarItem href="#home" icon={<Home size={20} />} label="Home" active={activeSection === 'home'} />
          <SidebarItem href="#about" icon={<User size={20} />} label="About" active={activeSection === 'about'} />
          <SidebarItem href="#posts" icon={<PenTool size={20} />} label="Blog" active={activeSection === 'posts'} />
          <SidebarItem href="#projects" icon={<Code size={20} />} label="Projects" active={activeSection === 'projects'} />
          <SidebarItem href="#media" icon={<Video size={20} />} label="Media" active={activeSection === 'media'} />
        </nav>
      </div>

      <div className="flex space-x-4 justify-center text-slate-400">
        <a href="#" className="hover:text-slate-900 dark:hover:text-white transition-colors"><Github size={20} /></a>
        <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
        <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
        <button onClick={toggleTheme} className="hover:text-yellow-500 transition-colors" aria-label="Toggle Dark Mode">
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;