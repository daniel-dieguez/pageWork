import { Github, Linkedin, Twitter, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Mail, href: "mailto:info@antiguassolutions.com", label: "Email" },
  ]

  const footerLinks = {
    Servicios: [
      { label: "Landing Pages", href: "#servicios" },
      { label: "Desarrollo Web", href: "#servicios" },
      { label: "Software a Medida", href: "#servicios" },
    ],
    Empresa: [
      { label: "Sobre Nosotros", href: "#sobre-nosotros" },
      { label: "Portafolio", href: "#portafolio" },
      { label: "Contacto", href: "#contacto" },
    ],
    Legal: [
      { label: "Privacidad", href: "#" },
      { label: "Términos", href: "#" },
      { label: "Cookies", href: "#" },
    ],
  }

  return (
    <footer className="bg-secondary/30 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">
                {"Antigua's"} <span className="text-primary">Solutions</span>
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm">
              Transformamos ideas en soluciones digitales innovadoras. Desarrollo web y software personalizado para
              impulsar tu negocio.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary flex items-center justify-center transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Links sections */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="space-y-4">
              <h3 className="font-semibold text-lg">{title}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>
              © {currentYear} {"Antigua's Solutions"}. Todos los derechos reservados.
            </p>
            <p>
              Hecho con <span className="text-primary">❤</span> en México
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
