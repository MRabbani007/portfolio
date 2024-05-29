import Image from "next/image";
import React from "react";

type PreviewCardProp = {
  imageName: string;
  imageURL: string;
};

export default function PreviewCard({ imageName, imageURL }: PreviewCardProp) {
  return (
    <article className="flex flex-col items-center justify-center">
      <div className="w-[400px] h-[300px]">
        <Image
          src={"/assets/projects/" + imageURL}
          alt={imageName}
          width={500}
          height={350}
          className="rounded-lg"
        />
      </div>
      <p className="py-auto font-semibold">{imageName}</p>
    </article>
  );
}
