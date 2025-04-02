import React from 'react';
import '../../assets/styles/Experience.css';
import '../../assets/styles/animations.css';

const Experience = () => {
  return (
    <div className="intro-text">
      <h2 className="fade-in-up fade-delay-1">Skills & Knowledge</h2>
      <ul className="skills-list">
        <li className="fade-in-up fade-delay-2">JavaScript & React</li>
        <li className="fade-in-up fade-delay-3">Java & Spring</li>
        <li className="fade-in-up fade-delay-4">Object-Oriented Programming</li>
        <li className="fade-in-up fade-delay-5">Data Analysis & Workflow Planning</li>
        <li className="fade-in-up fade-delay-5">Problem Solving & Project Planning</li>
      </ul>
      <h2 className="fade-in-up fade-delay-1">Education</h2>
      <ul>
        <li className="fade-in-up fade-delay-2">Diploma (Expected 02/2027) - Junior Software Developer, Tartu Vocational College</li>
        <li className="fade-in-up fade-delay-3">Java From Scratch Certificate (2023) - Software Development Academy</li>
        <li className="fade-in-up fade-delay-4">Spring & Hibernate Certificate (2022) - Aurora Development</li>
        <li className="fade-in-up fade-delay-5">IT Project Management Certificate (2018) - BCS</li>
      </ul>
      <h2 className="fade-in-up fade-delay-1">Experience</h2>
      <ul>
        <li className="fade-in-up fade-delay-2">Project Manager - DIN HUSMONTÖÖR EESTI OÜ, Sweden (2020–2022)</li>
        <li className="fade-in-up fade-delay-3">Production Engineer - SIGNAGE GARDEN OÜ, Tallinn (2016–2020)</li>
        <li className="fade-in-up fade-delay-4">Roof Installer & Object Manager - LIIVIMAA KATUSEMEISTER OÜ, Tartu (2010–2015)</li>
      </ul>
    </div>
  );
};

export default Experience;
