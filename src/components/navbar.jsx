import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo-1.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const links = [
    { label: 'Inicio', path: '/' },
    { label: 'Sobre mí', path: '/sobre-mi' },
    { label: 'Especialidades', path: '/especialidades' },
    { label: 'Contacto', path: '/contacto' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Cerrar el menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md' : 'bg-white'
      }`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo Dr. Adrián" className="h-20 w-auto" />
        </Link>

        {/* Botón de menú móvil */}
        <button
          className="md:hidden text-5xl text-[#0D47A1] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>


        {/* Navegación escritorio */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                className={`relative group transition-colors duration-300 ${isActive ? 'text-[#4FC3F7] font-semibold' : 'text-[#0D47A1] hover:text-[#4FC3F7]'
                  }`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 bg-[#4FC3F7] transition-all duration-500 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                />
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Menú móvil desplegable */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <nav className="flex flex-col space-y-2 px-4 py-4 text-sm font-medium">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`transition-colors duration-300 ${isActive ? 'text-[#4FC3F7] font-semibold' : 'text-[#0D47A1] hover:text-[#4FC3F7]'
                    }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
