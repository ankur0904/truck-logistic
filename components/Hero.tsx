// import Image from "next/image";

// export default function Hero() {
//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center pt-20"
//     >
//       {/* Background Image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/Gemini_Generated_Image_7x1tie7x1tie7x1t (1).png"
//           alt="Mudanzas profesionales"
//           fill
//           className="object-cover brightness-50"
//           priority
//         />
//       </div>

//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 text-center text-white">
//         {/* Promotional Banner */}
//         <div className="inline-block bg-red-600 text-white px-6 py-2 rounded-full mb-6 font-semibold animate-pulse">
//           🎉 ¡10% DE DESCUENTO en todas las mudanzas reservadas este mes!
//         </div>

//         <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
//           Servicios Profesionales de Mudanzas
//           <br />
//           en Barcelona y Andorra
//         </h1>

//         <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
//           No transportamos cajas… transportamos sueños.
//         </p>

//         {/* CTA Buttons */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//           <a
//             href="#quote"
//             className="bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all shadow-2xl hover:scale-105 w-full sm:w-auto"
//           >
//             Solicitar Presupuesto
//           </a>
//           <a
//             href="tel:+34123456789"
//             className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-2xl hover:scale-105 w-full sm:w-auto"
//           >
//             📞 Llamar Ahora
//           </a>
//         </div>
//       </div>

//       {/* Scroll Down Indicator */}
//       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
//         <svg
//           className="w-8 h-8 text-white"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M19 14l-7 7m0 0l-7-7m7 7V3"
//           />
//         </svg>
//       </div>
//     </section>
//   );
// }
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden">
      {/* 1. Background Image & Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Gemini_Generated_Image_7x1tie7x1tie7x1t (1).png"
          alt="Mudanzas Camión"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay: Darker at bottom/sides to make text pop */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80" />
      </div>

      {/* 2. Main Content */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center mt-10">
        {/* Discount Badge (Pill Shape) */}
        <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full p-1 pr-6 mb-8 shadow-lg animate-fade-in-down">
          <div className="flex items-center gap-2 bg-red-600 text-white px-3 py-1.5 rounded-full mr-3">
            {/* Tag Icon */}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
              ></path>
            </svg>
            <span className="text-xs font-bold tracking-wider uppercase">
              OFERTA
            </span>
          </div>
          <span className="text-sm md:text-base text-white font-medium">
            10% de descuento en todas las mudanzas reservadas este mes
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-xl">
          Mudanzas Profesionales
          <br />
          {/* Gradient Text Effect */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
            Barcelona y Andorra
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light max-w-2xl mx-auto">
          No transportamos cajas...{" "}
          <span className="text-white font-medium">transportamos sueños.</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 w-full justify-center">
          {/* Primary Button (Glowing Blue) */}
          <a
            href="#quote"
            className="group relative px-7 py-3 bg-blue-600 hover:bg-blue-500 rounded-full text-white font-semibold text-md transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.6)] hover:shadow-[0_0_30px_rgba(37,99,235,0.8)] flex items-center justify-center gap-2"
          >
            {/* Sparkle Icon */}
            <svg
              className="w-5 h-5 text-blue-200"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            Solicitar Presupuesto
          </a>

          {/* Secondary Button (Glass Outline) */}
          <a
            href="tel:+34123456789"
            className="group px-8 py-4 rounded-full text-white font-semibold text-lg border border-white/30 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-3"
          >
            {/* Phone Icon */}
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              ></path>
            </svg>
            Llamar Ahora
          </a>
        </div>
      </div>

      {/* 3. Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          ></path>
        </svg>
      </div>
    </section>
  );
}
