import { array } from "astro:schema";
import { useEffect } from "react";

export default function useScrollAnimation(
  urlImages,
  contentSelector,
  framesCount,
  generalImageName,
  scrollActionContainer,
) {
  useEffect(() => {
    const MAX_FRAMES = framesCount;
    let currentFrame = 0;

    const scrollActionHeightCount = document.querySelector(
      scrollActionContainer,
    ).scrollHeight;
    const cinematicElement = document.querySelector(contentSelector + ">div");

    // altura maxima del scroll
    let maxScroll = scrollActionHeightCount - window.innerHeight;

    function preloadImages() {
      Array.from({ length: MAX_FRAMES }, (_, i) => {
        const id = (i + 1).toString().padStart(3, "0");
        const img = new Image();
        img.src = `${urlImages}${generalImageName}${id}.webp`;
        console.log(`Preloading image: ${img.src}`);
      });
    }
    preloadImages();

    window.addEventListener("resize", () => {
      maxScroll = scrollActionHeightCount - window.innerHeight;
    });

    const id = "001";
    cinematicElement.style.backgroundImage = `url(${urlImages}${generalImageName}${id}.webp)`;

    let lastFrame = 0;
    window.addEventListener("scroll", () => {
      if (Date.now() - lastFrame < 50) return;
      lastFrame = Date.now();
      // posicion actual del scroll
      const scrollPosition = window.scrollY;

      // calcular porcentaje del scroll
      const scrollFraction = scrollPosition / maxScroll;

      const frame = Math.floor(scrollFraction * MAX_FRAMES) || 1;

      const id = frame.toString().padStart(3, "0");

      if (currentFrame !== frame && frame <= MAX_FRAMES) {
        currentFrame = frame;
        cinematicElement.style.backgroundImage = `url(${urlImages}${generalImageName}${id}.webp)`;
      }
    });
  }, [
    urlImages,
    contentSelector,
    framesCount,
    generalImageName,
    scrollActionContainer,
  ]);
}
