import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SystemOverview from "../components/SystemOverview";
import DataCleaning from "../components/DataCleaning";
import FriedmanTest from "../components/FriedmanTest";
import ModelPredictions from "../components/ModelPredictions";
import ModelComparisonSection from "../components/ModelComparison";
import PerformanceMetricsSection from "../components/PerformanceMetrics";
import StatisticalAnalysisSection from "../components/StatisticalAnalysis";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#1f1f1f] text-gray-200">
      {/* Barra de navegación */}
      <Navbar />

      <main className="flex-grow mt-16 px-8">
        <section id="system-overview">
          <SystemOverview />
        </section>
        <section id="data-cleaning">
          <DataCleaning />
        </section>
        <section id="friedman-test">
          <FriedmanTest />
        </section>
        <section id="model-predictions">
          <ModelPredictions />
        </section>
        <section id="model-comparison">
          <ModelComparisonSection />
        </section>
        <section id="performance-metrics">
          <PerformanceMetricsSection />
        </section>
        <section id="statistical-analysis">
          <StatisticalAnalysisSection />
        </section>
        {children}
      </main>


      {/* Pie de página */}
      <Footer />
    </div>
  );
}
