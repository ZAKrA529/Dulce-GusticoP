import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const images = [
  { src: "https://i.pinimg.com/474x/6f/fb/1f/6ffb1f146b552a5d6aedecd596b38678.jpg", caption: "Delicioso queque clásico" },
  { src: "https://i.pinimg.com/474x/e1/68/d3/e168d3a0d00c24d936a6b0421bacf98c.jpg", caption: "Queques personalizados para toda ocasión" },
  { src: "https://i.pinimg.com/736x/b1/a7/85/b1a785d757ea0d08eee4bc42192fb108.jpg", caption: "Repostería con ingredientes frescos" },
];

function Carrusel() {
  return (
    <div id="cakeCarousel" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#cakeCarousel"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>
      
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <img src={image.src} className="d-block w-100" alt={`Slide ${index + 1}`} />
            <div className="carousel-caption d-none d-md-block">
              <h5>{image.caption}</h5>
            </div>
          </div>
        ))}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target="#cakeCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#cakeCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
}

export default Carrusel;
