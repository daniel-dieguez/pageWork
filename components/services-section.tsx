"use client"

import { Code, Globe, Package } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description:
      "Páginas de aterrizaje diseñadas para convertir visitantes en clientes. Optimizadas para SEO y con diseño responsive.",
    features: ["Diseño personalizado", "Optimización SEO", "Alta conversión", "Carga rápida"],
  },
  {
    icon: Code,
    title: "Desarrollo Web",
    description:
      "Sitios web completos y aplicaciones web modernas construidas con las últimas tecnologías para una experiencia superior.",
    features: ["Responsive design", "Performance optimizado", "Seguridad avanzada", "Mantenimiento"],
  },
  {
    icon: Package,
    title: "Software a Medida",
    description: "Soluciones personalizadas que se adaptan perfectamente a las necesidades específicas de tu negocio.",
    features: ["Análisis detallado", "Desarrollo ágil", "Integración completa", "Escalabilidad"],
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Soluciones digitales integrales para impulsar tu presencia online
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className="group hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-2"
              >
                <CardContent className="p-8 space-y-6">
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  </div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
