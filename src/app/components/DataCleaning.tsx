'use client';

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';
import { ChartData } from 'chart.js';

// Registrar los elementos del gráfico
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const DataCleaning = () => {
    const [data, setData] = useState<ChartData<'line', number[], string> | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            // Configuración de los datos para el gráfico
            const dataSet: ChartData<'line', number[], string> = {
                labels: ['2011-1', '2011-2', '2012-1'],
                datasets: [
                    {
                        label: 'V1',
                        data: [2011, 2011, 2012],
                        borderColor: 'rgba(0, 123, 255, 1)',
                        backgroundColor: 'rgba(0, 123, 255, 0.2)',
                        fill: false,
                    },
                    {
                        label: 'V2',
                        data: [1, 2, 3],
                        borderColor: 'rgba(255, 159, 64, 1)',
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'V3',
                        data: [41, 37, 33],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'V4',
                        data: [102, 99, 96],
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'V5',
                        data: [641, 583, 521],
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'V6',
                        data: [1014, 923, 709],
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'V7',
                        data: [1798, 1642, 1359],
                        borderColor: 'rgba(255, 159, 64, 1)',
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'V8',
                        data: [37, 33, 31],
                        borderColor: 'rgba(255, 99, 132, 1)',
                        backgroundColor: 'rgba(255, 99, 132, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'V9',
                        data: [99, 96, 96],
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'V10',
                        data: [583, 521, 498],
                        borderColor: 'rgba(153, 102, 255, 1)',
                        backgroundColor: 'rgba(153, 102, 255, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'V11',
                        data: [923, 709, 525],
                        borderColor: 'rgba(54, 162, 235, 1)',
                        backgroundColor: 'rgba(54, 162, 235, 0.2)',
                        fill: true,
                    },
                    {
                        label: 'V12',
                        data: [1642, 1359, 1150],
                        borderColor: 'rgba(255, 159, 64, 1)',
                        backgroundColor: 'rgba(255, 159, 64, 0.2)',
                        fill: true,
                    },
                ],
            };
            setData(dataSet);
        } catch {
            setError('Error al cargar los datos del gráfico.');
        }
    }, []);

    return (
        <div className="bg-[#1f1f1f] text-gray-200 pt-20 pb-10 px-8 mx-auto max-w-6xl space-y-8">
            <section>
                <h2 className="text-3xl font-semibold text-orange-400 mb-4">Limpieza y Transformación de Datos</h2>
                <p className="text-gray-300 text-justify">
                    El conjunto de datos comienza con las siguientes filas, lo que proporciona una visión general de su estructura:
                </p>
                <pre className="bg-[#2c2c2c] text-gray-200 p-4 rounded-md">
                    {`V1  V2  V3  V4  V5  V6  V7  V8  V9  V10  V11  V12
  2011  1   41  102 641 1014 1798 37  99  583  923  1642
  2011  2   37  99  583 923  1642 33  96  521  709  1359
  2012  1   33  96  521 709  1359 31  96  498  525  1150`}
                </pre>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-orange-400">Gráfico de los Datos</h3>
                    <p className="text-gray-300 mb-4 text-justify">
                        A continuación, se muestra un gráfico que ilustra la tendencia de las variables de V1 a V12, proporcionando información sobre el comportamiento general de los datos:
                    </p>
                    {error ? (
                        <p className="text-red-500">{error}</p>
                    ) : data ? (
                        <Line data={data} width={700} height={500} />
                    ) : (
                        <p>Cargando gráfico...</p>
                    )}
                </div>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-orange-400">Propósito de la Visualización</h3>
                <p className="text-gray-300 text-justify">
                    El gráfico anterior proporciona una representación visual del conjunto de datos, permitiendo analizar las tendencias de las variables en el tiempo. Esto es crucial en la etapa de limpieza y transformación de datos, ayudando a identificar posibles valores atípicos, tendencias o patrones que deben abordarse en análisis posteriores.
                </p>
            </section>
        </div>
    );
};

export default DataCleaning;
