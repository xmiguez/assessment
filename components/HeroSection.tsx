"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section id="inicio" className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
          Corporación Educacional de Asistencia Técnica en Educación
        </h1>
        <div className="mb-8">
          <Button
            size="lg"
            className="text-lg px-8 py-6 hover:scale-105 transition-transform"
          >
            Bajar
          </Button>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-up">
          Assessment es <span className="gradient-text">Capacitación</span>{" "}
          <span className="gradient-text">Perfeccionamiento</span>{" "}
          <span className="gradient-text">Asesoría</span>
        </h2>
        <p className="text-xl mb-8 max-w-4xl mx-auto animate-fade-in-up">
          para apoyar el proceso de implementación del Plan de Mejoramiento
          Educativo (PME) en las instituciones educativas.
        </p>
      </div>
    </section>
  );
}
