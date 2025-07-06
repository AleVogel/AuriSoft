import ImageOptimizer from './ImageOptimizer';

function Logo() {
  return (
    <div className="d-flex align-items-center">
      <ImageOptimizer
        src="/images/Logo-aurisoft.png"
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
