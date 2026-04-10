const defaultLinks = [
  {
    label: "Instagram",
    iconUrl: "/images/icon-ig.svg",
    href: "https://www.instagram.com/neon_hastur/",
  },
  {
    label: "Correo",
    iconUrl: "/images/icon-email.svg",
    href: "mailto:juanmanuelgarciacuellar0228@gmail.com",
  },
  {
    label: "WhatsApp",
    iconUrl: "/images/icon-whats.svg",
    href: "https://api.whatsapp.com/send?phone=5587965660&text=Hola%2C%20quiero%20iniciar%20mi%20activaci%C3%B3n%20visual.",
  },
  // { label: "LinkedIn", href: "#" },
];

const menuLinks = [
  { label: "Galería", href: "#work-grid" },
  { label: "Sobre Mi", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Flujo", href: "#neon-city" },
  { label: "Contacto", href: "#contact" },
];

export default function Footer({
  brand = "ARCHIVE_01",
  email = "hola@elbedi.com",
  phone = "+52 55 0000 0000",
  links = defaultLinks,
}) {
  const year = new Date().getFullYear();

  return (
    <footer className="full-width min-h-svh flex flex-col justify-around gap-4 border-t border-surface-container-lowest bg-surface-container-lowest px-6 py-12">
      <div className=" mx-auto max-w-7xl">
        <img src="/images/logo.webp" alt="logo" className="w-full opacity-70" />
      </div>
      <div className="w-full mx-auto max-w-7xl flex justify-between">
        <nav className="flex flex-col">
          {menuLinks.map((item) => (
            <a
              key={`${item.href}-${item.label}`}
              href={item.href}
              className="text-on-surface-variant text-xl transition-all hover:text-primary-fixed hover:underline underline-offset-4">
              {item.label}
            </a>
          ))}
        </nav>
        <a href="https://elbedi.com/" target="_blank">
          <div className="flex flex-col gap-2 items-center justify-center">
            <div
              className="w-20 h-20 rounded-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: 'url("/images/elbedi_logo.webp")' }}
            />
            <span className="text-sm block text-center w-25 ">
              Páginas Web de alta calidad
            </span>
          </div>
        </a>
      </div>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
        <div className="flex gap-6 items-center">
          {links.map((item) => (
            <a
              key={`${item.href}-${item.label}`}
              href={item.label === "Correo" ? `mailto:${email}` : item.href}
              target="_blank">
              <img src={item.iconUrl} alt={item.label} className="w-8" />
            </a>
          ))}
        </div>
        <div className="font-headline text-lg tracking-widest text-on-surface-variant uppercase">
          ©{year} TODOS LOS DERECHOS RESERVADOS.
        </div>
        <a href={`tel:${phone}`} className="sr-only">
          {phone}
        </a>
      </div>
    </footer>
  );
}
