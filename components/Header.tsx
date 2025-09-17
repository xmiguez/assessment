"use client";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";
import Image from "next/image";
import { ModeToggle } from "./dark-switcher";

export function Header() {
  return (
    <header className="border-b backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center">
          <a href="/" className="h-16 w-auto">
            <Image
              src="/logo-main.png"
              alt="SurAssessment Logo"
              width={200}
              height={80}
              className="h-full w-auto object-contain"
              priority
              quality={100}
              unoptimized={false}
              sizes="(max-width: 768px) 150px, 200px"
            />
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#portafolio" className="transition-colors">
            Portafolio
          </a>
          <a href="#cursos" className="transition-colors">
            Cursos y Asesorías 2025
          </a>
          <a href="#equipo" className="transition-colors">
            Equipo
          </a>
          <a href="#contacto" className="transition-colors">
            Contacto
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost">Iniciar Sesión</Button>
            <Button>Comenzar</Button>
            <ModeToggle />
          </div>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
