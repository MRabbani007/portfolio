const highlights = [
  { value: "5+", label: "Years of Experience" },
  { value: "25+", label: "Projects Delivered" },
  { value: "10+", label: "Happy Clients" },
  { value: "100%", label: "Commitment to Quality" },
];

export default function HighlightsSection() {
  return (
    <section className="py-24 bg-sky-950 dark:bg-black text-white">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {highlights.map(({ value, label }) => (
            <div key={label}>
              <p className="text-4xl font-bold mb-2">{value}</p>
              <p className="text-zinc-300 text-sm">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
