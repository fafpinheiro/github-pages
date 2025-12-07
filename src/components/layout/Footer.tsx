import React from 'react';

const Footer: React.FC = () => (
    <footer className="border-t border-slate-200 dark:border-slate-800 pt-8 mt-20 pb-8 text-center md:text-left text-slate-500 text-sm">
        <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} ACFHarbinger. All rights reserved.</p>
            <div className="mt-4 md:mt-0 space-x-6 flex">
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">RSS</a>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Privacy</a>
                <a href="#" className="hover:text-slate-900 dark:hover:text-slate-200 transition-colors">Sitemap</a>
            </div>
        </div>
    </footer>
);

export default Footer;