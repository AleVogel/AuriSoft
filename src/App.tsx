
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import SomosPage from './pages/SomosSection';
import ServiciosPage from './pages/ServiciosPage';
import ContactoPage from './pages/ContactoPage';

function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-primary text-white">
      <Header />
      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/somos" element={<SomosPage />} />
          <Route path="/servicios" element={<ServiciosPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App; 
