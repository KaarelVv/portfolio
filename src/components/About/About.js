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
  <div className="experience-column fade-slide-in">
    <div className="intro-content">
      <h1>Hi, I’m Kaarel</h1>
      <h2>Junior Software Developer</h2>
      <p className="catchphrase">Not just another portfolio — a digital handshake.</p>
    </div>
  </div>
</div>
        </div>
      </div>
      <div className="experience-wrapper">
  <div className="profile-card">
    <p className="profile-description">
      Junior Software Developer with a knack for problem-solving<br />
      and a passion for building clean, modern solutions.
    </p>
    <p className="toggle-label">Toggle experience</p>
    <div
      className={`slider-container ${showExperience ? 'on' : ''}`}
      onClick={toggleExperience}
    >
      <div className={`slider ${showExperience ? 'on' : ''}`}>
        <span className="slider-text">{showExperience ? 'I' : 'O'}</span>
      </div>
    </div>
  </div>

  {(showExperience || (isFadingOut && isExperienceSelected)) && (
    <Experience fadeOut={isFadingOut} onAnimationEnd={handleFadeOutEnd} />
  )}
</div>

    </div>
  );
};

export default About;
