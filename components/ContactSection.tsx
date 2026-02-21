
import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://formspree.io/shalakakashikar@gmail.com', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const result = await response.json();
        console.error('Formspree error:', result);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 px-4 bg-slate-50/30 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/20 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xl shadow-pink-50 border border-pink-50 text-[10px] font-black text-pink-500 mb-8 tracking-[0.2em] uppercase">
              Feedback & Inquiries
            </div>
            <h2 className="text-5xl sm:text-7xl font-black text-slate-900 mb-8 leading-tight serif">
              Share your <span className="italic text-gradient">Thoughts.</span>
            </h2>
            <p className="text-lg text-slate-600 mb-12 max-w-md font-medium leading-relaxed">
              Have a question about a tool or want to share some feedback? I'd love to hear from you.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-5 group">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl shadow-pink-100/50 border border-pink-50 group-hover:scale-110 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-1">Direct Email</span>
                  <a href="mailto:shalakakashikar@gmail.com" className="text-xl font-black text-slate-800 hover:text-pink-500 transition-colors">
                    shalakakashikar@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-[3.5rem] p-8 sm:p-14 border border-pink-50 shadow-[0_32px_64px_-16px_rgba(244,114,182,0.15)] relative">
            {status === 'success' ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-emerald-50 rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-12 shadow-xl shadow-emerald-100">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4">Message Sent!</h3>
                <p className="text-slate-500 font-medium text-lg">Thank you for reaching out. I'll get back to you as soon as possible.</p>
                <p className="text-slate-400 text-sm mt-4 italic">Note: Please check your <b>Spam</b> folder if you don't see an email from Formspree.</p>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-10 text-pink-500 font-black text-xs uppercase tracking-[0.2em] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form name="contact-form" onSubmit={handleSubmit} className="space-y-8">
                {status === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-2xl text-xs font-bold uppercase tracking-widest border border-red-100">
                    Something went wrong. Please try again or email me directly.
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Full Name</label>
                    <input 
                      required
                      name="name"
                      type="text" 
                      placeholder="Jane Doe"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all placeholder:text-slate-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Email Address</label>
                    <input 
                      required
                      name="email"
                      type="email" 
                      placeholder="jane@example.com"
                      className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all placeholder:text-slate-300"
                    />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] ml-1">Your Message</label>
                  <textarea 
                    required
                    name="message"
                    rows={5}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-4.5 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all resize-none placeholder:text-slate-300"
                  ></textarea>
                </div>
                <button 
                  disabled={status === 'submitting'}
                  type="submit"
                  className="w-full bg-slate-900 text-white py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs shadow-2xl shadow-slate-200 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-3"
                >
                  {status === 'submitting' ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : 'Send Message'}
                </button>
                <p className="text-[9px] text-center text-slate-400 font-bold uppercase tracking-widest">
                  Securely delivered via Formspree
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
