'use client';

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData } from 'chart.js';

// Registrar los elementos necesarios para el gráfico
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const ModelComparisonSection = () => {
  const [data, setData] = useState<ChartData<'bar', number[], string> | null>(null);

  useEffect(() => {
    const labels = ['V8', 'V9', 'V10', 'V11', 'V12'];
    const originalData = {
      autoarima: [5.4, 3.1, 7.9, 2.5, 6.2],
      lstm: [5.1, 3.3, 8.1, 2.4, 6.4],
      cnn: [5.3, 3.2, 7.7, 2.6, 6.1],
      autoencoder: [5.2, 3.0, 7.8, 2.5, 6.3],
    };

    const chartData: ChartData<'bar', number[], string> = {
      labels,
      datasets: [
        {
          label: 'AutoARIMA',
          data: originalData.autoarima,
          backgroundColor: 'rgba(48, 97, 181, 0.7)', // Azul oscuro
          borderColor: 'rgba(25, 50, 112, 1)', // Azul más oscuro
          borderWidth: 1,
        },
        {
          label: 'LSTM',
          data: originalData.lstm,
          backgroundColor: 'rgba(72, 130, 180, 0.7)', // Azul medio
          borderColor: 'rgba(49, 85, 120, 1)', // Azul más oscuro
          borderWidth: 1,
        },
        {
          label: 'CNN',
          data: originalData.cnn,
          backgroundColor: 'rgba(111, 161, 220, 0.7)', // Azul claro
          borderColor: 'rgba(78, 132, 188, 1)', // Azul más oscuro
          borderWidth: 1,
        },
        {
          label: 'Autoencoder',
          data: originalData.autoencoder,
          backgroundColor: 'rgba(137, 185, 243, 0.7)', // Azul pálido
          borderColor: 'rgba(94, 132, 180, 1)', // Azul más oscuro
          borderWidth: 1,
        },
      ],
    };

    setData(chartData);
  }, []);

  const predictions = [
    { variable: 'V8', autoarima: 5.4, lstm: 5.1, cnn: 5.3, autoencoder: 5.2 },
    { variable: 'V9', autoarima: 3.1, lstm: 3.3, cnn: 3.2, autoencoder: 3.0 },
    { variable: 'V10', autoarima: 7.9, lstm: 8.1, cnn: 7.7, autoencoder: 7.8 },
    { variable: 'V11', autoarima: 2.5, lstm: 2.4, cnn: 2.6, autoencoder: 2.5 },
    { variable: 'V12', autoarima: 6.2, lstm: 6.4, cnn: 6.1, autoencoder: 6.3 },
  ];

  return (
    <section className="bg-[#1f1f1f] text-gray-200 pt-20 pb-10 px-8 mx-auto max-w-6xl space-y-12">
      <h2 className="text-3xl font-semibold text-blue-400 text-center">Resultados de Comparación de Modelos</h2>

      <p className="text-gray-300 text-justify">
        Esta sección presenta las predicciones realizadas por diferentes modelos (AutoARIMA, LSTM, CNN y Autoencoder) para varias variables de salida.
        Los resultados se comparan de dos maneras: primero, mediante una tabla que resume las predicciones, y segundo, con un gráfico de barras que compara visualmente el rendimiento de cada modelo.
      </p>

      <div className="overflow-hidden mx-auto">
        <table className="bg-[#2c2c2c] text-gray-200 p-4 rounded-md w-full text-center border-collapse text-sm">
          <thead>
            <tr>
              <th className="px-4 py-2">Variable de Salida</th>
              <th className="px-4 py-2">AutoARIMA</th>
              <th className="px-4 py-2">LSTM</th>
              <th className="px-4 py-2">CNN</th>
              <th className="px-4 py-2">Autoencoder</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((prediction, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{prediction.variable}</td>
                <td className="px-4 py-2">{prediction.autoarima}</td>
                <td className="px-4 py-2">{prediction.lstm}</td>
                <td className="px-4 py-2">{prediction.cnn}</td>
                <td className="px-4 py-2">{prediction.autoencoder}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-2xl font-semibold text-blue-400 text-center">Comparación Visual de Predicciones</h3>
        <p className="text-gray-300 text-justify mt-4">
          El siguiente gráfico de barras compara los valores predichos por cada modelo para las diferentes variables de salida. Los valores se muestran tal como son, manteniendo su escala original.
        </p>
        {data ? (
          <Bar data={data} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
        ) : (
          <p>Cargando gráfico...</p>
        )}
      </div>
    </section>
  );
};

export default ModelComparisonSection;
