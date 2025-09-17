"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { BookOpen, Menu, X } from "lucide-react";
import Link from "next/link";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)}>
          <div
            className="absolute right-0 top-0 h-full w-80 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex items-center space-x-2 mb-8">
                <Link
                  href="/"
                  className="flex items-center space-x-2"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <span className="text-xl font-bold">SurAssessment</span>
                </Link>
              </div>

              <nav className="space-y-4">
                <a
                  href="#inicio"
                  className="block text-lg transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  INICIO
                </a>
                <a
                  href="#portafolio"
                  className="block text-lg transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Portafolio
                </a>
                <a
                  href="#cursos"
                  className="block text-lg transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Cursos y Asesorías 2025
                </a>
                <a
                  href="#equipo"
                  className="block text-lg transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Equipo
                </a>
                <a
                  href="#contacto"
                  className="block text-lg transition-colors py-2"
                  onClick={() => setIsOpen(false)}
                >
                  Contacto
                </a>
              </nav>

              <div className="mt-8 space-y-4">
                <Button variant="ghost" className="w-full justify-start">
                  Iniciar Sesión
                </Button>
                <Button className="w-full">Comenzar</Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
