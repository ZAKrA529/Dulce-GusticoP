import React, { useEffect, useRef, useState } from "react";
import * as XLSX from "xlsx";
import { Chart } from "chart.js/auto";
import "bootstrap/dist/css/bootstrap.min.css";

const GraficoExcel = () => {
  const graficoRef = useRef(null);
  const instanciaGraficoRef = useRef(null);
  const [datosGrafico, setDatosGrafico] = useState({ etiquetas: [], datasets: [] });
  const [tipoGrafico, setTipoGrafico] = useState("line");
  const [hojas, setHojas] = useState([]);
  const [hojaSeleccionada, setHojaSeleccionada] = useState("");
  const [columnasDisponibles, setColumnasDisponibles] = useState([]);
  const [columnasSeleccionadas, setColumnasSeleccionadas] = useState([]);

  const manejarCargaArchivo = (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;

    const lector = new FileReader();
    lector.onload = (e) => {
      try {
        const datos = new Uint8Array(e.target.result);
        const libro = XLSX.read(datos, { type: "array" });
        setHojas(libro.SheetNames);
        setHojaSeleccionada(libro.SheetNames[0]);
        procesarHoja(libro, libro.SheetNames[0]);
      } catch (error) {
        alert("Error al leer el archivo Excel. Asegúrate de que sea válido.");
      }
    };
    lector.readAsArrayBuffer(archivo);
  };

  const procesarHoja = (libro, nombreHoja) => {
    const hoja = XLSX.utils.sheet_to_json(libro.Sheets[nombreHoja], { header: 1 });
    if (hoja.length < 2) {
      alert("El archivo Excel debe tener al menos dos filas (encabezado y datos).");
      return;
    }

    const encabezados = hoja[0];
    setColumnasDisponibles(encabezados);
    setColumnasSeleccionadas(encabezados.slice(1));

    const fechas = hoja.slice(1).map((fila) => formatearFecha(fila[0]));
    const datasets = encabezados.slice(1).map((columna, index) => ({
      label: columna,
      data: hoja.slice(1).map((fila) => fila[index + 1]),
      borderColor: `hsl(${(index * 60) % 360}, 70%, 50%)`,
      backgroundColor: `hsl(${(index * 60) % 360}, 70%, 70%)`,
      borderWidth: 2,
      tension: 0.3,
    }));

    setDatosGrafico({ etiquetas: fechas, datasets });
  };

  const formatearFecha = (fechaExcel) => {
    if (typeof fechaExcel === "number") {
      return new Date((fechaExcel - 25569) * 86400 * 1000).toISOString().split("T")[0];
    }
    return fechaExcel;
  };

  useEffect(() => {
    if (graficoRef.current && datosGrafico.etiquetas.length) {
      if (instanciaGraficoRef.current) instanciaGraficoRef.current.destroy();

      instanciaGraficoRef.current = new Chart(graficoRef.current, {
        type: tipoGrafico,
        data: {
          labels: datosGrafico.etiquetas,
          datasets: datosGrafico.datasets.filter((d) => columnasSeleccionadas.includes(d.label)),
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: "top" },
            tooltip: {
              callbacks: {
                label: (tooltipItem) => `Fecha: ${tooltipItem.label} | ${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
              },
            },
          },
          scales: {
            x: { title: { display: true, text: "Fecha" } },
            y: { beginAtZero: true, title: { display: true, text: "Valores" } },
          },
        },
      });
    }
  }, [datosGrafico, tipoGrafico, columnasSeleccionadas]);

  const descargarImagen = () => {
    if (graficoRef.current) {
      const link = document.createElement("a");
      link.href = graficoRef.current.toDataURL("image/png");
      link.download = "grafico.png";
      link.click();
    }
  };

  return (
    <div className="container mt-4">
      <div className="card shadow-sm p-3" style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h4 className="text-center">Cargar Excel y Visualizar Gráfico</h4>
        <input type="file" accept=".xlsx, .xls" onChange={manejarCargaArchivo} className="form-control my-3" />
        {hojas.length > 1 && (
          <select className="form-select mb-3" onChange={(e) => procesarHoja(XLSX.read(e.target.result, { type: "array" }), e.target.value)}>
            {hojas.map((hoja) => (
              <option key={hoja} value={hoja}>{hoja}</option>
            ))}
          </select>
        )}
        <select className="form-select mb-3" value={tipoGrafico} onChange={(e) => setTipoGrafico(e.target.value)}>
          <option value="line">Línea</option>
          <option value="bar">Barras</option>
          <option value="pie">Pastel</option>
        </select>
        <div className="mb-3">
          <label className="form-label">Seleccionar columnas a graficar:</label>
          {columnasDisponibles.map((col) => (
            <div key={col} className="form-check">
              <input type="checkbox" className="form-check-input" id={col} checked={columnasSeleccionadas.includes(col)} onChange={(e) => {
                setColumnasSeleccionadas(e.target.checked ? [...columnasSeleccionadas, col] : columnasSeleccionadas.filter(c => c !== col));
              }} />
              <label className="form-check-label" htmlFor={col}>{col}</label>
            </div>
          ))}
        </div>
        <div style={{ height: "300px" }}>
          <canvas ref={graficoRef} />
        </div>
        <button className="btn btn-primary mt-3" onClick={descargarImagen}>Descargar Imagen</button>
      </div>
    </div>
  );
};

export default GraficoExcel;