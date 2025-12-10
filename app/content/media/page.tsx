import React from 'react';
import { Gamepad2, Film, Tv, BookOpen } from 'lucide-react';
import SectionHeading from '@/src/components/ui/SectionHeading';
import GlassCard from '@/src/components/ui/GlassCard';
import pageImage from '@/assets/images/dg7za3r-5c28683b-d2e4-4018-bf8b-eaea55cde631.png'; 

export default function MediaPage() {
  return (
    <div className="space-y-10 animate-in fade-in duration-500">

        <div className="flex justify-center mb-8">
            <div className="relative w-full max-w-2xl aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/20">
                {/* Note: Ensure this image path is correct in your public folder */}
            <img 
                src={pageImage.src}
                alt="Jinx from Arcane"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
            />
            </div>
        </div>
      
        <div className="text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white">Media Log</h1>
        <p className="text-slate-600 dark:text-slate-400 mt-2">Tracking what I watch, play, and read.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
        
        {/* Games Column */}
        <div className="space-y-8">
            <section>
                <SectionHeading title="Games" icon={<Gamepad2 className="text-purple-500" />} />
                <GlassCard className="p-6 space-y-6">
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200">Video Games</h3>
                        <p className="text-slate-500 italic text-sm">Recently played</p>
                        <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-slate-400">
                            <li>League of Legends</li>
                            <li>Counter-Strike 2</li>
                            <li>Pokemon Series</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200">Tabletop Games</h3>
                        <ul className="list-disc list-inside mt-2 text-slate-600 dark:text-slate-400">
                            <li>Dungeons & Dragons (5e)</li>
                            <li>Magic: The Gathering (Commander)</li>
                            <li>Catan</li>
                        </ul>
                    </div>
                </GlassCard>
            </section>

            <section>
                <SectionHeading title="Print Media" icon={<BookOpen className="text-blue-500" />} />
                <GlassCard className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200">Books & Papers</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Currently focusing on research papers related to Reinforcement Learning and Graph Neural Networks.
                    </p>
                </GlassCard>
            </section>
        </div>

        {/* Cinema Column */}
        <div className="space-y-8">
            <section>
                <SectionHeading title="Cinema & TV" icon={<Film className="text-red-500" />} />
                <GlassCard className="p-6 space-y-6">
                    <div>
                        <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200">Animated Series</h3>
                        <ul className="grid gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <li>Arcane</li>
                            <li>Star Wars: The Bad Batch S3</li>
                            <li>The Dragon Prince S6</li>
                            <li>The Legend of Vox Machina S2</li>
                            <li>Star Trek: Lower Decks S4</li>
                            <li>Carmen Sandiego S4</li>
                            <li>Harley Quinn S4</li>
                        </ul>
                    </div>
                    
                    <div>
                            <h3 className="font-bold text-lg mb-2 text-slate-800 dark:text-slate-200">Live Action</h3>
                            <ul className="grid gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <li>Star Wars: The Acolyte</li>
                            <li>Knuckles</li>
                            <li>The Mandalorian</li>
                            </ul>
                    </div>
                </GlassCard>
            </section>
        </div>

        </div>
    </div>
  );
}