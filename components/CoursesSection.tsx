"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  MapPin,
  Video,
  Users,
  Shield,
  Award,
  BookOpen,
  FileText,
  ArrowRight,
} from "lucide-react";
import { coursesData } from "@/lib/data";
import { useState, useMemo } from "react";

export function CoursesSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedModality, setSelectedModality] = useState("Todos");

  // Filtrar cursos basado en búsqueda y modalidad
  const filteredCourses = useMemo(() => {
    return coursesData.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesModality =
        selectedModality === "Todos" || course.modality === selectedModality;
      return matchesSearch && matchesModality;
    });
  }, [searchTerm, selectedModality]);

  // Función para obtener el ícono y estilo de modalidad
  const getModalityBadge = (modality: string) => {
    switch (modality) {
      case "Presencial":
        return {
          icon: <MapPin className="w-3 h-3 mr-1" />,
          className: "",
        };
      case "Online":
        return {
          icon: <Video className="w-3 h-3 mr-1" />,
          className: "",
        };
      case "Híbrido":
        return {
          icon: <Users className="w-3 h-3 mr-1" />,
          className: "",
        };
      default:
        return {
          icon: <MapPin className="w-3 h-3 mr-1" />,
          className: "",
        };
    }
  };

  return (
    <section id="cursos" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Cursos y Asesorías 2025</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Programas de perfeccionamiento profesional diseñados para fortalecer
            las competencias pedagógicas y el liderazgo educativo
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="max-w-6xl mx-auto mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between  p-6 rounded-lg shadow-md">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4" />
                <Input
                  placeholder="Buscar cursos..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedModality === "Todos" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedModality("Todos")}
              >
                Todos
              </Button>
              <Button
                variant={
                  selectedModality === "Presencial" ? "default" : "outline"
                }
                size="sm"
                onClick={() => setSelectedModality("Presencial")}
              >
                Presencial
              </Button>
              <Button
                variant={selectedModality === "Online" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedModality("Online")}
              >
                Online
              </Button>
              <Button
                variant={selectedModality === "Híbrido" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedModality("Híbrido")}
              >
                Híbrido
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto">
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        #
                      </th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">
                        Curso / Asesoría
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        Duración
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        Modalidad
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        Precio
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredCourses.length > 0 ? (
                      filteredCourses.map((course, index) => {
                        const modalityBadge = getModalityBadge(course.modality);
                        return (
                          <tr key={course.id} className="transition-colors">
                            <td className="px-6 py-4 text-sm font-medium">
                              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                {index + 1}
                              </div>
                            </td>
                            <td className="px-6 py-4">
                              <div>
                                <h3 className="text-sm font-semibold mb-1">
                                  {course.title}
                                </h3>
                                <p className="text-xs">{course.description}</p>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-center text-sm">
                              <Badge variant="secondary">
                                {course.duration}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 text-center">
                              <Badge className={modalityBadge.className}>
                                {modalityBadge.icon}
                                {course.modality}
                              </Badge>
                            </td>
                            <td className="px-6 py-4 text-center text-sm font-semibold">
                              {course.price}
                            </td>
                            <td className="px-6 py-4 text-center">
                              <div className="flex gap-2 justify-center">
                                <Button size="sm" variant="outline">
                                  <FileText className="w-3 h-3 mr-1" />
                                  Info
                                </Button>
                                <Button size="sm">
                                  <ArrowRight className="w-3 h-3 mr-1" />
                                  Inscribir
                                </Button>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan={6} className="px-6 py-8 text-center">
                          <div className="flex flex-col items-center">
                            <Search className="w-12 h-12 mb-4" />
                            <p className="text-lg font-medium">
                              No se encontraron cursos
                            </p>
                            <p className="text-sm">
                              Intenta con otros términos de búsqueda o filtros
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 mr-3" />
                <h3 className="text-lg font-semibold">Registro ATE</h3>
              </div>
              <p className="text-sm">
                Todos los cursos están registrados en ATE e inscritos en DIBAM,
                permitiendo licitación con trato directo por Ley SEP.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 mr-3" />
                <h3 className="text-lg font-semibold">Certificación</h3>
              </div>
              <p className="text-sm">
                Al completar exitosamente cualquier curso, recibirás una
                certificación oficial reconocida por el sistema educativo.
              </p>
            </Card>

            <Card className="p-6 border-0 shadow-md">
              <div className="flex items-center mb-4">
                <Users className="w-6 h-6 mr-3" />
                <h3 className="text-lg font-semibold">Modalidades</h3>
              </div>
              <p className="text-sm">
                Ofrecemos cursos presenciales, online y híbridos para adaptarnos
                a las necesidades de cada institución educativa.
              </p>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button size="lg" className="px-8 py-6 text-lg">
              <BookOpen className="w-5 h-5 mr-2" />
              Ver Catálogo Completo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
