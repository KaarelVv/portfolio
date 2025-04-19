import React, { useState } from 'react';
import '../../assets/styles/components/about.css';
import Experience from './Experience';

const About = ({ isExperienceSelected, setIsExperienceSelected }) => {
  const [showExperience, setShowExperience] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const toggleExperience = () => {
    if (showExperience) {
      setIsFadingOut(true);
      setIsExperienceSelected(false); // <- Tell layout to move background back
    } else {
      setShowExperience(true);
      setIsExperienceSelected(true); // <- Tell layout to move background
    }
  };

  const handleFadeOutEnd = () => {
    if (isFadingOut) {
      setShowExperience(false);
      setIsFadingOut(false);
    }
  };

  return (
    <div id="about" className="section">

      <div className="about-layout">
        <div className="about-wrapper">
          <div className="about-right">
            <div className="intro-content fade-slide-in">
              <h1>Hi, I’m Kaarel</h1>
              <h2>Junior Software Developer</h2>
              <p className="catchphrase">Not just another portfolio — a digital handshake.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="experience-wrapper">
        <p>
          Junior Software Developer with a knack for problem-solving<br></br> and a passion for building clean, modern solutions.
        </p>
        <p>If you want to see my experience, click here:</p>
        <h2 className="experience-toggle" onClick={toggleExperience}>
          {showExperience ? 'Hide Experience' : 'Show Experience'}
        </h2>

        {(showExperience || (isFadingOut && isExperienceSelected)) && (
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
