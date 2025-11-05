import React, { useState, useEffect } from 'react';

const TYPING_TEXTS = ['Web Developer.', 'App Developer.', 'Full-Stack Aspirant.'];
const TYPING_SPEED = 100;
const DELETING_SPEED = 50;
const DELAY = 2000;

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % TYPING_TEXTS.length;
      const fullText = TYPING_TEXTS[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), DELAY);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };
    
    const typingTimeout = setTimeout(
      handleType,
      isDeleting ? DELETING_SPEED : TYPING_SPEED
    );

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, loopNum]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase text-gray-100">
          John Doe
        </h1>
        <p className="mt-4 text-xl md:text-3xl font-light text-gray-300">
          I'm a <span className="text-cyan-400 font-medium">{text}</span>
          <span className="animate-ping">|</span>
        </p>
        <div className="mt-8">
          <a
            href="#projects"
            className="inline-block bg-cyan-500 text-white font-bold py-3 px-8 rounded-full hover:bg-cyan-600 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;