import { useEffect, useRef, useState } from "react";
import WorkCard from "../../components/ui/WorkCard.jsx";
import gsap from "gsap";
import { clone } from "astro:schema";

const WORK_ITEMS = [
  {
    image: "/images/gallery/models/models2.webp",
    imageLarge: "/images/gallery/models/original/models2.webp",
    alt: "alt",
    entryId: "8825",
    title: "Synthetic_Essence",
    category: "Editorial / Fashion",
    res: "RES: FULL_HD",
    location: "LOC: STUDIO",
  },
  {
    image: "/images/gallery/models/models5.webp",
    imageLarge: "/images/gallery/models/original/models5.webp",
    alt: "alt",
    entryId: "8827",
    title: "Immortal_Smile",
    category: "Editorial / Fashion",
    res: "RES: FULL_HD",
    location: "LOC: STUDIO",
  },
  {
    image: "/images/gallery/models/models8.webp",
    imageLarge: "/images/gallery/models/original/models8.webp",
    alt: "alt",
    entryId: "8829",
    title: "Mystic_Shadow",
    category: "Editorial / Fashion",
    res: "RES: FULL_HD",
    location: "LOC: STUDIO",
  },
  {
    image: "/images/gallery/events/events2.webp",
    imageLarge: "/images/gallery/events/original/events2.webp",
    alt: "alt",
    entryId: "8831",
    title: "Sonorous_Eclipse",
    category: "Memories / Events",
    res: "RES: FULL_HD",
    location: "LOC: AUDITORIUM",
  },
  {
    image: "/images/gallery/events/events3.webp",
    imageLarge: "/images/gallery/events/original/events3.webp",
    alt: "alt",
    entryId: "8832",
    title: "Reverberation",
    category: "Memories / Events",
    res: "RES: FULL_HD",
    location: "LOC: AUDITORIUM",
  },
  {
    image: "/images/gallery/events/events4.webp",
    imageLarge: "/images/gallery/events/original/events4.webp",
    alt: "alt",
    entryId: "8830",
    title: "Star_Event",
    category: "Memories / Events",
    res: "RES: FULL_HD",
    location: "LOC: AUDITORIUM",
  },
  {
    image: "/images/gallery/product/product1.webp",
    imageLarge: "/images/gallery/product/original/product1.webp",
    alt: "alt",
    entryId: "8833",
    title: "Synthetic_Ecstasy",
    category: "Market / Product",
    res: "RES: FULL_HD",
    location: "LOC: STUDIO",
  },
  {
    image: "/images/gallery/product/product2.webp",
    imageLarge: "/images/gallery/product/original/product2.webp",
    alt: "alt",
    entryId: "8834",
    title: "Liquid_Glitch",
    category: "Market / Product",
    res: "RES: FULL_HD",
    location: "LOC: STUDIO",
  },
  {
    image: "/images/gallery/product/product4.webp",
    imageLarge: "/images/gallery/product/original/product4.webp",
    alt: "alt",
    entryId: "8836",
    title: "Neon_Chrono",
    category: "Market / Product",
    res: "RES: FULL_HD",
    location: "LOC: STUDIO",
  },
  {
    image: "/images/gallery/urban-style/urban-style1.webp",
    imageLarge: "/images/gallery/urban-style/original/urban-style1.webp",
    alt: "alt",
    entryId: "8837",
    title: "Urban_Soul",
    category: "Urban / Style",
    res: "RES: FULL_HD",
    location: "LOC: CDMX",
  },
  {
    image: "/images/gallery/urban-style/urban-style2.webp",
    imageLarge: "/images/gallery/urban-style/original/urban-style2.webp",
    alt: "alt",
    entryId: "8838",
    title: "Sovereign_Neon",
    category: "Urban / Style",
    res: "RES: FULL_HD",
    location: "LOC: CDMX",
  },
  {
    image: "/images/gallery/urban-style/urban-style3.webp",
    imageLarge: "/images/gallery/urban-style/original/urban-style3.webp",
    alt: "alt",
    entryId: "8839",
    title: "Blue_City",
    category: "Urban / Style",
    res: "RES: FULL_HD",
    location: "LOC: CDMX",
  },
];

const WorkGridSection = () => {
  const [selectedImageLarge, setSelectedImageLarge] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLargeImageReady, setIsLargeImageReady] = useState(false);
  const [isModalFullyOpen, setIsModalFullyOpen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomOrigin, setZoomOrigin] = useState("50% 50%");
  const tlModalImageRef = useRef(null);
  const modalImageRef = useRef(null);
  const cloneImageRef = useRef(null);
  const rafZoomRef = useRef(null);
  const rafOpenModalRef = useRef(null);
  const openRequestIdRef = useRef(0);

  const handleShowImage = (urlImageLarge, urlImage, event) => {
    openRequestIdRef.current += 1;
    const requestId = openRequestIdRef.current;

    setIsLargeImageReady(false);
    setIsModalFullyOpen(false);
    setSelectedImageLarge(urlImageLarge);
    setSelectedImage(urlImage);
    setIsModalOpen(true);

    const preloader = new Image();
    preloader.decoding = "async";
    preloader.onload = () => {
      if (openRequestIdRef.current === requestId) {
        setIsLargeImageReady(true);
      }
    };
    preloader.onerror = () => {
      if (openRequestIdRef.current === requestId) {
        setIsLargeImageReady(true);
      }
    };
    preloader.src = urlImageLarge;

    const originalImage = event.currentTarget.querySelector(".work-card-image");
    if (!originalImage) return;
    const originalProperties = originalImage.getBoundingClientRect();

    if (rafOpenModalRef.current) {
      cancelAnimationFrame(rafOpenModalRef.current);
    }

    rafOpenModalRef.current = requestAnimationFrame(() => {
      const cloneImage = cloneImageRef.current;
      if (!cloneImage) {
        rafOpenModalRef.current = null;
        return;
      }

      cloneImage.style.top = `${originalProperties.top}px`;
      cloneImage.style.left = `${originalProperties.left}px`;
      cloneImage.style.height = `${originalProperties.height}px`;
      cloneImage.style.objectFit = "contain";
      cloneImage.style.zIndex = 60;

      const modalImage = modalImageRef.current;
      const modalImageProperties = modalImage.getBoundingClientRect();

      tlModalImageRef.current?.kill();
      tlModalImageRef.current = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tlModalImageRef.current.eventCallback("onComplete", () => {
        setIsModalFullyOpen(true);
      });

      tlModalImageRef.current
        .to(cloneImage, {
          top: "0%",
          left: "0%",
          height: "100%",
          width: "100%",
          duration: 0.4,
          opacity: 1,
        })
        .from(
          ".modal-image-large",
          {
            opacity: 0,
            duration: 0.2,
          },
          "-=0.2",
        );

      rafOpenModalRef.current = null;
    });
  };

  const handleAnimationCloseModal = () => {
    const timeline = tlModalImageRef.current;
    if (!timeline) {
      handleCloseModal();
      return;
    }

    timeline.eventCallback("onReverseComplete", handleCloseModal);
    timeline.reverse();
  };

  const updateZoomOriginFromClientY = (clientY) => {
    const imageElement = modalImageRef.current;
    if (!imageElement) return;

    const rect = imageElement.getBoundingClientRect();
    if (!rect.height) return;

    const y = Math.min(Math.max(clientY - rect.top, 0), rect.height);
    const originY = (y / rect.height) * 100;

    setZoomOrigin(`50% ${originY}%`);
  };

  const handleToggleZoom = (event) => {
    if (!isZoomed) {
      updateZoomOriginFromClientY(event.clientY);
    }
    setIsZoomed((prev) => !prev);
  };

  const handleZoomPointerMove = (event) => {
    if (!isZoomed) return;
    const { clientY } = event;

    if (rafZoomRef.current) {
      cancelAnimationFrame(rafZoomRef.current);
    }

    rafZoomRef.current = requestAnimationFrame(() => {
      updateZoomOriginFromClientY(clientY);
      rafZoomRef.current = null;
    });
  };

  const handleCloseModal = () => {
    openRequestIdRef.current += 1;
    if (rafZoomRef.current) {
      cancelAnimationFrame(rafZoomRef.current);
      rafZoomRef.current = null;
    }
    if (rafOpenModalRef.current) {
      cancelAnimationFrame(rafOpenModalRef.current);
      rafOpenModalRef.current = null;
    }
    setIsZoomed(false);
    setZoomOrigin("50% 50%");
    setIsModalFullyOpen(false);
    setIsLargeImageReady(false);
    setSelectedImageLarge(null);
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  useEffect(() => {
    const cloneImage = cloneImageRef.current;
    if (!cloneImage || !isModalOpen) {
      return;
    }

    cloneImage.style.zIndex = isLargeImageReady ? "40" : "60";
  }, [isLargeImageReady, isModalOpen]);

  useEffect(() => {
    return () => {
      openRequestIdRef.current += 1;
      if (rafZoomRef.current) {
        cancelAnimationFrame(rafZoomRef.current);
      }
      if (rafOpenModalRef.current) {
        cancelAnimationFrame(rafOpenModalRef.current);
      }
      tlModalImageRef.current?.kill();
    };
  }, []);

  return (
    <>
      <section id="work-grid" className="bg-surface-container-low px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <div className="mb-24 flex items-baseline justify-between">
            <div className="flex flex-col">
              <span className="mb-2 font-label text-sm text-primary-fixed">
                02 // REGISTROS
              </span>
              <h2 className="font-headline text-5xl font-bold tracking-tighter uppercase">
                Galería
              </h2>
            </div>
            <div className="hidden font-label text-xs tracking-widest text-outline uppercase md:block">
              Escaneo de base de datos... Completo
            </div>
          </div>

          <div className="grid grid-cols-3 gap-px bg-outline-variant/20 max-lg:grid-cols-2 max-sm:grid-cols-1 cursor-pointer">
            {WORK_ITEMS.map((item, index) => (
              <WorkCard
                key={`${item.entryId}-${index}`}
                {...item}
                loading={index < 3 ? "eager" : "lazy"}
                fetchPriority={index < 3 ? "high" : "low"}
                onClick={(event) =>
                  handleShowImage(item.imageLarge, item.image, event)
                }
              />
            ))}
          </div>
        </div>
      </section>

      {isModalOpen && selectedImage && selectedImageLarge && (
        <>
          <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xl">
            <img
              ref={cloneImageRef}
              src={selectedImage}
              className="clone-image fixed z-50 w-auto opacity-0"
            />

            <div className="modal-image-large">
              <div className="absolute w-full h-svh flex items-center justify-center z-90">
                <img
                  ref={modalImageRef}
                  src={selectedImageLarge}
                  alt="Imagen Ampliada"
                  onLoad={() => {
                    setIsLargeImageReady(true);
                  }}
                  className={`image-modal h-full w-full object-contain m-auto transition-[opacity,transform] duration-200 ${
                    isZoomed ? "cursor-zoom-out" : "cursor-zoom-in"
                  } ${isModalFullyOpen && isLargeImageReady ? "opacity-100" : "opacity-0 pointer-events-none"}`}
                  onClick={handleToggleZoom}
                  onMouseMove={handleZoomPointerMove}
                  style={{
                    transform: isZoomed ? "scale(2)" : "scale(1)",
                    transformOrigin: zoomOrigin,
                    willChange: "transform",
                  }}
                />
                <button
                  className="fixed top-0 right-0 mr-5 mt-2 cursor-pointer"
                  onClick={handleAnimationCloseModal}>
                  <span className="font-mono text-5xl leading-none text-red-200 [text-shadow:0_0_6px_rgba(248,113,113,0.95),0_0_16px_rgba(239,68,68,0.75)]">
                    &times;
                  </span>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default WorkGridSection;
