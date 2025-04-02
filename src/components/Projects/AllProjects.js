import React, { useState, useEffect } from 'react';
import '../../assets/styles/AllProjects.css';

const AllProjects = ({ onProjectClick, onBackClick, isProjectSelected }) => {
  const projects = [
    { name: 'Project A', link: 'https://vso24viilvere.ita.voco.ee/webShop/' },
    { name: 'Project B', link: 'https://vso24viilvere.ita.voco.ee/webShop/' },
    { name: 'Project C', link: 'https://vso24viilvere.ita.voco.ee/webShop/' },
  ];

  const [selectedProject, setSelectedProject] = useState(null);
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  useEffect(() => {
    if (selectedProject) {
      setIsIframeLoaded(false);
    }
  }, [selectedProject]);

  const handleProjectClick = (projectLink) => {
    setSelectedProject(projectLink);
    onProjectClick();
  };

  return (
    <div id="projects" className="section">
      <div className="responsive-content">
        {/* Sidebar containing both title and list */}
        <div className={`project-sidebar ${isProjectSelected ? 'hidden' : ''}`}>
          <h2 className="project-title">All Projects</h2>
          <ul className="project-list">
            {projects.map((project, index) => (
              <li key={index} onClick={() => handleProjectClick(project.link)}>
                {project.name}
              </li>
            ))}
          </ul>
        </div>
        {/* Preloaded iframe - hidden until selected */}
        <div className={`iframe-container ${isProjectSelected ? 'visible' : 'hidden'}`}>
          {selectedProject && (
            <iframe
              src={selectedProject}
              title="Project Showcase"
              loading='lazy'
              onLoad={() => setIsIframeLoaded(true)}

            ></iframe>
          )}
        </div>
        {/* Back Button */}
        {isProjectSelected && (
          <button
            onClick={onBackClick}
            style={{
              marginTop: '20px',
              padding: '10px 15px',
              fontSize: '14px',
              background: '#333',
              color: '#fff',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Back to list
          </button>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
