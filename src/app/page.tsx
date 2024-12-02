import MagicButton from "@/components/ui/MagicButton";
import Slide from "@/components/animate/Slide";
import { TextGenerateEffect } from "@/components/ui/TextGenerateEffect";
import Link from "next/link";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import ClipWave from "@/components/ClipWave";

export default function HomePage() {
  return (
    <main className="flex-1 flex flex-col gap-4 relative p-0 lg:p-0">
      <section className="relative bg-gradient-to-b from-sky-800 to-sky-950 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-900 min-h-[90vh]">
        <div className="absolute bottom-0 left-0 right-0 h-[20vh] flex justify-center items-end overflow-x-clip">
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
                <Link href={"/portfolio"} className="font-medium text-white">
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
      <section className="">
        <Wrapper className="min-h-screen items-center justify-center py-8">
          <p className="text-2xl font-medium text-zinc-800 dark:text-white text-start mb-8">
            Building Modern Web Applications
          </p>
          <div className="flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 text-center">
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
          </div>
        </Wrapper>
      </section>
    </main>
  );
}
