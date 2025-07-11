import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.css';

// Busca el elemento 'root' en el documento
const rootElement = document.getElementById('root');

// Solo ejecuta el código de renderizado si el elemento 'root' existe
// (esto evita que se ejecute en el servidor y cause el error)
if (rootElement) {
  ReactDOM.createRoot(rootElement as HTMLElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
}