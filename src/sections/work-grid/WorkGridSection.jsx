import WorkCard from "../../components/ui/WorkCard.jsx";

const workItems = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCA-54mUeYPBFiicpYTTAB2leynlxv5ylcvuLyDcfsQ1KAhE8aGDWbbn4UtiZtU0bODZMMiGW_DeP0id-Q08WfHPfzaJvKFbqHVHleDG4bfNzGoXBZBoCb8T6Lid2YlcJwr0vacTZcl2gxjJflfHhNCbEtYLM0NtADBwkrS8Ubh2mgWUNEGLkBn_TDJ8dDW6l5Fc-a0_o0rPO_SLF0cyRtWVSspAjvXz3nAjnT7oNSGkpPBTDZozA9UwF1Npq0HJV3YnjGdrIGfOOG4",
    alt: "Registro de fotografia de moda",
    entryId: "8829",
    title: "Neon_Vogue",
    category: "Editorial / Moda",
    res: "RES: 8K_RAW",
    location: "LOC: SHIBUYA",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDW_6jef-eHoZ0kAzHBDIPH6Ct_hzjnAIcboWSDxl5zztDzNZQocCrmI0_LOH7kSBpGUFdEcVusR5OA9FJcJ3HvTcOu4w6ZeHbtSe0EwHDmHoAvLd5weZKkjq0W-2CpICz-A_0zbHxzXdzXfjq9sftWCpFuSg8iFCSkwqQ3PftGUxO5VdxtmUjGNrg6Modgp94AbpknKMpYDNvDCEWM5-UQZ3BjPc0l7ROttmY2F6cIkcB3TUYOFNp6mHbAbW8goLnUZr6lR5KVrc88",
    alt: "Registro de fotografia de producto",
    entryId: "9411",
    title: "Carbon_Loom",
    category: "Comercial / Producto",
    res: "RES: 12K_OPTIC",
    location: "LOC: STUDIO_A",
  },
];

export default function WorkGridSection() {
  return (
    <section id="work-grid" className="bg-surface-container-low px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-24 flex items-baseline justify-between">
          <div className="flex flex-col">
            <span className="mb-2 font-label text-sm text-primary-fixed">02 // REGISTROS</span>
            <h2 className="font-headline text-5xl font-bold tracking-tighter uppercase">Trabajo_Seleccionado</h2>
          </div>
          <div className="hidden font-label text-xs tracking-widest text-outline uppercase md:block">
            Escaneo de base de datos... Completo
          </div>
        </div>

        <div className="grid grid-cols-1 gap-px bg-outline-variant/20 md:grid-cols-2">
          {workItems.map((item) => (
            <WorkCard key={item.entryId} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
