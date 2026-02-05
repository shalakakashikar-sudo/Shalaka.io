
import React, { useState, useMemo } from 'react';
import ProjectCard from './components/ProjectCard.tsx';
import { ACADEMIC_APPS } from './constants.tsx';
import { Category } from './types.ts';

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category | 'All'>('All');

  const categories = ['All', ...Object.values(Category)];

  const filteredApps = useMemo(() => {
    return ACADEMIC_APPS.filter(app => {
      const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            app.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All' || app.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

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
            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center text-white font-black text-lg shadow-xl shadow-pink-200">S..</div>
            <div>
              <span className="font-extrabold text-slate-800 text-lg tracking-tight block leading-none">Shalaka.io</span>
              <span className="text-[9px] font-bold text-pink-500 uppercase tracking-[0.15em] block mt-1">By Shalaka Kashikar</span>
            </div>
          </div>
        </div>
      </header>

      <section className="pt-24 pb-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xl shadow-pink-50 border border-pink-50 text-[10px] font-black text-pink-500 mb-8 tracking-[0.2em] uppercase">
            Curated by Shalaka Kashikar
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-slate-900 serif leading-tight mb-8">
            The Digital <br/><span className="italic text-gradient">Linguistic Hub.</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
            An elite collection of interactive tools designed by Shalaka Kashikar to bridge the gap between complex grammar and engaging play.
          </p>
        </div>
      </section>

      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full">
        {/* Toolbar: Search & Filter */}
        <div className="flex flex-col space-y-8 mb-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat as any)}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-2xl text-xs font-black uppercase tracking-widest transition-all duration-300 border ${
                    selectedCategory === cat 
                      ? 'bg-slate-900 text-white border-slate-900 shadow-xl shadow-slate-200 scale-105' 
                      : 'bg-white text-slate-400 border-pink-50 hover:border-pink-200 hover:text-slate-600'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="relative w-full md:w-80">
              <input 
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-pink-50 rounded-2xl px-6 py-3.5 pl-12 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all shadow-lg shadow-pink-50/50"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-5 top-1/2 -translate-y-1/2 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredApps.map(app => (
              <ProjectCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="py-24 text-center bg-white rounded-[3rem] border border-pink-50 shadow-xl shadow-pink-50/20 max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-pink-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
            </div>
            <h3 className="text-2xl font-black text-slate-800 mb-2">No tools match your criteria</h3>
            <p className="text-slate-400 font-medium">Try adjusting your filters or search term.</p>
            <button 
              onClick={() => {setSearchTerm(''); setSelectedCategory('All');}}
              className="mt-8 text-pink-500 font-black text-xs uppercase tracking-widest hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-pink-50 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl shadow-slate-200">S.K.</div>
                    <div>
                      <span className="font-black text-2xl text-slate-800 tracking-tighter block leading-none">Shalaka Kashikar</span>
                      <span className="text-[10px] font-bold text-pink-400 uppercase tracking-widest block mt-1">Creator & Developer</span>
                    </div>
                </div>
            </div>
            <div className="text-center md:text-left pt-10 border-t border-pink-50 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-[0.3em]">
                  © {new Date().getFullYear()} Shalaka.io • Developed and Designed by Shalaka Kashikar
                </p>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
