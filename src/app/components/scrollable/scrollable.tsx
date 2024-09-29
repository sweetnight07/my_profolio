'use client';

import React, { useRef, useState, useEffect } from 'react';
import './Scrollable.css';

const Scrollable: React.FC = () => {
  const sections = [
    { content: "Hi, I'm John. Welcome to my portfolio!" },
    { content: 'I am currently a senior majoring in Computer Science at Brown University.' },
    { content: 'I am interested in...' } ,
    { content: 'data science' },
    { content: 'machine learning' },
    { content: 'algorithms' },
  ];

  const [currentSection, setCurrentSection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Switch to the next section every 3 seconds
  useEffect(() => {
    const autoScroll = setInterval(() => {
      setCurrentSection((prevSection) => (prevSection + 1) % sections.length);
    }, 3000); // Change section every 3 seconds

    return () => clearInterval(autoScroll);
  }, [sections.length]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: currentSection * containerRef.current.clientHeight,
        behavior: 'smooth'
      });
    }
  }, [currentSection]);

  return (
    <div 
      ref={containerRef}
      className="scrollable-container"
    >
      <div className="scrollable-content">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`section ${index === currentSection ? 'active' : ''}`}
          >
            <h2>{section.content}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Scrollable;
