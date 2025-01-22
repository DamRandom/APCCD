'use client';

import { useState, useRef } from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js

export default function Navbar() {
  const [isAnalysisOpen, setIsAnalysisOpen] = useState(false);
  const analysisRef = useRef<HTMLLIElement>(null); // Referencia al contenedor del menú
  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // Referencia al temporizador

  // Función para manejar la apertura del menú
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Limpia el temporizador anterior si existe
    }
    setIsAnalysisOpen(true); // Abre el menú inmediatamente
  };

  // Función para manejar la salida del mouse con un retraso
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      if (!analysisRef.current?.contains(document.querySelector(':hover'))) {
        setIsAnalysisOpen(false); // Cierra el menú si el mouse no está sobre el menú ni el botón
      }
    }, 1000); // Retraso de 1 segundo
  };

  return (
    <nav className="bg-[#1f1f1f] text-[#e4e4e4] fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Marca */}
        <div className="text-xl font-semibold text-[#2678ae]">
          APCCD
        </div>

        {/* Enlaces de navegación */}
        <ul className="flex gap-6 text-sm font-medium items-center">
          <li>
            <a
              href="#system-overview"
              className="hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200 px-4 py-2 rounded-lg"
            >
              Inicio
            </a>
          </li>
          <li
            className="relative"
            ref={analysisRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex items-center hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200 px-4 py-2 rounded-lg focus:outline-none"
            >
              Análisis
              <span
                className={`ml-2 transform transition-transform duration-200 ${isAnalysisOpen ? 'rotate-180' : 'rotate-0'}`}
              >
                <Image
                  src="/image/icons8-arrow-96.png"
                  alt="arrow icon"
                  width={16}
                  height={16}
                  className="filter invert transition-transform duration-200"
                />
              </span>
            </button>
            {isAnalysisOpen && (
              <ul className="absolute left-0 mt-2 w-48 bg-[#1f1f1f] border border-gray-700 rounded-lg shadow-lg">
                <li>
                  <a
                    href="#data-cleaning"
                    className="block px-4 py-2 hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200 rounded-t-lg"
                  >
                    Limpieza de Datos
                  </a>
                </li>
                <li>
                  <a
                    href="#friedman-test"
                    className="block px-4 py-2 hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200"
                  >
                    Prueba de Friedman
                  </a>
                </li>
                <li>
                  <a
                    href="#model-predictions"
                    className="block px-4 py-2 hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200"
                  >
                    Predicciones del Modelo
                  </a>
                </li>
                <li>
                  <a
                    href="#model-comparison"
                    className="block px-4 py-2 hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200"
                  >
                    Comparación de Modelos
                  </a>
                </li>
                <li>
                  <a
                    href="#performance-metrics"
                    className="block px-4 py-2 hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200"
                  >
                    Métricas de Rendimiento
                  </a>
                </li>
                <li>
                  <a
                    href="#statistical-analysis"
                    className="block px-4 py-2 hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200 rounded-b-lg"
                  >
                    Análisis Estadístico
                  </a>
                </li>
              </ul>
            )}
          </li>
          <li>
            <a
              href="#footer"
              className="hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200 px-4 py-2 rounded-lg"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
