// src/components/Dataset.tsx
import React from "react";

type DatasetProps = {
  children?: React.ReactNode;
};

const Dataset: React.FC<DatasetProps> = ({ children }) => {
  return (
    <div className="dataset-container">
      <h3 className="text-xl font-semibold text-gray-800">Dataset Details</h3>
      <p className="text-base text-gray-700 mt-4">
        This section contains additional details or visualizations related to the dataset.
      </p>
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};

export default Dataset;
