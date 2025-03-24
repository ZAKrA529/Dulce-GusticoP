import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from '..//Contactus/ContactUs';



function Contactpage() {

    
    return (
        <div>
            {/* Hero Section */}
            <section className="hero bg-primary text-white text-center py-5">
                <div className="container">
                    <h1 className="display-4">¡Ponte en Contacto con Nosotros!</h1>
                    <p className="lead">Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en escribirnos.</p>
                </div>
            </section>

            {/* Contact Form Section */}
            <div className='FormularioContacto'>
                <h1>¿Querés saber más formas de comunicarte con nosotros?</h1><br />
                <h3>Aquí tenes diferentes metodos para comunicarte con nosotros</h3><br />
                <ul className='Contactenos'>
                    <li>Numeros telefonicos <br />: # / #</li><br />
                    <li>Correo electronico de nuestra empresa: <br />      dulcegustico@gmail.com</li><br />
                    <p>Tambien te dejamos donde estamos ubicados</p>
                    <li>$</li>
                </ul>

            <ContactUs></ContactUs>
            </div>

            {/* Footer Section */}
            <footer className="bg-dark text-white text-center py-4">
                <p>&copy; 2025 Dulce Gustico | Todos los derechos reservados</p>
                <p>Desarrollado con 💙 en Costa Rica</p>
            </footer>
        </div>
    );
}

export default Contactpage;
