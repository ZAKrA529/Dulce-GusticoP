import { FaHome, FaUser, FaPhoneAlt, FaSignInAlt, FaBoxOpen } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm custom-navbar">
      <div className="container">
        {/* Logo y Nombre */}
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img
            className="rounded-circle me-2"
            src="https://scontent.fsjo7-1.fna.fbcdn.net/v/t1.6435-9/120363501_10223197542948968_6161840330648549637_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=w6ZtgYa0_EMQ7kNvgFfDG92&_nc_oc=AdlNOwYei9HdSAhilqJST5f8fyt5un-n9sL9XoXOyf0Ku6jlkpCHRsSyLz29AukUY1HDrk-IufN-F7xa3WWJ3VA4&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=XHs1GrYVCHHQdMNRMvOYng&oh=00_AYHjhwpwTwTSnR6_4KSiSN_H8fEY9-beh6JSBi38rGjGXg&oe=68044B23"
            alt="Dulce Gustico"
            width="40"
            height="40"
          />
          <span className="fw-bold fs-5">Dulce Gustico</span>
        </a>

        {/* Botón de colapso para móviles */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Elementos del menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <FaHome className="me-2" /> Inicio
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/productos">
                <FaBoxOpen className="me-2" /> Productos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/nosotros">
                <FaUser className="me-2" /> Nosotros
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/contacto">
                <FaPhoneAlt className="me-2" /> Contacto
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/cursos">
                <FaSignInAlt className="me-2" /> Nuestros cursos
              </a>
            </li>
          </ul>
          
          {/* Botón de Registro */}
          <div className="ms-lg-3 mt-2 mt-lg-0">
            <a className="btn btn-warning fw-bold" href="/registros">
              Registro
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
