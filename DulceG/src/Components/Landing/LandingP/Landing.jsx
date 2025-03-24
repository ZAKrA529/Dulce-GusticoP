import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Landing() {
  return (
    <div className="landing-container">

      {/* Encabezado Principal */}
      <header id='header' className="hero-section text-center text-dark p-5">
        <div className="hero-content">
          <h1 className="hero-title display-3 fw-bold">Bienvenidos a Dulce Gustico</h1>
          <p className="hero-subtitle lead">Más de 15 años endulzando los corazones de Puntarenas</p>

          <img
            src="https://scontent.fsjo7-1.fna.fbcdn.net/v/t1.6435-9/120363501_10223197542948968_6161840330648549637_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=w6ZtgYa0_EMQ7kNvgFfDG92&_nc_oc=AdlNOwYei9HdSAhilqJST5f8fyt5un-n9sL9XoXOyf0Ku6jlkpCHRsSyLz29AukUY1HDrk-IufN-F7xa3WWJ3VA4&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=XHs1GrYVCHHQdMNRMvOYng&oh=00_AYHjhwpwTwTSnR6_4KSiSN_H8fEY9-beh6JSBi38rGjGXg&oe=68044B23"
            alt="Dulce Gustico"
            className="logo img-fluid mt-4 border border-3 border-dark rounded-circle shadow-lg"
          />

          <div className="mt-5">
            <h2 className="section-title fw-semibold">Somos una pastelería de alta calidad</h2>
            <img
              src="https://i.pinimg.com/474x/4f/37/68/4f3768cb6d053c64b5593798f766b3fd.jpg"
              alt="Pastel Elegante"
              className="img-fluid mt-3 border border-3 border-dark rounded-3 w-50 shadow-sm"
            />
          </div>
        </div>
      </header>

      {/* Nuestra Historia */}
      <section className="about-section bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 display-4">Nuestra Historia</h2>
          <p className="text-center fs-5">Desde hace más de 15 años, Dulce Gustico ha deleitado a la comunidad de Puntarenas con productos frescos, recetas únicas y un toque de amor en cada creación.</p>
        </div>
      </section>

      {/* Testimonios */}
      <section className="testimonials-section container py-5">
        <h2 className="text-center mb-5 display-4">Lo que dicen nuestros clientes</h2>
        <div className="row g-4">
          {[
            "¡Increíble sabor y atención excepcional!",
            "Las tortas son un sueño, volveré siempre.",
            "Los cupcakes personalizados superaron mis expectativas."
          ].map((testimonial, index) => (
            <div className="col-md-4" key={index}>
              <div className="card p-4 shadow-lg border-0 rounded-4">
                <p className="card-text fst-italic">"{testimonial}"</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Llamado a la Acción */}
      <section className="cta-section text-center py-5 bg-warning text-white">
        <h2 className="display-4">¿Listo para endulzar tu vida?</h2>
        <button className="btn btn-light btn-lg mt-4 fw-bold">Haz tu pedido ahora</button>
      </section>

      {/* Contacto */}
      <section className="contact-section container py-5">
        <h2 className="text-center mb-4 display-4">¡Contáctanos Ahora!</h2>
        <p className="text-center fs-5">Estamos aquí para personalizar tus momentos especiales. ¡Escríbenos y descubre todo lo que podemos crear para ti!</p>
        <div className="text-center mt-4">
          <button className="btn btn-dark btn-lg">Enviar Mensaje</button>
        </div>
      </section>

    </div>
  );
}

export default Landing;
