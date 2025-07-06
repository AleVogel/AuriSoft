import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FaBars, FaTimes } from 'react-icons/fa';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';
import Logo from './Logo';

function Header() {
  const [expanded, setExpanded] = useState(false);

  const toggleMenu = (): void => {
    setExpanded(!expanded);
  };

  return (
    <Navbar 
      expand="md" 
      fixed="top"
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/">
          <Logo />
        </Navbar.Brand>
        
        <Navbar.Toggle 
          aria-controls="basic-navbar-nav" 
          onClick={toggleMenu}
          className="border-0"
        >
          {expanded ? <FaTimes size={24} /> : <FaBars size={24} />}
        </Navbar.Toggle>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto gap-4">
            <Nav.Link as={Link} to="/" onClick={() => setExpanded(false)}>Inicio</Nav.Link>
            <Nav.Link as={Link} to="/somos" onClick={() => setExpanded(false)}>Acerca de Nosotros</Nav.Link>
            <Nav.Link as={Link} to="/servicios" onClick={() => setExpanded(false)}>Servicios</Nav.Link>
            <Nav.Link as={Link} to="/contacto" onClick={() => setExpanded(false)}>Contacto</Nav.Link>
          </Nav>
          
          <div className="d-flex gap-3">
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
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header; 