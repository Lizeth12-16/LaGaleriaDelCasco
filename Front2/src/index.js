import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

/* importamos paginas */
import App from './js/App';
import Login from './js/login.js';
import reportWebVitals from './reportWebVitals';
import Crud from './js/crud.js'
import Register from './js/register.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} /> {/* Ruta pagina Principal */}
        <Route path="/login" element={<Login />} /> {/* Ruta pagina Login */}
        <Route path="/crud" element={<Crud />} /> {/* Ruta pagina Crud */}
        <Route path="/register" element={<Register />} /> {/* Ruta Pagina Registro de usuario */}
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
