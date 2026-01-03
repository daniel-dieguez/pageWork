"use client"

import { Award, Users, Zap, Target } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Enfoque Personalizado",
    description: "Cada proyecto es único. Diseñamos soluciones específicas para tus necesidades.",
  },
  {
    icon: Zap,
    title: "Tecnología Moderna",
    description: "Utilizamos las últimas herramientas y frameworks para resultados superiores.",
  },
  {
    icon: Users,
    title: "Colaboración Activa",
    description: "Trabajamos contigo en cada etapa para asegurar tu visión se haga realidad.",
  },
  {
    icon: Award,
    title: "Calidad Garantizada",
    description: "Compromiso con la excelencia en cada línea de código y cada pixel diseñado.",
  },
]

export function AboutSection() {
  return (
    <section id="sobre-nosotros" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-3xl rounded-full -z-10" />

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-balance">
                Sobre <span className="text-primary">{"Antigua's Solutions"}</span>
              </h2>
              <div className="w-20 h-1 bg-primary rounded-full" />
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                Somos un equipo apasionado por la tecnología y el diseño, dedicados a crear soluciones digitales que
                transforman negocios.
              </p>
              <p>
                Nuestra misión es proporcionar servicios de desarrollo web y software de la más alta calidad, adaptados
                a las necesidades únicas de cada cliente. Creemos en el poder de la tecnología para impulsar el
                crecimiento y la innovación.
              </p>
              <p>
                Con años de experiencia en la industria, hemos ayudado a decenas de empresas a establecer su presencia
                digital, optimizar procesos y alcanzar sus objetivos comerciales a través de soluciones tecnológicas
                innovadoras.
              </p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-secondary border-2 border-background flex items-center justify-center"
                  >
                    <span className="text-sm font-medium text-primary">+</span>
                  </div>
                ))}
              </div>
              <div>
                <div className="font-semibold">Equipo Experto</div>
                <div className="text-sm text-muted-foreground">Desarrolladores y diseñadores certificados</div>
              </div>
            </div>
          </div>

          {/* Right content - Values grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-all duration-300 space-y-4 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-bold text-lg">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
