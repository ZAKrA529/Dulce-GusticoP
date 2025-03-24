import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import ContactUs from '../Contactus/ContactUs';
import { motion } from 'framer-motion';  // Librería para animaciones

function Contactpage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-primary text-white text-center py-5" style={{ position: 'relative' }}>
        <motion.div
          className="container"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold">¡Ponte en Contacto con Nosotros!</h1>
          <p className="lead">Estamos aquí para ayudarte. Si tienes alguna pregunta, no dudes en escribirnos.</p>
        </motion.div>
      </section>

      {/* Contact Form Section */}
      <div className="FormularioContacto py-5">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h2 className="text-center mb-4">¿Querés saber más formas de comunicarte con nosotros?</h2>
          <h4 className="text-center mb-4">Aquí tenés diferentes métodos para comunicarte con nosotros</h4>
        </motion.div>

        <motion.div
          className="container"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <ul className="list-unstyled Contactenos">
            <li><strong>Números telefónicos:</strong><br /> # / #</li>
            <li><strong>Correo electrónico de nuestra empresa:</strong><br /> dulcegustico@gmail.com</li>
            <p><strong>También te dejamos dónde estamos ubicados:</strong></p>
            <li><strong>Dirección:</strong> $</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <ContactUs />
        </motion.div>
      </div>

      {/* Footer Section */}
      <footer className="bg-dark text-white text-center py-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          &copy; 2025 Dulce Gustico | Todos los derechos reservados
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
        >
          Desarrollado con 💙 en Costa Rica
        </motion.p>
      </footer>
    </div>
  );
}

export default Contactpage;
