import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "bootstrap/dist/css/bootstrap.min.css";
import Swal from 'sweetalert2';
import { BsPerson, BsEnvelope, BsFillChatDotsFill } from 'react-icons/bs'; // Aquí agregamos los íconos

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_xn7vhm9', 'template_skae75q', form.current, {
        publicKey: '9pkN5JMayp3RkI8GX',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  let timerInterval;
Swal.fire({
  title: "Auto close alert!",
  html: "I will close in <b></b> milliseconds.",
  timer: 1,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});

  return (
    <div className="container py-5 w-10">
      <div className="row justify-content-center">
        <div className="col-md-15 border border-4 border-dark">
          {/* Form Card */}
          <div className="card shadow-sm">
            <div className="card-body w-100">
              <h3 className="card-title text-center mb-4">Contáctanos</h3>
              <form ref={form} onSubmit={sendEmail}>
                <div className="mb-3 W-50">
                  <label className="form-label " htmlFor="user_name">
                    <BsPerson className="me-2" /> Nombre
                  </label>
                  <input
                  placeholder='Tu nombre'
                    type="text"
                    className="form-control form-control-sm"
                    id="user_name"
                    name="user_name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label" htmlFor="user_email">
                    <BsEnvelope className="me-2" /> Correo Electrónico
                  </label>
                  <input
                  placeholder='medinakevinangulo@gmail.com'
                    type="email"
                    className="form-control form-control-sm"
                    id="user_email"
                    name="user_email"
                    required
                  />
                </div>

                <div className="mb-3 form-group">
                  <label className="form-label" htmlFor="message">
                    <BsFillChatDotsFill className="me-2" /> Mensaje
                  </label>
                  <textarea
                  placeholder='Escribe tu mensaje acerca de tu consulta'
                    className="form-control form-control-sm"
                    id="message"
                    name="message"
                    rows="3"
                    required
                  ></textarea>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary btn-sm">
                    Enviar Mensaje
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
