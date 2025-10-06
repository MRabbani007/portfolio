import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce App",
    image: "/projects/ecommerce.png",
    link: "/portfolio/ecommerce",
    desc: "Next.js, Prisma, PostgreSQL — complete store system.",
  },
  {
    title: "Expense Manager",
    image: "/projects/expense.png",
    link: "/portfolio/expense",
    desc: "Track your spending and income with real-time insights.",
  },
  {
    title: "Blog Platform",
    image: "/projects/blog.png",
    link: "/portfolio/blog",
    desc: "Create and publish MDX blogs connected to Firebase.",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="py-24 bg-white dark:bg-zinc-900 text-center"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Featured Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map(({ title, image, link, desc }) => (
            <Link
              key={title}
              href={link}
              className="group rounded-xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative w-full h-52">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                  {desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
