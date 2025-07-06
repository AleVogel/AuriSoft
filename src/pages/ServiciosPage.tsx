import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { ServiceItem } from '../types';
import ellipse1 from '../assets/consultorias-aurosift.png';
import ellipse2 from '../assets/endtoend-aurisoft.png';
import ellipse3 from '../assets/mejora-aurisoft.png';
import '../styles/ServiciosPage.css';

function ServiciosPage() {
  const services: ServiceItem[] = [
    {
      title: 'CONSULTORÍAS',
      description:
        'Te acompañamos en la transformación digital de tu negocio. Analizamos tu situación, detectamos oportunidades y diseñamos soluciones tecnológicas a medida para optimizar procesos, potenciar tu presencia online y alcanzar tus objetivos con precisión.',
      imageUrl: ellipse1,
    },
    {
      title: 'DESARROLLO END TO END',
      description:
        'Desarrollamos soluciones digitales a medida, desde la idea inicial hasta su implementación. Trabajamos con metodologías ágiles para crear sitios web y plataformas responsivas, combinando tecnología moderna con diseño centrado en el usuario, garantizando productos robustos y escalables.',
      imageUrl: ellipse2,
    },
    {
      title: 'MEJORA CONTINUA',
      description:
        'Brindamos mantenimiento continuo para tus plataformas digitales, con monitoreo proactivo, actualizaciones de seguridad y mejoras constantes. Nuestros planes de soporte técnico aseguran rendimiento óptimo y adaptación a nuevas tecnologías.',
      imageUrl: ellipse3,
    },
  ];

  return (
    <div className="bg-servicios" id="servicios">
      <div className="bg-servicios-hero">
        <Container className="py-5 py-lg-6">
          <Row className="align-items-center gy-4">
            <Col lg={6} className="text-lg-start text-center">
              <div className="mb-4 mt-5">
                <h1 className="display-6 fw-bold">
                  Convertimos tus ideas<br />
                  <span className="text-white">en experiencias digitales</span><br />
                  que impulsan el crecimiento
                </h1>
                <p className="fs-5 mt-4" style={{ maxWidth: '540px' }}>
                  Desarrollo web y soluciones a medida.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="gy-4 justify-content-center">
          {services.map((service, index) => (
            <Col key={index} md={6} lg={4} className="d-flex">
              <div className="servicio-item text-center text-white w-100">
                <div className="gradient-border mx-auto mb-3" style={{ width: '12rem', height: '12rem' }}>
                  <div className="w-100 h-100 rounded-circle overflow-hidden">
                    <img
                      src={service.imageUrl}
                      alt={service.title}
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>
                </div>
                <h3 className="fs-5 fw-bold mb-3">{service.title}</h3>
                <p className="fs-5">{service.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ServiciosPage;
