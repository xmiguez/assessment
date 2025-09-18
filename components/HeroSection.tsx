"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/intro.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
        {/* Overlay con blur */}
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up text-white">
          Corporación Educacional de Asistencia Técnica en Educación
        </h1>
        <div className="mb-8">
          <Button
            size="lg"
            className="text-lg px-8 py-6 hover:scale-105 transition-transform bg-white text-black hover:bg-gray-100"
          >
            Bajar
          </Button>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up text-white">
          Assessment es <span className="gradient-text">Capacitación</span>
          <span className="gradient-text">Perfeccionamiento</span>
          <span className="gradient-text">Asesoría</span>
        </h2>
        <p className="text-xl mb-8 max-w-4xl mx-auto animate-fade-in-up text-white">
          para apoyar el proceso de implementación del Plan de Mejoramiento
          Educativo (PME) en las instituciones educativas.
        </p>
      </div>
    </section>
  );
}
