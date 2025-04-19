import React from 'react';

const PolygonBackground = ({
  points,
  fill = '#007BFF',
  style = {},
  className = '',
}) => {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className={className}
      style={{
        position: 'absolute',
        zIndex: -1,
        width: '100%',
        height: '100%',
        ...style,
      }}
    >
      <polygon points={points} fill={fill} />
    </svg>
  );
};

export default PolygonBackground;
