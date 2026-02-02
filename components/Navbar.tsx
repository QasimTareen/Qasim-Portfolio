import React, { useState } from 'react';
import { Sun, Moon, Menu, X, RefreshCcw, Home, Briefcase, Code, User, Send, Sparkles, ChevronRight } from 'lucide-react';
import { Page } from '../types/index';

interface NavbarProps {
  currentPage: Page;
  setPage: (p: Page) => void;
  theme: string;
  toggleTheme: () => void;
  onReplay: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage, theme, toggleTheme, onReplay }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navItems: { id: Page; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Home size={18} /> },
    { id: 'experience', label: 'Experience', icon: <Briefcase size={18} /> },
    { id: 'skills', label: 'Skills', icon: <Code size={18} /> },
    { id: 'about', label: 'About', icon: <User size={18} /> },
    { id: 'contact', label: 'Contact', icon: <Send size={18} /> },
  ];

  const handleNavigate = (page: Page) => {
    setPage(page);
    setIsSidebarOpen(false);
  };

  const isItemActive = (id: Page) => {
    if (currentPage === id) return true;
    if (currentPage === 'exp-detail' && id === 'experience') return true;
    if (currentPage === 'education' && id === 'about') return true;
    return false;
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] py-4 md:py-6 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center glass rounded-full py-2 px-6 shadow-2xl border-white/5 transition-all duration-500">
          <button 
            onClick={() => handleNavigate('home')} 
            className="text-[10px] md:text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 group pointer-events-auto"
          >
            Qasim <span className="w-1.5 h-1.5 rounded-full bg-blue-600 group-hover:scale-[2] transition-transform"></span> Tareen
          </button>
          
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.filter(i => i.id !== 'home').map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`text-[9px] font-black uppercase tracking-widest transition-all hover:text-blue-600 relative py-1 ${
                  isItemActive(item.id) ? 'text-blue-600' : 'text-slate-400'
                }`}
              >
                {item.label}
                {isItemActive(item.id) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full animate-fade-in"></span>
                )}
              </button>
            ))}
          </div>
          
          <div className="flex items-center gap-2 md:gap-4 pointer-events-auto">
            <button 
              onClick={onReplay} 
              className="p-2 text-slate-500 hover:text-blue-600 transition-colors hidden sm:block"
              title="Replay Intro"
            >
              <RefreshCcw size={16} className="hover:rotate-180 transition-transform duration-700" />
            </button>

            <button onClick={toggleTheme} className="p-2 text-slate-500 hover:text-blue-600 transition-colors" aria-label="Toggle Theme">
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>
            
            <button 
              className="md:hidden p-2 text-slate-900 dark:text-white"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Optimized Sidebar Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-slate-950/60 backdrop-blur-md transition-opacity duration-500 md:hidden ${
          isSidebarOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsSidebarOpen(false)}
      >
        <div 
          className={`absolute top-0 right-0 w-[85%] max-w-[340px] h-full bg-white dark:bg-slate-950 shadow-[-20px_0_60px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-in-out p-8 flex flex-col ${
            isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center mb-12">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
                <Sparkles size={16} />
              </div>
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-900 dark:text-white">Arsenal Menu</span>
            </div>
            <button onClick={() => setIsSidebarOpen(false)} className="p-2 text-slate-400">
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigate(item.id)}
                className={`flex items-center justify-between p-4 rounded-2xl transition-all active:scale-95 border-2 ${
                  isItemActive(item.id) 
                  ? 'bg-blue-50 dark:bg-blue-900/20 border-blue-600/20 text-blue-600' 
                  : 'bg-slate-50 dark:bg-slate-900/50 border-transparent text-slate-400 dark:text-slate-500'
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className={`p-2 rounded-xl ${isItemActive(item.id) ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 shadow-sm'}`}>
                    {item.icon}
                  </span>
                  <span className="text-lg font-black uppercase tracking-tighter">{item.label}</span>
                </div>
                {isItemActive(item.id) && <ChevronRight size={18} />}
              </button>
            ))}
          </div>

          <div className="mt-auto space-y-4">
            <button 
              onClick={() => { setIsSidebarOpen(false); onReplay(); }}
              className="w-full flex items-center justify-center gap-3 p-4 rounded-2xl bg-slate-900 dark:bg-white text-[10px] font-black uppercase tracking-widest text-white dark:text-black shadow-xl"
            >
              <RefreshCcw size={16} /> Replay Intro
            </button>
            <div className="text-center py-4">
              <span className="text-[7px] font-black uppercase tracking-[0.4em] text-slate-400">
                MUHAMMAD QASIM ALI TAREEN
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;