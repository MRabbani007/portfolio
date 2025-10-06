import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-24 bg-hero text-white text-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Build Something Exceptional?
        </h2>
        <p className="mb-8 text-zinc-300">
          Let’s collaborate on your next idea — I’m always open to new
          opportunities.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 rounded-full bg-sky-600 hover:bg-sky-500 font-medium transition-colors"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
