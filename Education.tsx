import React from 'react';
import { GraduationCap } from 'lucide-react';

const Education: React.FC = () => (
  <div className="min-h-screen py-32 px-6 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="mb-20 text-center animate-reveal">
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tighter mb-4 uppercase">
          Academic <span className="text-blue-600 italic">Core</span>
        </h2>
        <div className="h-1.5 w-12 bg-blue-600 rounded-full mt-8 mx-auto" />
      </div>
      
      <div className="space-y-12 animate-scale-in [animation-delay:300ms]">
        <div className="p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] bg-white dark:bg-slate-900 shadow-2xl border-none group transition-all duration-700 hover:shadow-blue-500/5">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-10">
            <div className="flex items-center gap-5 md:gap-6">
              <div className="p-4 md:p-5 rounded-[1.2rem] md:rounded-[1.5rem] bg-slate-900 dark:bg-slate-800 text-white shadow-2xl group-hover:rotate-12 transition-transform duration-500">
                <GraduationCap size={28} />
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white tracking-tighter">COMSATS University</h3>
                <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] mt-1">Lahore Campus <span className="text-blue-600">/</span> PK</p>
              </div>
            </div>
            <div className="px-5 py-1.5 md:px-6 md:py-2 rounded-full bg-blue-600 text-white text-[9px] md:text-[10px] font-black shadow-2xl shadow-blue-600/30 tracking-widest">
              2024 — 2028
            </div>
          </div>
          
          <div className="pl-0 md:pl-24">
            <h4 className="text-[9px] md:text-[10px] font-black text-slate-400 mb-3 uppercase tracking-[0.4em]">Specialization:</h4>
            <div className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white tracking-tighter leading-none mb-10 uppercase italic">
              Software <span className="text-blue-600">Engineering</span>
            </div>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {["OOP Fundamentals", "Discrete Logic", "Research Labs"].map(tag => (
                <span key={tag} className="text-[8px] md:text-[9px] font-black text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 md:px-5 py-2 md:py-2.5 rounded-lg md:rounded-xl uppercase tracking-[0.2em] border border-slate-200 dark:border-slate-700">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Education;