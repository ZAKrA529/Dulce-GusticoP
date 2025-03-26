import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import RespuestasCrud from '../../Chat/RespuestasCrud/RespuestasCrud';
import Adds from '../../Features/Adds/Adds'
import Grafico from '../Grafico/Grafico'
function AdminC() {
  return (
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
            <a href="ventas" className="nav-link text-white">Ventas</a>
          </li>

          <li className="nav-item mb-2">
            <a href="reportesAdmin" className="nav-link text-white">Reportes</a>
          </li>

          <li className="nav-item mb-2">
            <a href="#" className="nav-link text-white">Configuración</a>
          </li>
        </ul>
      </nav>
   
      {/* Main Content */}
      <div className="flex-grow-1 p-4" >
        <h1 className="mb-4">Bienvenido Administrador don Alex</h1>
        <RespuestasCrud></RespuestasCrud> <br />  <br />
        <Adds></Adds>
        <Grafico></Grafico>
      </div>
    </div>
  );
}

export default AdminC;
