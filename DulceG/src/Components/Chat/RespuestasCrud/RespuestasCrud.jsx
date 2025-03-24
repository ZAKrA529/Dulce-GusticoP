import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const RespuestasCRUD = () => {
    const [respuestas, setRespuestas] = useState([]);
    const [pregunta, setPregunta] = useState('');
    const [respuesta, setRespuesta] = useState('');
    const [editando, setEditando] = useState(null);

    // Cargar respuestas
    useEffect(() => {
        const cargarRespuestas = async () => {
            try {
                const { data } = await axios.get('http://localhost:3003/respuestasPersonalizadas');
                setRespuestas(data);
            } catch (error) {
                console.error('Error al cargar respuestas:', error);
            }
        };
        cargarRespuestas();
    }, []);

    // Agregar o actualizar respuesta personalizada
    const manejarRespuesta = async () => {
        if (!pregunta.trim() || !respuesta.trim()) return;

        try {
            if (editando !== null) {
                await axios.put(`http://localhost:3003/respuestasPersonalizadas/${editando}`, { pregunta, respuesta });
                setRespuestas(respuestas.map((item) => (item.id === editando ? { ...item, pregunta, respuesta } : item)));
                setEditando(null);
            } else {
                const nuevaRespuesta = { pregunta, respuesta };
                const { data } = await axios.post('http://localhost:3003/respuestasPersonalizadas', nuevaRespuesta);
                setRespuestas([...respuestas, data]);
            }

            setPregunta('');
            setRespuesta('');
        } catch (error) {
            console.error('Error al guardar respuesta:', error);
        }
    };

    // Eliminar respuesta personalizada
    const eliminarRespuesta = async (id) => {
        try {
            await axios.delete(`http://localhost:3003/respuestasPersonalizadas/${id}`);
            setRespuestas(respuestas.filter((item) => item.id !== id));
        } catch (error) {
            console.error('Error al eliminar respuesta:', error);
        }
    };

    // Editar respuesta personalizada
    const editarRespuesta = (item) => {
        setPregunta(item.pregunta);
        setRespuesta(item.respuesta);
        setEditando(item.id);
    };

    return (
        <div className="container mt-4">
            <h3 className="text-center mb-4">Administrar Respuestas Personalizadas</h3>

            <div className="input-group mb-3">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Pregunta"
                    value={pregunta}
                    onChange={(e) => setPregunta(e.target.value)}
                />
                <input
                    type="text"
                    className="form-control"
                    placeholder="Respuesta"
                    value={respuesta}
                    onChange={(e) => setRespuesta(e.target.value)}
                />
                <button className="btn btn-primary" onClick={manejarRespuesta}>
                    {editando !== null ? 'Actualizar' : 'Crear'}
                </button>
            </div>

            <ul className="list-group">
                {respuestas.map((item) => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <span>{item.pregunta} → {item.respuesta}</span>
                        <div>
                            <button className="btn btn-warning btn-sm me-2" onClick={() => editarRespuesta(item)}>
                                Editar
                            </button>
                            <button className="btn btn-danger btn-sm" onClick={() => eliminarRespuesta(item.id)}>
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RespuestasCRUD;
