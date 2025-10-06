const steps = [
  { title: "1. Discovery", desc: "Understand goals, audience, and vision." },
  { title: "2. Design", desc: "Create wireframes and prototypes for clarity." },
  {
    title: "3. Development",
    desc: "Build robust, maintainable, and scalable systems.",
  },
  {
    title: "4. Delivery",
    desc: "Deploy, test, and monitor for continuous improvement.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-24 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          My Development Approach
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {steps.map(({ title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-3 text-nowrap">
                {title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
