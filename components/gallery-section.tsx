"use client"

import { useState } from "react"
import { X } from "lucide-react"

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    {
      src: "/industrial-electrical-panel-installation.jpg",
      alt: "Instalación de tablero eléctrico industrial",
    },
    {
      src: "/plc-automation-control-system.jpg",
      alt: "Sistema de control con PLC",
    },
    {
      src: "/electrical-maintenance-work.jpg",
      alt: "Mantenimiento eléctrico preventivo",
    },
    {
      src: "/led-industrial-lighting-installation.jpg",
      alt: "Proyecto de iluminación LED",
    },
    {
      src: "/thermographic-inspection-electrical.jpg",
      alt: "Inspección termográfica",
    },
    {
      src: "/electrical-control-cabinet-wiring.jpg",
      alt: "Cableado de tablero de control",
    },
  ]

  return (
    <section id="galeria" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Galería de Proyectos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Algunos de nuestros trabajos más destacados</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-lg font-medium">
                  Ver imagen
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <img
              src={images[selectedImage].src || "/placeholder.svg"}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}
      </div>
    </section>
  )
}
