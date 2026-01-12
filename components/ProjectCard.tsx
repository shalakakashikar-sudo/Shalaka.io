
import React from 'react';
import { AcademicApp, Category } from '../types.ts';

interface ProjectCardProps {
  app: AcademicApp;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ app }) => {
  const getCategoryColor = (cat: Category) => {
    switch (cat) {
      case Category.APPS: return 'bg-pink-50 text-pink-600 border-pink-100';
      case Category.STD_9:
      case Category.STD_10:
      case Category.STD_11:
      case Category.STD_12: return 'bg-indigo-50 text-indigo-600 border-indigo-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
    }
  };

  const isResource = app.category !== Category.APPS;

  return (
    <div className="group relative bg-white rounded-3xl p-7 transition-all duration-500 border border-pink-50 flex flex-col h-full transform hover:-translate-y-2 card-shadow-hover">
      <div className="flex items-center justify-between mb-5">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-sm group-hover:scale-110 transition-transform duration-300 ${isResource ? 'bg-indigo-50' : 'bg-gradient-to-br from-pink-50 to-orange-50'}`}>
          {app.icon}
        </div>
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${getCategoryColor(app.category)}`}>
          {app.category}
        </span>
      </div>
      
      <h3 className="text-2xl font-bold mb-3 transition-all duration-300">
        <span className={isResource ? 'text-indigo-600' : 'text-gradient'}>{app.title}</span>
      </h3>
      
      <div className="flex-grow space-y-4">
        <p className="text-slate-600 text-sm leading-relaxed">
          {app.description}
        </p>
      </div>

      {app.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 my-6">
          {app.tags.map(tag => (
            <span key={tag} className={`text-[10px] uppercase tracking-wider font-bold ${isResource ? 'text-indigo-400' : 'text-orange-400/80'}`}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className={app.tags.length === 0 ? "mt-8" : ""}>
        <a 
          href={app.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full inline-flex items-center justify-center px-4 py-3.5 text-white text-sm font-bold rounded-2xl transition-all shadow-lg active:scale-95 ${isResource ? 'bg-indigo-600 hover:bg-indigo-700 shadow-indigo-100' : 'bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 shadow-pink-200'}`}
        >
          {isResource ? 'View Resource' : 'Explore App'}
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d={isResource ? "M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h7a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2z" : "M14 5l7 7m0 0l-7 7m7-7H3"} />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
