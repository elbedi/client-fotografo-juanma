import siteConfig from "../../config/siteConfig.js";

export default function Head() {
  return (
    <head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{siteConfig.title}</title>

      <meta name="description" content={siteConfig.description} />
      <link rel="canonical" href={siteConfig.url} />
      <meta name="robots" content={siteConfig.robots} />

      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:image" content={siteConfig.mainImage} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content={siteConfig.lang} />

      <meta name="twitter:card" content={siteConfig.twitterCard} />
      <meta name="twitter:title" content={siteConfig.title} />
      <meta name="twitter:description" content={siteConfig.description} />
      <meta name="twitter:image" content={siteConfig.mainImage} />

      <link rel="icon" type="image/svg+xml" href={siteConfig.favicon} />
      <link
        rel="preload"
        as="image"
        href="/images/hero-frames/Video_Project_1__001.webp"
        type="image/webp"
        fetchpriority="high"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
    </head>
  );
}
