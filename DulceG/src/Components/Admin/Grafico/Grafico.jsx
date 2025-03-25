import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";
import { Chart } from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";

const GraficoExcel = () => {
  const graficoRef = useRef(null);
  const [datosGrafico, setDatosGrafico] = useState({ etiquetas: [], valores: [] });
  const instanciaGraficoRef = useRef(null);

  // Función para procesar el archivo Excel
  const manejarCargaArchivo = (e) => {
    const archivo = e.target.files[0];
    if (archivo) {
      const lector = new FileReader();

      lector.onload = (e) => {
        const datos = new Uint8Array(e.target.result);
        const libro = XLSX.read(datos, { type: "array" });

        // Tomar la primera hoja del Excel
        const nombreHoja = libro.SheetNames[0];
        const hoja = XLSX.utils.sheet_to_json(libro.Sheets[nombreHoja], { header: 1 });

        // Validar que al menos haya dos columnas
        if (hoja.length < 2 || hoja[0].length < 2) {
          alert("El archivo Excel debe tener al menos dos columnas (Fecha y Valor).");
          return;
        }

        // Extraer las fechas y valores
        const fechas = hoja.slice(1).map((fila) => formatearFecha(fila[0]));
        const valores = hoja.slice(1).map((fila) => fila[1]);

        setDatosGrafico({ etiquetas: fechas, valores });
      };

      lector.readAsArrayBuffer(archivo);
    }
  };

  // Función para formatear las fechas
  const formatearFecha = (fechaExcel) => {
    // Si es un número (formato de fecha en Excel), lo convertimos a fecha
    if (typeof fechaExcel === "number") {
      const fecha = new Date((fechaExcel - 25569) * 86400 * 1000);
      return fecha.toISOString().split("T")[0]; // Devuelve en formato YYYY-MM-DD
    }
    return fechaExcel; // Si ya está formateado, lo dejamos igual
  };

  // Renderiza el gráfico cuando los datos cambian
  useEffect(() => {
    if (graficoRef.current && datosGrafico.etiquetas.length) {
      if (instanciaGraficoRef.current) instanciaGraficoRef.current.destroy(); // Destruye el gráfico anterior si existe

      instanciaGraficoRef.current = new Chart(graficoRef.current, {
        type: "line", // Gráfico de líneas
        data: {
          labels: datosGrafico.etiquetas,
          datasets: [
            {
              label: "Tendencia por Fecha",
              data: datosGrafico.valores,
              borderColor: "rgba(54, 162, 235, 1)",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderWidth: 2,
              tension: 0.3, // Suaviza las líneas
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "top" },
            tooltip: {
              callbacks: {
                // Muestra la fecha y el valor en el tooltip
                label: (tooltipItem) =>
                  `Fecha: ${tooltipItem.label} | Valor: ${tooltipItem.raw}`,
              },
            },
          },
          scales: {
            x: {
              title: {
                display: true,
                text: "Fecha",
              },
            },
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: "Valor",
              },
            },
          },
        },
      });
    }
  }, [datosGrafico]);

  return (
    <div className="container mt-4">
      <div className="card shadow-sm" style={{ maxWidth: "600px", margin: "0 auto" }}>
        <div className="card-body">
          <h4 className="card-title text-center mb-3">📊 Cargar Excel y Visualizar Tendencias</h4>
          <input
            type="file"
            accept=".xlsx, .xls"
            onChange={manejarCargaArchivo}
            className="form-control mb-4"
          />
          <div style={{ height: "300px" }}>
            <canvas ref={graficoRef} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GraficoExcel;