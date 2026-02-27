import React from 'react';
import { ArrowLeft, ExternalLink, ChevronRight, ChevronLeft, LayoutGrid } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceDetailProps {
  exp: ExperienceItem;
  onBack: () => void;
  onNext: () => void;
  onPrev: () => void;
}

const ExperienceDetail: React.FC<ExperienceDetailProps> = ({ exp, onBack, onNext, onPrev }) => {
  const getBrandColors = () => {
    switch (exp.color) {
      case 'blue': return {
        primary: '#0078D4',
        bg: 'bg-[#0078D4]',
        text: 'text-[#0078D4]',
        button: 'bg-[#0078D4] hover:bg-[#004578]',
      };
      case 'purple': return {
        primary: '#7C3AED',
        bg: 'bg-[#7C3AED]',
        text: 'text-[#7C3AED]',
        button: 'bg-[#7C3AED] hover:bg-[#4c1d95]',
      };
      case 'google': return {
        primary: '#EA4335',
        bg: 'bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]',
        text: 'text-[#EA4335]',
        button: 'bg-slate-900 dark:bg-white text-white dark:text-slate-950',
      };
      default: return {
        primary: '#2563EB',
        bg: 'bg-blue-600',
        text: 'text-blue-600',
        button: 'bg-slate-900',
      };
    }
  };

  const colors = getBrandColors();

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950 transition-colors duration-500 animate-fade-in">
      {/* Brand Header */}
      <div className={`w-full py-16 md:py-32 px-6 ${colors.bg} relative overflow-hidden transition-all duration-700`}>
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <button 
            onClick={onBack} 
            className="flex items-center gap-2 text-sm font-normal uppercase tracking-widest text-white mb-10 transition-all hover:gap-4 group bg-white/10 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 w-fit"
          >
            <ArrowLeft size={14} /> 
            Back to Milestones
          </button>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start lg:items-center">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-[2.5rem] bg-white shadow-2xl flex items-center justify-center p-6 md:p-8 transform transition-transform duration-700 hover:rotate-6">
               <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
            </div>
            <div className="text-center md:text-left">
               <span className="text-white/70 text-sm font-normal uppercase tracking-[0.3em] mb-3 block">
                 {exp.period}
               </span>
               <h2 className="text-2xl md:text-3xl font-normal text-white tracking-tight uppercase leading-tight mb-2">
                 {exp.title}
               </h2>
               <p className="text-base md:text-lg font-normal text-white/70 uppercase tracking-[0.1em]">
                 {exp.company}
               </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-5xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          <div className="lg:col-span-7 space-y-16">
             <section className="animate-reveal">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-8 h-[2px] ${colors.bg}`}></div>
                  <h3 className={`text-sm font-normal uppercase tracking-[0.4em] ${colors.text}`}>Mission Overview</h3>
                </div>
                <p className="text-base md:text-lg font-normal text-slate-700 dark:text-slate-300 leading-relaxed">
                  {exp.longDesc}
                </p>
             </section>

             <section className="animate-reveal [animation-delay:200ms]">
                <div className="flex items-center gap-4 mb-8">
                  <div className={`w-8 h-[2px] ${colors.bg}`}></div>
                  <h3 className={`text-sm font-normal uppercase tracking-[0.4em] ${colors.text}`}>Core Contributions</h3>
                </div>
                <div className="grid gap-4">
                   {exp.items.map((item, i) => (
                     <div key={i} className="flex gap-5 items-start p-6 rounded-[1.5rem] md:rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all hover:translate-x-2 group">
                        <div className={`mt-1 w-6 h-6 rounded-lg flex-shrink-0 flex items-center justify-center text-white ${colors.bg} shadow-lg transition-transform group-hover:scale-110`}>
                           <ChevronRight size={14} />
                        </div>
                        <span className="text-sm md:text-base font-normal text-slate-700 dark:text-slate-300 uppercase leading-snug tracking-tight">{item}</span>
                     </div>
                   ))}
                </div>
             </section>
          </div>

          <div className="lg:col-span-5 space-y-8 animate-reveal [animation-delay:400ms]">
             <div className="p-10 rounded-[2.5rem] bg-slate-950 text-white shadow-2xl relative overflow-hidden group">
                <div className={`absolute -top-10 -right-10 w-40 h-40 ${colors.bg} blur-[80px] opacity-20 transition-opacity group-hover:opacity-40`}></div>
                <h3 className="text-sm font-normal text-slate-500 mb-8 uppercase tracking-[0.4em]">Technology Stack</h3>
                <div className="flex flex-wrap gap-2.5">
                   {exp.tech.map(t => (
                     <span key={t} className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-sm font-normal uppercase tracking-widest text-white/90 hover:bg-white/10 transition-colors">
                       {t}
                     </span>
                   ))}
                </div>
             </div>

             <div className="flex flex-col gap-4">
                {exp.website && (
                  <a 
                    href={exp.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`w-full py-6 rounded-[1.5rem] md:rounded-[2rem] font-normal text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-[1.02] active:scale-95 text-white ${colors.button}`}
                  >
                    <ExternalLink size={20} />
                    Official Website
                  </a>
                )}
                <a 
                 href={exp.link} 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className={`w-full py-6 rounded-[1.5rem] md:rounded-[2rem] font-normal text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all shadow-xl hover:scale-[1.02] active:scale-95 text-white ${colors.button}`}
                >
                  {exp.id === 'mlsa' ? <ExternalLink size={20} /> : <ExternalLink size={20} />}
                  {exp.id === 'mlsa' ? 'Website' : 'Official Page'}
                </a>

                <button 
                 onClick={onBack}
                 className="w-full py-6 rounded-[1.5rem] md:rounded-[2rem] font-normal text-sm uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all border-2 border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 text-slate-900 dark:text-white"
                >
                  <LayoutGrid size={20} />
                  Back to Milestones
                </button>
             </div>
          </div>

        </div>

        {/* Milestone Footer Navigation */}
        <div className="mt-32 pt-16 border-t border-slate-100 dark:border-slate-900 animate-reveal [animation-delay:600ms]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <button 
              onClick={onPrev}
              className="group flex flex-col items-center md:items-start gap-2 text-left"
            >
              <span className="text-sm font-normal uppercase tracking-[0.4em] text-slate-400 group-hover:text-blue-600 transition-colors">Previous Milestone</span>
              <div className="flex items-center gap-4 text-lg md:text-xl font-normal uppercase tracking-tight text-slate-900 dark:text-white">
                <ChevronLeft className="group-hover:-translate-x-2 transition-transform" />
                Navigate Back
              </div>
            </button>

            <div className="hidden md:block w-px h-16 bg-slate-100 dark:bg-slate-800"></div>

            <button 
              onClick={onNext}
              className="group flex flex-col items-center md:items-end gap-2 text-right"
            >
              <span className="text-sm font-normal uppercase tracking-[0.4em] text-slate-400 group-hover:text-blue-600 transition-colors">Next Milestone</span>
              <div className="flex items-center gap-4 text-lg md:text-xl font-normal uppercase tracking-tight text-slate-900 dark:text-white">
                Progress Forward
                <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
