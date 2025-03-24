import React, { useState, useEffect } from 'react';
import productos from '../../../Services/productos';  // Importar el objeto por defecto
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { FaShoppingCart, FaTrash } from 'react-icons/fa';  
import Swal from 'sweetalert2'; 

function ProductsC() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]); // Aquí se almacenarán los productos añadidos al carrito

    // Función para obtener los productos desde la API
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await productos.GetProducts();  // Usar GetProducts desde el objeto
                setProducts(fetchedProducts);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchProducts();
    }, []); // Este efecto se ejecuta solo una vez cuando el componente se monta

    // Función para agregar productos al carrito
    const addToCart = (product) => {
        setCart([...cart, product]); // Añade el producto al carrito

        // Mostrar alerta con SweetAlert2
        Swal.fire({
            title: `${product.name}`,
            text: `¡Has añadido ${product.name} al carrito!`,
            icon: 'success',
            confirmButtonText: '¡Genial!'
        });
    };

     const btnEliminar = (index) => {
        const newCart = [...cart]
        newCart.splice(index, 1);
        setCart(newCart)
     }

    return (
        <div className="container py-5">
            <h2 className="text-center mb-4">Productos</h2>
            <div className="row">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card shadow-sm border-light rounded">
                                <img src={product.image} alt={product.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text font-weight-bold">${product.price}</p>
                                    <button
                                        className="btn btn-primary d-flex align-items-center"
                                        onClick={() => addToCart(product)} // Agrega el producto al carrito
                                    >
                                        <FaShoppingCart className="mr-2" /> Añadir al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">Cargando productos...</p>
                )}
            </div>

            {/* Resumen del carrito */}
            <div className="mt-4">
                <h4>Carrito de compras <FaShoppingCart /></h4>
                {cart.length > 0 ? (
                    <ul className="list-group">
                        {cart.map((item, index) => (
                            <li className="list-group-item" key={index}>
                                {item.name} - ${item.price}
                                <button
                                    className='btn btn-secundarie d-flex aling-items-center'
                                    onClick={() => btnEliminar(index)}


                                    ><FaTrash></FaTrash></button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>No has añadido productos al carrito.</p>
                )}
            </div>
        </div>
    );
}

export default ProductsC;
