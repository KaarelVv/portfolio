import React from 'react';
import '../../assets/styles/components/experience.css';

const skills = [
  'JavaScript & React',
  'Java & Spring',
  'Object-Oriented Programming',
  'Data Analysis & Workflow Planning',
  'Problem Solving & Project Planning',
];

const education = [
  'Diploma (Expected 02/2027) - Junior Software Developer, Tartu Vocational College',
  'Java From Scratch Certificate (2023) - Software Development Academy',
  'Spring & Hibernate Certificate (2022) - Aurora Development',
  'IT Project Management Certificate (2018) - BCS',
];

const experience = [
  'Project Manager - DIN HUSMONTÖÖR EESTI OÜ, Sweden (2020–2022)',
  'Production Engineer - SIGNAGE GARDEN OÜ, Tallinn (2016–2020)',
  'Roof Installer & Object Manager - LIIVIMAA KATUSEMEISTER OÜ, Tartu (2010–2015)',
];

const Experience = ({ fadeOut, onAnimationEnd }) => {
  return (
    <div
      className={`intro-text-container ${fadeOut ? 'fade-out' : 'fade-slide-in'}`}
      onAnimationEnd={onAnimationEnd}
    >
      <div className="experience-columns">
        <div className="experience-column">
          <h2 className="fade-in-up fade-delay-1">Skills & Knowledge</h2>
          <ul className="skills-list">
            {skills.map((item, i) => (
              <li key={i} className={`fade-in-up fade-delay-${i + 2}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="experience-column">
          <h2 className="fade-in-up fade-delay-1">Education</h2>
          <ul>
            {education.map((item, i) => (
              <li key={i} className={`fade-in-up fade-delay-${i + 2}`}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="experience-column">
          <h2 className="fade-in-up fade-delay-1">Experience</h2>
          <ul>
            {experience.map((item, i) => (
              <li key={i} className={`fade-in-up fade-delay-${i + 2}`}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
