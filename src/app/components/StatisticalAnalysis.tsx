'use client';

import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData } from 'chart.js';

// Registrar los elementos necesarios para el gráfico
ChartJS.register(CategoryScale, LinearScale, LineElement, Title, Tooltip, Legend);

const StatisticalAnalysisSection = () => {
    const [friedmanData, setFriedmanData] = useState<ChartData<'line', number[], string> | null>(null);
    const [nemenyiData, setNemenyiData] = useState<number[][]>([]);

    useEffect(() => {
        const friedmanResults = {
            testStatistic: 3.0,
            pValue: 0.3916, // Resultado actualizado de la prueba de Friedman
        };

        const nemenyiResults: number[][] = [
            [1.0000, 0.389401, 1.0000, 0.389401],
            [0.389401, 1.0000, 0.389401, 1.0000],
            [1.0000, 0.389401, 1.0000, 0.389401],
            [0.389401, 1.0000, 0.389401, 1.0000],
        ];

        const friedmanChartData: ChartData<'line', number[], string> = {
            labels: ['Test Statistic', 'p-value'],
            datasets: [
                {
                    label: 'Prueba de Friedman',
                    data: [friedmanResults.testStatistic * 2, friedmanResults.pValue * 10],
                    borderColor: '#46b1e2',
                    backgroundColor: 'rgba(70, 177, 226, 0.3)',
                    tension: 0.4,
                    fill: true,
                    pointRadius: 5,
                    pointBackgroundColor: '#46b1e2',
                    borderWidth: 2,
                },
            ],
        };

        setFriedmanData(friedmanChartData);
        setNemenyiData(nemenyiResults);
    }, []);

    return (
        <section className="bg-[#1f1f1f] text-gray-200 pt-20 pb-10 px-8 mx-auto max-w-6xl space-y-12">
            <h2 className="text-3xl font-semibold text-blue-400 text-center">Análisis Estadístico</h2>

            <p className="text-gray-300 text-justify">
                En esta sección, presentamos el análisis estadístico realizado sobre los modelos predictivos, incluyendo la prueba de Friedman y la prueba post-hoc de Nemenyi. Estos tests ayudan a evaluar la significancia de las diferencias entre los modelos y proporcionan una comprensión más profunda de su rendimiento relativo.
            </p>

            <div className="overflow-hidden mx-auto">
                <h3 className="text-2xl font-semibold text-blue-400 text-center">Resultados de la Prueba de Friedman</h3>
                <p className="text-gray-300 text-justify mt-4">
                    La prueba de Friedman se utiliza para determinar si existen diferencias estadísticamente significativas en el rendimiento de los modelos. Un valor de p menor a 0.05 indicaría que existen diferencias significativas entre los modelos. En este caso, el valor de p es 0.3916, lo que indica que no hay diferencias significativas entre los modelos.
                </p>
                <div className="w-full text-center mt-4">
                    {friedmanData ? (
                        <Line data={friedmanData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
                    ) : (
                        <p>Cargando gráfico...</p>
                    )}
                </div>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-blue-400 text-center">Prueba Post-Hoc de Nemenyi</h3>
                <p className="text-gray-300 text-justify mt-4">
                    La prueba de Nemenyi se realiza para identificar qué pares específicos de modelos tienen diferencias significativas después de la prueba de Friedman. La siguiente matriz resume los valores p para las comparaciones entre los modelos.
                </p>
                <div className="overflow-x-auto mt-6">
                    <table className="bg-[#1f1f1f] text-gray-200 p-4 rounded-lg shadow-lg w-full text-center border-collapse text-sm">
                        <thead>
                            <tr>
                                <th className="px-6 py-3">Modelo</th>
                                <th className="px-6 py-3">AutoARIMA</th>
                                <th className="px-6 py-3">LSTM</th>
                                <th className="px-6 py-3">CNN</th>
                                <th className="px-6 py-3">AutoEncoder</th>
                            </tr>
                        </thead>
                        <tbody>
                            {nemenyiData.map((row, rowIndex) => (
                                <tr key={rowIndex} className="h-[60px]">
                                    <td className="p-4 text-gray-200 text-sm">
                                        {['AutoARIMA', 'LSTM', 'CNN', 'AutoEncoder'][rowIndex]}
                                    </td>
                                    {row.map((value, colIndex) => (
                                        <td
                                            key={colIndex}
                                            className={`px-6 py-3 border-[1px] border-gray-400 text-sm ${
                                                rowIndex === colIndex
                                                    ? 'bg-[#2678ae] hover:bg-[#3a8fb5]'
                                                    : value === 1.0000
                                                    ? 'bg-[#2678ae] hover:bg-[#3a8fb5]'
                                                    : 'bg-[#4a6ea3] hover:bg-[#5a80d3]'
                                            }`}
                                        >
                                            {rowIndex === colIndex ? '1.0000' : value.toFixed(4)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default StatisticalAnalysisSection;
