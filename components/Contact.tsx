import React from 'react';
import AnimatedSection from './AnimatedSection';
import { GitHubIcon, LinkedInIcon, MailIcon } from './icons/SocialIcons';

const socialLinks = [
  { name: 'GitHub', icon: <GitHubIcon />, url: '#' },
  { name: 'LinkedIn', icon: <LinkedInIcon />, url: '#' },
  { name: 'Email', icon: <MailIcon />, url: 'mailto:johndoe@example.com' },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out!
            </p>
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-all duration-300 transform hover:scale-125"
                  aria-label={link.name}
                >
                  <div className="w-8 h-8">{link.icon}</div>
                </a>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Contact;