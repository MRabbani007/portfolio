import Image, { StaticImageData } from "next/image";
import Reveal from "../animate/Reveal";

type Props = {
  index: number;
  item: {
    id: number;
    position: string;
    company: string;
    project: string;
    period: string;
    time: string;
    image: StaticImageData | string;
    companyLogo: StaticImageData | string;
    responsibilities: string[];
  };
};

export default function ExperienceBlock({ item, index }: Props) {
  return (
    <Reveal>
      <article
        key={index}
        className="rounded-xl p-4 bg-zinc-100 dark:bg-zinc-900"
      >
        <header className="pb-4 px-4 relative">
          <h3 className="">{item?.position}</h3>
          <p className="text-lg font-extralight">
            <strong>{item?.company}</strong>
            <i className="text-base text-zinc-500">{" (" + item?.time + ")"}</i>
          </p>
        </header>
        <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center lg:items-start gap-4 sm:px-4 duration-300 ">
          {/* Image */}
          <div className="h-[400px] w-[350px] sm:w-[400px] lg:w-[500px] relative group overflow-hidden rounded-xl">
            <Image
              src={item.image}
              alt={item.project}
              fill
              quality={100}
              className="object-center object-cover"
            />
            {item.project !== "" && (
              <p className="text-pretty text-sm md:text-xl absolute bottom-0 left-0 w-full p-4 text-white bg-zinc-700/60 duration-300 invisible group-hover:visible translate-y-20  group-hover:translate-y-0">
                {item.project}
              </p>
            )}
          </div>
          <div className="flex flex-col flex-1 gap-4 text-justify">
            {item.responsibilities.map((resp, index) => (
              <div
                key={"expitem-" + index}
                className="font-extralight duration-200"
              >
                {resp}
              </div>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  );
}
