"use client";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Capacitación</h2>
        <h3 className="text-2xl font-semibold mb-8">
          Perfeccionamiento Docente
        </h3>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Liceo Particular Los Andes, San Pedro de la Paz
        </p>
        <p className="text-lg mb-8 max-w-4xl mx-auto">
          En el marco de la capacitación docente se realizó...
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            Contactanos
          </Button>
        </div>
      </div>
    </section>
  );
}
