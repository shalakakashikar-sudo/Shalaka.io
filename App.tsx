
import React, { useState, useMemo } from 'react';
import ProjectCard from './components/ProjectCard.tsx';
import { ACADEMIC_APPS } from './constants.tsx';
import { Category } from './types.ts';

const App: React.FC = () => {
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredApps = useMemo(() => {
    return ACADEMIC_APPS.filter(app => {
      const matchesFilter = filter === 'All' || app.category === filter;
      const matchesSearch = app.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            app.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            app.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchTerm]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-pink-100 selection:text-pink-900">
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[50%] h-[50%] bg-pink-50 rounded-full blur-[120px] opacity-70"></div>
        <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[50%] bg-orange-50 rounded-full blur-[120px] opacity-70"></div>
      </div>

      <header className="sticky top-0 z-40 glass border-b border-pink-100/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl shadow-pink-200">S.</div>
            <span className="font-extrabold text-slate-800 hidden sm:block text-lg">Shalaka.io</span>
          </div>
          <nav className="hidden md:flex items-center gap-10">
            {['Portfolio', 'Applications', 'About'].map(item => (
              <a key={item} href={item === 'Applications' ? '#apps' : '#'} className="text-sm font-bold text-slate-500 hover:text-pink-500 transition-colors tracking-wide uppercase">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <button className="px-6 py-2.5 rounded-2xl bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-bold hover:shadow-xl hover:shadow-pink-200 transition-all active:scale-95">
              Contact
            </button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white shadow-xl shadow-pink-50 border border-pink-50 text-[10px] font-black text-pink-500 mb-10 tracking-[0.2em] uppercase animate-bounce-slow">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            Educational Tools Portfolio
          </div>
          <h1 className="text-6xl sm:text-8xl font-black text-slate-900 serif leading-[1.1] mb-8">
            Redefining the <br/><span className="italic text-gradient">Digital Classroom.</span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-600 leading-relaxed mb-14 max-w-3xl mx-auto font-medium">
            Master grammar, unlock literature, and dominate exams with <span className="text-gradient font-bold underline decoration-pink-200 decoration-8 underline-offset-8">Shalaka.io’s</span> elite suite of academic tools.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#apps" className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold shadow-2xl hover:bg-pink-600 transition-all transform hover:scale-105 active:scale-95">
              View All Apps
            </a>
            <button className="px-8 py-4 bg-white text-slate-800 border border-pink-100 rounded-2xl font-bold shadow-lg hover:shadow-pink-50 transition-all transform hover:scale-105 active:scale-95">
              Learn More
            </button>
          </div>
        </div>
      </section>

      <main id="apps" className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-16">
          <div className="flex flex-wrap items-center gap-3">
            {(['All', ...Object.values(Category)] as const).map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 rounded-2xl text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                  filter === cat 
                  ? 'bg-gradient-to-r from-pink-500 to-orange-500 text-white shadow-xl shadow-pink-200 scale-105' 
                  : 'bg-white text-slate-400 border border-pink-50 hover:border-pink-200 hover:text-pink-500'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full lg:w-96 group">
            <input 
              type="text"
              placeholder="Search academic tools..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-pink-50 rounded-2xl px-6 py-4 pl-14 text-sm font-medium focus:outline-none focus:ring-4 focus:ring-pink-500/10 focus:border-pink-500 transition-all shadow-lg shadow-pink-50/50"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-5 top-1/2 -translate-y-1/2 text-slate-300 group-focus-within:text-pink-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            {filteredApps.map(app => (
              <ProjectCard key={app.id} app={app} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-white rounded-[3rem] border border-pink-50 shadow-xl shadow-pink-50/20">
            <div className="text-7xl mb-6 grayscale opacity-50">🔎</div>
            <h3 className="text-3xl font-black text-slate-800 mb-4">No academic tools found</h3>
            <p className="text-slate-400 font-medium max-w-sm mx-auto">We couldn't find anything matching your search. Try a different keyword or category.</p>
            <button 
              onClick={() => {setFilter('All'); setSearchTerm('');}} 
              className="mt-10 px-8 py-3 bg-pink-50 text-pink-500 font-black text-xs uppercase tracking-widest rounded-xl hover:bg-pink-100 transition-all"
            >
              Show all tools
            </button>
          </div>
        )}
      </main>

      <footer className="bg-white border-t border-pink-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-2xl flex items-center justify-center text-white font-black text-xl shadow-xl shadow-pink-200">S.</div>
                <span className="font-black text-2xl text-slate-800">Shalaka.io</span>
              </div>
              <p className="text-slate-500 max-w-sm leading-relaxed mb-10 text-base font-medium">
                Pioneering educational excellence through technology. Empowering the next generation of linguists, writers, and scholars.
              </p>
              <div className="flex gap-6">
                {['LinkedIn', 'Twitter', 'GitHub', 'Email'].map(social => (
                  <a key={social} href="#" className="text-slate-400 hover:text-orange-500 transition-all text-xs font-black uppercase tracking-widest">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-black text-pink-500 mb-8 uppercase text-[10px] tracking-[0.2em]">Sitemap</h4>
              <ul className="space-y-5">
                {['Home', 'Apps', 'Research', 'Contact'].map(item => (
                   <li key={item}><a href="#" className="text-slate-500 hover:text-pink-500 font-bold text-sm transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-black text-orange-500 mb-8 uppercase text-[10px] tracking-[0.2em]">Disciplines</h4>
              <ul className="space-y-5">
                {Object.values(Category).map(cat => (
                  <li key={cat}>
                    <button 
                      onClick={() => setFilter(cat)} 
                      className="text-slate-500 hover:text-orange-500 font-bold text-sm transition-colors"
                    >
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-pink-50 flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-[10px] text-slate-300 font-black uppercase tracking-widest">
              © {new Date().getFullYear()} Shalaka.io. All rights reserved.
            </p>
            <p className="text-[10px] text-pink-400 font-black uppercase tracking-widest">
              Engineered for Innovation
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
