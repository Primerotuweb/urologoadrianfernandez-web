import { Link } from "react-router-dom";
import { FaCheck } from 'react-icons/fa'

import doctorImg from "../assets/images/doctor.jpg";
import kidney from "../assets/icons/kidney.png";
import prostate from "../assets/icons/prostate.png";
import sperm from "../assets/icons/sperm.png";
import scalpel from "../assets/icons/scalpel.png";
import bacteria from "../assets/icons/bacteria.png";
import tool from "../assets/icons/tool.png";

import Footer from '../components/footer';
import Header from '../components/navbar';
import CallButton from '../components/callButton';

import { Helmet } from 'react-helmet';


export default function Home() {


  function renderHeroSection() {
    return (
      <section className="relative text-white text-center py-48 px-5 mt-32 overflow-hidden bg-gradient-to-r from-[#0d47a1] to-[#4fc3f7]">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Dr. Adrián Fernández Arzate
          </h1>
          <p className="text-lg md:text-xl mb-3">
            Especialista en Urología. Atención profesional, ética y personalizada en Guadalajara.
          </p>
          <p className="text-xl mb-3">★★★★★</p>
          <p className="italic text-[#e3f2fd] text-base md:text-lg mt-5">
            Más de 8 años de experiencia cuidando tu salud urológica
          </p>
          <a
            href="https://wa.me/5213334440990?text=Hola%20Dr.%20Adri%C3%A1n%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20de%20consulta.%20%C2%BFPodr%C3%ADa%20darme%20informaci%C3%B3n%3F"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-[#0D47A1] font-semibold px-6 py-3 mt-5 rounded-lg hover:bg-[#0D47A1] hover:text-white transition duration-300"
          >
            Agenda tu cita
          </a>
        </div>

        {/* Íconos decorativos flotantes */}
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/kidney.png"
          className="absolute w-12 opacity-20 animate-float"
          style={{ top: "10%", left: "20%" }}
          alt="icono riñón"
        />
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/medical-doctor.png"
          className="absolute w-12 opacity-20 animate-float"
          style={{ top: "60%", left: "10%" }}
          alt="icono doctor"
        />
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/stethoscope.png"
          className="absolute w-12 opacity-20 animate-float"
          style={{ top: "30%", left: "85%" }}
          alt="icono estetoscopio"
        />
        <img
          src="https://img.icons8.com/ios-filled/50/ffffff/heart-health.png"
          className="absolute w-12 opacity-20 animate-float"
          style={{ top: "75%", left: "70%" }}
          alt="icono corazón"
        />
      </section>
    );
  }

  function renderAboutSection() {
    return (
      <section className="bg-white text-black py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 animate-fade-in">
          {/* Imagen */}
          <div className="flex-shrink-0 shadow-xl rounded-2xl overflow-hidden max-w-sm w-full">
            <img
              src={doctorImg}
              alt="Dr. Adrián Fernández"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Texto */}
          <div className="flex-1 min-w-[300px] text-center md:text-left flex flex-col items-center md:items-start">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0D47A1] mb-6 relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-[#4FC3F7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
              Sobre mí
            </h2>
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              Soy el Dr. Adrián Fernández Arzate, médico cirujano con especialidad en Urología por el Hospital Civil de Guadalajara “Fray Antonio Alcalde”. Mi compromiso es brindar atención ética, profesional y personalizada en el diagnóstico y tratamiento de enfermedades del aparato urinario y reproductor masculino.
            </p>
            <p className="text-base md:text-lg mb-4 leading-relaxed">
              He participado en congresos nacionales e internacionales, docencia universitaria e investigación médica. Mi enfoque está en la actualización constante y el trato humano con cada paciente.
            </p>
            <ul className="mt-4 space-y-2 font-semibold text-[#0D47A1]">
              <li>• Médico Cirujano – UdeG</li>
              <li>• Especialidad en Urología – HCG Fray Antonio Alcalde</li>
              <li>• Experiencia en cirugía laparoscópica y láser (HoLEP)</li>
              <li>• Consultas en Guadalajara, Jalisco</li>
            </ul>
            <div className="mt-8">
              <Link to="/contacto">
                <button className="bg-[#4FC3F7] hover:bg-[#0D47A1] text-white px-6 py-3 rounded-lg font-medium transition">
                  Ver más
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function renderServicesSection() {
    const services = [
      {
        title: 'Cálculos renales',
        description: 'Tratamiento y prevención de piedras en riñones y vías urinarias.',
        image: kidney,
      },
      {
        title: 'Próstata',
        description: 'Control de crecimiento prostático, prostatitis y seguimiento médico.',
        image: prostate,
      },
      {
        title: 'Andrología',
        description: 'Disfunción eréctil, salud sexual masculina e infertilidad.',
        image: sperm,
      },
      {
        title: 'Vasectomía',
        description: 'Procedimiento quirúrgico ambulatorio y seguro para planificación familiar.',
        image: scalpel,
      },
      {
        title: 'Infecciones urinarias',
        description: 'Diagnóstico, tratamiento y seguimiento en mujeres y hombres.',
        image: bacteria,
      },
      {
        title: 'Cirugía endoscópica',
        description: 'Procedimientos de mínima invasión con tecnología láser y endoscopía.',
        image: tool,
      },
    ];

    return (
      <section className="bg-[#f4f7fa] py-20 px-4 text-center text-[#0D47A1]">
        {/* Título animado */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-[#4FC3F7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left animate-fade-in">
          Especialidades Urológicas
        </h2>

        {/* Subtítulo */}
        <p className="text-[#4FC3F7] text-base md:text-lg mb-12 max-w-2xl mx-auto">
          Diagnóstico y tratamiento profesional en salud urinaria y reproductiva masculina
        </p>

        {/* Tarjetas */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition duration-300 transform hover:-translate-y-2 animate-fade-in"
            >
              <div className="mb-4 h-16 flex justify-center">
                <img src={service.image} alt={service.title} className="h-full object-contain" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function renderConsultSectionIcons() {
    const consultTopics = [
      {
        title: 'Síntomas urinarios',
        items: [
          'Ardor al orinar',
          'Sangrado en la orina',
          'Orina delgada o débil',
          'Dolor al orinar',
        ],
      },
      {
        title: 'Infecciones y ETS',
        items: [
          'Infecciones urinarias',
          'Enfermedades de transmisión sexual',
          'Retiro de verrugas genitales',
        ],
      },
      {
        title: 'Procedimientos',
        items: [
          'Vasectomía',
          'Circuncisión',
          'Cirugía de próstata',
          'Cirugía láser (HOLEP)',
        ],
      },
      {
        title: 'Cálculos y riñón',
        items: [
          'Dolor renal',
          'Cirugía de piedras en el riñón',
          'Cálculos renales',
        ],
      },
      {
        title: 'Cirugías especializadas',
        items: [
          'Cirugía laparoscópica',
          'Cirugía para varicocele',
        ],
      },
      {
        title: 'Atención a todas las edades',
        items: [
          'Consulta en hombres, mujeres y niños',
        ],
      },
    ];

    return (
      <section className="bg-[#f4f7fa] text-[#0D47A1] py-20 px-4 text-center font-sans">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-[#4FC3F7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left animate-fade-in">
          ¿En qué puedo ayudarte?
        </h2>

        <p className="text-gray-700 text-base md:text-lg max-w-3xl mx-auto mb-12">
          Brindo atención médica profesional y personalizada para hombres, mujeres y niños. Estos son algunos de los principales motivos de consulta:
        </p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 text-center md:text-left items-center md:items-start max-w-6xl mx-auto">
          {consultTopics.map((group, index) => (
            <div key={index} className="flex flex-col items-center md:items-start animate-fade-in">
              <h3 className="text-[#4FC3F7] text-lg font-semibold mb-3">
                {group.title}
              </h3>
              <ul className="space-y-2 text-gray-700">
                {group.items.map((item, idx) => (
                  <li key={idx} className="flex justify-center items-center gap-2 text-center md:justify-start md:text-left">
                    <FaCheck className="text-green-500 text-lg mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section >
    );
  }

  function renderAppointmentSteps() {
    const steps = [
      {
        content: (
          <>
            Llama al{' '}
            <a href="tel:3334440990">
              <strong className="text-[#0D47A1] font-bold">333 444 0990</strong>
            </a>{' '}
            para agendar tu cita directamente.
          </>
        ),
      },
      {
        content: (
          <>
            O contáctame vía{' '}
            <a
              href="https://wa.me/5213334440990?text=Hola%20Dr.%20Adri%C3%A1n%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20de%20consulta.%20%C2%BFPodr%C3%ADa%20darme%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong className="text-[#0D47A1] font-bold">WhatsApp</strong>
            </a>{' '}
            para mayor comodidad.
          </>
        ),
      },
      {
        content: (
          <>
            <strong className="text-[#0D47A1] font-bold">Horario de atención:</strong>
            <br />
            Lun a Vie: 8 am – 8 pm
            <br />
            Sáb: 8 am – 2 pm
          </>
        ),
      },
      {
        content: (
          <>
            Acepto pagos en{' '}
            <strong className="text-[#0D47A1] font-bold">
              efectivo, terminal bancaria y transferencia
            </strong>.
          </>
        ),
      },
    ];

    return (
      <section className="bg-[#f4f7fa] text-[#0D47A1] py-20 px-4 text-center font-sans">
        {/* Título animado */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-[#4FC3F7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left animate-fade-in">
          ¿Cómo puedes agendar una cita?
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:shadow-md transition duration-300 animate-fade-in"
            >
              <p className="text-gray-700 text-sm leading-relaxed">{step.content}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  function renderWhyMeSection() {
    const reasons = [
      {
        title: 'Formación especializada:',
        description: 'Cirugía urológica avanzada y mínimamente invasiva.',
      },
      {
        title: 'Trato humano y ético:',
        description: 'Atención cercana, sin juicios y con respeto.',
      },
      {
        title: 'Experiencia clínica:',
        description: 'Procedimientos de alta complejidad realizados con seguridad.',
      },
      {
        title: 'Docencia e investigación:',
        description: 'Participación activa en congresos y formación médica.',
      },
      {
        title: 'Capacitación internacional:',
        description: 'Técnicas de vanguardia aprendidas en México y el extranjero.',
      },
      {
        title: 'Atención integral:',
        description: 'Acompañamiento completo desde el diagnóstico hasta tu recuperación.',
      },
    ];

    return (
      <section className="bg-[#f4f7fa] text-[#0D47A1] py-20 px-4 font-sans text-center">
        {/* Título animado */}
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-[#4FC3F7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left animate-fade-in">
          ¿Por qué elegirme como tu Urólogo?
        </h2>

        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-[0_12px_28px_rgba(0,0,0,0.15)] px-8 py-12 animate-fade-in">
          <p className="text-gray-700 text-base md:text-lg mb-10 leading-relaxed max-w-2xl mx-auto">
            Mi objetivo es acompañarte con profesionalismo, ética y calidez en cada etapa de tu atención médica.
          </p>

          <ul className="grid gap-6 md:grid-cols-2 text-left">
            {reasons.map((item, idx) => (
              <li
                key={idx}
                className="bg-[#f4f7fa] border-l-4 border-[#4FC3F7] rounded-lg px-5 py-4 hover:bg-[#e1f5fe] transition duration-300 text-gray-700 text-base"
              >
                <strong className="text-[#0D47A1] font-semibold">{item.title}</strong> {item.description}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <div className="text-gray-800 bg-white min-h-screen">
      <Helmet>
        <title>Urólogo en Guadalajara | Dr. Adrián Fernández</title>
        <meta
          name="description"
          content="Atención profesional en urología en Guadalajara. Cirugía prostática, vasectomía, infecciones urinarias y más. Agenda tu cita con el Dr. Adrián Fernández."
        />
        <meta name="keywords" content="urólogo en Guadalajara, cirugía prostática, vasectomía, salud urinaria, Dr. Adrián Fernández" />
        <meta name="author" content="Dr. Adrián Fernández" />
        <meta property="og:title" content="Urólogo en Guadalajara | Dr. Adrián Fernández" />
        <meta property="og:description" content="Especialista en salud masculina y urología avanzada. Atención en Guadalajara con ética y profesionalismo." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://urologoadrianfernandez.com/" />
        <meta property="og:image" content="https://urologoadrianfernandez.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Urólogo en Guadalajara | Dr. Adrián Fernández" />
        <meta name="twitter:description" content="Especialista en salud masculina y urología avanzada. Atención en Guadalajara." />
        <meta name="twitter:image" content="https://urologoadrianfernandez.com/og-image.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://urologoadrianfernandez.com/" />
      </Helmet>
      <Header />
      {renderHeroSection()}
      {renderAboutSection()}
      {renderServicesSection()}
      {renderConsultSectionIcons()}
      {renderAppointmentSteps()}
      {renderWhyMeSection()}
      <Footer />
      <CallButton />
    </div>
  );
}
