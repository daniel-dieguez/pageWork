"use client"

import { ExternalLink } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import cafeteriaWeb from '../images/CafeteriaWeb.png'
import gymnasiaWeb from '../images/gymWeb.png'
import aprendeceWeb from '../images/aprendeceLandig.webp'
import Image from "next/image";


const projects = [
  {
    title: "Aprendece",
    description:
      "Landing page para clinica de psicólogo que atiende a nivel internacional, capacidad de contactarlo por medio de whatsapp.",
    // image: "/modern-ecommerce-dark.png",
    image: aprendeceWeb,
    category: "Desarrollo Web",
    tags: ["React.js"],
    linksP: ["https://aprendece.com/"],
  },
  {
    title: "Cafeteria Volcan",
    description:
      "Landing page para cafeteria donde se muestra como las distintas comidas que brinda el lugar y ademas muestra la  ubicación de la cafeteria.",
    image: cafeteriaWeb,
    // category: "Desarrollo Web",
    category: "Landing Pages",
    tags: ["Next.js"],
    linksP: ["https://landing-page-coffe-store.vercel.app/"],
  },
  {
    title: "Gimnasio Fitness",
    description:
      "Landing page donde se brinda la información a los usuarios sobre los horarios, entrenadores y precios que se manejan.",
    image: gymnasiaWeb,
    category: "Landing Pages",
    tags: ["Next.js", "Tailwind", "SEO"],
    linksP: ["https://gym-landing-page-fawn-iota.vercel.app/"],
  },

]

export function PortfolioSection() {
  return (
    <section id="portafolio" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            Proyectos <span className="text-primary">Destacados</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Casos de éxito que demuestran nuestra experiencia y compromiso con la calidad
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-xl hover:shadow-primary/10"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image?.src}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  {project.linksP.map((linksP, idx) => (
                    <a
                      href={linksP}>
                      <ExternalLink

                        className="w-6 h-6 text-primary"
                      />
                    </a>

                  ))}

                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <div className="text-xs text-primary font-medium">{project.category}</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                  <div className="flex flex-wrap gap-2">
                    {project.linksP.map((linksP, idx) => (
                      <a
                        key={idx}
                        href={linksP}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        Ver Proyecto
                      </a>
                    ))}

                  </div>

                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
