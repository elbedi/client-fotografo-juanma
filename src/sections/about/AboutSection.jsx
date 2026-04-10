import useScrollAnimation from "../../hooks/useScrollAnimation";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const aboutSectionRef = useRef(null);
  const [isSectionActive, setIsSectionActive] = useState(false);

  useEffect(() => {
    const section = aboutSectionRef.current;

    if (!section || isSectionActive) {
      return;
    }

    let observer = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            setIsSectionActive(true);
            observer?.disconnect();
            observer = null;
          }
        },
        {
          root: null,
          rootMargin: "0px 0px -10% 0px",
          threshold: 0,
        },
      );

      observer.observe(section);
    } else {
      setIsSectionActive(true);
    }

    return () => {
      observer?.disconnect();
    };
  }, [isSectionActive]);

  useScrollAnimation(
    "/images/about-frames/",
    "#cinematic-container-about",
    64,
    "juanma_",
    "#about",
    {
      startOffset: "200px",
      endOffset: "-50px",
      activateRootMargin: "0px 0px 0px 0px",
      enabled: isSectionActive,
    },
  );

  useEffect(() => {
    if (!isSectionActive) {
      return;
    }

    const section = aboutSectionRef.current;

    if (!section) {
      return;
    }

    const context = gsap.context(() => {
      const initialState = {
        autoAlpha: 0,
        y: 50,
        clipPath: "inset(100% 0% 0% 0%)",
      };
      const enterEstate = {
        autoAlpha: 1,
        y: 0,
        clipPath: "inset(0% 0% 0% 0%)",
        duration: 30,
      };

      gsap.set(
        [
          ".title-curador",
          ".text-realidad",
          ".text-premium",
          ".content-acciones",
        ],
        initialState,
      );

      const timeline = gsap.timeline({
        defaults: {
          ease: "power2.out",
        },
        scrollTrigger: {
          trigger: section,
          start: "top 10%",
          end: "bottom 100%",
          scrub: true,
        },
      });

      timeline
        .to(".title-curador", { ...enterEstate }, 0)
        // .to(".title-curador", { autoAlpha: 0, y: -30, duration: 3 }, 12)
        .to(".text-realidad", { ...enterEstate }, 30)
        // .to(".text-realidad", { autoAlpha: 0, y: -30, duration: 3 }, 27)
        .to(".text-premium", { ...enterEstate }, 60)
        // .to(".text-premium", { autoAlpha: 0, y: -30, duration: 3 }, 37)
        .to(".content-acciones", { ...enterEstate }, 90);

      requestAnimationFrame(() => ScrollTrigger.refresh(true));
    }, section);

    return () => {
      context.revert();
    };
  }, [isSectionActive]);

  return (
    <section
      id="about"
      ref={aboutSectionRef}
      className="bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/DSC02967-1.JPG')" }}>
      <div
        className="relative h-[210svh] py-20"
        style={{
          background:
            "radial-gradient(circle,rgba(0, 0, 0, 0.9) 0%, rgba(11, 11, 12, 1) 80%)",
        }}>
        <div className="w-full flex m-auto max-w-7xl items-center gap-16 max-lg:flex-col sticky top-40">
          <div className="relative w-full max-md:w-2/3">
            <div className="absolute -top-10 -left-10 h-40 w-40 border-t-2 border-l-2 border-primary-fixed/30 " />
            <div className="relative z-10 border border-outline-variant/20 p-2">
              <div
                className="w-full aspect-square flex items-center justify-center "
                id="cinematic-container-about">
                <canvas
                  className="h-full w-full"
                  aria-label="Secuencia cinematografica"
                  role="img"
                />
              </div>
              <div
                className="absolute right-0 bottom-6 bg-primary-fixed p-6 text-on-primary-fixed max-md:p-2"
                style={{ marginRight: "-20px" }}>
                <span className="font-label text-xs font-bold tracking-widest uppercase">
                  Director_Creativo
                </span>
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 h-24 w-24 border-r-2 border-b-2 border-primary-fixed/30" />
          </div>

          <div className="flex w-full flex-col space-y-8 max-md:px-4">
            <div className="title-curador">
              <span className="mb-2 block font-label text-sm text-primary-fixed">
                03 // PROTOCOLO
              </span>
              <h2 className="mb-6 font-headline text-5xl font-bold tracking-tighter uppercase">
                El_Curador
              </h2>
              <div className="mb-8 h-1 w-16 bg-primary-fixed" />
            </div>
            <p className="text-realidad font-body text-lg leading-relaxed italic max-2xl:text-base">
              "En una realidad fragmentada, los datos visuales son la unica
              verdad. No solo tomo fotografias, reconstruyo entornos con
              precision tecnica y atmosfera cinematografica."
            </p>
            <p className="text-premium font-body leading-relaxed">
              Servicios en fotografia de moda premium y producto industrial, mi
              trabajo vive en la interseccion entre excelencia tecnica y
              rebeldia creativa. ARCHIVE_01 es la culminacion de una vida entre
              las sombras de ciudades neon.
            </p>
            <div className="content-acciones grid grid-cols-2 gap-4 border-t border-outline-variant/20 pt-8 font-label text-[10px] tracking-widest uppercase">
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
      </div>
    </section>
  );
}
