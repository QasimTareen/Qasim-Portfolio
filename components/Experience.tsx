import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ExperienceItem } from '../types';

interface ExperienceProps {
  experiences: ExperienceItem[];
  onSelect: (e: ExperienceItem) => void;
}

const Experience: React.FC<ExperienceProps> = ({ experiences, onSelect }) => {
  const getBrandTextClass = (color: string) => {
    switch (color) {
      case 'blue': return 'group-hover:text-[#0078D4]';
      case 'purple': return 'group-hover:text-[#7C3AED]';
      case 'google': return 'group-hover:text-[#EA4335]';
      default: return 'group-hover:text-blue-600';
    }
  };

  const getBrandBorderClass = (color: string) => {
    switch (color) {
      case 'blue': return 'group-hover:border-[#0078D4] group-hover:text-[#0078D4]';
      case 'purple': return 'group-hover:border-[#7C3AED] group-hover:text-[#7C3AED]';
      case 'google': return 'group-hover:border-[#EA4335] group-hover:text-[#EA4335]';
      default: return 'group-hover:border-blue-600 group-hover:text-blue-600';
    }
  };

  const getAccentBarColor = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-[#0078D4]';
      case 'purple': return 'bg-[#7C3AED]';
      case 'google': return 'bg-[#4285F4]';
      default: return 'bg-slate-300';
    }
  };

  return (
    <div className="min-h-screen py-20 md:py-32 px-4 sm:px-6 bg-white dark:bg-slate-950 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 md:mb-24 text-left">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 dark:text-blue-400 mb-2 block">
            Strategic Path
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 dark:text-white">
            Professional <span className="text-blue-600 italic">Milestones</span>
          </h2>
          <div className="h-1.5 w-12 bg-blue-600 rounded-full mt-4"></div>
        </div>

        <div className="relative border-t border-slate-100 dark:border-slate-800">
          {experiences.map((exp) => (
            <div 
              key={exp.id} 
              onClick={() => onSelect(exp)}
              className="group relative py-10 md:py-16 border-b border-slate-100 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-all duration-500 hover:bg-slate-50 dark:hover:bg-slate-900/50"
            >
              <div className="flex items-center gap-4 md:gap-6 relative z-10">
                <div className={`w-1 h-10 md:h-12 rounded-full transition-all duration-500 group-hover:scale-y-125 ${getAccentBarColor(exp.color)}`}></div>

                <div className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl md:rounded-2xl bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-2 md:p-4 flex items-center justify-center shadow-sm transition-all duration-500 group-hover:scale-105 group-hover:shadow-xl">
                  <img src={exp.logo} alt={exp.company} className="w-full h-full object-contain" />
                </div>

                <div className="flex flex-col min-w-0">
                  <h3 className={`text-lg sm:text-2xl md:text-3xl font-black uppercase tracking-tight transition-colors duration-500 text-slate-900 dark:text-white leading-none mb-1 sm:mb-2 truncate ${getBrandTextClass(exp.color)}`}>
                    {exp.company}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                    <span className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
                      {exp.title}
                    </span>
                    <span className="hidden sm:block text-slate-200">•</span>
                    <span className="text-[8px] sm:text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400">
                      {exp.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-6 md:mt-0 flex items-center justify-between md:justify-end gap-6 md:gap-10 relative z-10">
                <p className="hidden lg:block text-slate-400 text-sm max-w-[240px] text-right leading-relaxed">
                  {exp.desc}
                </p>
                <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-all duration-500 group-hover:rotate-45 group-hover:scale-110 ${getBrandBorderClass(exp.color)} shadow-lg`}>
                  <ArrowUpRight size={20} className="md:size-[28px]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;