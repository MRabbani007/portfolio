import Wrapper from "@/components/Wrapper";

const steps = [
  { title: "Discovery", desc: "Understand goals, audience, and vision." },
  { title: "Design", desc: "Create wireframes and prototypes for clarity." },
  {
    title: "Development",
    desc: "Build robust, maintainable, and scalable systems.",
  },
  {
    title: "Delivery",
    desc: "Deploy, test, and monitor for continuous improvement.",
  },
];

export default function WorkflowSection() {
  return (
    <section className="justify-center items-center py-20 min-h-screen ">
      <Wrapper>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          My Development Approach
        </h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          {steps.map(({ title, desc }) => (
            <div
              key={title}
              className="p-6 rounded-xl bg-white dark:bg-zinc-900 border-[1px] border-zinc-200 dark:hover:border-zinc-400 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all hover:scale-105 duration-200"
            >
              <h3 className="text-xl font-semibold mb-3 text-nowrap">
                {title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
