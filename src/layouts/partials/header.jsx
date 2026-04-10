const defaultLinks = [
  { label: "Galería", href: "#work-grid" },
  { label: "Sobre Mi", href: "#about" },
  { label: "Servicios", href: "#services" },
];

export default function Header({
  brand = "ARCHIVE_01",
  brandHref = "/",
  links = defaultLinks,
  ctaLabel = "INICIAR_CONTACTO",
  ctaHref = "#contact",
}) {
  return (
    <header className="fixed top-0 z-50 w-full  border-b border-[#ccff00]/10 bg-[#131313]/80 px-6 py-4 backdrop-blur-xl">
      <div className="flex w-full items-center justify-between mx-auto max-w-7xl">
        <div className="font-headline text-xl font-bold tracking-tighter text-[#ccff00]">
          <a href="#hero-cinematic" className="uppercase">
            {brand}
          </a>
        </div>

        <div className="flex items-center space-x-4">
          <nav aria-label="Navegacion principal" className="hidden md:flex">
            <ul className="flex items-center space-x-8 font-headline text-sm tracking-tighter uppercase">
              {links.map((item) => (
                <li key={`${item.href}-${item.label}`}>
                  <a
                    href={item.href}
                    data-nav-link
                    data-active={item.active ? "true" : "false"}
                    aria-current={item.active ? "page" : undefined}
                    className={
                      item.active
                        ? "border-b-2 border-[#ccff00] pb-1 text-[#ccff00]"
                        : "text-white/60 transition-colors hover:text-white"
                    }>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <a
            href={ctaHref}
            className="bg-[#ccff00] ml-20 max-sm:ml-1 px-4 py-2 font-headline text-sm font-bold tracking-tighter text-on-primary-fixed uppercase transition-all duration-75">
            {ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
