import { Zap, Cpu, Wrench, Lightbulb, Activity, Settings } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function ServicesSection() {
  const services = [
    {
      icon: Zap,
      title: "Instalaciones Eléctricas",
      description:
        "Diseño e implementación de instalaciones eléctricas industriales y domiciliarias con los más altos estándares de calidad y seguridad.",
    },
    {
      icon: Cpu,
      title: "Automatización y Control",
      description:
        "Sistemas de automatización con PLC, sensores y control industrial para optimizar procesos y aumentar la eficiencia operativa.",
    },
    {
      icon: Wrench,
      title: "Mantenimiento Eléctrico",
      description:
        "Servicios de mantenimiento preventivo y correctivo para garantizar el funcionamiento óptimo de sus instalaciones eléctricas.",
    },
    {
      icon: Lightbulb,
      title: "Eficiencia Energética",
      description:
        "Proyectos de iluminación LED y soluciones de eficiencia energética para reducir costos y mejorar la sostenibilidad.",
    },
    {
      icon: Activity,
      title: "Termografía",
      description:
        "Inspecciones termográficas para detectar puntos calientes, fallas eléctricas y prevenir averías antes de que ocurran.",
    },
    {
      icon: Settings,
      title: "Tableros de Control",
      description:
        "Diseño, fabricación e instalación de tableros eléctricos y de control personalizados para aplicaciones industriales.",
    },
  ]

  return (
    <section id="servicios" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluciones integrales para todas sus necesidades eléctricas e industriales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-accent"
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
