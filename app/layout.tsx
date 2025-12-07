import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

// Import the Header and the Client Layout Wrapper
import Header from '@/src/components/layout/Header'; 
import ClientLayoutWrapper from '@/app/ClientLayoutWrapper'; // Assuming this exists at app/ClientLayoutWrapper.tsx

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'ACFHarbinger',
  description: 'Personal Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en"> 
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 h-full`}>
        
        {/* The Mobile-Only Header is placed here, outside the Sidebar/Main wrapper */}
        <Header />
        
        {/* Pass the page content (children) to the wrapper that adds the Sidebar and Footer */}
        <ClientLayoutWrapper>
          {children}
        </ClientLayoutWrapper>
        
      </body>
    </html>
  );
}