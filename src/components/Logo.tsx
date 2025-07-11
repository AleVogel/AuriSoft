// src/components/Logo.tsx

import ImageOptimizer from './ImageOptimizer';
import logoSrc from '/images/Logo-aurisoft.png'; // Importa la imagen directamente

function Logo() {
  return (
    <div className="d-flex align-items-center">
      <ImageOptimizer
        src={logoSrc} // Pasa la variable importada como 'src'
        alt="Aurisoft Logo"
        style={{
          height: '130px',
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}

export default Logo;