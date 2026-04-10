export default function ContactSection() {
  const instagram = {
    username: "neon_hastur",
    fullName: "Lord Willer",
    profileUrl:
      "https://api.whatsapp.com/send?phone=5587965660&text=Hola%2C%20quiero%20iniciar%20mi%20activaci%C3%B3n%20visual.",
    postUrl: "https://www.instagram.com/p/DRqkReeDJRW/",
    profileImage: "/images/about-frames/juanma_064.webp",
    latestImage: "/images/bgMe.webp",
    posts: 25,
    followers: 106,
    following: 718,
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden  px-6 py-30 md:py-44 "
      style={{
        background:
          "radial-gradient(circle,rgba(0, 0, 0, 0) 0%, rgba(11, 11, 12, 1) 100%)",
      }}>
      <div
        className="absolute inset-0 -z-1 bg-cover bg-center bg-no-repeat blur-lg bg-fixed"
        style={{ backgroundImage: 'url("/images/bgMe.webp")' }}
      />
      <div className="absolute -z-10 h-150 w-150 rounded-full bg-primary-fixed/5 blur-[120px]" />
      <div className="absolute -right-20 -bottom-20 -z-10 h-80 w-80 rounded-full bg-primary-fixed/10 blur-[100px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="text-center lg:text-left">
          <span className="mb-4 block font-label text-sm tracking-[0.3em] text-primary-fixed">
            CONTACTO // FASE_06
          </span>
          <h2 className="mb-8 font-headline text-5xl font-bold tracking-tighter uppercase sm:text-6xl md:text-7xl">
            Comienza Tu
            <br />
            <span className="glitch-text glow-text text-primary-fixed">
              Activacion
            </span>
          </h2>
          <p className="mx-auto mb-10 max-w-sm font-body text-l leading-relaxed text-on-surface-variant lg:mx-0">
            Explora los rincones ocultos de la metrópolis y activa tu narrativa
            visual.
          </p>
          <a
            href={instagram.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative inline-block bg-primary-fixed px-12 py-6 font-headline text-xl font-bold tracking-tighter text-on-primary-fixed uppercase transition-all hover:bg-white">
            <span className="relative z-10">INICIAR_CONTACTO</span>
            <span className="absolute inset-0 bg-primary-fixed opacity-20 blur-xl transition-opacity group-hover:opacity-40" />
          </a>
        </div>

        <article className="mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-outline-variant/30 bg-black/45 shadow-2xl shadow-amber-400 backdrop-blur-sm">
          <div className="flex items-center justify-between border-b border-outline-variant/20 px-5 py-4">
            <div className="flex items-center gap-3">
              <a
                href={instagram.profileUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Perfil de Instagram del fotografo"
                className="h-11 w-11 overflow-hidden rounded-full border border-outline-variant/40">
                <img
                  src={instagram.profileImage}
                  alt="Foto de perfil de Instagram"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </a>
              <div>
                <a
                  href={instagram.profileUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="font-label text-sm tracking-wide text-white transition-colors hover:text-primary-fixed">
                  @{instagram.username}
                </a>
                <p className="font-body text-xs text-on-surface-variant">
                  {instagram.fullName}
                </p>
              </div>
            </div>
            <a
              href={instagram.profileUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-outline-variant/30 px-4 py-1.5 font-label text-[10px] tracking-widest text-white uppercase transition-colors hover:border-primary-fixed hover:text-primary-fixed">
              Seguir
            </a>
          </div>

          <a
            href={instagram.postUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="Ver ultima publicacion en Instagram"
            className="block aspect-square w-full overflow-hidden bg-black">
            <img
              src={instagram.latestImage}
              alt="Ultima publicacion de Instagram"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              loading="lazy"
            />
          </a>

          <div className="space-y-3 px-5 py-4">
            <div className="grid grid-cols-3 gap-2 border-b border-outline-variant/20 pb-3 font-label text-[10px] tracking-wider uppercase text-on-surface-variant">
              <p className="text-center">
                <span className="block text-sm text-white">
                  {instagram.posts}
                </span>
                Posts
              </p>
              <p className="text-center">
                <span className="block text-sm text-white">
                  {instagram.followers}
                </span>
                Followers
              </p>
              <p className="text-center">
                <span className="block text-sm text-white">
                  {instagram.following}
                </span>
                Following
              </p>
            </div>
            {/* <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="rounded-full border border-outline-variant/30 px-2 py-0.5 font-label text-[10px] tracking-wider uppercase">
                Like
              </span>
              <span className="rounded-full border border-outline-variant/30 px-2 py-0.5 font-label text-[10px] tracking-wider uppercase">
                Comment
              </span>
              <span className="rounded-full border border-outline-variant/30 px-2 py-0.5 font-label text-[10px] tracking-wider uppercase">
                Share
              </span>
            </div> */}
            <p className="font-body text-sm text-on-surface-variant">
              <span className="font-label tracking-wide text-white">
                @{instagram.username}
              </span>{" "}
              editorial session / atmospheric light / precision capture
            </p>
            <a
              href={instagram.postUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block font-label text-[11px] tracking-widest text-primary-fixed uppercase transition-colors hover:text-white">
              VER_PUBLICACION_COMPLETA
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}
