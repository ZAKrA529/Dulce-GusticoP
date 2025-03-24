import { FaHome, FaUser, FaPhoneAlt, FaSignInAlt, FaBoxOpen } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

function NavigationBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            className="DulceGustico"
            src="https://scontent.fsjo7-1.fna.fbcdn.net/v/t39.30808-6/471414918_10234609260914785_6011135909054111669_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=rYwv_JYAvjMQ7kNvgGDBzE5&_nc_oc=AdiobUkcq6FsSmDOd0r7t2SzvJEPmIrocgwEiRA_rMcrrGipoinvRfm9Wcg3dIrAEQq6OSusGxS-RVt9zC-OO88W&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=L26xlZdYImb1xiEmvsoKcw&oh=00_AYG83GP7QZxZjGhdk-BFkW3-OpEoYiBOOUC3D092wmpRjA&oe=67DAC0AE"
            alt="Dulce Gustico"
            width="30"
            height="30"
          />
          Dulce Gustico
        </a>

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
              <a className="nav-link" href="/Contacto">
                <FaPhoneAlt className="me-2" /> Contacto
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/Login">
                <FaSignInAlt className="me-2" /> Nuestros cursos
              </a>
            </li>
          </ul>
          <form className="d-flex ms-3" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
