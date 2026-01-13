
import React, { useState, useMemo } from 'react';
import ProjectCard from './components/ProjectCard.tsx';
import AIAssistant from './components/AIAssistant.tsx';
import { ACADEMIC_APPS } from './constants.tsx';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = useMemo(() => {
    return ACADEMIC_APPS.filter(app => {
      const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            app.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesSearch;
    });
  }, [searchTerm]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-pink-100 selection:text-pink-900">
      {/* Dynamic Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-pink-50 rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-orange-50 rounded-full blur-[120px] opacity-70"></div>
      </div>

      <header className="sticky top-0 z-40 glass border-b border-pink-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl shadow-pink-200">S.</div>
            <span className="font-extrabold text-slate-800 text-lg">Shalaka.io</span>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xl shadow-pink-50 border border-pink-50 text-[10px] font-black text-pink-500 mb-10 tracking-[0.2em] uppercase">
            Curated Academic Excellence
          </div>
          <h1 className="text-6xl sm:text-8xl font-black text-slate-900 serif leading-[1.1] mb-8">
            The Digital <br/><span className="italic text-gradient">Study Hub.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-8 max-w-3xl mx-auto font-medium">
            Access elite grammar tools, linguistic games, and educational apps designed by <span className="text-gradient font-bold">Shalaka Kashikar</span>.
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <h2 className="text-2xl font-bold text-slate-800">Explore Interactive Apps</h2>
          
          <div className="relative w-full md:w-96">
            <input 
              type="text"
              placeholder="Search apps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-pink-50 rounded-2xl px-6 py-4 pl-14 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all shadow-lg shadow-pink-50/50"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredApps.map(app => (
              <ProjectCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-white rounded-[3rem] border border-pink-50 shadow-xl shadow-pink-50/20">
            <h3 className="text-3xl font-black text-slate-800 mb-4">No apps found</h3>
            <p className="text-slate-400 font-medium">Try a different search term.</p>
          </div>
        )}
      </main>

      {/* Adding the AI Assistant to the application */}
      <AIAssistant />

      <footer className="bg-white border-t border-pink-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white font-black text-lg">S.</div>
                <span className="font-black text-xl text-slate-800 tracking-tighter">Shalaka.io</span>
            </div>
            <p className="text-[10px] text-slate-300 font-black uppercase tracking-widest">
              © {new Date().getFullYear()} Shalaka.io • Engineered for Innovation
            </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
