import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Adds() {
    const [ads, setAds] = useState([]);
    const [newAd, setNewAd] = useState("");
    const [imaUrl, setImageUrl] = useState('');

    // Función para agregar un anuncio con imagen
    const agregarAdd = () => {
        if (newAd.trim() !== "" && imaUrl.trim() !== "") {
            setAds([...ads, { text: newAd, image: imaUrl }]);
            setNewAd("");
            setImageUrl("");
        }
    };

    return (
        <div className="container mt-5">
            <h1 className="text-center mb-4">Creador de Anuncios</h1>
            <details className="mb-4">
                <summary>
                    <h2 className="h4">Crear un anuncio</h2>
                </summary>
                <div className="card p-4 shadow-sm">
                    <div className="mb-3">
                        <input
                            type="text"
                            value={newAd}
                            onChange={(e) => setNewAd(e.target.value)}
                            placeholder='Escribe un anuncio'
                            className="form-control mb-2"
                        />

                        <input
                            type="text"
                            value={imaUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                            placeholder='URL de la imagen'
                            className="form-control mb-3"
                        />

                        <button onClick={agregarAdd} className="btn btn-primary">Crear Anuncio</button>
                    </div>
                </div>
            </details>

            <div className="row mt-4">
                {ads.map((ad, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card shadow-sm">
                            <img src={ad.image} alt="Anuncio" className="card-img-top" />
                            <div className="card-body">
                                <p className="card-text">{ad.text}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Adds;
