import MagicButton from "@/components/ui/MagicButton";
import Slide from "@/components/ui/Slide";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col gap-4 p-0">
      <section className="w-fit mx-auto ">
        <TextGenerateEffect
          words={"Transform concepts into seamless experiences"}
        />
        <Slide from="bottom" className="mt-4">
          <p className="text-base md:text-xl">
            I'm a full-stack developer and I specialize in building exceptional
            digital experiences
          </p>
        </Slide>
        <Slide from="bottom" className="mt-6">
          <MagicButton title="Go to Portfolio">
            <Link
              href={"/portfolio"}
              className="text-xl font-semibold text-zinc-200"
            >
              Go to Portfolio
            </Link>
          </MagicButton>
        </Slide>
        {/* <div className="absolute inset-0 overflow-hidden z-50 ">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-0 shadow-[0_0_100px_5px_rgba(245,245,245,0.5)] w-[5000px] h-0 animate-[spin_2s_linear_infinite] origin-left "></div>
          </div>
        </div> */}
      </section>
      {/* <h1 className="text-wrap whitespace-break-spaces">
          Welcome to my website, have a look around!
        </h1> */}
    </main>
  );
}
