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
import { Page, Theme, ExperienceItem } from './types/index';
import { experiences as experiencesData } from './data/experiences';

const App: React.FC = () => {
  const [hasStarted, setHasStarted] = useState(false);
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);
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

  const toggleTheme = () => setTheme(prev => prev === 'light' ? 'dark' : 'light');
  
  const handleReplayIntro = () => {
    setHasStarted(false);
    setCurrentPage('home');
    window.scrollTo(0, 0);
  };

  const handleSetPage = (page: Page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const renderActivePage = () => {
    // True multi-page switching logic
    switch (currentPage) {
      case 'home':
        return <Home setPage={handleSetPage} onReplay={handleReplayIntro} />;
      case 'experience':
        return <Experience experiences={experiencesData} onSelect={(exp) => { setSelectedExp(exp); handleSetPage('exp-detail'); }} />;
      case 'exp-detail':
        return selectedExp ? (
          <ExperienceDetail 
            exp={selectedExp} 
            onBack={() => handleSetPage('experience')}
            onNext={() => {
              const idx = experiencesData.findIndex(e => e.id === selectedExp.id);
              setSelectedExp(experiencesData[(idx + 1) % experiencesData.length]);
            }}
            onPrev={() => {
              const idx = experiencesData.findIndex(e => e.id === selectedExp.id);
              setSelectedExp(experiencesData[(idx - 1 + experiencesData.length) % experiencesData.length]);
            }}
          />
        ) : <Experience experiences={experiencesData} onSelect={(exp) => { setSelectedExp(exp); handleSetPage('exp-detail'); }} />;
      case 'skills':
        return <Skills />;
      case 'about':
        return (
          <div className="flex flex-col">
            <About />
            <Education />
          </div>
        );
      case 'education':
        return <Education />;
      case 'contact':
        return <Contact />;
      default:
        return <Home setPage={handleSetPage} onReplay={handleReplayIntro} />;
    }
  };

  if (!hasStarted) {
    return <Preloader onStart={() => setHasStarted(true)} />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-x-hidden">
      <Navbar 
        currentPage={currentPage} 
        setPage={handleSetPage} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        onReplay={handleReplayIntro}
      />
      
      <main className="flex-grow pt-20 md:pt-24 animate-fade-in">
        {renderActivePage()}
      </main>

      <footer className="py-10 border-t border-slate-100 dark:border-slate-900 bg-white dark:bg-slate-950 flex justify-center items-center">
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
          © 2025 MUHAMMAD QASIM ALI TAREEN
        </span>
      </footer>
    </div>
  );
};

export default App;