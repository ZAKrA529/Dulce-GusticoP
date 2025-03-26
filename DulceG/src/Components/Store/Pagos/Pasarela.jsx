import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaTrash } from 'react-icons/fa';

function Pasarela() {
    const [productosCarrito, setProductosCarrito] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem('cart');
        if (storedCart) {
            setProductosCarrito(JSON.parse(storedCart));
        }
    }, []);

    // Función para eliminar un producto del carrito
    const eliminarProducto = (index) => {
        const nuevoCarrito = productosCarrito.filter((_, i) => i !== index);
        setProductosCarrito(nuevoCarrito);
        localStorage.setItem('cart', JSON.stringify(nuevoCarrito));
    };

    return (
        <div className="container mt-4">
            <h3 className="fw-bold border-bottom pb-2">Resumen del Carrito de Compras</h3>
            <p>Su carrito contiene: {productosCarrito.length} productos</p>

            <table className="table table-bordered">
                <thead className="table-light">
                    <tr>
                        <th>Producto</th>
                        <th>Descripción</th>
                        <th>Precio Unitario</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {productosCarrito.map((producto, index) => (
                        <tr key={index}>
                            <td>
                                <img src={producto.image} alt={producto.name} className="img-fluid" style={{ width: '80px' }} />
                            </td>
                            <td>
                                <strong>{producto.name}</strong>
                                <p className="text-muted">{producto.description}</p>
                            </td>
                            <td>₡ {producto.price}</td>
                            <td>
                                <input type="number" className="form-control text-center" value={1} readOnly style={{ width: '60px' }} />
                            </td>
                            <td>₡ {producto.price}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => eliminarProducto(index)}>
                                    <FaTrash /> {/* Ícono de basura */}
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Resumen del total */}
            <div className="text-end">
                <p className="fw-bold">Total productos: ₡ {productosCarrito.reduce((total, p) => total + p.price, 0)}</p>
                <p className="fw-bold">Envío total: ₡ 2,500</p>
                <h4 className="fw-bold">TOTAL: ₡ {productosCarrito.reduce((total, p) => total + p.price, 0) + 2500}</h4>
            </div>

            <button className="btn btn-primary mt-3">Seguir Comprando</button>
        </div>
    );
}

export default Pasarela;
