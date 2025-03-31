import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NavP() {
  const [search, setSearch] = useState('');
  const [productos, setProductos] = useState([]);
  const [filteredProductos, setFilteredProductos] = useState([]);

  // Cargar productos desde el servidor JSON
  useEffect(() => {
    axios.get('http://localhost:3003/productosC')
      .then((response) => {
        setProductos(response.data);
        setFilteredProductos(response.data);
      })
      .catch((error) => console.error('Error al cargar los productos:', error));
  }, []);

  // Manejar el cambio en la búsqueda
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearch(query);

    // Filtrar los productos según la búsqueda
    const filtered = productos.filter((producto) =>
      producto.nombre.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProductos(filtered);
  };

  // Prevenir el envío del formulario para evitar recargar la página
  const handleSubmit = (event) => {
    event.preventDefault(); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Productos Dulce Gustico</a>
        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar productos..."
            aria-label="Buscar"
            value={search}
            onChange={handleSearchChange}
          />
          <button className="btn btn-outline-success" type="submit">Buscar</button>
        </form>
      </div>

     
    </nav>
  );
}

export default NavP;
