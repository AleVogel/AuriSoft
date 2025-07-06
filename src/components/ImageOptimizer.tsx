import React, { useState, useEffect } from 'react';

interface ImageOptimizerProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  fallbackSrc?: string;
  onMouseOver?: React.MouseEventHandler<HTMLImageElement>;
  onMouseOut?: React.MouseEventHandler<HTMLImageElement>;
}

const ImageOptimizer: React.FC<ImageOptimizerProps> = ({ 
  src, 
  alt, 
  className = '', 
  style = {}, 
  fallbackSrc,
  onMouseOver,
  onMouseOut
}) => {
  const [imageSrc, setImageSrc] = useState<string>(src);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (error || src.toLowerCase().endsWith('.svg')) {
      return;
    }

    const convertToWebP = async () => {
      try {
        const img = new Image();
        await new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error('Error al cargar la imagen'));
          img.src = src;
        });
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('No se pudo crear el contexto 2D');
        ctx.drawImage(img, 0, 0);
        
        const webpData = canvas.toDataURL('image/webp', 0.8); 
        
        setImageSrc(webpData);
      } catch (err) {
        console.warn('Error al convertir a WebP:', err);
        setError(true);
      }
    };

    const checkWebPSupport = async () => {
      if (!src.match(/\.(png|jpe?g|gif)$/i)) {
        return;
      }
      
      const webPSupported = document.createElement('canvas')
        .toDataURL('image/webp')
        .indexOf('data:image/webp') === 0;

      if (webPSupported) {
        convertToWebP();
      }
    };

    checkWebPSupport();
  }, [src, error]);

  const handleError = () => {
    setError(true);
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
    }
  };

  return (
    <img 
      src={imageSrc} 
      alt={alt}
      className={className}
      style={style}
      onError={handleError}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    />
  );
};

export default ImageOptimizer; 