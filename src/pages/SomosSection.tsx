import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function SomosSection() {
  return (
    <section id="somos" className="bg-somos">
      <Container className="py-5 py-lg-6">
        <Row className="align-items-center gy-4">
          <Col lg={6}>
            <div className="mb-4 mt-5">
              <h1 className="display-6 fw-bold">
                Conectar para crear
              </h1>

              <div className="fs-5 mt-4">
                <p>
                  Somos un equipo multidisciplinario apasionado por la tecnología y el diseño.
                  Nos une la convicción de que las mejores soluciones digitales nacen cuando
                  se combinan distintas miradas y talentos.
                </p>

                <p>
                  Reunimos perfiles expertos en UX/UI, frontend, backend y desarrollo mobile,
                  trabajando en conjunto para crear experiencias digitales sólidas, intuitivas y
                  escalables. Creemos en el trabajo colaborativo, en el pensamiento centrado
                  en el usuario y en la innovación constante como motor de todo lo que
                  hacemos.
                </p>

                <p>
                  Más que un equipo, somos un nodo donde convergen ideas, creatividad y
                  tecnología.
                </p>
              </div>
            </div>
          </Col>

          <Col lg={6} className="d-flex justify-content-center justify-content-lg-end">
            <div
              className="position-relative"
              style={{
                maxWidth: '400px',
                aspectRatio: '1/1',
                borderRadius: '50%',
                overflow: 'hidden',
                border: '4px solid var(--bs-secondary)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
              }}
            >
             
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default SomosSection;

