"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Users, Award } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Testimonios</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8 border-0 shadow-lg">
            <CardContent>
              <div className="text-center">
                <blockquote className="text-lg italic mb-6">
                  "Excelente trabajo realizado por el equipo de Assessment. Su
                  metodología y profesionalismo nos ayudó significativamente en
                  nuestro proceso de mejoramiento educativo."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Users className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">Docentes</h4>
                    <p className="text-sm">Escuela Mariano Egaña, Tomé</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <CardContent>
              <div className="text-center">
                <blockquote className="text-lg italic mb-6">
                  "La asesoría recibida fue fundamental para nuestro desarrollo
                  institucional. Recomendamos ampliamente los servicios de
                  Assessment."
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4">
                    <Award className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold">Joselyn Venegas</h4>
                    <p className="text-sm">
                      Jefa de UTP / Liceo Vicente Palacios Valdes, Tomé
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
