"use client";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-gray-100 fixed top-0 w-full z-50 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Marca */}
        <div className="text-xl font-semibold text-orange-400">
          APCCD
        </div>

        {/* Enlaces de navegación */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Características
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Acerca de
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-orange-400 transition-colors duration-200"
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
