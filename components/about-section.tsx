import { CheckCircle } from "lucide-react"
//prueba
export function AboutSection() {
  const highlights = [
    "Prioridad en la seguridad y la calidad",
    "Garantía en todos nuestros trabajos",
    "Soluciones integrales adaptadas a cada cliente",
    "Asesoramiento técnico y soporte continuo",
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
              En <strong>Méndez Ingeniería & Control</strong>, brindamos soluciones en ingeniería eléctrica, automatización y control industrial con un enfoque absoluto en la seguridad, la calidad y la garantía de resultados.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Nos distinguimos por nuestro compromiso en cada proyecto, asegurando instalaciones seguras, eficientes y duraderas que cumplen con los más altos estándares técnicos y normativos.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Contamos con un equipo de profesionales especializados que trabaja junto a cada cliente para diseñar, ejecutar y mantener sistemas adaptados a sus necesidades, garantizando un funcionamiento confiable y un servicio postventa de respaldo permanente.
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
