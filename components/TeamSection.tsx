"use client";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users, Award, GraduationCap, BookOpen, UserCheck } from "lucide-react";
import Image from "next/image";

export function TeamSection() {
  return (
    <section id="equipo" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Equipo</h2>
          <h3 className="text-2xl font-semibold mb-8">
            Conoce <span className="gradient-text">Nuestro Equipo</span>
          </h3>
          <p className="text-xl max-w-3xl mx-auto">
            El equipo Assessment posee una sólida formación académica y una
            amplia experiencia práctica en sus respectivas áreas de
            especialización.
          </p>
          <p className="text-lg max-w-3xl mx-auto mt-4">
            El equipo está liderado por profesionales apasionados por la
            enseñanza, quienes han demostrado habilidades excepcionales para
            inspirar y motivar tanto a docentes como estudiantes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
            <CardHeader className="pb-4">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 transition-colors duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                    alt="Dr. Jorge Cifuentes"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center">
                  <Users className="w-4 h-4" />
                </div>
              </div>
              <CardTitle className="text-xl mb-2">
                Dr. Jorge Cifuentes
              </CardTitle>
              <CardDescription className="text-lg font-semibold mb-3">
                Director Académico
              </CardDescription>
              <p className="text-sm leading-relaxed">
                Doctor en Educación con más de 15 años de experiencia en gestión
                académica y desarrollo profesional docente.
              </p>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
            <CardHeader className="pb-4">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 transition-colors duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                    alt="Dr. Álvaro Galindo"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4" />
                </div>
              </div>
              <CardTitle className="text-xl mb-2">Dr. Álvaro Galindo</CardTitle>
              <CardDescription className="text-lg font-semibold mb-3">
                Director de Proyectos
              </CardDescription>
              <p className="text-sm leading-relaxed">
                Especialista en gestión de proyectos educativos y liderazgo
                institucional con amplia trayectoria en el sector.
              </p>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
            <CardHeader className="pb-4">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 transition-colors duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                    alt="Dr. Raul Fuentes"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4" />
                </div>
              </div>
              <CardTitle className="text-xl mb-2">Dr. Raul Fuentes</CardTitle>
              <CardDescription className="text-lg font-semibold mb-3">
                Asesor Académico
              </CardDescription>
              <p className="text-sm leading-relaxed">
                Experto en evaluación educativa y asesoría pedagógica con más de
                20 años de experiencia en el ámbito académico.
              </p>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group">
            <CardHeader className="pb-4">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 transition-colors duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                    alt="Dra. Mónica Arrau"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4" />
                </div>
              </div>
              <CardTitle className="text-xl mb-2">
                (c)Dra. Mónica Arrau
              </CardTitle>
              <CardDescription className="text-lg font-semibold mb-3">
                Docente
              </CardDescription>
              <p className="text-sm leading-relaxed">
                Especialista en metodologías activas de aprendizaje y desarrollo
                de competencias pedagógicas en el aula.
              </p>
            </CardHeader>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-4">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 transition-colors duration-300">
                  <Image
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
                    alt="Mg. Mónica Sanhueza"
                    width={128}
                    height={128}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center">
                  <UserCheck className="w-4 h-4" />
                </div>
              </div>
              <CardTitle className="text-xl mb-2">
                Mg. Mónica Sanhueza
              </CardTitle>
              <CardDescription className="text-lg font-semibold mb-3">
                Docente
              </CardDescription>
              <p className="text-sm leading-relaxed">
                Magíster en Educación con especialización en inclusión educativa
                y atención a la diversidad en el aula.
              </p>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
}
