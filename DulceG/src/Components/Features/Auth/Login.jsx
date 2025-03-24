import React, { useState, useEffect } from 'react';
import registro from '../../../services/registro';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FaSignInAlt } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

function RegisterC() {
  const [correoE, setCorreoE] = useState('');
  const [Contrasena, setContrasena] = useState('');
  const [infoUser, setInfoUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDataUsers() {
      try {
        const datos = await registro.GetUser();
        setInfoUser(datos);
      } catch {
        Swal.fire({
          title: 'Error',
          text: 'No se pudieron cargar los usuarios.',
          icon: 'error',
          confirmButtonText: 'Aceptar'
        });
      }
    }
    fetchDataUsers();
  }, []);

  function inputChanging(e) {
    const { id, value } = e.target;
    if (id === 'correo') {
      setCorreoE(value.trim());
    } else if (id === 'contrasena') {
      setContrasena(value.trim());
    }
  }

  function iniciarSesion() {
    if (!correoE || !Contrasena) {
      Swal.fire({
        title: 'Error',
        text: 'Por favor, completa todos los campos.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
      return;
    }

    const usuario = infoUser.find(user => user.correoE === correoE && user.Contrasena === Contrasena);

    if (!usuario) {
      Swal.fire({
        title: 'Error',
        text: 'Usuario o contraseña incorrectos.',
        icon: 'error',
        confirmButtonText: 'Aceptar'
      });
    } else {
      Swal.fire({
        title: 'Bienvenido',
        text: 'Inicio de sesión exitoso.',
        icon: 'success',
        confirmButtonText: 'Aceptar'
      }).then(() => navigate("/"));
    }
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg">
            <div className="card-body">
              <h1 className="text-center mb-4">Iniciar Sesión</h1>

              <div className="mb-3">
                <label htmlFor="correo" className="form-label">Correo Electrónico</label>
                <div className="input-group">
                  <span className="input-group-text"><MdEmail /></span>
                  <input
                    id="correo"
                    type="email"
                    className="form-control"
                    value={correoE}
                    onChange={inputChanging}
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
                    onChange={inputChanging}
                    placeholder="Ingresa tu contraseña"
                  />
                </div>
              </div>

              <p className="text-center">¿No tienes cuenta? <a href="/registro" className="text-primary">Regístrate</a></p>

              <div className="text-center">
                <button onClick={iniciarSesion} className="btn btn-success">
                  <FaSignInAlt className="me-2" /> Iniciar Sesión
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterC;
