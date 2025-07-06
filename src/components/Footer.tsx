import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

function Footer() {
  return (
    <footer className="bg-dark pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          <Col md={4} className="mb-4 mb-md-0">
            <Link to="/" className="mb-3 d-inline-block">
              <Logo />
            </Link>
            <div className="d-flex gap-3 mt-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaLinkedin size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaInstagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white">
                <FaTwitter size={20} />
              </a>
            </div>
          </Col>

          {/* Servicios */}
          <Col md={4} className="mb-4 mb-md-0">
            <h3 className="fs-5 fw-bold mb-3">SERVICIOS</h3>
            <div className="d-flex flex-column gap-2">
              <Link to="/servicios" className="text-decoration-none">
                Desarrollo web
              </Link>
              <Link to="/servicios" className="text-decoration-none">
                Mantenimiento y gestión
              </Link>
              <Link to="/servicios" className="text-decoration-none">
                Mejoras de software
              </Link>
            </div>
          </Col>

          {/* Contacto */}
          <Col md={4}>
            <h3 className="fs-5 fw-bold mb-3">CONTACTO</h3>
            <div className="d-flex flex-column gap-2">
              <a href="tel:+56912345678" className="text-decoration-none d-flex align-items-center gap-2">
                <FaPhoneAlt />
                <span>+56 9 4000 9670</span>
              </a>
              <a href="mailto:contacto@aurisoft.cl" className="text-decoration-none d-flex align-items-center gap-2">
                <FaEnvelope />
                <span>contacto@aurisoft.cl</span>
              </a>
            </div>
          </Col>
        </Row>

        <div className="mt-3 pt-3 text-center text-muted">
          <p className="text-white m-0">&copy; {new Date().getFullYear()} AuriSoft. Todos los derechos reservados.</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
