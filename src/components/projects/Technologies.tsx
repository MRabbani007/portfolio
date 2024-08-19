import React from "react";
import { GoDot } from "react-icons/go";

type TechnologiesProps = {
  technologies: string[];
};

export default function Technologies({ technologies }: TechnologiesProps) {
  return (
    <div className="rounded-lg">
      <h4 className="bg-blue-900 text-white py-2 px-4 border-blue-900 border-2 rounded-t-lg">
        Technologies
      </h4>
      <ul className="list-inside rounded-b-xl flex flex-col text-zinc-700 border-blue-900 border-2">
        {technologies.map((item, index) => {
          return (
            <li
              key={index}
              className="px-2 py-2 bg-zinc-200 hover:bg-zinc-100 hover:font-semibold border-white border-b-[1px] last:border-none cursor-pointer duration-200 last:rounded-b-lg flex items-center"
            >
              <GoDot size={20} className="inline" />
              <span>{item}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
