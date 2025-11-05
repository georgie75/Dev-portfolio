import React from 'react';
import type { Project } from '../types';
import { GitHubIcon } from './icons/SocialIcons';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ExternalLinkIcon: React.FC<{className?: string}> = ({className}) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
    </svg>
);


const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isReversed = index % 2 !== 0;

  return (
    <article className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
      {/* Image Section */}
      <div className={`group relative rounded-lg overflow-hidden md:col-span-3 ${isReversed ? 'md:order-last' : ''}`}>
        <a href={project.liveUrl || project.githubUrl} target="_blank" rel="noopener noreferrer">
          <img 
            src={project.imageUrl} 
            alt={project.title} 
            className="w-full h-auto object-cover aspect-video rounded-lg transform transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLinkIcon className="w-12 h-12 text-white" />
          </div>
        </a>
      </div>

      {/* Content Section */}
      <div className={`md:col-span-2 ${isReversed ? 'md:text-left' : 'md:text-right'}`}>
        <p className="text-sm font-semibold text-cyan-400 mb-2">Featured Project</p>
        <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{project.title}</h3>
        <div className={`p-6 rounded-lg bg-gray-800 shadow-lg ${isReversed ? 'text-left' : 'text-right'}`}>
          <p className="text-gray-300 leading-relaxed">{project.description}</p>
        </div>
        <div className={`flex flex-wrap gap-2 my-4 ${isReversed ? 'justify-start' : 'justify-end'}`}>
          {project.tags.map((tag) => (
            <span key={tag} className="text-gray-400 text-sm font-medium">
              {tag}
            </span>
          ))}
        </div>
        <div className={`flex items-center gap-4 ${isReversed ? 'justify-start' : 'justify-end'}`}>
           {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="GitHub repository"
            >
              <GitHubIcon className="w-6 h-6" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors duration-300"
              aria-label="Live demo"
            >
              <ExternalLinkIcon className="w-6 h-6" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
