"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function GallerySection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const images = [
    {
      src: "/led-industrial-lighting-installation.jpg",
      alt: "Proyecto de iluminación LED",
    },
    {
      src: "/termografia 1.jpeg",
      alt: "Análisis termográfico de instalaciones eléctricas",
    },
    {
      src: "/variador de frecuencia.jpeg",
      alt: "Variador de frecuencia industrial",
    },
    {
      src: "/Variador de frecuencia 2.jpeg",
      alt: "Sistema de variador de frecuencia",
    },
    {
      src: "/Tablero 1.jpeg",
      alt: "Tablero de control eléctrico",
    },
    {
      src: "/Tablero 2.jpeg",
      alt: "Tablero de control eléctrico",
    },
  ]

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Galería de Proyectos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Algunos de nuestros trabajos más destacados</p>
        </div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-2xl bg-muted">
            <img
              src={images[currentImageIndex].src || "/placeholder.svg"}
              alt={images[currentImageIndex].alt}
              className="w-full h-full object-contain"
            />
            
            {/* Navigation buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
              onClick={prevImage}
              aria-label="Imagen anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full"
              onClick={nextImage}
              aria-label="Imagen siguiente"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Image indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`h-2 rounded-full transition-all ${
                    index === currentImageIndex
                      ? "w-8 bg-primary"
                      : "w-2 bg-white/50 hover:bg-white/70"
                  }`}
                  onClick={() => setCurrentImageIndex(index)}
                  aria-label={`Ir a imagen ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Image info */}
          <div className="mt-4 text-center">
            <p className="text-lg font-medium text-foreground">
              {images[currentImageIndex].alt}
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              {currentImageIndex + 1} de {images.length}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
