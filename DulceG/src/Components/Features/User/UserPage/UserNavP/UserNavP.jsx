import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function UserNavP() {
  return (
    <div>
      <div className="d-flex">
        {/* Sidebar */}
        <nav className="bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
          <h2 className="mb-4">Admin Panel</h2>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">Dashboard</a>
            </li>
            <li className="nav-item mb-2">
              <a href="Users" className="nav-link text-white">Usuarios</a>
            </li>
            <li className="nav-item mb-2">
              <a href="productos" className="nav-link text-white">Productos</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">Reportes</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">Configuración</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default UserNavP
