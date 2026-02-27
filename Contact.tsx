import React, { useState } from 'react';
import { Mail, Linkedin, Send, MessageCircle, Github, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '' });
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Valid email required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    const { name, email, message } = formData;
    const text = `*Inquiry from Portfolio*\n\n*Name:* ${name}\n*Email:* ${email}\n*Message:* ${message}`;
    window.open(`https://wa.me/923334093999?text=${encodeURIComponent(text)}`, '_blank');
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
  };

  return (
    <div className="min-h-screen py-20 md:py-48 px-4 sm:px-6 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-24">
          <span className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-400 mb-4 block text-center md:text-left">Inquiry</span>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-center md:text-left">
            Start A <br className="hidden md:block"/> <span className="text-blue-600 italic">Dialogue</span>
          </h2>
        </div>
        
        <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-start">
          {/* Sidebar Links */}
          <div className="lg:col-span-5 space-y-8 md:space-y-12">
            <p className="text-base sm:text-xl font-medium text-slate-500 dark:text-slate-400 leading-snug text-center md:text-left">
              Whether you have a specific project or just a technical question, feel free to reach out.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-1 gap-4 md:gap-6">
              {[
                { label: 'WhatsApp', icon: <MessageCircle size={18} />, color: 'emerald-500', href: 'https://wa.me/923334093999' },
                { label: 'Email', icon: <Mail size={18} />, color: 'blue-600', href: 'mailto:qk04504@gmail.com' },
                { label: 'LinkedIn', icon: <Linkedin size={18} />, color: 'blue-700', href: 'https://linkedin.com/in/muhammad-qasim-ali-tareen-6042b4288' },
                { label: 'GitHub', icon: <Github size={18} />, color: 'slate-900', href: 'https://github.com/QasimTareen' },
              ].map((link, idx) => (
                <a key={idx} href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 md:gap-6 text-[9px] sm:text-[11px] font-black uppercase tracking-[0.2em] group">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full border border-slate-200 dark:border-slate-800 flex items-center justify-center transition-all group-hover:scale-110`}>
                    {link.icon}
                  </div>
                  <span className="truncate">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSend} className="space-y-8 md:space-y-10">
               <div className="grid md:grid-cols-2 gap-8 md:gap-10">
                  <div className="relative">
                    <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Name</label>
                    <input 
                      type="text" 
                      placeholder="Your Name" 
                      value={formData.name}
                      onChange={e => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 text-lg font-black focus:outline-none focus:border-blue-600 transition-all" 
                    />
                    {errors.name && <span className="text-red-500 text-[8px] uppercase mt-1 font-bold">{errors.name}</span>}
                  </div>
                  <div className="relative">
                    <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Email</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com" 
                      value={formData.email}
                      onChange={e => setFormData({...formData, email: e.target.value})}
                      className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 text-lg font-black focus:outline-none focus:border-blue-600 transition-all" 
                    />
                    {errors.email && <span className="text-red-500 text-[8px] uppercase mt-1 font-bold">{errors.email}</span>}
                  </div>
               </div>
               
               <div className="relative">
                  <label className="text-[8px] font-black text-slate-400 uppercase tracking-widest mb-2 block">Project Details</label>
                  <textarea 
                    placeholder="Brief description..." 
                    rows={2} 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-transparent border-b-2 border-slate-200 dark:border-slate-800 py-3 text-lg font-black focus:outline-none focus:border-blue-600 transition-all resize-none"
                  ></textarea>
               </div>

               <button 
                 type="submit" 
                 disabled={isSent}
                 className="group flex items-center gap-4 sm:gap-6 text-[10px] font-black uppercase tracking-[0.4em] w-full sm:w-auto justify-center sm:justify-start"
               >
                 {isSent ? 'Sent!' : 'WhatsApp Me'}
                 <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black flex items-center justify-center group-hover:scale-110 shadow-xl transition-transform">
                   <Send size={20} className="sm:size-[24px]" />
                 </div>
               </button>
            </form>
          </div>
        </div>

        <div className="mt-20 sm:mt-48 pt-10 border-t border-slate-100 dark:border-slate-900 flex justify-center text-center">
           <span className="text-[7px] sm:text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">
             © 2025 MUHAMMAD QASIM ALI TAREEN
           </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;