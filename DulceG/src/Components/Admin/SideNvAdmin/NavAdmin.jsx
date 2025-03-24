import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2';
import registro from '../../../services/registro';

function NavAdmin() {


  const handleBuscar = async () => {
    // Lanza la alerta con el input para ingresar el nombre del usuario
    const { value: nombreUsuario } = await Swal.fire({
      title: 'Buscar Usuario',
      input: 'text',
      inputLabel: 'Ingrese el nombre del usuario',
      inputPlaceholder: 'Nombre de usuario',
      showCancelButton: true,
      confirmButtonText: 'Buscar',
      cancelButtonText: 'Cancelar',
      inputValidator: (value) => {
        if (!value) return '¡Debes ingresar un nombre!';
      },
    });

    if (!nombreUsuario) return; // Si no ingresan nada, no hace la búsqueda

    try {
      // Llama al servicio para buscar usuarios
      const usuariosRegistrados = await registro.GetUser(nombreUsuario);

      // Si no se encuentran resultados
      if (!usuariosRegistrados || usuariosRegistrados.length === 0) {
        return Swal.fire({
          icon: 'error',
          title: 'Usuario no encontrado',
          text: 'No se encontró ningún usuario con ese nombre.',
        });
      }

      // Muestra la información del usuario
      Swal.fire({
        icon: 'success',
        title: `Usuario encontrado: ${usuariosRegistrados.nombre}`,
        html: `
          <b>Correo:</b> ${usuariosRegistrados.correoE} <br>
          <b>Contraseña:</b> ${usuariosRegistrados.Contrasena}
        `,
      });
    } catch (error) {
      // Manejo de errores
      Swal.fire({
        icon: 'error',
        title: 'Error en la búsqueda',
        text: `Ocurrió un error: ${error.message}`,
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">Dulce Gustico</a>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="/">Inicio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/perfil">Perfil</a>
            </li>
          </ul>

          {/* Botón de búsqueda */}
          <button className="btn btn-outline-light" onClick={handleBuscar}>
            Buscar Usuario
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavAdmin;
