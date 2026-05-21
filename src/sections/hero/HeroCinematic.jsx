import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function HeroCinematic() {
  useScrollAnimation(
    "/images/hero-frames/",
    "#cinematic-container",
    64,
    "Video_Project_1__",
    "#hero-cinematic",
    {
      preloadAllFrames: true,
      initialPreloadCount: 16,
      preloadBatchSize: 8,
    },
  );

  return (
    <section id="hero-cinematic" className="bg-surface-container-low">
      <div className="min-h-screen grid grid-cols-1">
        <div className="relative z-10 mx-auto w-9/10 max-w-7xl col-start-1 row-start-1">
          <div className="h-svh grid grid-cols-1 items-end pb-30">
            <div className="flex flex-col space-y-4">
              <span className="font-label text-xs tracking-[0.4em] text-primary-fixed uppercase">
                Secuencia_01 // Curador_Digital
              </span>
              <h1 className="font-headline text-9xl leading-[0.95] font-bold tracking-tighter text-white uppercase max-md:text-6xl max-sm:text-4xl">
                ARCHIVE_01:
                <br />
                <span className="glow-text text-primary-fixed">
                  DATOS VISUALES
                </span>
              </h1>
            </div>
          </div>
          <div className="h-[50svh]" />
          <div className="h-svh grid grid-cols-1" id="">
            <div className="">
              <p className="font-body leading-relaxed text-gray-50 text-3xl max-w-2/5 mt-60 max-md:max-w-2/3 max-sm:max-w-3/4 max-sm:text-2xl">
                Redefiniendo los limites de la optica digital. Capturamos
                entornos de alta fidelidad en la expansion neo_urbana.
                Ingenieria visual profesional para la siguiente era.
              </p>
              <div className="mt-10 flex items-center space-x-4 font-label tracking-widest text-outline uppercase">
                <span>ACTIVO DESDE 2026</span>
                <span className="h-1.5 w-1.5 bg-primary-fixed" />
                <span>CDMX</span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative col-start-1 row-start-1 ">
          <div className="sticky top-0 inset-0 z-0 flex items-center justify-end bg-black ">
            <div
              className="h-svh w-full flex justify-end max-sm:min-w-3xl"
              id="cinematic-container">
              <canvas
                className="h-full w-full"
                aria-label="Secuencia cinematografica"
                role="img"
              />
            </div>
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(90deg,rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 80%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(0deg,rgba(0, 0, 0, 1) 5%, rgba(0, 0, 0, 0) 80%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
