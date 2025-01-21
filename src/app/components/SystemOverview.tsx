const SystemOverview = () => {
  return (
    <div className="bg-[#1f1f1f] text-gray-200 pt-20 pb-10 px-8 mx-auto max-w-6xl space-y-8">
      
      {/* Sección: Descripción de Modelos */}
      <section>
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">Descripción de Modelos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-4 text-justify">
              <strong>Autoencoder</strong>: Este modelo se utiliza para aprendizaje no supervisado, donde intenta aprender una representación comprimida de los datos de entrada. Principalmente se aplica en la extracción de características o detección de anomalías.
            </p>
            <p className="text-gray-300 mb-4 text-justify">
              <strong>LSTM (Long Short-Term Memory)</strong>: LSTM es un tipo de red neuronal recurrente usada principalmente para predicciones de series temporales. Captura dependencias a largo plazo en datos secuenciales, lo que lo hace ideal para pronosticar tendencias.
            </p>
          </div>
          <div>
            <p className="text-gray-300 mb-4 text-justify">
              <strong>CNN (Red Neuronal Convolucional)</strong>: Las CNN están especializadas en procesar datos con estructuras tipo rejilla, como imágenes. Frecuentemente se utilizan para tareas como clasificación o detección de patrones en datos espaciales.
            </p>
            <p className="text-gray-300 mb-4 text-justify">
              <strong>ARIMA (Promedio Móvil Integrado Autorregresivo)</strong>: ARIMA es un modelo clásico para pronósticos de series temporales. Es eficaz para predecir puntos futuros en una serie basándose en sus valores pasados, utilizado a menudo en economía y finanzas.
            </p>
          </div>
        </div>
      </section>

      {/* Sección: Carga de Datos */}
      <section>
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">Carga de Datos</h2>
        <div className="space-y-6 text-gray-300">
          <p className="text-justify">
            Los datos se cargan desde un archivo CSV llamado <strong>claustro.csv</strong>, que contiene varias variables utilizadas para las predicciones. El archivo incluye columnas clave que son esenciales para los insumos y resultados del modelo. Veamos los detalles:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Características</h3>
              <p className="text-justify">
                Las <strong>Características</strong> están representadas por las columnas <code>V1</code> a <code>V7</code>. Estas columnas contienen los datos de entrada que los modelos utilizan para realizar predicciones. Cada una de estas variables representa aspectos específicos de los datos que ayudan al modelo a comprender y prever patrones.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400">Variables Objetivo</h3>
              <p className="text-justify">
                Las <strong>Variables Objetivo</strong> se encuentran en las columnas <code>V8</code> a <code>V12</code>. Estas columnas contienen las variables de salida que los modelos buscan predecir basándose en las características. Las variables objetivo son los valores clave que el sistema intenta estimar o pronosticar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Métricas */}
      <section>
        <h2 className="text-3xl font-semibold text-blue-400 mb-4">Métricas</h2>
        <p className="text-gray-300 text-justify">
          Los modelos se evalúan basándose en métricas de rendimiento como el Error Cuadrático Medio (MSE), 
          el Error Absoluto Medio (MAE) y el Error Porcentual Absoluto Medio (MAPE). Estas métricas ayudan a comprender qué tan bien funcionan los modelos con el conjunto de datos dado.
        </p>
      </section>

    </div>
  );
}

export default SystemOverview;
