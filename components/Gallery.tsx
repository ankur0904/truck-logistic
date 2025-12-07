"use client";

import Image from "next/image";
import { useState } from "react";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/gemini-1.png",
      alt: "Camión de mudanzas profesional",
    },
    {
      src: "/gemini-2.png",
      alt: "Equipo de trabajo profesional",
    },
    {
      src: "/gemini-3.png",
      alt: "Servicio de embalaje",
    },
    {
      src: "/gemini-4.png",
      alt: "Transporte seguro",
    },
    {
      src: "/gemini-1.png",
      alt: "Mudanza en proceso",
    },
    {
      src: "/gemini-2.png",
      alt: "Entrega exitosa",
    },
  ];

  return (
    <section id="gallery" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
            Galería de Nuestro Trabajo
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mira cómo hacemos realidad las mudanzas perfectas
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0  bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <svg
                  className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 transform"
          >
            Ver Galería Completa
          </a>
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white text-4xl hover:text-gray-300"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative w-full max-w-5xl h-[80vh]">
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
