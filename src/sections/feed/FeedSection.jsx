import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export default function FeedSection() {
  const streamItems = [
    {
      image: "/images/gallery/neon-city/neon-city1.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city2.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city3.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city4.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city5.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city6.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city7.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city8.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city9.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city10.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city11.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city12.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city13.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city14.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city15.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city16.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city17.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city18.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city19.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city20.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city21.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city22.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city23.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city24.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city25.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city26.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city27.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city28.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city29.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city30.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city31.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city32.webp",
      alt: "Arquitectura cinematografica",
    },
    {
      image: "/images/gallery/neon-city/neon-city33.webp",
      alt: "Arquitectura cinematografica",
    },
  ];

  const originalItemsCount = streamItems.length;
  const loopItems = useMemo(
    () =>
      Array.from({ length: 3 }, (_, copyIndex) =>
        streamItems.map((item, itemIndex) => ({
          ...item,
          loopKey: `${copyIndex}-${item.image}`,
          originalIndex: itemIndex,
        })),
      ).flat(),
    [streamItems],
  );

  const feedRef = useRef(null);
  const isRecenteringRef = useRef(false);
  const [focusedIndex, setFocusedIndex] = useState(originalItemsCount);
  const [visibleIndexes, setVisibleIndexes] = useState(() => new Set());
  const [renderedImageIndexes, setRenderedImageIndexes] = useState(
    () => new Set(),
  );

  const getFeedCards = useCallback(() => {
    const feedElement = feedRef.current;

    if (!feedElement) {
      return [];
    }

    return Array.from(feedElement.querySelectorAll("[data-feed-item]"));
  }, []);

  const scrollCardToCenter = useCallback((card, behavior = "auto") => {
    const feedElement = feedRef.current;

    if (!feedElement || !card) {
      return;
    }

    const left =
      card.offsetLeft - (feedElement.clientWidth - card.clientWidth) / 2;

    feedElement.scrollTo({
      left,
      behavior,
    });
  }, []);

  useEffect(() => {
    const feedElement = feedRef.current;

    if (!feedElement) {
      return;
    }

    const cards = getFeedCards();

    if (!cards.length || cards.length <= originalItemsCount) {
      return;
    }

    scrollCardToCenter(cards[originalItemsCount], "auto");
    setFocusedIndex(originalItemsCount);
  }, [getFeedCards, originalItemsCount, scrollCardToCenter]);

  useEffect(() => {
    const feedElement = feedRef.current;

    if (!feedElement) {
      return;
    }

    let rafId = 0;

    const updateFocusedCard = () => {
      rafId = 0;
      const cards = getFeedCards();

      if (!cards.length) {
        return;
      }

      const feedRect = feedElement.getBoundingClientRect();
      const feedCenterX = feedRect.left + feedRect.width / 2;
      let closestIndex = 0;
      let minDistance = Infinity;
      const nextVisibleIndexes = new Set();
      const nextRenderedImageIndexes = new Set();

      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        const cardCenterX = rect.left + rect.width / 2;
        const distance = Math.abs(cardCenterX - feedCenterX);
        const isPartiallyVisible =
          rect.right > feedRect.left && rect.left < feedRect.right;

        if (isPartiallyVisible) {
          nextVisibleIndexes.add(index);
        }

        const shouldRenderImage = isPartiallyVisible;

        if (shouldRenderImage) {
          nextRenderedImageIndexes.add(index);
        }

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      const middleStart = originalItemsCount;
      const middleEnd = originalItemsCount * 2 - 1;

      if (closestIndex < middleStart || closestIndex > middleEnd) {
        const firstCard = cards[0];
        const firstMiddleCard = cards[originalItemsCount];

        if (firstCard && firstMiddleCard) {
          const oneSequenceWidth =
            firstMiddleCard.offsetLeft - firstCard.offsetLeft;

          if (oneSequenceWidth > 0) {
            const recenterDirection = closestIndex < middleStart ? 1 : -1;
            isRecenteringRef.current = true;
            feedElement.scrollLeft += recenterDirection * oneSequenceWidth;
            closestIndex += recenterDirection * originalItemsCount;

            requestAnimationFrame(() => {
              isRecenteringRef.current = false;
              requestUpdateFocusedCard();
            });
          }
        }
      }

      setFocusedIndex((prev) => (prev === closestIndex ? prev : closestIndex));
      setVisibleIndexes((prev) => {
        if (prev.size === nextVisibleIndexes.size) {
          let sameValues = true;

          for (const index of prev) {
            if (!nextVisibleIndexes.has(index)) {
              sameValues = false;
              break;
            }
          }

          if (sameValues) {
            return prev;
          }
        }

        return nextVisibleIndexes;
      });

      setRenderedImageIndexes((prev) => {
        if (prev.size === nextRenderedImageIndexes.size) {
          let sameValues = true;

          for (const index of prev) {
            if (!nextRenderedImageIndexes.has(index)) {
              sameValues = false;
              break;
            }
          }

          if (sameValues) {
            return prev;
          }
        }

        return nextRenderedImageIndexes;
      });
    };

    const requestUpdateFocusedCard = () => {
      if (isRecenteringRef.current) {
        return;
      }

      if (rafId) {
        return;
      }

      rafId = requestAnimationFrame(updateFocusedCard);
    };

    requestUpdateFocusedCard();
    feedElement.addEventListener("scroll", requestUpdateFocusedCard, {
      passive: true,
    });
    window.addEventListener("resize", requestUpdateFocusedCard);

    const resizeObserver = new ResizeObserver(requestUpdateFocusedCard);
    resizeObserver.observe(feedElement);

    return () => {
      feedElement.removeEventListener("scroll", requestUpdateFocusedCard);
      window.removeEventListener("resize", requestUpdateFocusedCard);
      resizeObserver.disconnect();
      isRecenteringRef.current = false;

      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [getFeedCards, originalItemsCount]);

  const scrollToCardIndex = useCallback(
    (nextIndex) => {
      const cards = getFeedCards();

      if (!cards.length) {
        return;
      }

      const wrappedIndex =
        ((nextIndex % cards.length) + cards.length) % cards.length;
      scrollCardToCenter(cards[wrappedIndex], "smooth");
    },
    [getFeedCards, scrollCardToCenter],
  );

  const scrollLeft = useCallback(() => {
    scrollToCardIndex(focusedIndex - 1);
  }, [focusedIndex, scrollToCardIndex]);

  const scrollRight = useCallback(() => {
    scrollToCardIndex(focusedIndex + 1);
  }, [focusedIndex, scrollToCardIndex]);

  const focusCardFromClick = useCallback(
    (index) => {
      if (index === focusedIndex || !visibleIndexes.has(index)) {
        return;
      }

      scrollToCardIndex(index);
    },
    [focusedIndex, visibleIndexes, scrollToCardIndex],
  );

  return (
    <section id="neon-city" className=" bg-background py-32">
      <div className="mb-12 px-6 mx-auto max-w-7xl">
        <span className="mb-2 block font-label text-sm text-primary-fixed">
          05 // FLUJO
        </span>
        <h2 className="font-headline text-5xl font-bold tracking-tighter uppercase">
          Neon_City
        </h2>
      </div>

      <div className="relative flex justify-center">
        <button
          className="w-30 cursor-pointer max-sm:absolute max-sm:left-0 max-sm:h-full max-sm:z-10"
          aria-label="Desplazar carrusel a la izquierda"
          onClick={scrollLeft}>
          <span className="font-headline text-5xl leading-none select-none text-primary-fixed max-sm:text-white max-sm:text-shadow-sm max-sm:text-shadow-black">
            &lt;
          </span>
        </button>
        <div
          id="feed-neon-city"
          ref={feedRef}
          className="w-full flex gap-3 py-8 overflow-hidden scroll-behavior-smooth snap-x no-scrollbar snap-mandatory overscroll-x-contain">
          {loopItems.map((item, index) => (
            <div
              key={item.loopKey}
              data-feed-item
              role="button"
              tabIndex={
                visibleIndexes.has(index) && index !== focusedIndex ? 0 : -1
              }
              aria-label={`Enfocar imagen ${item.originalIndex + 1}`}
              onClick={() => {
                focusCardFromClick(index);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  focusCardFromClick(index);
                }
              }}
              className={`min-w-100 snap-center transition-opacity duration-300 ${
                visibleIndexes.has(index)
                  ? "opacity-100 visible cursor-pointer"
                  : "opacity-0 invisible pointer-events-none"
              }`}>
              {renderedImageIndexes.has(index) ? (
                <img
                  src={item.image}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={`h-140 w-full max-sm:w-9/10 max-sm:m-auto object-cover duration-300 ease-out select-none ${
                    index === focusedIndex
                      ? "scale-100 grayscale-0 opacity-100 saturate-100 brightness-150 border border-lime-200 shadow-lg shadow-primary-fixed"
                      : "scale-80 grayscale opacity-90 saturate-0"
                  }`}
                />
              ) : (
                <div
                  aria-hidden="true"
                  className="h-full w-full bg-surface-container-low"
                />
              )}
            </div>
          ))}
        </div>
        <button
          className="w-30 cursor-pointer max-sm:absolute max-sm:right-0 max-sm:h-full"
          aria-label="Desplazar carrusel a la derecha"
          onClick={scrollRight}>
          <span className="font-headline text-5xl leading-none select-none text-primary-fixed max-sm:text-white max-sm:text-shadow-sm max-sm:text-shadow-black">
            &gt;
          </span>
        </button>
      </div>
    </section>
  );
}
