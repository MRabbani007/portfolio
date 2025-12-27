import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    title: "E-Commerce App",
    image: "/bg_pattern.jpg",
    link: "/portfolio/ecommerce",
    desc: "Next.js, Prisma, PostgreSQL — complete store system.",
  },
  {
    title: "Expense Manager",
    image: "/bg_pattern.jpg",
    link: "/portfolio/expense",
    desc: "Track your spending and income with real-time insights.",
  },
  {
    title: "Blog Platform",
    image: "/bg_pattern.jpg",
    link: "/portfolio/blog",
    desc: "Create and publish MDX blogs connected to Firebase.",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="justify-center items-center min-h-screen py-20 bg-sky-800 dark:bg-zinc-900 text-center"
    >
      <Wrapper>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 lg:mb-20">
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
      </Wrapper>
    </section>
  );
}
