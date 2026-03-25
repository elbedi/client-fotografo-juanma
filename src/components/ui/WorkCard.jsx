export default function WorkCard({
  image,
  alt,
  entryId,
  title,
  category,
  res,
  location,
}) {
  return (
    <article className="group relative bg-background p-6 transition-all duration-500 hover:bg-surface-container-high">
      <div className="relative mb-6 aspect-[4/5] overflow-hidden">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover grayscale transition-transform duration-700 group-hover:scale-110 group-hover:grayscale-0"
        />
        <div className="absolute top-4 right-4 bg-surface-container-lowest/80 px-3 py-1 text-[9px] font-label tracking-widest text-primary-fixed uppercase backdrop-blur-md">
          {`Registro_ID: ${entryId}`}
        </div>
      </div>
      <div className="flex items-start justify-between">
        <div>
          <h3 className="mb-1 font-headline text-2xl font-bold tracking-tight uppercase">{title}</h3>
          <p className="font-label text-xs tracking-widest text-outline uppercase">{category}</p>
        </div>
        <div className="text-right">
          <span className="block font-label text-[10px] text-primary-fixed/60 uppercase">{res}</span>
          <span className="block font-label text-[10px] text-primary-fixed/60 uppercase">{location}</span>
        </div>
      </div>
    </article>
  );
}
