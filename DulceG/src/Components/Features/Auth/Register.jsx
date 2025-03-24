import React, { useState } from 'react';
import registro from '../../../services/registro';
import Swal from 'sweetalert2';
import { FaUser, FaSignInAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import 'bootstrap/dist/css/bootstrap.min.css';

function LoginC() {
  const [nombre, setNombre] = useState('');
  const [correoE, setCorreo] = useState('');
  const [Contrasena, setContrasena] = useState('');

  function handleInputChange(e) {
    const { id, value } = e.target;
    if (id === 'nombre') {
      setNombre(value.trim());
    } else if (id === 'correo') {
      setCorreo(value.trim());
    } else if (id === 'contrasena') {
      setContrasena(value.trim());
    }
  }

  async function registrar() {
    if (!nombre || !correoE || !Contrasena) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    try {
      await registro.PostUser(nombre, correoE, Contrasena);
      Swal.fire({
        title: 'Registro exitoso',
        text: 'El usuario ha sido registrado correctamente.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      });
      setNombre('');
      setCorreo('');
      setContrasena('');
    } catch {
      Swal.fire({
        title: 'Error',
        text: 'Hubo un problema al registrar el usuario.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="text-center mb-4">Formulario de Registro</h1>

              <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <div className="input-group">
                  <span className="input-group-text"><FaUser /></span>
                  <input
                    id="nombre"
                    type="text"
                    className="form-control"
                    value={nombre}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu nombre"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                <div className="input-group">
                  <span className="input-group-text"><MdEmail /></span>
                  <input
                    id="correo"
                    type="email"
                    className="form-control"
                    value={correoE}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu correo"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="contrasena" className="form-label">Contraseña</label>
                <div className="input-group">
                  <span className="input-group-text"><RiLockPasswordFill /></span>
                  <input
                    id="contrasena"
                    type="password"
                    className="form-control"
                    value={Contrasena}
                    onChange={handleInputChange}
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
              </div>

              <p className="text-center">¿Ya tienes cuenta? <a href="Login" className="text-primary">Inicia sesión</a></p>

              <div className="text-center">
                <button onClick={registrar} className="btn btn-primary">
                  <FaSignInAlt className="me-2" /> Registrar
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginC;
