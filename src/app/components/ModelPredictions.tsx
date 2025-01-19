'use client';

import { useEffect, useState } from 'react';

const PrediccionesResumen = () => {
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        try {
            // Lógica para cargar los datos si es necesario
        } catch {
            setError('Error al cargar los datos.');
        }
    }, []);

    return (
        <div className="bg-[#1f1f1f] text-gray-200 pt-20 pb-10 px-8 mx-auto max-w-6xl space-y-8">
            <section>
                <h2 className="text-3xl font-semibold text-orange-400 mb-4">Resumen de Predicciones</h2>
                <p className="text-gray-300 text-justify">
                    Esta sección presenta las capacidades predictivas del sistema utilizando cuatro modelos distintos: AutoARIMA, Redes Neuronales Convolucionales (CNNs), Memoria a Largo Corto Plazo (LSTM) y Autoencoders. Cada modelo está diseñado para predecir métricas clave (V8 a V12) para el segundo semestre de 2024. A continuación se muestra un desglose detallado de las predicciones generadas por cada modelo.
                </p>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-orange-400">AutoARIMA</h3>
                <p className="text-gray-300 text-justify">
                    AutoARIMA se utilizó para generar predicciones mediante la identificación automática de los parámetros óptimos para los modelos ARIMA, considerando la estacionalidad y reduciendo restricciones de complejidad (por ejemplo, el orden máximo establecido en 5). El modelo ajustó iterativamente las primeras cuatro variables (V8 a V11), mientras que la predicción para V12 se calculó como la suma de estas variables.
                </p>
                <div className="overflow-hidden mx-auto my-4 max-w-[320px]">
                    <table className="bg-[#2c2c2c] text-gray-200 p-4 rounded-md w-full text-center border-collapse text-sm">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Variable</th>
                                <th className="px-4 py-2">Predicción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">V8</td>
                                <td className="px-4 py-2">71</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V9</td>
                                <td className="px-4 py-2">78</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V10</td>
                                <td className="px-4 py-2">94</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V11</td>
                                <td className="px-4 py-2">89</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V12</td>
                                <td className="px-4 py-2">332</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-orange-400">CNN (Redes Neuronales Convolucionales)</h3>
                <p className="text-gray-300 text-justify">
                    La arquitectura CNN se entrenó utilizando ventanas deslizantes del conjunto de datos, con un tamaño de ventana de tres observaciones. El modelo utilizó capas convolucionales, max pooling y capas densas para extraer patrones de los datos. Se generaron predicciones para V8 a V11, mientras que V12 se derivó como la suma de estas variables.
                </p>
                <div className="overflow-hidden mx-auto my-4 max-w-[320px]">
                    <table className="bg-[#2c2c2c] text-gray-200 p-4 rounded-md w-full text-center border-collapse text-sm">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Variable</th>
                                <th className="px-4 py-2">Predicción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">V8</td>
                                <td className="px-4 py-2">29</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V9</td>
                                <td className="px-4 py-2">94</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V10</td>
                                <td className="px-4 py-2">90</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V11</td>
                                <td className="px-4 py-2">42</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V12</td>
                                <td className="px-4 py-2">255</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-orange-400">AutoEncoders</h3>
                <p className="text-gray-300 text-justify">
                    Se utilizaron AutoEncoders para aprender representaciones latentes comprimidas de los datos, permitiendo una predicción eficiente de futuras observaciones. Un decodificador feedforward reconstruyó las predicciones para V8 a V11, mientras que V12 se calculó como la suma de estas variables. El modelo integró restricciones adicionales para asegurar resultados no negativos y evitar inconsistencias en la lógica de la suma.
                </p>
                <div className="overflow-hidden mx-auto my-4 max-w-[320px]">
                    <table className="bg-[#2c2c2c] text-gray-200 p-4 rounded-md w-full text-center border-collapse text-sm">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Variable</th>
                                <th className="px-4 py-2">Predicción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">V8</td>
                                <td className="px-4 py-2">46</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V9</td>
                                <td className="px-4 py-2">151</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V10</td>
                                <td className="px-4 py-2">90</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V11</td>
                                <td className="px-4 py-2">42</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V12</td>
                                <td className="px-4 py-2">329</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section>
                <h3 className="text-xl font-semibold text-orange-400">LSTM (Memoria a Largo Corto Plazo)</h3>
                <p className="text-gray-300 text-justify">
                    Se emplearon modelos LSTM, diseñados para datos de series temporales, para capturar dependencias temporales y patrones entre las variables. Usando un enfoque secuencia a secuencia, las predicciones se calcularon iterativamente para cada variable objetivo. La regla de suma se aplicó para derivar V12 a partir de las predicciones de V8 a V11.
                </p>
                <div className="overflow-hidden mx-auto my-4 max-w-[320px]">
                    <table className="bg-[#2c2c2c] text-gray-200 p-4 rounded-md w-full text-center border-collapse text-sm">
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Variable</th>
                                <th className="px-4 py-2">Predicción</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-2">V8</td>
                                <td className="px-4 py-2">29</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V9</td>
                                <td className="px-4 py-2">136</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V10</td>
                                <td className="px-4 py-2">224</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V11</td>
                                <td className="px-4 py-2">42</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">V12</td>
                                <td className="px-4 py-2">431</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            {error && (
                <div className="text-red-500 text-center mt-8">{error}</div>
            )}
        </div>
    );
};

export default PrediccionesResumen;
