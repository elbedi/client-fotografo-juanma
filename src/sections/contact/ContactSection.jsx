export default function ContactSection() {
  return (
    <section id="contact" className="relative flex items-center justify-center overflow-hidden bg-surface-container-lowest px-6 py-48 text-center">
      <div className="absolute -z-10 h-[600px] w-[600px] rounded-full bg-primary-fixed/5 blur-[120px]" />
      <div className="max-w-3xl">
        <span className="mb-4 block font-label text-sm tracking-[0.3em] text-primary-fixed">CONTACTO // FASE_06</span>
        <h2 className="mb-12 font-headline text-6xl font-bold tracking-tighter uppercase md:text-8xl">
          Comienza Tu
          <br />
          <span className="glow-text text-primary-fixed">Activacion</span>
        </h2>
        <a
          href="#contact"
          className="group relative inline-block bg-primary-fixed px-12 py-6 font-headline text-xl font-bold tracking-tighter text-on-primary-fixed uppercase transition-all hover:bg-white"
        >
          <span className="relative z-10">INICIAR_CONTACTO</span>
          <span className="absolute inset-0 bg-primary-fixed opacity-20 blur-xl transition-opacity group-hover:opacity-40" />
        </a>
      </div>
    </section>
  );
}
