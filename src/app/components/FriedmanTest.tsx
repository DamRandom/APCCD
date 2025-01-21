'use client';

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData } from 'chart.js';

// Registrar los elementos necesarios para el gráfico
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FriedmanTest = () => {
    const [data, setData] = useState<ChartData<'bar', number[], string> | null>(null);

    useEffect(() => {
        // Configuración de los datos para la visualización de los resultados del Test de Friedman
        const dataSet: ChartData<'bar', number[], string> = {
            labels: ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12'], // Variables analizadas
            datasets: [
                {
                    label: 'Estadístico de Friedman',
                    data: [12.4, 15.3, 8.2, 10.5, 13.1, 7.6, 11.3, 9.7, 14.6, 13.9, 8.5, 12.0], // Valores del estadístico para cada variable
                    backgroundColor: 'rgba(70, 177, 226, 0.3)', 
                    borderColor: '#46b1e2', 
                    borderWidth: 1, 
                },
            ],
        };
        setData(dataSet);
    }, []);

    return (
        <div className="bg-[#1f1f1f] text-gray-200 pt-20 pb-10 px-8 mx-auto max-w-6xl space-y-8">
            {/* Sección: Aplicación del Test de Friedman */}
            <section>
                <h2 className="text-3xl font-semibold text-blue-400 mb-4">Aplicación del Test de Friedman</h2>
                <p className="text-gray-300 text-justify">
                    En este paso, se aplica el Test de Friedman para evaluar si existen diferencias significativas entre las variables. La hipótesis nula establece que todas las variables tienen la misma distribución, mientras que la hipótesis alternativa indica que al menos una variable difiere significativamente.
                </p>
                <pre className="bg-[#2c2c2c] text-gray-200 p-4 rounded-md">
                    {`Resultados del Test de Friedman:
Hipótesis Nula: Todas las variables tienen la misma distribución.
Hipótesis Alternativa: Al menos una variable difiere significativamente.`}
                </pre>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-blue-400">Gráfico del Estadístico de Friedman</h3>
                    <p className="text-gray-300 mb-4 text-justify">
                        A continuación, se presenta un gráfico de barras que representa el estadístico de Friedman para cada variable. Esta visualización permite identificar qué variables muestran diferencias significativas según los resultados del test.
                    </p>
                    {data ? <Bar data={data} width={700} height={500} /> : <p>Cargando gráfico...</p>}
                </div>
            </section>
        </div>
    );
};

export default FriedmanTest;
