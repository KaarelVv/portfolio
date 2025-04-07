import React, { useState } from 'react';
import PolygonBackground from './PolygonBackground';
import '../../assets/styles/components/shapes.css';




const PageLayout = ({ children }) => {

  const [isProjectSelected, setIsProjectSelected] = useState(false);

  const handleProjectClick = () => {
    setIsProjectSelected(true);
  };

  const handleBackClick = () => {
    setIsProjectSelected(false);
  };
  return (
    <div className="layout">
      {/* First section, About Me */}
      <PolygonBackground
        points="0,0 30,0 100,100 0,100"
        style={{ top: 0, left: 0, width: '60vw', height: '100vh' }}
        fill="#FFA51F"
      />
      {/* Second section right polygon */}
      <PolygonBackground
        points="0,0 100,0 100,100 0,100 60,50"
        style={{
          top: '100vh',
          right: isProjectSelected ? '-10vw' : 0,
          width: '39vw',
          height: '100vh',
          transition: 'all 0.5s ease-in-out',
        }}
        fill="#FFA51F"
      />

      {/* Second section left polygon */}
      <PolygonBackground
        points="40,0 0,0 0,100 40,100 100,50"
        style={{
          top: '100vh',
          left: isProjectSelected ? '-10vw' : 0,
          width: '38vw',
          height: '100vh',
          transition: 'all 0.5s ease-in-out',
        }}
        fill="#FFA51F"
      />
      {/* Third section, Contact*/}
      <PolygonBackground
        points="0,100 0,0 100,0"
        style={{ top: '200vh', left: 0, width: '60vw', height: '100vh' }}
        fill="#FFA51F"
      />

      {/* Sections rendered inside */}
      {React.Children.map(children, child =>
        React.cloneElement(child, {
          onProjectClick: handleProjectClick,
          onBackClick: handleBackClick,
          isProjectSelected,
        })
      )}

    </div>
  );
};

export default PageLayout;
