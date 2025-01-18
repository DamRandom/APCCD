const SystemOverview = () => {
  return (
    <div className="bg-[#1f1f1f] text-gray-200 pt-20 pb-10 px-8 mx-auto max-w-6xl space-y-8">
      
      {/* Section: Model Overview */}
      <section>
        <h2 className="text-3xl font-semibold text-orange-400 mb-4">Model Overview</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-gray-300 mb-4 text-justify">
              <strong>Autoencoder</strong>: This model is used for unsupervised learning, where it tries to learn a compressed representation of the input data. It is mainly used for feature extraction or anomaly detection.
            </p>
            <p className="text-gray-300 mb-4 text-justify">
              <strong>LSTM (Long Short-Term Memory)</strong>: LSTM is a type of recurrent neural network used primarily for time-series predictions. It captures long-term dependencies in sequential data, making it ideal for forecasting trends.
            </p>
          </div>
          <div>
            <p className="text-gray-300 mb-4 text-justify">
              <strong>CNN (Convolutional Neural Network)</strong>: CNNs are specialized in processing data with a grid-like structure, such as images. They are often used for tasks like classification or detecting patterns in spatial data.
            </p>
            <p className="text-gray-300 mb-4 text-justify">
              <strong>ARIMA (AutoRegressive Integrated Moving Average)</strong>: ARIMA is a classical time-series forecasting model. It is effective for predicting future points in a series based on its own past values, often used in economics and finance.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Data Loading */}
      <section>
        <h2 className="text-3xl font-semibold text-orange-400 mb-4">Data Loading</h2>
        <div className="space-y-6 text-gray-300">
          <p className="text-justify">
            The data is loaded from a CSV file called <strong>claustro.csv</strong>, which contains various variables that are used for predictions. The file consists of several key columns that are critical for the model’s input and output. Let’s break them down:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-orange-400">Features</h3>
              <p className="text-justify">
                The <strong>Features</strong> are represented by columns <code>V1</code> to <code>V7</code>. These columns contain the input data that is used by the models to make predictions. Each of these variables represents specific aspects of the data that help the model understand and forecast patterns.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-orange-400">Target Variables</h3>
              <p className="text-justify">
                The <strong>Target Variables</strong> are found in columns <code>V8</code> to <code>V12</code>. These columns contain the output variables that the models aim to predict based on the features. The target variables are the key values the system is trying to estimate or forecast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Metrics */}
      <section>
        <h2 className="text-3xl font-semibold text-orange-400 mb-4">Metrics</h2>
        <p className="text-gray-300 text-justify">
          The models are evaluated based on performance metrics like Mean Squared Error (MSE), 
          Mean Absolute Error (MAE), and Mean Absolute Percentage Error (MAPE). These metrics help to understand how well the models perform on the given dataset.
        </p>
      </section>

    </div>
  );
}

export default SystemOverview;
