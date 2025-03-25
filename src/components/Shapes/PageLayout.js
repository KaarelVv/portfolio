import React, { useState } from 'react';
import PolygonBackground from './PolygonBackground';



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
      {/* First section main polygon */}
      <PolygonBackground
        points="0,0 30,0 100,100 0,100"
        style={{ top: 0, left: 0, width: '60vw', height: '100vh' }}
        fill="#FFA51F"
      />
      {/* Second section right polygon */}
      <PolygonBackground
        points="0,0 100,0 100,100 0,100 70,50"
        style={{
          top: '100vh',
          right: isProjectSelected ? '-10vw' : 0,
          width: '30vw',
          height: '100vh',
          transition: 'all 0.5s ease-in-out',
        }}
        fill="#20B2AA"
      />
      
      {/* Second section left polygon */}
      <PolygonBackground
        points="100,0 0,0 0,100 100,100 30,50"
        style={{
          top: '100vh',
          left: isProjectSelected ? '-10vw' : 0,
          width: '30vw',
          height: '100vh',
          transition: 'all 0.5s ease-in-out',
        }}
        fill="#20B2AA"
      />
      {/* Third section, maybe delete */}
      <PolygonBackground
        points="0,0 100,0 100,100,100"
        style={{ top: '200vh', right: 0, width: '30vw', height: '100vh' }}
        fill="#FF6347"
      />
      {/* Forth section main polygon */}
      <PolygonBackground
        points="0,100 0,0 100,50"
        style={{ top: '300vh', left: -10, width: '100vw', height: '100vh' }}
        fill="#6A5ACD"
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
