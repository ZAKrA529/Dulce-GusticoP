import React, { useEffect, useState } from "react";
import reportes from "../../../Services/reportes"; // Asegúrate de que la API está en una carpeta adecuada

function ReportesAdmin() {
  const [reportes, setReportes] = useState([]);
  const [nombre, setNombre] = useState("");
  const [correoE, setCorreoE] = useState(""); 
  const [contrasena, setContrasena] = useState("");
  const [tipoReporte, setTipoReporte] = useState("");
  const [editId, setEditId] = useState(null);

  // Obtener reportes al cargar la página
  useEffect(() => {
    fetchReportes();
  }, []);

  const fetchReportes = async () => {
    try {
      const data = await reportes.GetReports();
      setReportes(data);
    } catch (error) {
      console.error("Error obteniendo reportes:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editId) {
      await reportes.UpdateReports(nombre, correoE, contrasena, editId);
    } else {
      await reportes.PostReports(nombre, correoE, contrasena);
    }
    setNombre("");
    setCorreoE("");
    setContrasena("");
    setEditId(null);
    fetchReportes();
  };

  const handleEdit = (reporte) => {
    setNombre(reporte.nombre);
    setCorreoE(reporte.correoE);
    setContrasena(reporte.Contrasena);
    setEditId(reporte.id);
  };

  const handleDelete = async (id) => {
    await reportes.DeleteReports(id);
    fetchReportes();
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Gestión de Reportes</h2>

      {/* Formulario de Reportes */}
      <div className="card p-4 mb-4">
        <h4 className="mb-3">{editId ? "Editar Reporte" : "Nuevo Reporte"}</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              value={correoE}
              onChange={(e) => setCorreoE(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              value={contrasena}
              onChange={(e) => setContrasena(e.target.value)}
              required
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Tipo de Reporte</label>
            <select
              className="form-select"
              value={tipoReporte}
              onChange={(e) => setTipoReporte(e.target.value)}
              required
            >
              <option disabled value="">
                Escoge una opción
              </option>
              <option value="Pagina principal">Página principal</option>
              <option value="Productos">Productos</option>
              <option value="Administración">Administración</option>
              <option value="Ventas">Ventas</option>
              <option value="Usuarios">Usuarios</option>
              <option value="Contacto">Contacto</option>
            </select>
          </div>

          <button type="submit" className="btn btn-primary">
            {editId ? "Actualizar" : "Enviar Reporte"}
          </button>
        </form>
      </div>

      {/* Tabla de Reportes */}
      <div className="card p-4">
        <h4 className="mb-3">Lista de Reportes</h4>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {reportes.length > 0 ? (
              reportes.map((reporte) => (
                <tr key={reporte.id}>
                  <td>{reporte.id}</td>
                  <td>{reporte.nombre}</td>
                  <td>{reporte.correoE}</td>
                  <td>
                    <button
                      className="btn btn-warning btn-sm me-2"
                      onClick={() => handleEdit(reporte)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(reporte.id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No hay reportes registrados.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ReportesAdmin;
