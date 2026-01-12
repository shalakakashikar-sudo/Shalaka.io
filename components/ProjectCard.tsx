
import React from 'react';
import { AcademicApp, Category } from '../types.ts';

interface ProjectCardProps {
  app: AcademicApp;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ app }) => {
  const getCategoryColor = (cat: Category) => {
    switch (cat) {
      case Category.GRAMMAR: return 'bg-pink-50 text-pink-600 border-pink-100';
      case Category.LITERATURE: return 'bg-orange-50 text-orange-600 border-orange-100';
      case Category.TESTING: return 'bg-rose-50 text-rose-600 border-rose-100';
      case Category.LANGUAGES: return 'bg-amber-50 text-amber-600 border-amber-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  return (
    <div className="group relative bg-white rounded-3xl p-7 transition-all duration-500 border border-pink-50 flex flex-col h-full transform hover:-translate-y-2 card-shadow-hover">
      <div className="flex items-center justify-between mb-5">
        <div className="w-14 h-14 bg-gradient-to-br from-pink-50 to-orange-50 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300">
          {app.icon}
        </div>
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryColor(app.category)}`}>
          {app.category}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 transition-all duration-300">
        <span className="text-gradient">{app.title}</span>
      </h3>
      
      <div className="flex-grow space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 my-6">
        {app.tags.map(tag => (
          <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-orange-400/80">
            #{tag}
          </span>
        ))}
      </div>

      <a 
        href={app.url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full inline-flex items-center justify-center px-4 py-3.5 bg-gradient-to-r from-pink-500 to-orange-500 text-white text-sm font-bold rounded-2xl hover:from-pink-600 hover:to-orange-600 transition-all shadow-lg shadow-pink-200 active:scale-95"
      >
        Explore App
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </div>
  );
};

export default ProjectCard;
