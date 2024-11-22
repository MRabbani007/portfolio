import React from "react";
import { FRAMEWORKS, MEDIA, STYLING } from "../../lib/resources";
import SectionResources from "../../components/resources/SectionResources";

export default function ResourcesPage() {
  return (
    <div className="">
      <header className="bg-zinc-900">
        <div className="w-full mx-auto h-[40vh] px-8 relative">
          <img
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
      <main className="p-8">
        <h1>Links & Resources</h1>
        <SectionResources title="FrameWorks" resources={FRAMEWORKS} />
        <SectionResources title="Styling" resources={STYLING} />
        <SectionResources title="Media" resources={MEDIA} />
      </main>
    </div>
  );
}
