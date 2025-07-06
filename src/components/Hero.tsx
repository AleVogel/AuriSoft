import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';

function Hero() {
  return (
    <section id= "inicio" className="bg-hero">
      
      <Container className="py-5 py-lg-6">
        <Row className="align-items-center gy-4">
          <Col lg={6} className="text-center text-lg-start">
            <div className="mb-4 mt-5">
              <h1 className="display-6 fw-bold">
                Impulsamos <br />
                <span className="text-white">Transformación digital</span> <br />
                con soluciones a medida
              </h1>
              
              <p className="fs-5 mt-4 mx-auto mx-lg-0" style={{ maxWidth: '540px' }}>
                 En AuriSoft desarrollamos plataformas, sitios web y sistemas eficientes y escalables. Nos enfocamos en crear soluciones tecnológicas personalizadas que se adaptan a las necesidades reales de tu negocio, con una experiencia de usuario moderna y un enfoque claro en resultados.
              </p>
              
              <div className="mt-4">
                <Link to="/servicios">
                  <Button variant="primary" size="lg">Saber más</Button>

                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero; 