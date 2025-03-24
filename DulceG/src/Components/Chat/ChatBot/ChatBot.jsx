import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { obtenerRespuesta } from '../openiaservice';
import 'bootstrap/dist/css/bootstrap.min.css';

function ChatBot() {
    const [mensaje, setMensaje] = useState('');
    const [historial, setHistorial] = useState([]);
    const [respuestasPersonalizadas, setRespuestasPersonalizadas] = useState([]);
    const [mostrarChat, setMostrarChat] = useState(false);

    useEffect(() => {
        const cargarDatos = async () => {
            try {
                const [mensajeRes, respuestaRes] = await Promise.all([
                    axios.get('http://localhost:3003/Mensajes'),
                    axios.get('http://localhost:3003/respuestasPersonalizadas')
                ]);
                setHistorial(mensajeRes.data);
                setRespuestasPersonalizadas(respuestaRes.data);

                // Agregar las preguntas frecuentes al chat
                const preguntasIniciales = respuestaRes.data.map(item => ({ remitente: 'bot', texto: item.pregunta }));
                setHistorial(prevHistorial => [...prevHistorial, ...preguntasIniciales]);
            } catch (error) {
                console.error('Error al cargar datos:', error);
            }
        };
        cargarDatos();
    }, []);

    const buscarRespuestaPersonalizada = (mensaje) => {
        if (!mensaje || !Array.isArray(respuestasPersonalizadas)) return null;

        const respuesta = respuestasPersonalizadas.find((item) =>
            mensaje.toLowerCase().includes(item.pregunta?.toLowerCase())
        );

        return respuesta ? respuesta.respuesta : null;
    };

    const envioMensaje = async (e) => {
        e.preventDefault();
        if (!mensaje.trim()) return;

        const nuevoHistorial = [...historial, { remitente: 'usuario', texto: mensaje }];
        setHistorial(nuevoHistorial);
        setMensaje('');

        try {
            const respuestaPersonalizada = buscarRespuestaPersonalizada(mensaje);

            const respuestaBot = respuestaPersonalizada || await obtenerRespuesta(mensaje);

            const nuevoMensajeBot = { remitente: 'bot', texto: respuestaBot };
            const historialActualizado = [...nuevoHistorial, nuevoMensajeBot];
            setHistorial(historialActualizado);

            await axios.post('http://localhost:3003/Mensajes', { remitente: 'usuario', texto: mensaje });
            await axios.post('http://localhost:3003/Mensajes', nuevoMensajeBot);
        }
        catch (error) {
            console.error('Error al enviar el mensaje:', error);
        }
    };

    const alternarChat = () => setMostrarChat(!mostrarChat);

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Chat de la Pastelería</h2>

            <img
                src="https://i.pinimg.com/736x/54/41/cf/5441cf0924b4af11d86d537d29c3a084.jpg"
                alt="Chat"
                style={{ width: '150px', cursor: 'pointer' }}
                onClick={alternarChat}
            />

            {mostrarChat && (
                <div className="card shadow-sm mt-4" style={{ height: '400px', overflowY: 'auto' }}>
                    <div className="card-body">
                        {historial.map((msg, index) => (
                            <div
                                key={index}
                                className={`d-flex ${msg.remitente === 'usuario' ? 'justify-content-end' : 'justify-content-start'} mb-2`}
                            >
                                <div className="p-2 rounded bg-light shadow-sm">
                                    <strong>{msg.remitente === 'usuario' ? 'Tú' : '🧁 Bot'}:</strong> {msg.texto}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="input-group mt-3">
                        <input
                            type="text"
                            value={mensaje}
                            onChange={(e) => setMensaje(e.target.value)}
                            placeholder="Escribe un mensaje..."
                            className="form-control"
                        />
                        <button
                            onClick={envioMensaje}
                            className="btn btn-pink"
                        >
                            <i className="bi bi-send"></i> Enviar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatBot;
