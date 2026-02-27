import Footer from "../components/footer";
import Header from "../components/navbar";
import CallButton from "../components/callButton";

import { Helmet } from 'react-helmet';


export default function Contact() {
    function renderContactSection() {
        return (
            <section id="contacto" className="bg-[#f4f7fa] text-[#0D47A1] py-24 px-4 mt-32 font-sans">
                <div className="max-w-6xl mx-auto flex flex-col gap-12">
                    {/* Texto de contacto */}
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl sm:text-4xl font-bold mb-6">Contacto</h1>

                        <div className="text-gray-700 text-base leading-relaxed space-y-4">
                            <p>
                                <strong>Sede principal:</strong><br />
                                Hospital Country 2000<br />
                                Av. Circunvalación Jorge Álvarez del Castillo 1504, Guadalajara, Jal.
                            </p>

                            <p>
                                <strong>Segunda ubicación:</strong><br />
                                C. Cristobal Colón 221, Centro,<br />
                                47750 Atotonilco el Alto, Jal.
                            </p>

                            <p>
                                <strong>Horario:</strong><br />
                                Lunes a Viernes: 8 am – 8 pm<br />
                                Sábado: 8 am – 2 pm
                            </p>

                            <p>
                                <strong>Formas de pago:</strong><br />
                                Efectivo, Terminal bancaria y Transferencia
                            </p>

                            <p>
                                <strong>Cómo agendar:</strong>
                            </p>

                            <div className="flex flex-wrap gap-4 mt-6 justify-center md:justify-start">
                                <a
                                    href="tel:3334440990"
                                    className="bg-[#0D47A1] text-white px-6 py-3 rounded-full font-semibold transition hover:bg-[#08306b]"
                                >
                                    Llamar
                                </a>
                                <a
                                    href="https://wa.me/5213334440990?text=Hola%20Dr.%20Adri%C3%A1n%2C%20me%20gustar%C3%ADa%20agendar%20una%20cita%20de%20consulta.%20%C2%BFPodr%C3%ADa%20darme%20informaci%C3%B3n%3F"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#4FC3F7] text-white px-6 py-3 rounded-full font-semibold transition hover:bg-[#29b6f6]"
                                >
                                    Enviar WhatsApp
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Mapas */}
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h4 className="text-lg font-semibold mb-2">Sede principal</h4>
                            <iframe
                                src="https://www.google.com/maps?q=Hospital+Country+2000,+Guadalajara,+Jalisco&output=embed"
                                className="w-full h-[300px] rounded-xl shadow-lg border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>

                        <div>
                            <h4 className="text-lg font-semibold mb-2">Segunda ubicación</h4>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3735.912246332671!2d-102.5112844!3d20.5507711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842ecbe660f66a39%3A0xbbf469fd90aa1c5b!2sC.%20Cristobal%20Col%C3%B3n%20221%2C%20Centro%2C%2047750%20Atotonilco%20el%20Alto%2C%20Jal.!5e0!3m2!1ses!2smx!4v1744309312601!5m2!1ses!2smx"
                                className="w-full h-[300px] rounded-xl shadow-lg border-0"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    function renderContactFormSection() {
        return (
            <section className="bg-white py-20 px-4 font-sans text-center text-[#0D47A1]">
                <div className="max-w-xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-2">Escríbeme un mensaje</h2>
                    <p className="text-gray-700 mb-10 text-base">
                        Completa el siguiente formulario para ponerte en contacto directo por correo.
                    </p>

                    <form
                        action="https://formsubmit.co/fernandezarzateadrian@gmail.com"
                        method="POST"
                        className="space-y-6"
                    >
                        <input
                            type="text"
                            name="name"
                            placeholder="Tu nombre completo"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] text-gray-800"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Tu correo electrónico"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] text-gray-800"
                        />

                        <textarea
                            name="message"
                            placeholder="Escribe tu mensaje..."
                            rows="5"
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#4FC3F7] text-gray-800"
                        ></textarea>

                        {/* Seguridad y redirección (opcional) */}
                        <input type="hidden" name="_captcha" value="false" />
                        <input type="hidden" name="_next" value="https://tusitio.com/gracias" />

                        <button
                            type="submit"
                            className="bg-[#0D47A1] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#08306b] transition"
                        >
                            Enviar mensaje
                        </button>
                    </form>
                </div>
            </section>
        );
    }

    return (
        <main className="text-gray-800 bg-white min-h-screen">
            <Helmet>
                <title>Contacto | Agenda tu Cita con el Dr. Adrián Fernández - Urólogo en Guadalajara</title>
                <meta
                    name="description"
                    content="Agenda una consulta con el Dr. Adrián Fernández, urólogo certificado en Guadalajara. Contáctanos por teléfono, WhatsApp o correo electrónico. Atención en dos ubicaciones."
                />
                <meta
                    name="keywords"
                    content="contacto urólogo Guadalajara, agendar cita urología, WhatsApp urólogo, teléfono Dr. Adrián Fernández, Hospital Country 2000"
                />
                <meta name="author" content="Dr. Adrián Fernández" />
                <meta name="robots" content="index, follow" />
                <meta property="og:title" content="Contacto | Dr. Adrián Fernández - Urólogo en Guadalajara" />
                <meta property="og:description" content="Agenda tu consulta con el Dr. Adrián Fernández. Atención profesional en Guadalajara y Atotonilco el Alto." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://urologoadrianfernandez.com/contacto" />
                <link rel="canonical" href="https://urologoadrianfernandez.com/contacto" />
            </Helmet>
            <Header />
            {renderContactSection()}
            {renderContactFormSection()}
            <Footer />
            <CallButton />
        </main>
    );
}