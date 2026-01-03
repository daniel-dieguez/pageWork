"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "react-toastify";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
    // alert("¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
    toast.success("Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.")
    setFormData({ name: "", email: "", message: "" })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "info@antiguassolutions.com",
      href: "mailto:info@antiguassolutions.com",
    },
    {
      icon: Phone,
      label: "Teléfono",
      value: "+502 58564601",
      href: "+502 58564601",
    },
    {
      icon: MapPin,
      label: "Ubicación",
      value: "Guatemala",
      href: "#",
    },
  ]

  return (
    <section id="contacto" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-bold text-balance">
            {"Hablemos de tu"} <span className="text-primary">proyecto</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Estamos listos para convertir tus ideas en realidad. Contáctanos hoy mismo
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact info cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => {
              const Icon = info.icon
              return (
                <Card key={index} className="hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <a
                      href={info.href}
                      className="flex items-start gap-4 group"
                      onClick={(e) => info.label === "Ubicación" && e.preventDefault()}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="space-y-1">
                        <div className="text-sm text-muted-foreground">{info.label}</div>
                        <div className="font-medium group-hover:text-primary transition-colors">{info.value}</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              )
            })}

            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-6 space-y-2">
                <div className="text-2xl font-bold">¿Listo para empezar?</div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Respuesta en menos de 24 horas. Consulta inicial completamente gratuita.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Contact form */}
          <Card className="lg:col-span-2 hover:border-primary transition-colors">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Nombre completo
                    </label>
                    <Input
                      id="name"
                      placeholder="Juan Pérez"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Correo electrónico
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="juan@ejemplo.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full group">
                  Enviar mensaje
                  <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Al enviar este formulario, aceptas nuestra política de privacidad
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
