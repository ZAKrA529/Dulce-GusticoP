import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';


Chart.register(...registerables);

function ExcelChart() {
  const [chartData, setChartData] = useState([]);
  const chartRef = React.useRef(null);
  let myChart = null;

  const readExcel = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      
      // Extraer datos (asumiendo columnas: "Etiqueta" y "Valor")
      const labels = sheetData.map((item) => item.Etiqueta);
      const values = sheetData.map((item) => item.Valor);

      setChartData({ labels, values });
    };
    reader.readAsArrayBuffer(file);
  };

  useEffect(() => {
    if (chartRef.current && chartData.labels) {
      if (myChart) myChart.destroy(); // Destruir gráfico previo
      myChart = new Chart(chartRef.current, {
        type: 'bar',
        data: {
          labels: chartData.labels,
          datasets: [
            {
              label: 'Datos desde Excel',
              data: chartData.values,
              backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
          ],
        },
      });
    }
  }, [chartData]);

  return (
    <div>
      <h2>Gráfico conectado a Excel</h2>
      <input
        type="file"
        accept=".xlsx, .xls"
        onChange={(e) => readExcel(e.target.files[0])}
      />
      <canvas ref={chartRef}></canvas>
    </div>
  );
}

export default ExcelChart;
