'use client';

export default function Navbar() {
  return (
    <nav className="bg-[#1f1f1f] text-[#e4e4e4] fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo/Marca */}
        <div className="text-xl font-semibold text-[#2678ae]">
          APCCD
        </div>

        {/* Enlaces de navegación */}
        <ul className="flex gap-6 text-sm font-medium">
          <li>
            <a
              href="#home"
              className="hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200 px-4 py-2 rounded-lg"
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200 px-4 py-2 rounded-lg"
            >
              Características
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:bg-[#2678ae] hover:text-[#e4e4e4] transition-colors duration-200 px-4 py-2 rounded-lg"
            >
              Acerca de
            </a>
          </li>
          <li>
            <a
              href="#contact"
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
