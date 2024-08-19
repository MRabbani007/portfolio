import MagicButton from "@/components/ui/MagicButton";
import Slide from "@/components/ui/Slide";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="">
      {/* <header className="bg-gradient-to-br from-zinc-950 to-sky-900 relative">
        <div className="w-full max-w-[1000px] mx-auto h-[40vh] z-10 relative">
          <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
            <p className="text-2xl">Mohamad Rabbani</p>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
          <img
            src="/assets/textile.png"
            alt="textile"
            className="object-cover w-full h-full mx-auto z-0"
            width={500}
            height={200}
          />
        </div>
      </header> */}
      <main className="flex flex-col gap-4 p-4">
        <section className="min-h-[calc(100vh-5rem-1px)] w-fit mx-auto">
          <TextGenerateEffect
            words={"Transform concepts into seamless experiences"}
          />
          <Slide from="bottom">
            <p>
              I'm a full-stack developer and I specialize in building
              exceptional digital experiences
            </p>
          </Slide>
          <Slide from="bottom" className="mt-6">
            <MagicButton title="Go to Portfolio">
              <Link
                href={"/portfolio"}
                // className="border-2 border-accent/50 py-2 px-4 rounded-lg text-accent"
              >
                View Work
              </Link>
            </MagicButton>
          </Slide>

          {/* <div className="absolute inset-0 overflow-hidden z-50 ">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-0 shadow-[0_0_100px_5px_rgba(245,245,245,0.5)] w-[5000px] h-0 animate-[spin_2s_linear_infinite] origin-left "></div>
          </div>
        </div> */}
        </section>
        <section></section>
        {/* <h1 className="text-wrap whitespace-break-spaces">
          Welcome to my website, have a look around!
        </h1> */}
      </main>
    </div>
  );
}
