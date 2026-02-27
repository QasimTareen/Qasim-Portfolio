import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
      {title}
    </h2>
    {subtitle && (
      <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
        {subtitle}
      </p>
    )}
    <div className={`h-1.5 w-12 bg-blue-600 rounded-full mt-6 ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);

export default SectionTitle;