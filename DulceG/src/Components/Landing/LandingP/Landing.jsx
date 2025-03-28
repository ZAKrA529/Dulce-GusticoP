import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const categories = [
  { title: "Queques", image: "https://i.pinimg.com/474x/ff/40/28/ff4028cceab0ff1dbc2bf60b4be6e9cf.jpg" },
  { title: "Lunch Box Cake", image: "https://i.pinimg.com/474x/a1/0f/59/a10f59eff5a6e675489f13d7e9c6b40f.jpg" },
  { title: "Especiales del Mes", image: "https://i.pinimg.com/474x/71/33/e1/7133e1bf899c6fa29134b30b30ea3336.jpg" },
  { title: "Fast Pickup", image: "https://i.pinimg.com/474x/27/76/cd/2776cdaeae393e8b51653cb388f6dec5.jpg" },
  { title: "Nosotros", image: "https://scontent.fsjo7-1.fna.fbcdn.net/v/t1.6435-9/120363501_10223197542948968_6161840330648549637_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=w6ZtgYa0_EMQ7kNvgFfDG92&_nc_oc=AdlNOwYei9HdSAhilqJST5f8fyt5un-n9sL9XoXOyf0Ku6jlkpCHRsSyLz29AukUY1HDrk-IufN-F7xa3WWJ3VA4&_nc_zt=23&_nc_ht=scontent.fsjo7-1.fna&_nc_gid=XHs1GrYVCHHQdMNRMvOYng&oh=00_AYHjhwpwTwTSnR6_4KSiSN_H8fEY9-beh6JSBi38rGjGXg&oe=68044B23"}
];

const CakeGallery = () => {
  return (
    <div className="container py-5">
      <div className="row g-3">
        <div className="col-md-6">
          <div className="card text-white">
            <img src={categories[0].image} className="card-img" alt={categories[0].title} />
            <div className="card-img-overlay d-flex align-items-start p-2">
              <h5 className="bg-dark px-3 py-2 rounded text-white">{categories[0].title}</h5>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="row g-3">
            {categories.slice(1).map((category, index) => (
              <div className="col-md-6" key={index}>
                <div className="card text-white">
                  <img src={category.image} className="card-img" alt={category.title} />
                  <div className="card-img-overlay d-flex align-items-start p-2">
                    <h6 className="bg-dark px-2 py-1 rounded text-white">{category.title}</h6>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CakeGallery;