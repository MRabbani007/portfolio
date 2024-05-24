import React from "react";
import { FRAMEWORKS } from "../_lib/resources";
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
      <div className="py-2 px-4">
        <h1>Links & Resources</h1>
        <h2>FrameWorks</h2>
        <ul className="flex flex-wrap gap-4 justify-center items-stretch">
          {FRAMEWORKS.map((item, index) => {
            return (
              <li key={index}>
                <a
                  href={item?.url ?? "#"}
                  target="_blank"
                  className="flex flex-col gap-2 justify-between"
                >
                  <Image
                    src={"/assets/resources/" + item?.image}
                    width={60}
                    height={60}
                    alt={item?.name}
                    className="mx-auto"
                  />
                  <p className="font-mono mx-auto mt-auto">{item.name}</p>
                </a>
              </li>
            );
          })}
        </ul>
        <h2>Media</h2>
        <ul>
          <li>icons8</li>
          <li>React</li>
          <li>Nextjs</li>
          <li>npm</li>
          <li>tailwind</li>
          <li>mongodb</li>
          <li>mdn</li>
        </ul>
      </div>
    </div>
  );
}
