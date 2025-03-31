import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PgVentas() {
  const [ventas, setVentas] = useState([]);
  const [formData, setFormData] = useState({
    fecha: "",
    producto: "",
    cantidad: "",
    precio: "",
    cliente: "",
  });

  useEffect(() => {
    cargarVentas();
  }, []);

  const cargarVentas = async () => {
    try {
      const response = await fetch("http://localhost:3003/ventas");
      const data = await response.json();
      setVentas(data);
    } catch (error) {
      console.error("Error cargando ventas:", error);
    }
  };

  const manejarCambio = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const manejarEnvio = async (e) => {
    e.preventDefault();
    const nuevaVenta = { ...formData, id: Date.now() };

    try {
      const response = await fetch("http://localhost:3003/ventas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(nuevaVenta),
      });

      if (!response.ok) throw new Error("Error agregando venta");

      setVentas([...ventas, nuevaVenta]);
      setFormData({ fecha: "", producto: "", cantidad: "", precio: "", cliente: "" });
    } catch (error) {
      console.error("Error agregando venta:", error);
    }
  };

  const eliminarVenta = async (id) => {
    try {
      const response = await fetch(`http://localhost:3003/ventas/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error eliminando venta");

      setVentas(ventas.filter((venta) => venta.id !== id));
    } catch (error) {
      console.error("Error eliminando venta:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Administración de Ventas</h2>
      <div className="card p-3 shadow-sm">
        <h4>Agregar Venta</h4>
        <form onSubmit={manejarEnvio} className="mb-3">
          <div className="row">
            <div className="col-md-4">
              <label className="form-label">Fecha:</label>
              <input type="date" name="fecha" className="form-control" value={formData.fecha} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Producto:</label>
              <input type="text" name="producto" className="form-control" value={formData.producto} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Cantidad:</label>
              <input type="number" name="cantidad" className="form-control" value={formData.cantidad} onChange={manejarCambio} required />
            </div>
          </div>
          <div className="row mt-2">
            <div className="col-md-4">
              <label className="form-label">Precio:</label>
              <input type="number" name="precio" className="form-control" value={formData.precio} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4">
              <label className="form-label">Cliente:</label>
              <input type="text" name="cliente" className="form-control" value={formData.cliente} onChange={manejarCambio} required />
            </div>
            <div className="col-md-4 d-flex align-items-end">
              <button type="submit" className="btn btn-success w-100">Agregar</button>
            </div>
          </div>
        </form>
      </div>

      <div className="card p-3 shadow-sm mt-4">
        <h4>Lista de Ventas</h4>
        {ventas.length === 0 ? (
          <p className="text-muted">No hay ventas registradas.</p>
        ) : (
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th>Cliente</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ventas.map((venta) => (
                <tr key={venta.id}>
                  <td>{venta.fecha}</td>
                  <td>{venta.producto}</td>
                  <td>{venta.cantidad}</td>
                  <td>₡{venta.precio}</td>
                  <td>₡{(venta.cantidad * venta.precio).toFixed(2)}</td>
                  <td>{venta.cliente}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={() => eliminarVenta(venta.id)}>Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default PgVentas;
