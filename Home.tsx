import React from 'react';
import { ArrowRight, Sparkles, MapPin, RefreshCcw } from 'lucide-react';
import { Page } from '../types/index';

interface HomeProps {
  setPage: (p: Page) => void;
  onReplay: () => void;
}

const Home: React.FC<HomeProps> = ({ setPage, onReplay }) => {
  const imageUrl = "https://drive.google.com/thumbnail?id=1NwWvMyeabKVH9POSfEokS46uGsarsMit&sz=w1000";

  return (
    <div className="min-h-[calc(100vh-100px)] flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-24 py-10 relative overflow-hidden">
      {/* Decorative Blobs */}
      <div className="absolute -top-[5%] -right-[5%] w-40 sm:w-[500px] h-40 sm:h-[500px] bg-blue-500/10 blur-[80px] rounded-full -z-10 animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 flex justify-center lg:justify-start animate-scale-in">
          <div className="relative group animate-float w-full max-w-[260px] sm:max-w-[320px] md:max-w-[420px]">
            <div className="relative aspect-[3/4] rounded-[2.5rem] md:rounded-[4rem] overflow-hidden border border-slate-200 dark:border-white/5 shadow-2xl bg-slate-100 dark:bg-slate-900 transition-all duration-700">
              <img 
                src={imageUrl} 
                alt="Muhammad Qasim Ali Tareen" 
                className="w-full h-full object-cover object-top"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 md:bottom-8 md:left-8 md:right-8">
                 <div className="glass p-3 md:p-6 rounded-[1.5rem] md:rounded-[2rem] border-white/10 backdrop-blur-2xl shadow-2xl">
                    <div className="flex items-center gap-1.5 mb-1">
                      <Sparkles size={10} className="text-blue-400" />
                      <span className="text-[7px] md:text-[8px] font-black text-blue-400 uppercase tracking-[0.3em]">Architect Identity</span>
                    </div>
                    <p className="text-white text-sm md:text-xl font-black tracking-tight leading-none uppercase">
                      Qasim Tareen
                      <span className="block text-slate-400 text-[10px] md:text-sm mt-1 normal-case font-medium">Software Architect</span>
                    </p>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 space-y-6 md:space-y-8 stagger-reveal text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-2 px-3 py-1 bg-slate-100 dark:bg-slate-900 rounded-full w-fit mx-auto lg:mx-0">
             <MapPin size={10} className="text-blue-600" />
             <span className="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 dark:text-blue-400">
                Lahore, PK — COMSATS
             </span>
          </div>
          
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase text-slate-900 dark:text-white">
            Qasim <br/><span className="text-blue-600 italic">Tareen</span>
          </h1>
          
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-slate-500 dark:text-slate-400 font-medium leading-snug tracking-tight max-w-lg mx-auto lg:mx-0 px-4 lg:px-0">
            Architecting scalable digital systems through technical logic and leadership.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 items-center justify-center lg:justify-start pt-4 px-4 sm:px-0">
            <button 
              onClick={() => setPage('experience')}
              className="group flex items-center gap-4 text-[10px] sm:text-xs font-black uppercase tracking-widest text-slate-900 dark:text-white w-full sm:w-auto justify-center"
            >
              The Work
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center md:group-hover:bg-blue-600 md:group-hover:border-blue-600 md:group-hover:text-white transition-all duration-300 shadow-lg">
                <ArrowRight size={18} />
              </div>
            </button>
            <button 
              onClick={onReplay}
              className="group text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-blue-600 transition-all flex items-center gap-2"
            >
              <RefreshCcw size={14} className="group-hover:rotate-180 transition-transform duration-500" />
              Replay Journey
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;