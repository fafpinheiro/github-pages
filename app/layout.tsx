import React from 'react';
import { Inter, Lexend } from 'next/font/google';
import './globals.css'; // Import global CSS here

// Initialize fonts using Next.js font optimization
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const lexend = Lexend({ subsets: ['latin'], variable: '--font-lexend' });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${inter.variable} ${lexend.variable}`}>
      <head>
        {/* Set fonts globally using CSS variables for Tailwind */}
        <style>{`
          :root {
            --font-sans: var(--font-inter);
            --font-display: var(--font-lexend);
          }
        `}</style>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}