import React from 'react';
import type { Project } from '../types';
import ProjectCard from './ProjectCard';
import AnimatedSection from './AnimatedSection';

const projects: Project[] = [
  {
    title: 'E-commerce Platform',
    description: 'A full-featured online store with product listings, cart functionality, and a secure checkout process. Built with a robust Go backend and a responsive React frontend.',
    tags: ['React', 'Go', 'PostgreSQL', 'Stripe API'],
    imageUrl: 'https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    title: 'Task Management App',
    description: 'A Trello-inspired productivity app for organizing tasks with drag-and-drop boards, due dates, and real-time collaboration features powered by Firebase.',
    tags: ['React', 'Tailwind CSS', 'Firebase', 'MongoDB'],
    imageUrl: 'https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    githubUrl: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A responsive dashboard for managing social media accounts. Features include post scheduling, engagement analytics, and secure authentication using JWT.',
    tags: ['React', 'Go', 'JWT', 'PostgreSQL', 'Chart.js'],
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    liveUrl: '#',
    githubUrl: '#',
  },
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto"></div>
          </div>
          <div className="flex flex-col gap-16 lg:gap-24">
            {projects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Projects;