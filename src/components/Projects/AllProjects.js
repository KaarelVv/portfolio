import React, { useState, useEffect } from 'react';
import '../../assets/styles/components/projects.css';
import { projects } from '../../data/Projects'; // Import the projects JSON

const AllProjects = ({ onProjectClick, onBackClick, isProjectSelected }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  // Removed unused isIframeLoaded state

  useEffect(() => {
    if (selectedProject) {
      // Removed unused isIframeLoaded logic
    }
  }, [selectedProject]);

  const handleProjectClick = (projectUrl) => {
    setSelectedProject(projectUrl); // Set the selected project URL
    onProjectClick(); // Trigger the parent callback

  };
  const handleBackClick = () => {
    setSelectedProject(null); // Reset the selected project
    onBackClick(); // Trigger the parent callback
  };

  return (
    <div id="projects" className="section">
     
        {/* Sidebar containing both title and list */}
        <div className={`project-sidebar ${isProjectSelected ? 'hidden' : ''}`}>
          <h2 className="project-title">All Projects</h2>
          <ul className="project-list">
            {projects.map((project) => (
              <li key={project.id} onClick={() => handleProjectClick(project.url)}>
                {project.title}
              </li>
            ))}
          </ul>
        </div>
        {/*  */}
        <div className={`iframe-container ${isProjectSelected ? 'visible' : 'hidden'}`}>
          {selectedProject && (
            <iframe
              src={selectedProject}
              title="Project Showcase"
              loading="lazy"
              // Removed unused onLoad logic
            ></iframe>
          )}
          {isProjectSelected && (
            <button
              onClick={handleBackClick} // Use the updated handler
              className="back-button"
            >
              Back to list
            </button>
          )}
        </div>
        {/* Back Button */}

     
    </div>
  );
};

export default AllProjects;
