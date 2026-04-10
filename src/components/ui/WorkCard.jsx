export default function WorkCard({
  image,
  alt,
  entryId,
  title,
  category,
  res,
  location,
  onClick,
  loading = "lazy",
  fetchPriority = "low",
  sizes = "(min-width: 768px) 33vw, 100vw",
}) {
  const handleKeyDown = (event) => {
    if (!onClick) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onClick(event);
    }
  };

  return (
    <article
      className="work-card group relative bg-background p-6 transition-all duration-500 hover:bg-surface-container-high"
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}>
      <div className="relative mb-6 aspect-4/5 overflow-hidden">
        <img
          src={image}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          sizes={sizes}
          width="1280"
          height="1600"
          draggable="false"
          className="work-card-image h-full w-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-surface-container-lowest/80 px-3 py-1 text-[9px] font-label tracking-widest text-primary-fixed uppercase backdrop-blur-md">
          {`Registro_ID: ${entryId}`}
        </div>
      </div>
      <div className="flex items-start justify-between max-md:block">
        <div>
          <h3 className="mb-1 font-headline text-2xl font-bold tracking-tight uppercase">
            {title}
          </h3>
          <p className="font-label text-xs tracking-widest text-outline uppercase">
            {category}
          </p>
        </div>
        <div className="text-right">
          <span className="block font-label text-[10px] text-primary-fixed/60 uppercase">
            {res}
          </span>
          <span className="block font-label text-[10px] text-primary-fixed/60 uppercase">
            {location}
          </span>
        </div>
      </div>
    </article>
  );
}
