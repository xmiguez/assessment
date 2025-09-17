"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/input";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contacto" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Contáctanos</h2>
          <p className="text-xl max-w-2xl mx-auto">
            ¿Tienes preguntas sobre nuestros servicios? Estamos aquí para
            ayudarte
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl mb-4">
                Envíanos un Mensaje
              </CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo en
                menos de 24 horas
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Nombre
                    </label>
                    <Input placeholder="Tu nombre completo" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">
                      Email
                    </label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Institución
                  </label>
                  <Input placeholder="Nombre de tu institución educativa" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Servicio de Interés
                  </label>
                  <Input placeholder="¿En qué servicio estás interesado?" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-2 block">
                    Mensaje
                  </label>
                  <Textarea
                    placeholder="Cuéntanos más sobre tus necesidades..."
                    rows={4}
                  />
                </div>
                <Button className="w-full" size="lg">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Email</h3>
                  <p className="mb-1">profesor.cifuentes@gmail.com</p>
                  <p>profesor.galindo@gmail.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Teléfono</h3>
                  <p className="mb-1">+56 9 68430319</p>
                  <p>+56 9 88290952</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Ubicación</h3>
                  <p className="mb-1">Concepción, Chile</p>
                  <p>Valdivia, Chile</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Horarios de Atención
                </h3>
                <p className="text-gray-600 mb-1">
                  Lunes a Viernes: 9:00 - 18:00
                </p>
                <p className="text-gray-600">Sábados: 9:00 - 13:00</p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
