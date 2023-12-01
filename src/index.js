import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Crea  ReactDOM en el elemento con el id 'root'
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderiza la aplicación dentro de la raíz de ReactDOM
root.render(
  <React.StrictMode>
    <div className="titulo-container"> {/* Agrega el título */}
      <div id="titulo">Todo List</div>
    </div>
    <App /> {/* Agrega el componente App */}
  </React.StrictMode>
);

