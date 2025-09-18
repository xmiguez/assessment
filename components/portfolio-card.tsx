"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Carousel, CarouselItem } from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import {
  MapPin,
  Users,
  BookOpen,
  Award,
  GraduationCap,
  Play,
} from "lucide-react";
import Image from "next/image";

interface PortfolioCardProps {
  title: string;
  institution: string;
  year: string;
  location: string;
  images: string[];
  description?: string;
}

const isVideo = (filePath: string) => {
  return (
    filePath.toLowerCase().endsWith(".mp4") ||
    filePath.toLowerCase().endsWith(".mov") ||
    filePath.toLowerCase().endsWith(".avi")
  );
};

export function PortfolioCard({
  title,
  institution,
  year,
  location,
  images,
  description,
}: PortfolioCardProps) {
  return (
    <Card className="border shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image/Video Slider */}
      <div className="aspect-video relative">
        {images.length === 1 ? (
          // Si solo hay una imagen, mostrar sin carrusel
          <div className="relative w-full h-full">
            {isVideo(images[0]) ? (
              <video
                className="w-full h-full object-cover"
                controls
                preload="metadata"
              >
                <source src={images[0]} type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            ) : (
              <Image
                src={images[0]}
                alt={`${title} - Imagen 1`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}
          </div>
        ) : (
          // Si hay múltiples imágenes, usar carrusel simple
          <div className="relative w-full h-full">
            <Carousel className="w-full h-full">
              {images.map((mediaPath, index) => {
                return (
                  <CarouselItem key={index} className="w-full h-full">
                    <div className="relative w-full h-full">
                      {isVideo(mediaPath) ? (
                        <video
                          className="w-full h-full object-cover"
                          controls
                          preload="metadata"
                        >
                          <source src={mediaPath} type="video/mp4" />
                          Tu navegador no soporta el elemento de video.
                        </video>
                      ) : (
                        <Image
                          src={mediaPath}
                          alt={`${title} - Imagen ${index + 1}`}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      )}
                    </div>
                  </CarouselItem>
                );
              })}
            </Carousel>
          </div>
        )}
      </div>

      {/* Card Content */}
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <Badge variant="secondary" className="text-xs">
            {year}
          </Badge>
          <div className="flex items-center text-xs">
            <MapPin className="w-3 h-3 mr-1" />
            {location}
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">{title}</CardTitle>
        <CardDescription className="text-sm font-medium">
          {institution}
        </CardDescription>
      </CardHeader>

      {description && (
        <CardContent className="pt-0">
          <p className="text-sm">{description}</p>
        </CardContent>
      )}
    </Card>
  );
}
