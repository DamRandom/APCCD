'use client';

import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { ChartData } from 'chart.js';

// Registrar los elementos del gráfico
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const FriedmanTest = () => {
    const [data, setData] = useState<ChartData<'bar', number[], string> | null>(null);

    useEffect(() => {
        // Datos para la visualización de los resultados del Test de Friedman
        const dataSet: ChartData<'bar', number[], string> = {
            labels: ['V1', 'V2', 'V3', 'V4', 'V5', 'V6', 'V7', 'V8', 'V9', 'V10', 'V11', 'V12'], // Variables analizadas
            datasets: [
                {
                    label: 'Friedman Statistic',
                    data: [12.4, 15.3, 8.2, 10.5, 13.1, 7.6, 11.3, 9.7, 14.6, 13.9, 8.5, 12.0], // Valores del estadístico de Friedman para cada variable
                    backgroundColor: 'rgba(255, 140, 0, 0.2)', // Naranja tenue, opacidad baja
                    borderColor: 'rgba(255, 140, 0, 0.8)', // Naranja sólido, opacidad más alta
                    borderWidth: 1,
                },
            ],
        };
        setData(dataSet);
    }, []);

    return (
        <div className="bg-[#1f1f1f] text-gray-200 pt-20 pb-10 px-8 mx-auto max-w-6xl space-y-8">
            {/* Sección: Test de Friedman */}
            <section>
                <h2 className="text-3xl font-semibold text-orange-400 mb-4">Friedman Test Application</h2>
                <p className="text-gray-300 text-justify">
                    In this step, the Friedman Test is applied to assess whether there are significant differences between the variables. The null hypothesis is that all variables have the same distribution, and the alternative hypothesis is that at least one variable differs.
                </p>
                <pre className="bg-[#2c2c2c] text-gray-200 p-4 rounded-md">
                    {`Friedman Test Results:
Null Hypothesis: All variables have the same distribution.
Alternative Hypothesis: At least one variable differs significantly.`}
                </pre>

                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-orange-400">Friedman Test Statistic Plot</h3>
                    <p className="text-gray-300 mb-4 text-justify">
                        Below is a bar chart representing the Friedman statistic for each variable. This visualization helps to identify which variables show significant differences according to the test results.
                    </p>
                    {data ? <Bar data={data} width={700} height={500} /> : <p>Loading chart...</p>}
                </div>
            </section>
        </div>
    );
};

export default FriedmanTest;
