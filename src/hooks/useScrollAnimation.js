import { useEffect } from "react";

export default function useScrollAnimation(
  urlImages,
  contentSelector,
  framesCount,
  generalImageName,
  scrollActionContainer,
  options = {},
) {
  const startOffset = options?.startOffset ?? "0px";
  const endOffset = options?.endOffset ?? "0px";
  const mobileStartOffset = options?.mobileStartOffset;
  const mobileEndOffset = options?.mobileEndOffset;
  const mobileResizeJumpThreshold = options?.mobileResizeJumpThreshold ?? 180;
  const enabled = options?.enabled ?? true;
  const activateRootMargin =
    options?.activateRootMargin ?? "1200px 0px 1200px 0px";
  const mobileActivateRootMargin = options?.mobileActivateRootMargin;

  useEffect(() => {
    if (!enabled) {
      return;
    }

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

    const isMobile = window.matchMedia(
      "(max-width: 768px), (pointer: coarse)",
    ).matches;
    const effectiveStartOffset =
      isMobile && mobileStartOffset != null ? mobileStartOffset : startOffset;
    const effectiveEndOffset =
      isMobile && mobileEndOffset != null ? mobileEndOffset : endOffset;
    const effectiveRootMargin =
      isMobile && mobileActivateRootMargin != null
        ? mobileActivateRootMargin
        : activateRootMargin;
    const viewport = window.visualViewport;
    const getCurrentViewportHeight = () => {
      const visualHeight = viewport?.height;
      return Math.max(1, Math.round(visualHeight || window.innerHeight));
    };

    let stableViewportHeight = getCurrentViewportHeight();
    let lastViewportWidth = Math.round(window.innerWidth);

    const getEffectiveViewportHeight = () =>
      isMobile ? stableViewportHeight : window.innerHeight;

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";

    const loadedFrames = new Map();
    const pendingFrames = new Map();

    let currentFrame = 1;
    let targetFrame = 1;
    let latestScrollY = window.scrollY;
    let sectionStartY = 0;
    let sectionEndY = 1;
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
      const maxDpr = isMobile ? 2 : 4;
      const dpr = Math.min(window.devicePixelRatio || 1, maxDpr);
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
      const dx = (cw - dw) / 2;
      const dy = (ch - dh) / 2;

      context.clearRect(0, 0, cw, ch);
      context.drawImage(image, dx, dy, dw, dh);
    };

    const recalculateScrollRange = () => {
      const toScrollOffsetPx = (value) => {
        if (typeof value === "number") {
          return value;
        }

        const normalized = String(value).trim().toLowerCase();
        const match = normalized.match(/^(-?\d*\.?\d+)(svh|vh|px)?$/);

        if (!match) {
          return 0;
        }

        const amount = Number(match[1]);
        const unit = match[2] || "px";

        if (unit === "vh" || unit === "svh") {
          return (amount / 100) * getEffectiveViewportHeight();
        }

        return amount;
      };

      const viewportHeight = getEffectiveViewportHeight();
      const rect = scrollElement.getBoundingClientRect();
      const absoluteTop = window.scrollY + rect.top;
      const absoluteBottom = absoluteTop + rect.height;
      const requestedStart = absoluteTop;
      const requestedEnd = absoluteBottom - viewportHeight;
      const startOffsetPx = toScrollOffsetPx(effectiveStartOffset);
      const endOffsetPx = toScrollOffsetPx(effectiveEndOffset);

      sectionStartY = requestedStart;
      sectionEndY =
        requestedEnd > requestedStart ? requestedEnd : absoluteBottom;

      sectionStartY -= startOffsetPx;
      sectionEndY -= endOffsetPx;
    };

    const render = () => {
      ticking = false;

      const range = sectionEndY - sectionStartY;
      const progress =
        range <= 0
          ? latestScrollY >= sectionStartY
            ? 1
            : 0
          : Math.min(1, Math.max(0, (latestScrollY - sectionStartY) / range));
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
      if (isMobile) {
        const nextViewportHeight = getCurrentViewportHeight();
        const nextViewportWidth = Math.round(window.innerWidth);
        const widthChanged =
          Math.abs(nextViewportWidth - lastViewportWidth) > 2;
        const heightDelta = Math.abs(nextViewportHeight - stableViewportHeight);
        const isMajorHeightChange = heightDelta >= mobileResizeJumpThreshold;

        // Ignore small browser UI chrome height changes to prevent frame jumps.
        if (!widthChanged && !isMajorHeightChange) {
          return;
        }

        stableViewportHeight = nextViewportHeight;
        lastViewportWidth = nextViewportWidth;
      }

      resizeCanvas();
      recalculateScrollRange();
      drawFrame(currentFrame);
      requestRender();
    };

    let hasInitialized = false;

    const init = async () => {
      if (hasInitialized) {
        return;
      }

      hasInitialized = true;
      await ensureFrameLoaded(1);
      if (destroyed) {
        return;
      }

      resizeCanvas();
      recalculateScrollRange();
      drawFrame(1);
      preloadAround(1);

      window.addEventListener("resize", handleResize, { passive: true });
      if (isMobile && viewport) {
        viewport.addEventListener("resize", handleResize, {
          passive: true,
        });
      }
      window.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll();
    };

    let observer = null;

    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((entry) => entry.isIntersecting)) {
            observer?.disconnect();
            observer = null;
            init();
          }
        },
        {
          root: null,
          rootMargin: effectiveRootMargin,
          threshold: 0,
        },
      );

      observer.observe(scrollElement);
    } else {
      init();
    }

    return () => {
      destroyed = true;
      observer?.disconnect();
      window.removeEventListener("resize", handleResize);
      if (isMobile && viewport) {
        viewport.removeEventListener("resize", handleResize);
      }
      window.removeEventListener("scroll", handleScroll);
      window.cancelAnimationFrame(rafId);
    };
  }, [
    urlImages,
    contentSelector,
    framesCount,
    generalImageName,
    scrollActionContainer,
    startOffset,
    endOffset,
    mobileStartOffset,
    mobileEndOffset,
    mobileResizeJumpThreshold,
    enabled,
    activateRootMargin,
    mobileActivateRootMargin,
  ]);
}
