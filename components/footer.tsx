import Link from "next/link"
import { Logo } from "@/components/logo"

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
            <div className="mb-4">
              <Logo size="md" />
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
