import React from 'react';
import PolygonBackground from './PolygonBackground';



const PageLayout = ({ children }) => {
  return (
    <div className="layout">
      {/* Backgrounds for all 4 sections */}
      <PolygonBackground
  points="0,0 30,0 100,100 0,100"
  style={{ top: 0, left: 0, width: '70vw', height: '100vh' }}
  fill="#1E90FF"
/>

{/* Split into two triangles */}
<PolygonBackground
  points="0,0 100,0 100,100"
  style={{ top: '100vh', right: 0, width: '30vw', height: '50vh' }}
  fill="#20B2AA"
/>
<PolygonBackground
  points="100,0 100,100 0,100"
  style={{ top: '150vh', right: 0, width: '30vw', height: '50vh' }}
  fill="#20B2AA"
/>

<PolygonBackground
  points="0,0 100,0 70,100,100"
  style={{ top: '200vh', right: 0, width: '30vw', height: '100vh' }}
  fill="#FF6347"
/>

<PolygonBackground
  points="0,100 0,0 100,50"
  style={{ top: '300vh', left: -10, width: '100vw', height: '100vh' }}
  fill="#6A5ACD"
/>

      {/* Sections rendered inside */}
      {children}
    </div>
  );
};

export default PageLayout;
