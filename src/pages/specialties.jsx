import Footer from "../components/footer";
import Header from "../components/navbar";
import CallButton from "../components/callButton";
import imgDoctor from "../assets/images/doctor1.png";

import { Helmet } from 'react-helmet';


export default function Specialties() {
    function renderHeroUrologySection() {
        return (
            <section className="bg-[#f4f7fa] text-[#0D47A1] py-24 px-4 mt-32 font-sans">
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 animate-fade-in">
                    {/* Texto */}
                    <div className="flex-1 min-w-[300px]">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center md:text-left">
                            Especialista en Urología con Enfoque Quirúrgico
                        </h1>
                        <p className="text-lg text-gray-800 mb-6 text-center md:text-left leading-relaxed">
                            Brindo atención profesional y humana en salud urinaria y reproductiva. Experto en cirugía laparoscópica, láser HoLEP y tratamientos andrológicos.
                        </p>
                        <div className="text-center md:text-left">
                            <a
                                href="https://wa.me/5213334440990?text=Hola%20Dr.%20Adri%C3%A1n%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20de%20consulta.%20%C2%BFPodr%C3%ADa%20darme%20informaci%C3%B3n%3F"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block bg-[#4FC3F7] text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#0288d1] transition"
                            >
                                Agendar Consulta
                            </a>
                        </div>
                    </div>

                    {/* Imagen */}
                    <div className="flex-1 max-w-sm mx-auto">
                        <img
                            src={imgDoctor}
                            alt="Dr. Adrián Fernández Arzate"
                            className="w-full rounded-2xl shadow-xl object-cover"
                        />
                    </div>
                </div>
            </section>
        );
    }

    function renderSpecialtyAreasSection() {
        const specialties = [
            {
                icon: "fas fa-procedures",
                title: "Cirugía Laparoscópica",
                description:
                    "Procedimientos mínimamente invasivos para tratar patologías renales, prostáticas y vesicales.",
            },
            {
                icon: "fas fa-lightbulb",
                title: "Láser HoLEP",
                description:
                    "Tratamiento avanzado para la hiperplasia prostática con tecnología láser de Holmio.",
            },
            {
                icon: "fas fa-microscope",
                title: "Cirugía Intrarrenal (ECIRS)",
                description:
                    "Acceso combinado para litiasis renal compleja mediante técnicas endoscópicas modernas.",
            },
            {
                icon: "fas fa-brain",
                title: "Urología Funcional",
                description:
                    "Diagnóstico y manejo de trastornos como incontinencia, vejiga neurogénica y disfunciones urinarias.",
            },
            {
                icon: "fas fa-venus-mars",
                title: "Andrología",
                description:
                    "Atención a la salud sexual y reproductiva masculina: disfunción eréctil, fertilidad, cirugía andrológica.",
            },
        ];

        return (
            <section className="bg-[#f4f7fa] text-[#0D47A1] py-24 px-4 font-sans text-center">
                {/* Título */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-8 relative inline-block after:content-[''] after:block after:w-full after:h-1 after:bg-[#4FC3F7] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left">
                    Áreas de Especialidad
                </h2>

                {/* Tarjetas */}
                <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8 animate-fade-in">
                    {specialties.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-lg transition transform hover:-translate-y-1 px-6 py-8 w-full max-w-[300px] text-center"
                        >
                            <i className={`${item.icon} text-4xl text-[#4FC3F7] mb-4`}></i>
                            <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-700 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        );
    }

    function renderCertificatesSection() {
        const certificates = [
            {
                src: "https://assets.zyrosite.com/YKb3okXQjWh9R4GV/certificado-1-dWxv0RMaljI4a3Dv.PNG",
                alt: "Certificado 1",
                class: "top-[10%] left-[5%] animate-delay-[0s]",
            },
            {
                src: "https://assets.zyrosite.com/YKb3okXQjWh9R4GV/certificado-2-AoPWNREyDVU4Rrx5.PNG",
                alt: "Certificado 2",
                class: "top-[30%] left-[25%] animate-delay-[1s]",
            },
            {
                src: "https://assets.zyrosite.com/YKb3okXQjWh9R4GV/certificado-3-dJoZN9Gre8CR9gKD.PNG",
                alt: "Certificado 3",
                class: "top-[5%] left-[45%] animate-delay-[0.5s]",
            },
            {
                src: "https://assets.zyrosite.com/YKb3okXQjWh9R4GV/certificado-4-A85erO6j2eF537Rx.PNG",
                alt: "Certificado 4",
                class: "top-[50%] left-[10%] animate-delay-[1.2s]",
            },
            {
                src: "https://assets.zyrosite.com/YKb3okXQjWh9R4GV/certificado-5-Yyv92RkQPGsQ8g0n.PNG",
                alt: "Certificado 5",
                class: "top-[35%] left-[60%] animate-delay-[0.8s]",
            },
            {
                src: "https://assets.zyrosite.com/YKb3okXQjWh9R4GV/certificado-6-AMq1pKXv2LhM6nVa.PNG",
                alt: "Certificado 6",
                class: "top-[15%] left-[80%] animate-delay-[1.5s]",
            },
        ];

        return (
            <section className="bg-[#f4f7fa] py-24 px-4 text-[#0D47A1] text-center font-sans relative">
                <h2 className="text-3xl sm:text-4xl font-bold mb-12">Mis Certificados</h2>

                <div className="relative max-w-6xl mx-auto h-[700px] hidden md:block">
                    {certificates.map((cert, i) => (
                        <img
                            key={i}
                            src={cert.src}
                            alt={cert.alt}
                            className={`absolute w-[230px] rounded-xl shadow-xl hover:scale-[1.6] hover:z-10 transition duration-300 ease-in-out cursor-zoom-in hover:shadow-2xl animate-float ${cert.class}`}
                        />
                    ))}
                </div>

                {/* Versión móvil (sin flotación) */}
                <div className="flex flex-wrap justify-center gap-6 md:hidden">
                    {certificates.map((cert, i) => (
                        <img
                            key={i}
                            src={cert.src}
                            alt={cert.alt}
                            className="w-[90%] max-w-sm rounded-xl shadow-md"
                        />
                    ))}
                </div>
            </section>
        );
    }

    return (
        <main className="text-gray-800 bg-white min-h-screen">
            <Helmet>
                <title>Especialidades Urológicas | Cirugía Láser y Tratamientos Avanzados - Dr. Adrián Fernández</title>
                <meta
                    name="description"
                    content="Conoce las especialidades del Dr. Adrián Fernández: cirugía láser HoLEP, laparoscopía urológica, andrología y más. Atención profesional en Guadalajara."
                />
                <meta
                    name="keywords"
                    content="cirugía prostática, urólogo en Guadalajara, HoLEP, cirugía laparoscópica, andrología, ECIRS, especialista en urología, salud urinaria, cirugía de riñón"
                />
                <meta name="author" content="Dr. Adrián Fernández" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Especialidades Urológicas | Dr. Adrián Fernández" />
                <meta property="og:description" content="Experticia en cirugía urológica avanzada. Conoce las especialidades del Dr. Adrián Fernández." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://urologoadrianfernandez.com/especialidades" />
                <meta property="og:image" content="https://urologoadrianfernandez.com/og-image.jpg" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Especialidades Urológicas | Dr. Adrián Fernández" />
                <meta name="twitter:description" content="Experticia en cirugía urológica avanzada." />
                <meta name="twitter:image" content="https://urologoadrianfernandez.com/og-image.jpg" />
                <link rel="canonical" href="https://urologoadrianfernandez.com/especialidades" />
            </Helmet>
            <Header />
            {renderHeroUrologySection()}
            {renderSpecialtyAreasSection()}
            {renderCertificatesSection()}
            <Footer />
            <CallButton />
        </main>
    );
}