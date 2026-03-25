export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden bg-background px-6 py-32">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 md:flex-row">
        <div className="relative w-full md:w-1/2">
          <div className="absolute -top-10 -left-10 hidden h-40 w-40 border-t-2 border-l-2 border-primary-fixed/30 lg:block" />
          <div className="relative z-10 border border-outline-variant/20 p-2">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuO28sEyQudkWXN80lG9brp2JvTJK23afjWt4CPCeCjbif_aghZZ8aRbnzBQfMGB2fyuHWRPFXkJb2mNUvhOp2mgZ_JN4Ll-aASzf9nFwQPjk4BqGhP8clgZhe_QSoXbvF4ZxvhMWIeq_Bqd0NfqM51Kgf1Up5MFEHqXksHIBHQfR_wneLboLAabB08h7ToevxlZ0L23iv5IKrMg4KEpcQLuPOTnTkUq1g16eAlSnegU9io8YY-F3lEyUnhEfIcOmkhkPgd1vwqPRc"
              alt="Retrato del fotografo"
              className="h-auto w-full object-cover grayscale"
            />
            <div className="absolute right-[-1.5rem] bottom-6 hidden bg-primary-fixed p-6 text-on-primary-fixed md:block">
              <span className="font-label text-xs font-bold tracking-widest uppercase">Director_Creativo</span>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 hidden h-24 w-24 border-r-2 border-b-2 border-primary-fixed/30 lg:block" />
        </div>

        <div className="flex w-full flex-col space-y-8 md:w-1/2">
          <div>
            <span className="mb-2 block font-label text-sm text-primary-fixed">03 // PROTOCOLO</span>
            <h2 className="mb-6 font-headline text-5xl font-bold tracking-tighter uppercase">El_Curador</h2>
            <div className="mb-8 h-1 w-16 bg-primary-fixed" />
          </div>
          <p className="font-body text-lg leading-relaxed text-on-surface italic">
            "En una realidad fragmentada, los datos visuales son la unica verdad. No solo tomo fotografias: reconstruyo entornos con precision tecnica y atmosfera cinematografica."
          </p>
          <p className="font-body leading-relaxed text-on-surface-variant">
            Con mas de una decada en fotografia de moda premium y producto industrial, mi trabajo vive en la interseccion entre excelencia tecnica y rebeldia creativa. ARCHIVE_01 es la culminacion de una vida entre las sombras de ciudades neon.
          </p>
          <div className="grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-8 font-label text-[10px] tracking-widest uppercase">
            <div className="flex flex-col space-y-2">
              <span className="text-outline">Modulo_Sensor</span>
              <span className="text-white">Phase One XF IQ4</span>
            </div>
            <div className="flex flex-col space-y-2">
              <span className="text-outline">Arreglo_Optico</span>
              <span className="text-white">Schneider Kreuznach</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
