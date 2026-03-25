import useScrollAnimation from "../../hooks/useScrollAnimation";

export default function HeroCinematic() {
  useScrollAnimation(
    "/images/hero-frames/",
    "#cinematic-container",
    64,
    "Video_Project_1__",
    "#hero-cinematic",
  );
  return (
    <section id="hero-cinematic">
      <div className="min-h-screen grid grid-cols-1">
        <div className="relative z-10 mx-auto w-full max-w-7xl col-start-1 row-start-1">
          <div className="h-dvh grid grid-cols-1 items-end pb-30">
            <div className="flex flex-col space-y-4">
              <span className="font-label text-xs tracking-[0.4em] text-primary-fixed uppercase">
                Secuencia_01 // Curador_Digital
              </span>
              <h1 className="font-headline text-6xl leading-[0.95] font-bold tracking-tighter text-white uppercase md:text-9xl">
                ARCHIVE_01:
                <br />
                <span className="glow-text text-primary-fixed">
                  DATOS VISUALES
                </span>
              </h1>
            </div>
          </div>
          <div className="h-dvh grid grid-cols-1 items-center mb-50">
            <div className="mt-12">
              <p className="font-body leading-relaxed text-gray-50 text-3xl max-w-2/5">
                Redefiniendo los limites de la optica digital. Capturamos
                entornos de alta fidelidad en la expansion neo - urbana.
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
          <div className="sticky top-0 inset-0 z-0 flex items-center justify-end bg-black">
            <div
              className="h-dvh w-full flex justify-end"
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
                  "linear-gradient(90deg,rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 50%)",
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
