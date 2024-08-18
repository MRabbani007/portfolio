import Image from "next/image";
import React from "react";
import { Resource } from "../../../../types";

export default function SectionResources({
  resources,
  title,
}: {
  resources: Resource[];
  title: string;
}) {
  return (
    <section>
      <h2 className="text-xl">{title}</h2>
      <ul className="flex flex-wrap gap-6 items-stretch">
        {resources.map((item, index) => {
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
  );
}
