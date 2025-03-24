// src/routes/Routing.jsx
import { Routes, Route } from "react-router-dom";
import Interfaz from '../Pages/Interfaz'
import InicioSesion from "../Pages/InicioSesion";
import Admin from '../Pages/Admin'
import Contacto from '../Pages/Contacto'
import Users from '../Pages/Users'



const Routing = () => {


  return (
    <Routes>
      <Route path="/" element={<Interfaz />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/registros" element={<InicioSesion />} />
      <Route path="/users" element={<Users />} />
    </Routes>
  );
};

export default Routing;
