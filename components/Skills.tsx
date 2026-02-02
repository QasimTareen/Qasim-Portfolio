import React from 'react';
import { Terminal, Globe, Database, Layers, Cpu, Lightbulb, Award } from 'lucide-react';

const Skills: React.FC = () => (
  <div className="min-h-screen py-24 md:py-32 px-6 bg-white dark:bg-slate-950">
    <div className="max-w-7xl mx-auto">
      <div className="mb-12 md:mb-20 text-center animate-reveal">
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 uppercase">
          Digital <span className="text-blue-600 italic">Arsenal</span>
        </h2>
        <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium tracking-tight">
          A multi-disciplinary toolkit engineered for the modern high-performance landscape.
        </p>
        <div className="h-1.5 w-12 bg-blue-600 rounded-full mt-6 md:mt-8 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {[
          { title: "Languages", skills: ["Java", "C++", "Python", "Solidity"], icon: <Terminal /> },
          { title: "Frontend", skills: ["React", "Tailwind", "JavaScript", "TS"], icon: <Globe /> },
          { title: "Backend", skills: ["Node.js", "Express", "REST", "SQL"], icon: <Database /> },
          { title: "Blockchain", skills: ["Ethereum", "Web3.js", "Solana", "EVM"], icon: <Layers /> },
          { title: "DevOps", skills: ["Docker", "Git", "CI/CD", "AWS"], icon: <Cpu /> },
          { title: "Research", skills: ["AI Analysis", "Protocol Design", "Audit"], icon: <Lightbulb /> },
          { title: "Design", skills: ["UI/UX", "Figma", "Prototypes", "Motion"], icon: <Layers /> },
          { title: "Leadership", skills: ["Agile", "Mentorship", "Public Speaking"], icon: <Award /> },
        ].map((s, i) => (
          <div 
            key={i} 
            style={{ animationDelay: `${200 + (i * 100)}ms` }}
            className="animate-reveal p-6 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl md:hover:-translate-y-2 transition-all group"
          >
            <div className="text-blue-600 dark:text-blue-400 mb-4 md:mb-6 md:group-hover:scale-125 transition-transform origin-left">{s.icon}</div>
            <h3 className="font-black text-lg md:text-2xl text-slate-900 dark:text-white mb-4 md:mb-6 tracking-tighter uppercase">{s.title}</h3>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {s.skills.map(skill => (
                <span key={skill} className="px-3 md:px-4 py-1.5 md:py-2 rounded-lg md:rounded-xl bg-white dark:bg-slate-700 text-[8px] md:text-[10px] font-black text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-600 uppercase tracking-widest shadow-sm">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Skills;