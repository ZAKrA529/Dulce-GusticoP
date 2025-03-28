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

            setTimeout(async () => {
                const nuevoMensajeBot = { remitente: 'bot', texto: respuestaBot };
                const historialActualizado = [...nuevoHistorial, nuevoMensajeBot];
                setHistorial(historialActualizado);

                await axios.post('http://localhost:3003/Mensajes', { remitente: 'usuario', texto: mensaje });
                await axios.post('http://localhost:3003/Mensajes', nuevoMensajeBot);
            }, 1500);

        } catch (error) {
            console.error('Error al enviar el mensaje:', error);
        }
    };

    const alternarChat = () => setMostrarChat(!mostrarChat);

    return (
        <div className="chatbot-container" style={{ position: 'fixed', bottom: '50px', right: '50px', zIndex: 9999 }}>
            <img
                src="https://i.pinimg.com/474x/c3/a0/37/c3a037cccfcb72122a41db7ac808e4c7.jpg"
                alt="Chat"
                style={{ width: '80px', cursor: 'pointer' }}
                onClick={alternarChat}
            />

            {mostrarChat && (
                <div className="card shadow-sm" style={{ width: '350px', height: '500px', overflowY: 'auto' }}>
                    <div className="card-header bg-primary text-white">🧁 Chat de la Pastelería</div>
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

                    <div className="card-footer">
                        <div className="input-group">
                            <input
                                type="text"
                                value={mensaje}
                                onChange={(e) => setMensaje(e.target.value)}
                                placeholder="Escribe un mensaje..."
                                className="form-control"
                            />
                            <button
                                onClick={envioMensaje}
                                className="btn btn-primary"
                            >
                                <i className="bi bi-send"></i> Enviar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ChatBot;