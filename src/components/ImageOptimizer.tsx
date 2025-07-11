import React from 'react';

interface ImageOptimizerProps {
  src: string; // La ruta directa a la imagen .webp
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
}) => {
  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
      style={style}
    />
  );
};

export default ImageOptimizer;