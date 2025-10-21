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
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Quiénes Somos</h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1 flex justify-center">
            <div className="relative max-w-lg">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl bg-primary p-4">
                <img 
                  src="/yo.jpeg" 
                  alt="Equipo de Méndez Ingeniería & Control" 
                  className="w-full h-full object-cover rounded-xl" 
                />
              </div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10"></div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/10 rounded-2xl -z-10"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                En <strong className="text-foreground">Méndez Ingeniería & Control</strong>, brindamos soluciones en ingeniería eléctrica, automatización y control industrial con un enfoque absoluto en la seguridad, la calidad y la garantía de resultados.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nos distinguimos por nuestro compromiso en cada proyecto, asegurando instalaciones seguras, eficientes y duraderas que cumplen con los más altos estándares técnicos y normativos.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Contamos con un equipo de profesionales especializados que trabaja junto a cada cliente para diseñar, ejecutar y mantener sistemas adaptados a sus necesidades, garantizando un funcionamiento confiable y un servicio postventa de respaldo permanente.
              </p>
            </div>

            <div className="bg-muted/30 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Nuestros Valores</h3>
              <div className="space-y-4">
                {highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-foreground font-medium">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
