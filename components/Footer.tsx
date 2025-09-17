"use client";

import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <Link href="/" className="h-20 w-auto">
                <Image
                  src="/logo-main.png"
                  alt="SurAssessment Logo"
                  width={250}
                  height={100}
                  className="h-full w-auto object-contain"
                  quality={100}
                  unoptimized={false}
                  sizes="(max-width: 768px) 200px, 250px"
                />
              </Link>
            </div>
            <p>
              Assessment es una corporación educacional para apoyar el proceso
              de implementación del Plan de Mejoramiento Educativo (PME) en las
              instituciones educativas.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors">
                  Aula Virtual
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Soporte</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors">
                  Centro de Ayuda
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors">
                  Documentación
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors">
                  Estado del Sistema
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="transition-colors">
                  Acerca de
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors">
                  Carreras
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors">
                  Privacidad
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Assessment © Copyright 2025.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="transition-colors">
              Términos
            </a>
            <a href="#" className="transition-colors">
              Privacidad
            </a>
            <a href="#" className="transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
