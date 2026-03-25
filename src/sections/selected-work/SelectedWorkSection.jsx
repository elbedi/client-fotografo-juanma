export default function SelectedWorkSection() {
  return (
    <section
      id="selected-work"
      className="relative flex min-h-screen flex-col justify-end overflow-hidden px-6 pt-32 pb-24">
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDy0RsKjhWdgShv3PW7vBpJ0wS4FFLMOQCdb5eTHd0AXmTxvD5Wg7GF7xfTyhxA6jyqHINetwZs-s29vSRh-o4zLKabVE4Y-1Nz7CXYkabhPjCcYO6GQDI-8kedq_Hqe9jCnk2_2HQ0YE5A572B_Zofk8Ct_3EiYnAaF3C7hv9Z1ma11_3rznE_9rq-uznnQ7i2W4pfgWTf5sT1YqgvRmDL5dvQs9W66QT-dco9HlkLMQb8x0aV3nXFA9N7xl2NDsrLbiA9PxnCpCjK"
          alt="Retrato cinematografico cyberpunk"
          className="h-full w-full object-cover opacity-60 grayscale-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        <div className="scanline pointer-events-none absolute inset-0 opacity-20" />
      </div>

      {/* <div className="absolute top-40 right-10 z-10 hidden text-[10px] tracking-[0.2em] text-[#ccff00]/40 lg:block font-label">
        <div className="flex flex-col items-end space-y-2">
          <span>COORD: 34.0522 N / 118.2437 W</span>
          <span>ESTADO_SISTEMA: NOMINAL</span>
          <span>TASA_DATOS: 400MBPS</span>
          <div className="relative mt-2 h-1 w-32 bg-outline-variant/30">
            <div className="absolute top-0 left-0 h-full w-[68%] bg-primary-fixed shadow-[0_0_10px_#c3f400]" />
          </div>
        </div>
      </div> */}

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="flex flex-col space-y-4">
          <span className="font-label text-xs tracking-[0.4em] text-primary-fixed uppercase">
            Secuencia_01 // Curador_Digital
          </span>
          <h1 className="font-headline text-6xl leading-[0.95] font-bold tracking-tighter text-white uppercase md:text-9xl">
            ARCHIVE_01:
            <br />
            <span className="glow-text text-primary-fixed">DATOS VISUALES</span>
          </h1>
        </div>
        <div className="mt-12 grid grid-cols-1 items-end gap-8 md:grid-cols-3">
          <p className="max-w-sm font-body leading-relaxed text-on-surface-variant">
            Redefiniendo los limites de la optica digital. Capturamos entornos
            de alta fidelidad en la expansion neo-urbana. Ingenieria visual
            profesional para la siguiente era.
          </p>
          <div className="flex items-center space-x-4 border-l border-outline-variant/30 pl-6 font-label text-[10px] tracking-widest text-outline uppercase">
            <span>ACTIVO DESDE 2026</span>
            <span className="h-1.5 w-1.5 bg-primary-fixed" />
            <span>CDMX</span>
          </div>
        </div>
      </div>
    </section>
  );
}
