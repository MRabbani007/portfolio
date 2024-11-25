import React from "react";
import { FRAMEWORKS, MEDIA, STYLING } from "../../lib/resources";
import SectionResources from "../../components/resources/SectionResources";
import Image from "next/image";
import Wrapper from "@/components/Wrapper";

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      <header className="bg-zinc-900">
        <div className="w-full mx-auto h-[40vh] px-8 relative">
          <Image
            src="/assets/resources/links.png"
            alt="links"
            className="object-contain h-full ml-auto"
            height={300}
            width={200}
          />
          <div className="text-zinc-50 absolute left-0 bottom-0 px-8 py-4">
            <p className="text-2xl">Links & Resources</p>
            <p>Useful Links & Resources</p>
          </div>
        </div>
      </header>
      <Wrapper className="flex flex-col gap-4">
        <SectionResources title="FrameWorks" resources={FRAMEWORKS} />
        <SectionResources title="Styling" resources={STYLING} />
        <SectionResources title="Media" resources={MEDIA} />
      </Wrapper>
    </main>
  );
}
