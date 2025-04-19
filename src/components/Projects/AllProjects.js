import React, { useState} from 'react';
import '../../assets/styles/components/projects.css';
import { projects } from '../../data/projectData';

const AllProjects = ({ onProjectClick, onBackClick }) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [mode, setMode] = useState("list"); // 'list' | 'details' | 'live'
  const isMobile = window.innerWidth < 768;

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setMode("details");
  };

  const handleLiveViewClick = () => {
    setMode("live");
    onProjectClick();
  };

  const handleBackClick = () => {
    if (mode === "live") {
      setMode("details");
    } else {
      setSelectedProject(null);
      setMode("list");
      onBackClick(); // 🔥 Trigger background reset
    }
  };

  return (
    <div id="projects" className={`section ${mode}`}>
      <div className={`project-sidebar ${mode === 'list' ? 'centered' : 'left'}`}>
        <h2 className="project-title">All Projects</h2>
        {mode === "list" && (
          <p className="project-intro">
            Here are some of my featured projects — click any card to learn more.
          </p>
        )}
        <ul className="project-list">
          {projects.map((project) => (
            <li
              key={project.id}
              onClick={() => handleProjectClick(project)}
              className={selectedProject?.id === project.id && mode !== "list" ? "faded" : ""}
            >
              <div className="project-card">
                <img src={project.image} alt={project.title} className="project-thumb" />
                <div>
                  <strong>{project.title}</strong>
                </div>
              </div>
            </li>
          ))}

        </ul>
      </div>

      {/* Project Detail View */}
      {selectedProject && mode === "details" && (
        <div className="project-detail-card">
          <button className="close-details-button" onClick={handleBackClick}>×</button>
          <div
            className="project-image-bg"
            style={{ backgroundImage: `url(${selectedProject.image})` }}
          />
          <div className="project-content">
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <div className="project-links">
              <a href={selectedProject.url} target="_blank" rel="noreferrer">🔗 Live Site</a>
              <a href={selectedProject.git} target="_blank" rel="noreferrer">💻 GitHub</a>
            </div>
            {!isMobile && (
              <button onClick={handleLiveViewClick}>👀 View Live Version</button>
            )}
          </div>
        </div>
      )}


      {/* Iframe View */}
      {selectedProject && mode === "live" && !isMobile && (
        <div className={`iframe-container visible`}>
          <iframe
            src={selectedProject.url}
            title="Project Showcase"
            loading="lazy"
          ></iframe>
          <button className="back-button" onClick={handleBackClick}>
            ← Back to details
          </button>
        </div>
      )}
    </div>
  );
};

export default AllProjects;
