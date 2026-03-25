import ServiceCard from "../../components/ui/ServiceCard.jsx";

const serviceItems = [
  {
    icon: "person",
    title: "Retratos",
    description: "Captura humana de alta fidelidad con iluminacion atmosferica y dramatica.",
    items: ["Editorial", "Identidad Corporativa", "Retratos Cinematograficos"],
  },
  {
    icon: "inventory_2",
    title: "Productos",
    description: "Detalle al maximo nivel para articulos de lujo y equipamiento industrial.",
    items: ["Captura 360", "Mapeo de Texturas", "Sets Comerciales"],
  },
  {
    icon: "checkroom",
    title: "Moda",
    description: "Narrativa visual de vanguardia para marcas premium.",
    items: ["Lookbooks", "Direccion de Campana", "Narrativa Urbana"],
  },
  {
    icon: "business",
    title: "Corporativo",
    description: "Documentacion ambiental de espacios arquitectonicos e industriales.",
    items: ["Escaneo de Instalaciones", "Documentacion Tecnica", "Legado de Marca"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="bg-surface-container-lowest px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 flex flex-col items-center text-center">
          <span className="mb-2 font-label text-sm text-primary-fixed">04 // SISTEMAS</span>
          <h2 className="font-headline text-5xl font-bold tracking-tighter uppercase">Capacidades</h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {serviceItems.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
