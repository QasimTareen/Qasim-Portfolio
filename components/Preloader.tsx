import React, { useState } from 'react';
import { Play, Sparkles } from 'lucide-react';

interface PreloaderProps {
  onStart: () => void;
}

const Preloader: React.FC<PreloaderProps> = ({ onStart }) => {
  const [isReady, setIsReady] = useState(false);

  const handleBegin = () => {
    setIsReady(true);
    setTimeout(onStart, 1200);
  };

  return (
    <div className="fixed inset-0 z-[100] overflow-hidden flex flex-col bg-slate-950">
      {/* Top Panel */}
      <div className={`absolute top-0 left-0 w-full h-1/2 bg-[#0078D4] transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] z-10 ${isReady ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Bottom Panel */}
      <div className={`absolute bottom-0 left-0 w-full h-1/2 bg-white transition-transform duration-[1200ms] ease-[cubic-bezier(0.85,0,0.15,1)] z-10 ${isReady ? 'translate-y-full' : 'translate-y-0'}`}></div>

      {/* Content */}
      <div className={`relative flex-grow flex flex-col z-20 transition-all duration-700 ${isReady ? 'opacity-0 scale-95' : 'opacity-100'}`}>
        <div className="h-1/2 w-full flex flex-col items-center justify-end pb-4 px-6 text-center">
          <div className="mb-6 md:mb-10 animate-fade-in">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 backdrop-blur-md">
                <Sparkles size={8} className="text-yellow-400" />
                <span className="text-[7px] md:text-[9px] font-black uppercase tracking-[0.3em] text-white">Software Architect</span>
             </div>
          </div>
          <h2 className="text-[10vw] sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-white leading-none">WANT TO SEE</h2>
        </div>

        <div className="h-1/2 w-full flex flex-col items-center justify-start pt-4 px-6 text-center">
          <h2 className="text-[10vw] sm:text-5xl md:text-7xl font-black uppercase tracking-tight text-slate-900 leading-none mb-10">
            <span className="text-[#0078D4] italic">SOMETHING</span> COOL?
          </h2>
          <button 
            onClick={handleBegin}
            className="group relative px-8 py-4 rounded-full bg-slate-950 overflow-hidden shadow-2xl transition-all active:scale-95"
          >
            <span className="relative flex items-center gap-3 text-[9px] font-black uppercase tracking-[0.3em] text-white">
              <Play size={12} className="fill-white" /> Launch Experience
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preloader;