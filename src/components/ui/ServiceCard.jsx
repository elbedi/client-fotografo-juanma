export default function ServiceCard({ icon, title, description, items }) {
  return (
    <article className="group border border-outline-variant/20 p-8 transition-colors duration-500 hover:border-primary-fixed">
      <div className="mb-8">
        <span className="material-symbols-outlined mb-4 text-4xl text-primary-fixed transition-transform group-hover:scale-110">
          {icon}
        </span>
        <h3 className="font-headline text-xl font-bold tracking-tight uppercase">{title}</h3>
      </div>
      <p className="mb-6 font-body text-sm text-on-surface-variant">{description}</p>
      <ul className="space-y-2 font-label text-[9px] tracking-widest text-outline uppercase">
        {items.map((item) => (
          <li key={item}>- {item}</li>
        ))}
      </ul>
    </article>
  );
}
