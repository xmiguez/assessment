"use client";

import { Button } from "@/components/ui/button";
import { PortfolioCard } from "@/components/portfolio-card";
import { BookOpen } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { useState, useMemo } from "react";

export function PortfolioSection() {
  const [selectedYear, setSelectedYear] = useState("Todos");

  // Filtrar portafolio basado en año seleccionado
  const filteredPortfolio = useMemo(() => {
    return portfolioData.filter((item) => {
      return selectedYear === "Todos" || item.year === selectedYear;
    });
  }, [selectedYear]);

  return (
    <section id="portafolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portafolio</h2>
          <p className="text-xl max-w-2xl mx-auto">
            Algunas de nuestras Asesorías, Capacitaciones y Perfeccionamientos
            realizados.
          </p>
        </div>

        {/* Portfolio Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button
            variant={selectedYear === "Todos" ? "default" : "outline"}
            onClick={() => setSelectedYear("Todos")}
          >
            Todos
          </Button>
          <Button
            variant={selectedYear === "2025" ? "default" : "outline"}
            onClick={() => setSelectedYear("2025")}
          >
            2025
          </Button>
          <Button
            variant={selectedYear === "2024" ? "default" : "outline"}
            onClick={() => setSelectedYear("2024")}
          >
            2024
          </Button>
          <Button
            variant={selectedYear === "2023" ? "default" : "outline"}
            onClick={() => setSelectedYear("2023")}
          >
            2023
          </Button>
          <Button
            variant={selectedYear === "2022" ? "default" : "outline"}
            onClick={() => setSelectedYear("2022")}
          >
            2022
          </Button>
          <Button
            variant={selectedYear === "2021" ? "default" : "outline"}
            onClick={() => setSelectedYear("2021")}
          >
            2021
          </Button>
          <Button
            variant={selectedYear === "2020" ? "default" : "outline"}
            onClick={() => setSelectedYear("2020")}
          >
            2020
          </Button>
          <Button
            variant={
              selectedYear === "Trayectoria y experiencia"
                ? "default"
                : "outline"
            }
            onClick={() => setSelectedYear("Trayectoria y experiencia")}
          >
            Trayectoria y experiencia
          </Button>
        </div>

        {/* Portfolio Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPortfolio.length > 0 ? (
            filteredPortfolio.map((item) => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                institution={item.institution}
                year={item.year}
                location={item.location}
                images={item.images}
                description={item.description}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="flex flex-col items-center">
                <BookOpen className="w-16 h-16 mb-4" />
                <p className="text-lg font-medium mb-2">
                  No se encontraron proyectos
                </p>
                <p className="text-sm">
                  No hay proyectos disponibles para el año seleccionado
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
