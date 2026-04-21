export default function Section({ title, children, id }) {
  return (
    <section id={id} className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-semibold mb-12 border-b border-[#8B5CF6]/30 pb-4">
        {title}
      </h2>
      {children}
    </section>
  );
}