import { useEffect } from "react";

export default function useScrollAnimation(
  urlImages,
  contentSelector,
  framesCount,
  generalImageName,
  scrollActionContainer,
) {
  useEffect(() => {
    const maxFrames = Number(framesCount) || 0;
    const container = document.querySelector(contentSelector);
    const scrollElement = document.querySelector(scrollActionContainer);

    if (!container || !scrollElement || maxFrames <= 0) {
      return;
    }

    let canvas = container.querySelector("canvas");
    if (!canvas) {
      canvas = document.createElement("canvas");
      canvas.className = "h-full w-full";
      container.prepend(canvas);
    }

    const context = canvas.getContext("2d", {
      alpha: false,
      desynchronized: true,
    });
    if (!context) {
      return;
    }

    const loadedFrames = new Map();
    const pendingFrames = new Map();

    let currentFrame = 1;
    let targetFrame = 1;
    let latestScrollY = window.scrollY;
    let maxScroll = 1;
    let rafId = 0;
    let ticking = false;
    let destroyed = false;

    const buildFrameSrc = (frame) => {
      const id = String(frame).padStart(3, "0");
      return `${urlImages}${generalImageName}${id}.webp`;
    };

    const ensureFrameLoaded = (frame) => {
      if (frame < 1 || frame > maxFrames) {
        return Promise.resolve(null);
      }

      if (loadedFrames.has(frame)) {
        return Promise.resolve(loadedFrames.get(frame));
      }

      if (pendingFrames.has(frame)) {
        return pendingFrames.get(frame);
      }

      const promise = new Promise((resolve) => {
        const img = new Image();
        img.decoding = "async";
        img.onload = () => {
          loadedFrames.set(frame, img);
          pendingFrames.delete(frame);
          resolve(img);
        };
        img.onerror = () => {
          pendingFrames.delete(frame);
          resolve(null);
        };
        img.src = buildFrameSrc(frame);
      });

      pendingFrames.set(frame, promise);
      return promise;
    };

    const preloadAround = (frame) => {
      for (let i = frame - 2; i <= frame + 4; i += 1) {
        void ensureFrameLoaded(i);
      }
    };

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = Math.max(1, Math.floor(container.clientWidth * dpr));
      const height = Math.max(1, Math.floor(container.clientHeight * dpr));

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const drawFrame = (frame) => {
      const image = loadedFrames.get(frame);
      if (!image) {
        return;
      }

      const cw = canvas.width;
      const ch = canvas.height;
      if (cw === 0 || ch === 0) {
        return;
      }

      const iw = image.naturalWidth || image.width;
      const ih = image.naturalHeight || image.height;
      if (!iw || !ih) {
        return;
      }

      const scale = Math.max(cw / iw, ch / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = cw - dw;
      const dy = (ch - dh) / 2;

      context.clearRect(0, 0, cw, ch);
      context.drawImage(image, dx, dy, dw, dh);
    };

    const recalculateScrollRange = () => {
      maxScroll = Math.max(1, scrollElement.scrollHeight - window.innerHeight);
    };

    const render = () => {
      ticking = false;

      const progress = Math.min(1, Math.max(0, latestScrollY / maxScroll));
      targetFrame = Math.min(
        maxFrames,
        Math.max(1, Math.round(progress * (maxFrames - 1)) + 1),
      );

      preloadAround(targetFrame);

      if (targetFrame !== currentFrame && loadedFrames.has(targetFrame)) {
        currentFrame = targetFrame;
        drawFrame(currentFrame);
      }
    };

    const requestRender = () => {
      if (ticking) {
        return;
      }

      ticking = true;
      rafId = window.requestAnimationFrame(render);
    };

    const handleScroll = () => {
      latestScrollY = window.scrollY;
      requestRender();
    };

    const handleResize = () => {
      resizeCanvas();
      recalculateScrollRange();
      drawFrame(currentFrame);
      requestRender();
    };

    const init = async () => {
      await ensureFrameLoaded(1);
      if (destroyed) {
        return;
      }

      resizeCanvas();
      recalculateScrollRange();
      drawFrame(1);
      preloadAround(1);

      window.addEventListener("resize", handleResize, { passive: true });
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    };

    init();

    return () => {
      destroyed = true;
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, [
    urlImages,
    contentSelector,
    framesCount,
    generalImageName,
    scrollActionContainer,
  ]);
}
