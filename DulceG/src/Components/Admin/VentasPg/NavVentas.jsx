import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function NavVentas() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Admin Ventas
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="users">
                Usuarios
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="reportesAdmin">
                Reportes
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Configuración
              </a>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default NavVentas;
