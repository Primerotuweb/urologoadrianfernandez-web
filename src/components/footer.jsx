import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0D47A1] text-white py-16 px-6 text-sm font-sans">
      <div className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3 text-center md:text-left items-center md:items-start">

        {/* Información del doctor */}
        <div>
          <h3 className="text-lg font-bold mb-2">Dr. Adrián Fernández Arzate</h3>
          <p className="text-[#e3f2fd] mb-3">Especialista en Urología<br />Guadalajara, Jalisco</p>
          <p className="text-[#e3f2fd] mb-3">
            <strong>Tel:</strong> <a href="tel:3334440990" className="text-[#BBDEFB] hover:underline">333 444 0990</a>
          </p>
          <p className="text-[#e3f2fd] mb-3">
            <strong>Ubicación principal:</strong><br />
            Hospital Country 2000<br />
            Av. Circunvalación Jorge Álvarez del Castillo 1504, Guadalajara, Jal.
          </p>
          <p className="text-[#e3f2fd] mb-3">
            <strong>También atiendo en:</strong><br />
            C. Cristobal Colón 221, Centro,<br />
            47750 Atotonilco el Alto, Jal.
          </p>
          <p className="text-[#e3f2fd] mb-3">
            <strong>Horario:</strong><br />
            Lun a Vie: 8 am – 8 pm<br />
            Sáb: 8 am – 2 pm
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-base font-bold mb-4">Navegación</h4>
          <ul className="space-y-2">
            <li><a href="/" className="text-[#BBDEFB] hover:underline">Inicio</a></li>
            <li><a href="/sobre-mi" className="text-[#BBDEFB] hover:underline">Sobre mí</a></li>
            <li><a href="/especialidades" className="text-[#BBDEFB] hover:underline">Especialidades</a></li>
            <li><a href="/contacto" className="text-[#BBDEFB] hover:underline">Contacto</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <p className="font-semibold">Sígueme</p>
          <div className="flex gap-4">
            <a href="https://www.facebook.com/profile.php?id=61574646426392" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                alt="Facebook"
                className="w-7 h-7 filter grayscale hover:grayscale-0 transition-transform duration-200 hover:scale-110"
              />
            </a>
            <a href="https://www.instagram.com/dr.urofernandez/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                alt="Instagram"
                className="w-7 h-7 filter grayscale hover:grayscale-0 transition-transform duration-200 hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>

      <hr className="border-t border-white border-opacity-20 my-10 max-w-6xl mx-auto" />

      <div className="text-center text-[#BBDEFB] text-xs">
        &copy; 2025 Dr. Adrián Fernández. Todos los derechos reservados.
        <span className="ml-1 text-[#4FC3F7] font-semibold">
          | Powered by <a href="https://primerotuweb.com" target="_blank" rel="noopener noreferrer">Primerotuweb</a>
        </span>
      </div>
    </footer>
  );
}
