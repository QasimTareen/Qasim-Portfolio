import React from 'react';
import { Code2, Database, Shield, GraduationCap, Award, MapPin, Globe } from 'lucide-react';

const About: React.FC = () => {
  const imageUrl = "https://drive.google.com/thumbnail?id=1NwWvMyeabKVH9POSfEokS46uGsarsMit&sz=w1000";

  return (
    <div className="min-h-screen py-20 md:py-48 px-4 sm:px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-24 items-start">
          
          {/* Profile Sidebar */}
          <div className="lg:col-span-5 relative animate-reveal">
            <div className="lg:sticky lg:top-40">
              <div className="relative group">
                <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-slate-100 dark:border-white/5 bg-slate-50 dark:bg-slate-900 shadow-xl">
                  <img 
                    src={imageUrl} 
                    alt="Muhammad Qasim Ali Tareen" 
                    className="w-full aspect-[3/4] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent"></div>
                </div>

                <div className="mt-6 md:mt-10 space-y-3 px-2">
                  <h3 className="text-2xl md:text-3xl font-black uppercase tracking-tighter text-slate-900 dark:text-white leading-none">
                    M. Qasim Ali <br/> Tareen
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-[2px] bg-blue-600"></span>
                    <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Software Architect</span>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-2">
                    <div className="flex items-center gap-2 text-slate-400">
                       <MapPin size={12} className="text-blue-600" />
                       <span className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest">Lahore, Pakistan</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                 <div className="p-4 rounded-[1.25rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                    <GraduationCap size={16} className="text-blue-600 mb-2" />
                    <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">Cohort</span>
                    <span className="text-[10px] font-black text-slate-900 dark:text-white mt-1">SE '28</span>
                 </div>
                 <div className="p-4 rounded-[1.25rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 flex flex-col items-center text-center">
                    <Award size={16} className="text-blue-600 mb-2" />
                    <span className="text-[7px] font-black uppercase tracking-widest text-slate-400">Role</span>
                    <span className="text-[10px] font-black text-slate-900 dark:text-white mt-1">VICE PRESIDENT</span>
                 </div>
              </div>
            </div>
          </div>

          {/* Biography Content */}
          <div className="lg:col-span-7 space-y-12 md:space-y-24">
            <section>
              <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] text-slate-400 mb-6 block">Biography</span>
              <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[1] mb-6 md:mb-12">
                Engineering <br/> <span className="text-blue-600 italic">Robust</span> <br/> Solutions.
              </h2>
              <div className="space-y-6 max-w-2xl">
                <p className="text-lg md:text-2xl text-slate-600 dark:text-slate-400 font-medium leading-tight">
                  I believe that software architecture is the foundation of innovation.
                </p>
                <p className="text-sm md:text-lg text-slate-500 dark:text-slate-500 leading-relaxed">
                  As a Software Engineering student at COMSATS Lahore, I explore the synergy between clean code and scalable infrastructure. My roles at MLSA and LoopLab allow me to mentor others while architecting future-proof systems.
                </p>
              </div>
            </section>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
              {[
                { 
                  icon: <Code2 size={24} />, 
                  title: "Strategic Stack", 
                  desc: "Designing modular frontends and performant backends with modern frameworks." 
                },
                { 
                  icon: <Database size={24} />, 
                  title: "Data Integrity", 
                  desc: "Ensuring secure and efficient data management across diverse cloud providers." 
                }
              ].map((item, idx) => (
                <div key={idx} className="p-6 md:p-10 rounded-[1.5rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 group transition-all">
                   <div className="w-10 h-10 rounded-lg bg-white dark:bg-slate-800 flex items-center justify-center mb-4 text-blue-600">
                      {React.cloneElement(item.icon as React.ReactElement<any>, { size: 20 })}
                   </div>
                   <h4 className="font-black text-lg md:text-xl mb-2 tracking-tighter uppercase text-slate-900 dark:text-white">{item.title}</h4>
                   <p className="text-slate-500 dark:text-slate-400 text-xs md:text-base leading-snug">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-10 md:pt-20 border-t border-slate-100 dark:border-slate-900">
               <div className="max-w-xl">
                  <Shield size={20} className="text-blue-600/20 mb-4" />
                  <p className="text-sm md:text-lg font-bold text-slate-400 italic leading-snug mb-6">
                    "Great architecture is invisible; it simply enables everything else to work flawlessly."
                  </p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;