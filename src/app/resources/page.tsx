import React from "react";
import { FRAMEWORKS, MEDIA } from "../_lib/resources";
import Image from "next/image";

export default function ResourcesPage() {
  return (
    <div className=" min-h-screen">
      <div className="bg-zinc-900 w-full h-[40vh] relative">
        <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
          <p className="text-2xl">Links & Resources</p>
          <p>Useful Links & Resources</p>
        </div>
      </div>
      <div className="py-2 px-4 max-w-[1000px] mx-auto flex flex-col gap-6">
        <h1>Links & Resources</h1>
        <section>
          <h2 className="text-xl">FrameWorks</h2>
          <ul className="flex flex-wrap gap-4 justify-center items-stretch">
            {FRAMEWORKS.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item?.url ?? "#"}
                    target="_blank"
                    className="flex flex-col gap-2 justify-between h-full"
                  >
                    <Image
                      src={"/assets/resources/" + item?.image}
                      width={60}
                      height={60}
                      alt={item?.name}
                      className="mx-auto my-auto hover:scale-125 duration-200"
                    />
                    <p className="font-mono mx-auto">{item.name}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
        <section>
          <h2 className="text-xl">Media</h2>
          <ul className="flex flex-wrap gap-4 justify-center items-stretch">
            {MEDIA.map((item, index) => {
              return (
                <li key={index}>
                  <a
                    href={item?.url ?? "#"}
                    target="_blank"
                    className="flex flex-col gap-2 justify-between h-full"
                  >
                    <Image
                      src={"/assets/resources/" + item?.image}
                      width={60}
                      height={60}
                      alt={item?.name}
                      className="mx-auto my-auto hover:scale-125 duration-200"
                    />
                    <p className="font-mono mx-auto">{item.name}</p>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
