import React from "react";

type TechnologiesProps = {
  technologies: string[];
};

export default function Technologies({ technologies }: TechnologiesProps) {
  return (
    <div className="rounded-lg">
      <h4 className="text-blue-600 bg-zinc-300 py-2 px-4 rounded-t-lg">
        Technologies
      </h4>
      <ul className="list-inside rounded-b-xl flex flex-col text-zinc-700">
        {technologies.map((item, index) => {
          return (
            <li
              key={index}
              className="px-4 py-2 bg-zinc-200 hover:bg-zinc-100 cursor-pointer duration-200 last:rounded-b-lg"
            >
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
