export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-24 bg-white dark:bg-zinc-900 text-zinc-800 dark:text-zinc-100"
    >
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="max-w-2xl mx-auto text-lg text-zinc-600 dark:text-zinc-400">
          I’m a full-stack developer focused on crafting performant,
          user-friendly digital experiences. I work with modern frameworks like
          Next.js, Prisma, and Tailwind CSS to deliver scalable and maintainable
          web applications.
        </p>
      </div>
    </section>
  );
}
