
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('shalakakashikar@gmail.com');
    alert('Email address copied to clipboard!');
  };

  return (
    <section id="contact" className="py-32 px-4 bg-slate-50/30 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xl shadow-pink-50 border border-pink-50 text-[10px] font-black text-pink-500 mb-8 tracking-[0.2em] uppercase">
          Say Hello
        </div>
        <h2 className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 leading-tight serif">
          Start a <span className="italic text-gradient">Conversation.</span>
        </h2>
        <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
          Have a question about a tool or want to share some feedback? I'd love to hear from you directly via email.
        </p>
        
        <div className="bg-white rounded-[3.5rem] p-8 sm:p-16 border border-pink-50 shadow-[0_32px_64px_-16px_rgba(244,114,182,0.15)] inline-block w-full max-w-2xl">
          <div className="flex flex-col items-center gap-8">
            <div className="w-20 h-20 bg-pink-50 rounded-3xl flex items-center justify-center shadow-xl shadow-pink-100/50 border border-pink-50">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            
            <div className="space-y-2">
              <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Direct Email</span>
              <a 
                href="mailto:shalakakashikar@gmail.com" 
                className="text-2xl sm:text-4xl font-black text-slate-800 hover:text-pink-500 transition-colors break-all"
              >
                shalakakashikar@gmail.com
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:shalakakashikar@gmail.com"
                className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-slate-200 hover:scale-[1.05] active:scale-[0.95] transition-all"
              >
                Send Email
              </a>
              <button 
                onClick={copyEmail}
                className="bg-white text-slate-900 border border-slate-200 px-8 py-4 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-xl shadow-slate-100 hover:bg-slate-50 active:scale-[0.95] transition-all"
              >
                Copy Address
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
