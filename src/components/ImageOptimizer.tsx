import React from 'react';

// Define las propiedades que el componente puede recibir
interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  onMouseOver?: React.MouseEventHandler<HTMLImageElement>;
  onMouseOut?: React.MouseEventHandler<HTMLImageElement>;
}

// Este es el nuevo componente, mucho más sencillo.
// Su única responsabilidad es mostrar la imagen.
const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ 
  src, 
  alt, 
  className = '', 
  style = {},
  onMouseOver,
  onMouseOut
}) => {
  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
      style={style}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
};

export default ImageOptimizer;