import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../styles/index.css';

function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Gracias por contactarnos. Te responderemos a la brevedad.');
    setFormData({ nombre: '', correo: '', mensaje: '' });
  };

  const handleReset = () => {
    setFormData({ nombre: '', correo: '', mensaje: '' });
  };

  return (
    <>
      
      <div className="bg-contacto position-relative min-vh-100 d-flex flex-column justify-content-center">
        <Container className="position-relative py-5" style={{ zIndex: 2 }}>
          <Row className="align-items-start min-vh-70">
            <Col md={6} className="text-white mb-5 mb-md-0">
              <h1 className="display-5 fw-bold mb-4">
                Impulsamos el desarrollo tecnológico de tu organización
              </h1>
              <p className="fs-5 mb-0">
                En AuriSoft trabajamos contigo para comprender tus necesidades y convertirlas en soluciones digitales eficientes, escalables y alineadas con tus objetivos estratégicos.
              </p>
            </Col>

            <Col md={6}>
              <Form className="p-2 rounded-4" onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="nombre">
                  <Form.Label className="fw-bold">Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    placeholder="Ingrese Nombre"
                    className="form-control-lg"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="correo">
                  <Form.Label className="fw-bold">Correo</Form.Label>
                  <Form.Control
                    type="email"
                    name="correo"
                    value={formData.correo}
                    onChange={handleChange}
                    required
                    placeholder="Ingrese Correo"
                    className="form-control-lg"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="mensaje">
                  <Form.Label className="fw-bold">Mensaje</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    required
                    placeholder="Ingrese Mensaje"
                    className="form-control-lg"
                    rows={4}
                  />
                </Form.Group>
               <div className="d-flex justify-content-between">
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="fw-bold px-4"
                >
                  Enviar
                </Button>
              </div>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ContactoPage;