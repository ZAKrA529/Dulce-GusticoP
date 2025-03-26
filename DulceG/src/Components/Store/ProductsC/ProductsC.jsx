import React, { useState, useEffect } from 'react';
import productos from '../../../Services/productos';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShoppingCart, FaDelicious } from 'react-icons/fa';
import Swal from 'sweetalert2';

function ProductsC() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const fetchedProducts = await productos.GetProducts();
                setProducts(fetchedProducts.slice(0, 20)); // Limitar a 20 productos
            } catch (error) {
                console.error("Error al obtener los productos:", error);
            }
        };
        fetchProducts();
    }, []);

    const addToCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        localStorage.setItem('cart', JSON.stringify(newCart));
    
        Swal.fire({
            title: '¡Producto añadido!',
            text: `Has añadido ${product.name} al carrito!`,
            icon: 'success',
            confirmButtonText: '¡Genial!'
        });
    };
    

    return (
        <div className="container py-5 position-relative">
            {/* Icono del carrito en la esquina superior derecha */}
            <div className="position-absolute top-0 end-0 m-4">
                <button className="btn btn-outline-primary">
                    <a href="pasarela"><FaShoppingCart size={24} />
                    <span className="badge bg-danger ms-2">{cart.length}</span>.</a>
                    
                </button>
            </div>

            <h2 className="text-center mb-4">Productos</h2>

            <div className="row row-cols-1 row-cols-md-4 g-4">
                {products.length > 0 ? (
                    products.map((product) => (
                        <div className="col" key={product.id}>
                            <div className="card h-100 shadow-sm border-light rounded">
                                <img src={product.image} alt={product.name} className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text fw-bold">₡{product.price}</p>
                                    <button
                                    
                                        className="btn btn-primary"
                                        onClick={() => addToCart(product)}
                                    >
                                        <FaShoppingCart className="me-2" /> Añadir al carrito
                                    </button>

                                    <button className='btn btn-secundarie'
                                    
                                    >
                                        <FaDelicious className="me-2" />
                                        Ver descripción</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center">Cargando productos...</p>
                )}
            </div>
        </div>
    );
}

export default ProductsC;
