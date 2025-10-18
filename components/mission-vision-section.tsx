import { Target, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function MissionVisionSection() {
  return (
    <section id="mision-vision" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Misión y Visión</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nuestro compromiso con la excelencia y la innovación
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Misión */}
          <Card className="border-2 hover:border-accent transition-colors duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Misión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Brindar soluciones eléctricas seguras, eficientes y sostenibles, adaptadas a las necesidades de cada
                cliente. Nos comprometemos a ofrecer servicios de la más alta calidad, utilizando tecnología de
                vanguardia y las mejores prácticas de la industria para garantizar la satisfacción y el éxito de
                nuestros clientes.
              </p>
            </CardContent>
          </Card>

          {/* Visión */}
          <Card className="border-2 hover:border-accent transition-colors duration-300 hover:shadow-lg">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Visión</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser referentes en ingeniería eléctrica y automatización, reconocidos por la innovación, la calidad y la
                confiabilidad de nuestros servicios. Aspiramos a expandir nuestra presencia en el mercado,
                consolidándonos como el socio estratégico preferido para proyectos industriales y comerciales de gran
                envergadura.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
