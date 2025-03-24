import axios from 'axios';
// Usa tu propia clave de OpenAI
const openAiApiKey = 'process.env.REACT_APP_OPENAI_API_KEY';

export const obtenerRespuesta = async (mensaje) => {
    try {
        const respuesta = await axios.post(
            '',
            {
                model: 'gpt-3.5-turbo',
                messages: [{ role: 'user', content: mensaje }],
                temperature: 0.7,
            },
            {
                headers: {
                    'Authorization': `Bearer ${openAiApiKey}`,
                    'Content-Type': 'application/json',
                },
            }
        );

        return respuesta.data.choices[0].message.content.trim();
    } catch (error) {
        console.error('Error en OpenAI:', error);
        return 'Hubo un error, intenta más tarde.';
    }
};
