import React, { useState } from 'react';
import '../../assets/styles/components/intro.css';
import Experience from './Experience';

const About = () => {
  const [showExperience, setShowExperience] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const toggleExperience = () => {
    if (showExperience) {
      setIsFadingOut(true);
    } else {
      setShowExperience(true);
    }
  };

  const handleFadeOutEnd = () => {
    if (isFadingOut) {
      setShowExperience(false);
      setIsFadingOut(false);
    }
  };

  return (
    <div id="intro" className="section">
      <div className="about-layout">
        <div className="about-right">
          <div className="intro-content fade-slide-in">
            <h1>Hi, I’m Kaarel Viilvere</h1>
            <p>
              A motivated Junior Software Developer based in Tartu, Estonia. I have a strong background
              in project management and technical problem-solving, now focused on building modern, efficient
              software solutions. I enjoy learning new technologies and developing creative, practical
              solutions.
            </p>
          </div>
        </div>
      </div>

      <div className="experience-wrapper">
        <p>If you want to see my experience, click here:</p>
        <h2 className="experience-toggle" onClick={toggleExperience}>
          {showExperience ? 'Hide Experience' : 'Show Experience'}
        </h2>

        {(showExperience || isFadingOut) && (
          <Experience
            fadeOut={isFadingOut}
            onAnimationEnd={handleFadeOutEnd}
          />
        )}
      </div>
    </div>
  );
};

export default About;
