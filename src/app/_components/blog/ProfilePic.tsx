import Image from "next/image";

export default function ProfilePic() {
  return (
    <Image
      className="drop-shadow-xl shadow-black rounded-full mx-auto mt-8 sm:scale-x-100 -scale-x-100"
      src="/assets/blog/tech.png"
      alt="Mohamad Rabbani"
      width={200}
      height={200}
      priority={true}
    />
  );
}
