import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SystemOverview from "../components/SystemOverview";
import DataCleaning from "../components/DataCleaning";
import FriedmanTest from "../components/FriedmanTest";
import ModelPredictions from "../components/ModelPredictions";
import ModelComparisonSection from "../components/ModelComparison";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#1f1f1f] text-gray-200">
      {/* Barra de navegación */}
      <Navbar />

      <main className="flex-grow mt-16 px-8">
        <section>
          <SystemOverview />
        </section>
        <section>
          <DataCleaning />
        </section>
        <section>
          <FriedmanTest />
        </section>
        <section>
          <ModelPredictions />
        </section>
        <section>
          <ModelComparisonSection />
        </section>
        {children}
      </main>

      {/* Pie de página */}
      <Footer />
    </div>
  );
}
