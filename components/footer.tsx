import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Quiénes Somos", href: "#quienes-somos" },
    { name: "Servicios", href: "#servicios" },
    { name: "Galería", href: "#galeria" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">Méndez Ingeniería</span>
                <span className="text-white/80 text-xs">& Control</span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Soluciones integrales en ingeniería eléctrica y automatización industrial. Innovación, calidad y
              seguridad.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>Eldorado, Misiones</li>
              <li>
                <a href="tel:+543624244030" className="hover:text-white transition-colors">
                  03624244030
                </a>
              </li>
              <li>
                <a href="mailto:juanimendezzz@gmail.com" className="hover:text-white transition-colors">
                  juanimendezzz@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/70 text-sm">
            Copyright © {currentYear} Méndez Ingeniería & Control. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
