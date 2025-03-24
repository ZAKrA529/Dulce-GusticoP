import React, {useEffect, useRef} from 'react'

function Grafica() {

    const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    // Datos de ejemplo donde iran los datos del Excel
    const datos = [10, 40, 30, 2];
    const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"];
    const colores = ["red", "blue", "green", "orange"];
    // Configuración de la gráfica
    const anchoBarra = 50;
    const espacio = 30;
    const margenIzquierdo = 50;
    const margenInferior = 30;
    const alturaMax = 150; // Altura máxima de la barra
    // Limpiar el canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // Dibujar barras
    datos.forEach((valor, index) => {
      const x = margenIzquierdo + index * (anchoBarra + espacio);
      const y = canvas.height - margenInferior - (valor * alturaMax) / 50; // Escalar altura
      ctx.fillStyle = colores[index];
      ctx.fillRect(x, y, anchoBarra, (valor * alturaMax) / 50); // Dibujar barra
      // Dibujar etiquetas
      ctx.fillStyle = "black";
      ctx.fillText(etiquetas[index], x + 10, canvas.height - 10);
    });
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={400} height={200} style={{ border: "1px solid black" }}></canvas>
    </div>
  )
}

export default Grafica
