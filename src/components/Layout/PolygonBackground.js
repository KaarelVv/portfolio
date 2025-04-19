import React, { useMemo, useId } from 'react';

const PolygonBackground = ({
  points,
  fill = '#007BFF',
  style = {},
  className = '',
  stroke = '',
  strokeWidth = 0,
  gradientId,
  gradientColors = [],
}) => {
  const fallbackId = useId(); // React 18+ built-in hook
  const useGradient = gradientColors.length > 1;

  // Use provided gradientId or generate a scoped unique one
  const uniqueId = useMemo(() => {
    if (gradientId) return gradientId;
    return `grad-${fallbackId}`;
  }, [gradientId, fallbackId]);

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
      {useGradient && (
        <defs>
          <linearGradient id={uniqueId} x1="0%" y1="0%" x2="100%" y2="100%">
            {gradientColors.map((color, index) => (
              <stop
                key={index}
                offset={`${(index / (gradientColors.length - 1)) * 100}%`}
                style={{ stopColor: color, stopOpacity: 1 }}
              />
            ))}
          </linearGradient>
        </defs>
      )}

      <polygon
        points={points}
        fill={useGradient ? `url(#${uniqueId})` : fill}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};

export default PolygonBackground;
