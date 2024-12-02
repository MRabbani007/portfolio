import React from "react";
import { FRAMEWORKS, MEDIA, STYLING } from "../../lib/resources";
import SectionResources from "../../components/resources/SectionResources";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

export default function ResourcesPage() {
  return (
    <main className="">
      <header className="w-full h-[50vh] relative bg-gradient-to-br from-zinc-900 to-zinc-950">
        <div className="absolute top-0 left-0 right-0 h-20 bg-sky-950/80 dark:bg-zinc-950/80 z-10"></div>
        <div className="w-full mx-auto h-[40vh] px-8">
          <div className="absolute bottom-6 right-6">
            <Image
              src="/assets/resources/links.png"
              alt="links"
              className="object-contain h-full ml-auto"
              height={300}
              width={200}
            />
          </div>
          <div className="text-zinc-50 absolute left-0 bottom-0 px-8 py-4">
            <p className="text-2xl">Links & Resources</p>
            <p>Useful Links & Resources</p>
          </div>
        </div>
      </header>
      <div className="flex flex-col gap-10 items-stretch my-10">
        <SectionResources title="FrameWorks" resources={FRAMEWORKS} />
        <SectionResources title="Styling" resources={STYLING} />
        <SectionResources title="Media" resources={MEDIA} />
      </div>
    </main>
  );
}
