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
        <div className="relative w-full max-w-2xl aspect-square rounded-2xl overflow-hidden shadow-2xl border border-white/20">
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
        <p className="text-slate-600 dark:text-slate-400">Software Engineer, Game Developer, and Multimedia Enthusiast</p>
      </div>

      {/* Current Work */}
      <section id="current-work" className="scroll-mt-20">
        <SectionHeading title="Current Work" icon={<Briefcase className="text-blue-500" />} />
        <GlassCard className="p-6">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            I'm currently a <strong>Lead Software Developer</strong> at <a href="https://www.eti.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">EMPORDEF Tecnologias de Informação SA</a> 
            — where I'm developing new training solution for the defence and aviation industry, primarily working with Unreal Engine and C++ —
            Alongside this, I work as an independent game developer, designing and building interactive experiences
            with a strong focus on systems, performance, and player-driven design.
          </p>
        </GlassCard>
      </section>

      {/* Previous Work */}
      <section id="previous-work" className="scroll-mt-20">
        <SectionHeading title="Previous Work" icon={<User className="text-purple-500" />} />
        <GlassCard className="p-6 space-y-4">
          <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300">
            <li>
              <strong>First Stage Research Grant Holder</strong> at <a href="https://www.inesc-id.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">INESC-ID</a>: 
              Upgraded a simulator that uses data from <a href="https://www.valorsul.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">Valorsul</a>, 
              and <a href="https://www.ersuc.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">Ersuc</a>, and developed a combination of the Graph Neural Network and 
              Transformer models for <a href="https://evox.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">Evox Technologies</a> to use with the data simulator.
            </li>
            <li>
              <strong>Computer Programmer Analyst</strong> at <a href="http://www.qub-it.com/" className="text-blue-600 dark:text-blue-400 hover:underline">Quorum Born IT</a>: 
              Refactored and further developed a Java application to integrate several Git version control services, as well as a microservice 
              and a set of cryptographic tools to allow clients to securely several keystore files spread across multiple servers.
            </li>
            <li>
              <strong>Student Researcher</strong> at <a href="https://gaips.inesc-id.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">GAIPS</a>: 
              Developed new Multimodal Deep Learning architectures and frameworks with a focus towards increased robustness against noisy data and adversarial attacks.
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
                <div className="font-semibold">MSc in Computer Science and Engineering</div>
                <div className="text-sm text-slate-500">NOVA School of Science and Technology (2020 - 2023)</div>
                <div className="text-xs text-slate-400 mt-1">Specialization: Computer Graphics & Simulation</div>
              </li>
              <li>
                <div className="font-semibold">BSc in Computer Science and Engineering</div>
                <div className="text-sm text-slate-500">NOVA School of Science and Technology (2017 - 2020)</div>
              </li>
            </ul>
          </GlassCard>
          
          <GlassCard className="p-6">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Extracurriculars</h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 text-sm">
              <li>Advanced Unreal Engine Developer (ArCan Studios)</li>
              <li>Multiplayer in Unreal Engine (ArCan Studios)</li>
              <li>Introduction to Computer Science (Harvard)</li>
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
                        <li>Game Development</li>
                        <li>Cinema & TV Series</li>
                        <li>Anime</li>
                        <li>Tabletop & Video Games</li>
                        <li>Science & Tech</li>
                        <li>Entrepreneurship</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-bold text-lg mb-3 dark:text-white">Knowledge Areas</h3>
                    <div className="flex flex-wrap gap-2">
                         {['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Reinforcement Learning', 'Combinatorial Optimization', 'Cybersecurity', 'Game Development', 'Operations Research'].map(tag => (
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
                I am a member of the <a href="https://partidochega.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">Chega!</a> political party. Formerly, I was a member of 
                the <a href="https://ps.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">Partido Socialista</a> and 
                its <a href="https://juventudesocialista.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">Youth Wing</a>, 
                where I served as vice-president of my parish group, member of the secretariat of the Lisbon county, my university and the council for secondary and higher education, 
                member of the political comission of the Lisbon county and federation, and national delegate to several congresses.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
                During my studies, I was involved with:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 dark:text-slate-300 ml-4 mb-4">
                <li><a href="https://hackerschool.tecnico.ulisboa.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">HackerSchool</a> (Developer)</li>
                <li><a href="https://labjogos.tecnico.ulisboa.pt/en" className="text-blue-600 dark:text-blue-400 hover:underline">LabJogos</a> (Marketing Assistant)</li>
                <li><a href="https://best.tecnico.ulisboa.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">BEST Lisbon</a> (IT Responsible)</li>
                <li><a href="https://diferencial.tecnico.ulisboa.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">Diferencial</a> (Newspaper Member)</li>
                <li><a href="https://lage2.ist.utl.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">Lage2</a> (Events Organizer)</li>
            </ul>
             <p className="text-slate-700 dark:text-slate-300">
                I also volunteered as a Computer Science Instructor at <a href="https://www.treetree2.org/" className="text-blue-600 dark:text-blue-400 hover:underline">TreeTree2</a>, with 
                the <a href="http://www.voxlisboa.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">VOXLisboa Association</a> to help ensure the homeless had access to food and other resources, 
                and as a staff member of the team of the TORNADU debate tournament organized by <a href="https://debates.pt/" className="text-blue-600 dark:text-blue-400 hover:underline">CNADU</a>.
                <br/>
                Finally, I was a debater at <a href="http://sdal.weebly.com/" className="text-blue-600 dark:text-blue-400 hover:underline">SDAL</a>, where I participated in several debate tournaments: 
                TORNADU 2019 (Initiate 2nd place), Open Lisbon V (Initiate 3rd place + Initiate Brake), CMDLP 2019 (Initiate 1st place + Initiate Brake), 
                Open da Católica III (Finalist + Top 10 Speaker), Open do Tejo III (Finalist + Top 10 Speaker).
                I was also part of the CA Team of the Open Centro Sul 2021, and worked as both a Member of the Board at IST and (later) as the Secretary General of SDAL.
            </p>
        </GlassCard>
      </section>

    </div>
  );
}
