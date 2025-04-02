import React, { useState } from 'react';
import '../../assets/styles/AboutMe.css';
import Experience from './Experience';

const About = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  const toggleExperience = () => {
    setShowExperience((prev) => !prev);
  };

  return (
    <div id="intro" className="section">
      <div className="about-layout">
        <div className="about-right">
          {!showIntro && (
            <h1 className="reveal-heading" onClick={() => setShowIntro(true)}>
              About Me
            </h1>
          )}

          {showIntro && (
            <div className="intro-content fade-slide-in">
              <h1>Hi, I’m Kaarel Viilvere</h1>
              <p>
                A motivated Junior Software Developer based in Tartu, Estonia. I have a strong background
                in project management and technical problem-solving, now focused on building modern, efficient
                software solutions. I enjoy learning new technologies and developing creative, practical
                solutions.
              </p>
              <h2 className="experience-toggle" onClick={toggleExperience}>
                {showExperience ? 'Hide Experience' : 'Show Experience'}
              </h2>
              {showExperience && (
                <div className="intro-text-container fade-slide-in">
                  <Experience />
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;