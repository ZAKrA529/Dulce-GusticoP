// src/routes/Routing.jsx
import { Routes, Route } from "react-router-dom";
import Interfaz from '../Pages/Interfaz'
import InicioSesion from "../Pages/InicioSesion";
import Admin from '../Pages/Admin'
import Contacto from '../Pages/Contacto'
import Users from '../Pages/Users'
import Productos from '../Pages/Productos'
import Ventas from "../Pages/Ventas";
import Pasarelapagos from "../Pages/pasarelapagos";
import ReportesAdminP from "../Pages/ReportesAdminP";
import PagosP from "../Pages/PagosP";



const Routing = () => {


  return (
    <Routes>
      <Route path="/" element={<Interfaz />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/registros" element={<InicioSesion />} />
      <Route path="/users" element={<Users />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/ventas" element={<Ventas />} />
      <Route path="/pasarela" element={<Pasarelapagos />} />
      <Route path="/reportesAdmin" element={<ReportesAdminP />} />
      <Route path="/seccion-pagos" element={<PagosP />} />
    </Routes>
  );
};

export default Routing;
