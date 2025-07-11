import ImageOptimizer from './ImageOptimizer';
import logoWebp from '/images/Logo-aurisoft.webp'; // Importa la imagen .webp

function Logo() {
  return (
    <div className="d-flex align-items-center">
      <ImageOptimizer
        src={logoWebp} // Pasa la imagen importada
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