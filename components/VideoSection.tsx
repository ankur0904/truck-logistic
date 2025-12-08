export default function VideoSection() {
    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                        Mira Cómo Trabajamos
                    </h2>
                    <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Descubre la profesionalidad y dedicación que ponemos en cada mudanza
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black">
                        <div className="aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/3rZi0XRZu2k?autoplay=1&mute=1&loop=1&playlist=3rZi0XRZu2k&controls=0&showinfo=0&rel=0&modestbranding=1"
                                title="Servicios de Mudanzas Profesionales"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#quote"
                        className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-2xl hover:scale-105 transform"
                    >
                        Solicita Tu Presupuesto Ahora
                    </a>
                </div>
            </div>
        </section>
    );
}
