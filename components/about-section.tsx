import { CheckCircle } from "lucide-react"

export function AboutSection() {
  const highlights = [
    "Más de 15 años de experiencia en el sector",
    "Equipo de profesionales altamente capacitados",
    "Soluciones personalizadas para cada cliente",
    "Compromiso con la calidad y la seguridad",
  ]

  return (
    <section id="quienes-somos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
              <img src="/electrical-engineer-working-on-industrial-control-.jpg" alt="Equipo de trabajo" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/10 rounded-lg -z-10" />
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">Quiénes Somos</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              En <strong>Méndez Ingeniería & Control</strong>, somos una empresa especializada en ingeniería eléctrica,
              automatización y control industrial. Con años de experiencia en el sector, nos dedicamos a brindar
              soluciones integrales que combinan tecnología de punta, profesionalismo y un profundo compromiso con la
              seguridad.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nuestro equipo de ingenieros y técnicos altamente capacitados trabaja en estrecha colaboración con cada
              cliente para diseñar, implementar y mantener sistemas eléctricos e industriales que optimicen sus
              operaciones y garanticen resultados confiables.
            </p>

            <div className="space-y-4">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
