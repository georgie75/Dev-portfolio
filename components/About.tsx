
import React from 'react';
import AnimatedSection from './AnimatedSection';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About Me
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm a passionate developer with a knack for creating engaging and user-friendly web and mobile applications. With a Bachelor's degree in Information Technology, I've built a solid foundation in software development principles and practices.
            </p>
            <p className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed">
              My goal is to evolve into a full-stack developer, mastering both front-end and back-end technologies to build seamless, end-to-end digital experiences. I am constantly learning and exploring new tools to bring innovative ideas to life.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default About;
