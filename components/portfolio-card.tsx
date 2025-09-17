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
    <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      {/* Image/Video Slider */}
      <div className="aspect-video">
        <Carousel className="h-full">
          {images.map((mediaPath, index) => (
            <CarouselItem key={index}>
              {isVideo(mediaPath) ? (
                <div className="relative w-full h-full">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src={encodeURI(mediaPath)} type="video/mp4" />
                    Tu navegador no soporta el elemento de video.
                  </video>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 ml-1" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full">
                  <Image
                    src={encodeURI(mediaPath)}
                    alt={`${title} - Imagen ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0" />
                </div>
              )}
            </CarouselItem>
          ))}
        </Carousel>
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
