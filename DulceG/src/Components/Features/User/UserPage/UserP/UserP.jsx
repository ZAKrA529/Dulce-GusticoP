import React, { useEffect, useState } from 'react';
import registro from '../../../../../Services/registro';
import Swal from 'sweetalert2';
import 'bootstrap/dist/css/bootstrap.min.css';

function UserP() {
  const [usuarios, setUsuarios] = useState([]);
  const [nuevoUsuario, setNuevoUsuario] = useState({ nombre: '', correoE: '', Contrasena: '' });
  const [editandoUsuario, setEditandoUsuario] = useState(null);

  useEffect(() => {
    async function fetchUsuarios() {
      try {
        const datos = await registro.GetUser();
        setUsuarios(datos);
      } catch {
        Swal.fire('Error', 'No se pudieron cargar los usuarios.', 'error');
      }
    }
    fetchUsuarios();
  }, []);

  const eliminarUsuario = async (id) => {
    const confirmacion = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });

    if (confirmacion.isConfirmed) {
      try {
        await registro.DeleteUser(id);
        setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
        Swal.fire('Eliminado', 'Usuario eliminado correctamente.', 'success');
      } catch {
        Swal.fire('Error', 'No se pudo eliminar el usuario.', 'error');
      }
    }
  };

  async function agregarUsuario() {
    if (!nuevoUsuario.nombre || !nuevoUsuario.correoE || !nuevoUsuario.Contrasena) {
      Swal.fire('Por favor, completa todos los campos', '', 'warning');
      return;
    }
    try {
      const usuarioCreado = await registro.PostUser(nuevoUsuario.nombre, nuevoUsuario.correoE, nuevoUsuario.Contrasena);
      setUsuarios([...usuarios, usuarioCreado]);
      setNuevoUsuario({ nombre: '', correoE: '', Contrasena: '' });
      Swal.fire('Usuario agregado', '', 'success');
    } catch {
      Swal.fire('Error al agregar usuario', '', 'error');
    }
  }

  const iniciarEdicion = (usuario) => {
    setEditandoUsuario(usuario);
    setNuevoUsuario(usuario);
  };

  const manejarCambioEdicion = (e) => {
    setNuevoUsuario({ ...nuevoUsuario, [e.target.name]: e.target.value });
  };

  const guardarEdicion = async () => {
    try {
      await registro.Updateuser(nuevoUsuario.nombre, nuevoUsuario.correoE, nuevoUsuario.Contrasena, nuevoUsuario.id);
      setUsuarios(
        usuarios.map((usuario) => usuario.id === nuevoUsuario.id ? nuevoUsuario : usuario)
      );
      Swal.fire('Actualizado', 'Usuario actualizado correctamente.', 'success');
      setEditandoUsuario(null);
      setNuevoUsuario({ nombre: '', correoE: '', Contrasena: '' });
    } catch {
      Swal.fire('Error', 'No se pudo actualizar el usuario.', 'error');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Usuarios</h1>
      <div className="mb-4">
        <h3>{editandoUsuario ? 'Editar Usuario' : 'Agregar Usuario'}</h3>
        <input type="text" name="nombre" placeholder="Nombre" className="form-control mb-2" value={nuevoUsuario.nombre} onChange={manejarCambioEdicion} />
        <input type="email" name="correoE" placeholder="Correo Electrónico" className="form-control mb-2" value={nuevoUsuario.correoE} onChange={manejarCambioEdicion} />
        <input type="password" name="Contrasena" placeholder="Contraseña" className="form-control mb-2" value={nuevoUsuario.Contrasena} onChange={manejarCambioEdicion} />
        {editandoUsuario ? (
          <button className="btn btn-warning" onClick={guardarEdicion}>Guardar Cambios</button>
        ) : (
          <button className="btn btn-success" onClick={agregarUsuario}>Agregar Usuario</button>
        )}
      </div>
      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo Electrónico</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.correoE}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => iniciarEdicion(usuario)}>Editar</button>
                  <button className="btn btn-danger" onClick={() => eliminarUsuario(usuario.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserP;