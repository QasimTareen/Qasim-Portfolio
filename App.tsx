import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import ExperienceDetail from './components/ExperienceDetail';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import { ChevronUp } from 'lucide-react';
import { Page, Theme, ExperienceItem } from './types/index';
import { experiences as experiencesData } from './data/experiences';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    const saved = localStorage.getItem('theme');
    if (saved) return saved as Theme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledPastHero(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  const goBackToStart = () => setHasStarted(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSetPage = (page: Page) => {
    setCurrentPage(page);
    if (page !== 'exp-detail') {
      const element = document.getElementById(page);
      if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
  };

  const renderContent = () => {
    if (currentPage === 'exp-detail' && selectedExp) {
      return (
        <ExperienceDetail 
          exp={selectedExp} 
          onBack={() => {
            setCurrentPage('home');
            setTimeout(() => {
              const el = document.getElementById('experience');
              if (el) window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
            }, 100);
          }}
          onNext={() => {
            const idx = experiencesData.findIndex(e => e.id === selectedExp.id);
            setSelectedExp(experiencesData[(idx + 1) % experiencesData.length]);
            window.scrollTo(0,0);
          }}
          onPrev={() => {
            const idx = experiencesData.findIndex(e => e.id === selectedExp.id);
            setSelectedExp(experiencesData[(idx - 1 + experiencesData.length) % experiencesData.length]);
            window.scrollTo(0,0);
          }}
        />
      );
    }

    return (
      <div className="flex flex-col">
        <section id="home"><Home setPage={handleSetPage} /></section>
        <section id="experience"><Experience experiences={experiencesData} onSelect={(exp: ExperienceItem) => { setSelectedExp(exp); setCurrentPage('exp-detail'); window.scrollTo(0,0); }} /></section>
        <section id="skills" className="scroll-mt-24"><Skills /></section>
        <section id="about" className="scroll-mt-24"><About /></section>
        <section id="education" className="scroll-mt-24"><Education /></section>
        <section id="contact" className="scroll-mt-24"><Contact /></section>
      </div>
    );
  };

  if (!hasStarted) {
    return <Preloader onStart={() => setHasStarted(true)} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 animate-reveal">
      <Navbar 
        currentPage={currentPage} 
        setPage={handleSetPage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        goBackToStart={goBackToStart}
      />
      
      <main className="flex-grow">
        {renderContent()}
      </main>

      {currentPage !== 'exp-detail' && (
        <div className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[60] flex flex-col gap-3 transition-all duration-700 ${
          scrolledPastHero ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}>
          <button 
            onClick={scrollToTop}
            className="w-12 h-12 md:w-14 md:h-14 rounded-full glass border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-white dark:hover:bg-slate-800 transition-all active:scale-95"
            aria-label="Go Up"
          >
            <ChevronUp size={24} strokeWidth={2.5} />
          </button>
        </div>
      )}
    </div>
  );
};

export default App;