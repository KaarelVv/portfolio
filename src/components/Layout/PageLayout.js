import React, { useEffect, useState } from 'react';
import PolygonBackground from './PolygonBackground';
import '../../assets/styles/components/shapes.css';




const PageLayout = ({ children }) => {

  const [isProjectSelected, setIsProjectSelected] = useState(false);
  const [isExperienceSelected, setIsExperienceSelected] = useState(false);

  const handleProjectClick = () => {
    setIsProjectSelected(true);
  };

  const handleBackClick = () => {
    setIsProjectSelected(false);
  };

  const [points, setPoints] = useState([
    { x: 0, y: 0 },
    { x: 30, y: 0 },
    { x: 100, y: 100 },
    { x: 0, y: 100 },
  ]);


  const defaultPoints = [
    { x: 0, y: 0 },
    { x: 30, y: 0 },
    { x: 60, y: 100 },
    { x: 0, y: 100 },
  ];

  const expandedPoints = [
    { x: 0, y: 0 },
    { x: 50, y: 0 },
    { x: 160, y: 100 },
    { x: 0, y: 100 },
  ];

  const targetPoints = isExperienceSelected ? expandedPoints : defaultPoints;


  const easeInOutCubic = t =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  useEffect(() => {
    let frameId;
    const duration = 150;
    const fps = 60;
    const steps = duration / (1200/ fps);
    let step = 0;
    const startPoints = points.map(p => ({ ...p }));

    const animate = () => {
      step++;
      const progress = step / steps;
      const eased = easeInOutCubic(progress);

      const newPoints = startPoints.map((start, i) => ({
        x: start.x + (targetPoints[i].x - start.x) * eased,
        y: start.y + (targetPoints[i].y - start.y) * eased,
      }));

      setPoints(newPoints);

      if (step < steps) {
        frameId = requestAnimationFrame(animate);
      } else {
        setPoints(targetPoints);
      }
    };

    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [isExperienceSelected, points, targetPoints]);



  return (
    <div className="layout">
      {/* First section, About Me */}
      <PolygonBackground
        points={points.map(p => `${p.x},${p.y}`).join(' ')}
        style={{
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
        }}
        fill="#FFA51F"
      />
      {/* Second section right polygon */}
      <PolygonBackground
        points="0,0 100,0 100,100 0,100 50,50"
        style={{
          top: '100vh',
          right: isProjectSelected ? '-30vw' : 0,
          width: '39vw',
          height: '100vh',
          transition: 'all 1s ease-in-out',
        }}
        fill="#FFA51F"
      />

      {/* Second section left polygon */}
      <PolygonBackground
        points="40,0 0,0 0,100 40,100 75,50"
        style={{
          top: '100vh',
          left: isProjectSelected ? '-30vw' : 0,
          width: '38vw',
          height: '100vh',
          transition: 'all 1s ease-in-out',
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
          isExperienceSelected,
          setIsExperienceSelected,
        })
      )}

    </div>
  );
};

export default PageLayout;
