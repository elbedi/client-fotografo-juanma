export default function SectionContainer({ children, className = "" }) {
  return (
    <section className={`w-full max-w-6xl mx-auto px-6 md:px-10 lg:px-16 ${className}`}>
      {children}
    </section>
  );
}
