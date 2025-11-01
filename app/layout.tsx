import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
//esta parte es para las fuentes de la pagina
export const metadata: Metadata = {
  title: "Méndez Ingeniería & Control | Soluciones Eléctricas e Industriales",
  description:
    "Soluciones integrales en Ingeniería Eléctrica y Automatización Industrial. Innovación, calidad y seguridad al servicio de tus proyectos.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
