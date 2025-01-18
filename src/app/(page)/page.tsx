import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SystemOverview from "../components/SystemOverview";
import DataCleaning from "../components/DataCleaning";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-[#1f1f1f] text-gray-200"> {/* Fondo gris claro para todo el layout */}
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow mt-16 px-8"> {/* Añadimos padding lateral */}
        <section>
          <SystemOverview />
        </section>
        <section>
          <DataCleaning/>
        </section>
        {children} {/* Aquí se sigue mostrando el contenido principal */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
