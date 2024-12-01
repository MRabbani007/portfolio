import MagicButton from "@/components/ui/MagicButton";
import Slide from "@/components/ui/Slide";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Link from "next/link";
import ClipWave from "@/components/ClipWave";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";

export default function HomePage() {
  return (
<<<<<<< Updated upstream
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
          {/* <MagicButton title="Go to Portfolio">
          </MagicButton> */}
          <Slide from="bottom" className="mt-6">
            <Link
              href={"/portfolio"}
              className="border-2 border-accent/50 py-2 px-4 rounded-lg text-accent"
            >
              View Work
            </Link>
          </Slide>
        </section>
        <section></section>
        {/* <h1 className="text-wrap whitespace-break-spaces">
=======
    <main className="flex-1 flex flex-col gap-4 relative p-0 lg:p-0">
      <section className="pt-20 relative bg-gradient-to-b from-sky-800 to-sky-950 min-h-[100vh]">
        <div className="absolute bottom-0 left-0 right-0 h-[20vh] flex justify-start items-end">
          <ClipWave />
        </div>
        {/* <Curtain /> */}
        <Wrapper className="flex items-center gap-4 lg:max-w-[90vw]">
          <div>
            <TextGenerateEffect
              words={"Transform concepts into seamless experiences"}
            />
            <Slide from="bottom" className="mt-4">
              <p className="text-base md:text-xl text-white">
                I'm a full-stack developer and I specialize in building
                exceptional digital experiences
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
          </div>
          {/* <div className="relative w-[300px] h-[250px]">
            <Image src="/computer.png" alt="laptop" fill />
          </div> */}
        </Wrapper>
        {/* <div className="absolute inset-0 overflow-hidden z-50 ">
          <div className="relative w-full h-full">
            <div className="absolute top-1/2 left-0 shadow-[0_0_100px_5px_rgba(245,245,245,0.5)] w-[5000px] h-0 animate-[spin_2s_linear_infinite] origin-left "></div>
          </div>
        </div> */}
      </section>
      <section className="min-h-screen">
        <Wrapper className="flex w-full">
          <div className="flex-1">
            <p className="text-2xl font-medium text-zinc-800 text-start mb-8">
              Building Modern Responsive Web Applications
            </p>
          </div>
        </Wrapper>
        <Wrapper className="flex items-center justify-center gap-8 text-center">
          <div>
            <div className="relative w-[300px] h-[200px]">
              <Image
                src="/frontend.png"
                alt="front-end"
                fill
                className="object-contain object-center"
              />
            </div>
            <p className="text-xl font-semibold">Front-End</p>
            <p className="text-sm">Modern, Responsive, User friendly</p>
          </div>
          <div>
            <div className="relative w-[300px] h-[200px]">
              <Image
                src="/backend.png"
                alt="front-end"
                fill
                className="object-contain object-center"
              />
            </div>
            <p className="text-xl font-semibold">Back-End</p>
            <p className="text-sm">RESTfull, Databases, FileManagement</p>
          </div>
          <div>
            <div className="relative w-[300px] h-[200px]">
              <Image
                src="/developer.png"
                alt="front-end"
                fill
                className="object-contain object-center"
              />
            </div>
            <p className="text-xl font-semibold">Full-Stack</p>
            <p className="text-sm">Design, Build & Deploy</p>
          </div>
        </Wrapper>
      </section>
      {/* <h1 className="text-wrap whitespace-break-spaces">
>>>>>>> Stashed changes
          Welcome to my website, have a look around!
        </h1> */}
      </main>
    </div>
  );
}
