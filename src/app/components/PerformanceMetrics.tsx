'use client';

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const PerformanceMetricsSection = () => {
    const [data, setData] = useState<ChartData<'bar', number[], string> | null>(null);

    useEffect(() => {
        const labels = ['AutoARIMA', 'LSTM', 'CNN', 'Autoencoder'];
        const metrics = {
            mse: [0.240000, 0.320000, 0.280000, 0.300000],
            mae: [0.150000, 0.200000, 0.180000, 0.190000],
            mape: [12.500000, 15.800000, 14.200000, 13.700000],
        };

        const chartData: ChartData<'bar', number[], string> = {
            labels,
            datasets: [
                {
                    label: 'MSE',
                    data: metrics.mse,
                    backgroundColor: 'rgba(54, 162, 235, 0.3)',
                    borderColor: '#2678ae',
                    borderWidth: 2,
                },
                {
                    label: 'MAE',
                    data: metrics.mae,
                    backgroundColor: 'rgba(73, 123, 255, 0.3)',
                    borderColor: '#466bb7',
                    borderWidth: 2,
                },
                {
                    label: 'MAPE',
                    data: metrics.mape,
                    backgroundColor: 'rgba(100, 149, 255, 0.3)',
                    borderColor: '#3b72b5',
                    borderWidth: 2,
                },
            ],
        };

        setData(chartData);
    }, []);

    return (
        <section className="bg-[#1f1f1f] text-gray-200 pt-20 pb-10 px-8 mx-auto max-w-6xl space-y-12">
            <h2 className="text-3xl font-semibold text-blue-400 text-center">Métricas de Desempeño</h2>

            <p className="text-gray-300 text-justify">
                Esta sección destaca las métricas de desempeño utilizadas para evaluar los modelos predictivos. Métricas como el Error Cuadrático Medio (MSE), el Error Absoluto Medio (MAE) y el Error Porcentual Absoluto Medio (MAPE) proporcionan información sobre la precisión y fiabilidad de cada modelo.
            </p>

            <div className="overflow-hidden mx-auto">
                <h3 className="text-2xl font-semibold text-blue-400 text-center">Resumen de Métricas</h3>
                <p className="text-gray-300 text-justify mt-4">
                    La siguiente tabla resume las métricas de desempeño para todos los modelos. Valores más bajos indican un mejor desempeño.
                </p>
                <table className="bg-[#2c2c2c] text-gray-200 p-4 rounded-md w-full text-center border-collapse text-sm">
                    <thead>
                        <tr>
                            <th className="px-4 py-2">Métrica</th>
                            <th className="px-4 py-2">AutoARIMA</th>
                            <th className="px-4 py-2">LSTM</th>
                            <th className="px-4 py-2">CNN</th>
                            <th className="px-4 py-2">AutoEncoder</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="px-4 py-2">MSE</td>
                            <td className="px-4 py-2">1.000000</td>
                            <td className="px-4 py-2">1.000000</td>
                            <td className="px-4 py-2">1.000000</td>
                            <td className="px-4 py-2">1.000000</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">MAE</td>
                            <td className="px-4 py-2">1.000000</td>
                            <td className="px-4 py-2">1.000000</td>
                            <td className="px-4 py-2">1.000000</td>
                            <td className="px-4 py-2">1.000000</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-2">MAPE</td>
                            <td className="px-4 py-2">1.000000</td>
                            <td className="px-4 py-2">1.000000</td>
                            <td className="px-4 py-2">1.000000</td>
                            <td className="px-4 py-2">1.000000</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h3 className="text-2xl font-semibold text-blue-400 text-center">Comparación Visual</h3>
                <p className="text-gray-300 text-justify mt-4">
                    El siguiente gráfico de barras proporciona una comparación visual de las métricas de desempeño para cada modelo, permitiendo una evaluación intuitiva de su precisión.
                </p>
                {data ? (
                    <Bar
                        data={data}
                        options={{
                            responsive: true,
                            plugins: { legend: { position: 'top' } },
                            indexAxis: 'y',
                        }}
                    />
                ) : (
                    <p>Cargando gráfico...</p>
                )}
            </div>
        </section>
    );
};

export default PerformanceMetricsSection;
