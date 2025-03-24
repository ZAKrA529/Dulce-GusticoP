import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';


function Footer() {
    return (
        <footer className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row">

                    {/* Información de Contacto */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h3 className="footer-title">Contáctanos</h3>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Nombre</label>
                                <input type="text" className="form-control" id="name" placeholder="Tu nombre" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Correo Electrónico</label>
                                <input type="email" className="form-control" id="email" placeholder="correo@ejemplo.com" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Mensaje</label>
                                <textarea className="form-control" id="message" rows="3" placeholder="Escribe tu mensaje"></textarea>
                            </div>
                            
                            
                        </form>
                    </div>

                    {/* Redes Sociales */}
                    <div className="col-md-6 d-flex flex-column align-items-md-end align-items-center">
                        <h3 className="footer-title">Síguenos en nuestras redes</h3>
                        <div className="social-icons d-flex gap-3">
                            <a href="https://www.facebook.com/dulce.gustico" target="_blank" rel="noopener noreferrer" className="me-3">
                                <FaFacebookF size={32} />
                            </a>
                            <a href="https://www.instagram.com/dulcegusticopuntarenas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="me-3">
                                <FaInstagram size={32} />
                            </a>
                            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={32} />
                            </a>
                        </div>
                    </div>

                </div>

                {/* Derechos de Autor */}
                <div className="text-center mt-4">
                    <p>&copy; 2025 Dulce Gustico Puntarenas. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
