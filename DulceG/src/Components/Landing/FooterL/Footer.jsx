import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import ContactUs from '../../Features/Contact/Contactus/ContactUs'

function Footer() {
    return (
        <footer className="footer bg-dark text-white py-5">
            <div className="container">
                <div className="row">
                    
                    {/* Información de Contacto */}
                    <div className="col-md-6 mb-4 mb-md-0">
                        <h3 className="footer-title">Contáctanos</h3>
                        <ContactUs></ContactUs>
                    </div>

                    {/* Redes Sociales */}
                    <div className="col-md-6 d-flex flex-column align-items-md align-items-center">
                        <h3 className="footer-title">Síguenos en nuestras redes de Dulce Gustico</h3>
                        <div className="social-icons d-flex gap-3">
                            <a href="https://www.facebook.com/dulce.gustico" target="_blank" rel="noopener noreferrer" className="me-">
                                <FaFacebookF size={32} />
                            </a>
                            <a href="https://www.instagram.com/dulcegusticopuntarenas?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="me-3">
                                <FaInstagram size={32} />
                            </a>
                            <a href="https://wa.me/123456789" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={32} />
                            </a><br /><br />
                        </div>
                        <div >
                        <br /><h3 className="footer-title">Horario de Atención</h3>
                        <p>Lunes a Sabado: 8:00 am - 6:00 pm</p>
                        <h1>Información del desarrollador</h1>
                        <p>Kevyn Daniel Medina Angulo</p>
                        <h3>Redes sociales del desarrollador</h3>

                        <a href="https://www.instagram.com/one_daniel001/" target="_blank" rel="noopener noreferrer" className="me-3">
                                <FaInstagram size={32} />
                            </a>

                            <a href="https://github.com/ZAKrA529" target='_blank' rel='noopener noreferrer' className="me-3">
                                <FaGithub size={32} />
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
