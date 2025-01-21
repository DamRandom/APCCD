"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 mt-16">
      <div className="container mx-auto px-6 text-center">
        {/* Texto principal */}
        <p className="text-sm">
          &copy; 2025 APCCD. Todos los derechos reservados.
        </p>

        {/* Texto secundario */}
        <p className="text-xs mt-2 text-gray-500">
          Diseñado para asistir en el análisis predictivo de la composición del claustro docente en la UCI.
        </p>

        {/* Enlaces */}
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Política de Privacidad
          </a>
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            Términos de Servicio
          </a>
        </div>
      </div>
    </footer>
  );
}
