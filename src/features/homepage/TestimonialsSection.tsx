const testimonials = [
  {
    name: "Alex Johnson",
    role: "Project Manager",
    text: "Mohamad is a talented developer who delivers on time and with exceptional quality.",
  },
  {
    name: "John Doe",
    role: "Designer",
    text: "Working with him was seamless — he translates ideas into functional products beautifully.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-zinc-50 dark:bg-zinc-950 text-center"
    >
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="rounded-xl p-8 bg-white/70 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 backdrop-blur-md shadow-sm"
            >
              <p className="italic mb-4 text-zinc-600 dark:text-zinc-400">
                “{t.text}”
              </p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-zinc-500">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
