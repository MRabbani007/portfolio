import Image from "next/image";

export default function ProfilePic() {
  return (
    <Image
      className="border-4 border-black dark:border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
      src="/assets/blog/tech.png"
      alt="Mohamad Rabbani"
      width={200}
      height={200}
      priority={true}
    />
  );
}
