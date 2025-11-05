import React from 'react';
import type { Skill } from '../types';
import AnimatedSection from './AnimatedSection';
import { 
  ReactIcon, 
  JavaScriptIcon, 
  HtmlIcon, 
  CssIcon, 
  TailwindCssIcon, 
  BootstrapIcon, 
  MongoDbIcon, 
  PostgreSqlIcon, 
  GoIcon, 
  CppIcon 
} from './icons/TechIcons';

const skills: Skill[] = [
  { name: 'React', icon: <ReactIcon /> },
  { name: 'JavaScript', icon: <JavaScriptIcon /> },
  { name: 'HTML', icon: <HtmlIcon /> },
  { name: 'CSS', icon: <CssIcon /> },
  { name: 'Tailwind CSS', icon: <TailwindCssIcon /> },
  { name: 'Bootstrap', icon: <BootstrapIcon /> },
  { name: 'MongoDB', icon: <MongoDbIcon /> },
  { name: 'PostgreSQL', icon: <PostgreSqlIcon /> },
  { name: 'Go', icon: <GoIcon /> },
  { name: 'C++', icon: <CppIcon /> },
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              My Tech Stack
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-12"></div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 max-w-5xl mx-auto">
              {skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-110 hover:bg-gray-700"
                >
                  <div className="w-16 h-16 mb-4">{skill.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-200">{skill.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Skills;