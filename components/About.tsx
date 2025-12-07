import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-linear-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/gemini-2.png"
              alt="Equipo Mudanzas Sarria"
              fill
              className="object-cover"
            />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-gray-900">
              Sobre Mudanzas Sarria
            </h2>

            <div className="space-y-5 text-lg text-gray-700 leading-relaxed mb-10">
              <p>
                Con más de <strong>15 años de experiencia</strong> en el sector
                de mudanzas, Mudanzas Sarria se ha consolidado como la empresa
                líder en Barcelona y Andorra.
              </p>

              <p>
                Nuestra misión es hacer de tu mudanza una experiencia{" "}
                <strong>sin estrés</strong>, cuidando cada detalle como si
                fueran nuestros propios bienes. No solo transportamos cajas,
                transportamos{" "}
                <strong>recuerdos, sueños y nuevos comienzos</strong>.
              </p>

              <p>
                Contamos con un equipo de profesionales altamente cualificados,
                flota moderna de vehículos y la mejor tecnología en sistemas de
                embalaje y protección.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-10">
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  15+
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  Años de Experiencia
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  5000+
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  Mudanzas Exitosas
                </div>
              </div>
              <div className="text-center p-4 bg-white rounded-xl shadow-md">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  100%
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium">
                  Satisfacción
                </div>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 transform"
            >
              Conocer Más
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
