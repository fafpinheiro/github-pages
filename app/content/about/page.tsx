import React from 'react';
import { Briefcase, GraduationCap, Heart, User, MapPin } from 'lucide-react';
import SectionHeading from '@/src/components/ui/SectionHeading';
import GlassCard from '@/src/components/ui/GlassCard';
import pageImage from '@/assets/images/steamuserimages-a.akamaihd.jpeg';

export default function AboutPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Hero / Profile Image Section */}
      <div className="flex justify-center mb-8">
        <div className="relative w-full max-w-2xl aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            {/* Note: Ensure this image path is correct in your public folder */}
          <img 
            src={pageImage.src}
            alt="Jinx from Arcane"
            className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>

      <div className="space-y-2 text-center mb-12">
        <h1 className="text-4xl font-display font-bold text-slate-900 dark:text-white">About Me</h1>
        <p className="text-slate-600 dark:text-slate-400">Researcher, Developer, and Multimedia Enthusiast</p>
      </div>

      {/* Current Work */}
      <section id="current-work" className="scroll-mt-20">
        <SectionHeading title="Current Work" icon={<Briefcase className="text-blue-500" />} />
        <GlassCard className="p-6">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            I'm currently a <strong>First Stage Researcher</strong> at <a href="https://www.inesc-id.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">INESC-ID</a> — where I'm developing new Deep Reinforcement Learning methods to solve Combinatorial Optimization tasks — and an invited <strong>Assistant Professor</strong> at the Computer Science and Engineering department of <a href="https://tecnico.ulisboa.pt/en/" className="text-blue-600 dark:text-blue-400 hover:underline">IST</a>.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            I teach courses about <a href="https://fenix.tecnico.ulisboa.pt/cursos/leic-t/disciplina-curricular/1408903891910867" className="text-blue-600 dark:text-blue-400 hover:underline">Distributed Systems</a>, <a href="https://fenix.tecnico.ulisboa.pt/cursos/meic-t/disciplina-curricular/1127421509376174" className="text-blue-600 dark:text-blue-400 hover:underline">Cloud Computing and Virtualization</a>, and <a href="https://fenix.tecnico.ulisboa.pt/cursos/leic-t/disciplina-curricular/2822187612248888" className="text-blue-600 dark:text-blue-400 hover:underline">Foundations of Programming</a>.
          </p>
        </GlassCard>
      </section>

      {/* Previous Work */}
      <section id="previous-work" className="scroll-mt-20">
        <SectionHeading title="Previous Work" icon={<User className="text-purple-500" />} />
        <GlassCard className="p-6 space-y-4">
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>
              <strong>Research Grant Holder</strong> at <a href="https://tecnico.ulisboa.pt/en/" className="text-blue-600 dark:text-blue-400 hover:underline">IST</a>: Developed a standard way to produce and consume <strong>Knowledge Graphs</strong> for the <a href="https://mobilizador.pt/en/agenda-mobilizadora/" className="text-blue-600 dark:text-blue-400 hover:underline">Illiance Agenda</a>.
            </li>
            <li>
              <strong>Summer Intern</strong> at <a href="https://www.accenture.com/pt-pt" className="text-blue-600 dark:text-blue-400 hover:underline">Accenture Portugal</a>: Developed a use case for the <strong>Metaverse</strong> (VR) regarding Onboarding processes.
            </li>
            <li>
              <strong>Junior Researcher</strong> at <a href="https://www.inesc-id.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">INESC-ID</a>: Developed a <strong>Reinforcement Learning</strong> agent for Waste Collection routing optimization (WSmart Route+ Project).
            </li>
          </ul>
        </GlassCard>
      </section>

      {/* Academia */}
      <section id="academia" className="scroll-mt-20">
        <SectionHeading title="Academia" icon={<GraduationCap className="text-green-500" />} />
        <div className="grid md:grid-cols-2 gap-6">
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Education</h3>
            <ul className="space-y-3 text-slate-700 dark:text-slate-300">
              <li>
                <div className="font-semibold">PhD in Computer Science and Engineering</div>
                <div className="text-sm text-slate-500">IST (Ongoing)</div>
              </li>
              <li>
                <div className="font-semibold">MSc in Computer Science and Engineering</div>
                <div className="text-sm text-slate-500">IST (2020 - 2022)</div>
                <div className="text-xs text-slate-400 mt-1">Specialization: AI & Games</div>
              </li>
              <li>
                <div className="font-semibold">BSc in Computer Science and Engineering</div>
                <div className="text-sm text-slate-500">IST (2017 - 2020)</div>
              </li>
            </ul>
          </GlassCard>
          
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Extracurriculars</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 text-sm">
              <li>Machine Learning Specialization (DeepLearning.AI)</li>
              <li>Introduction to C# Programming and Unity (Coursera)</li>
              <li>The Data Scientist’s Toolbox (Coursera)</li>
              <li>Elements of AI (University of Helsinki)</li>
            </ul>
          </GlassCard>
        </div>
      </section>

      {/* Hobbies & Interests */}
      <section id="hobbies" className="scroll-mt-20">
        <SectionHeading title="Hobbies & Interests" icon={<Heart className="text-red-500" />} />
        <GlassCard className="p-6">
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-bold text-lg mb-3 dark:text-white">Interests</h3>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 dark:text-slate-300">
                        <li>Politics</li>
                        <li>Cinema & TV Series</li>
                        <li>Anime & Manga</li>
                        <li>Tabletop Games (D&D, MTG, Catan)</li>
                        <li>Video Games (LoL, Pokemon, CS)</li>
                        <li>Football (Sporting CP fan)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-3 dark:text-white">Knowledge Areas</h3>
                    <div className="flex flex-wrap gap-2">
                         {['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'Combinatorial Optimization', 'Multi-Agent Systems', 'Game Development'].map(tag => (
                             <span key={tag} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-xs font-medium">
                                 {tag}
                             </span>
                         ))}
                    </div>
                </div>
            </div>
        </GlassCard>
      </section>

      {/* Other Activities */}
      <section id="other" className="scroll-mt-20">
        <SectionHeading title="Volunteering & Activities" icon={<MapPin className="text-yellow-500" />} />
        <GlassCard className="p-6">
            <p className="text-slate-700 dark:text-slate-300 mb-4">
                I am a member of the <a href="https://iniciativaliberal.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">Iniciativa Liberal</a> party, serving on the political commission for the county and district of Lisbon.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
                During my studies, I was involved with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4 mb-4">
                <li><a href="https://hackerschool.tecnico.ulisboa.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">HackerSchool</a> (Developer)</li>
                <li><a href="https://labjogos.tecnico.ulisboa.pt/en" className="text-blue-600 dark:text-blue-400 hover:underline">LabJogos</a> (Marketing Assistant)</li>
                <li><a href="https://best.tecnico.ulisboa.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">BEST Lisbon</a> (IT Responsible)</li>
                <li><a href="https://diferencial.tecnico.ulisboa.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">Diferencial</a> (Newspaper Member)</li>
            </ul>
             <p className="text-slate-700 dark:text-slate-300">
                I also volunteered as a Computer Science Instructor at <a href="https://www.treetree2.org/" className="text-blue-600 dark:text-blue-400 hover:underline">TreeTree2</a> and with the VOXLisboa Association helping the homeless.
            </p>
        </GlassCard>
      </section>

    </div>
  );
}