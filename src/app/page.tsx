export default function HomePage() {
  return (
    <div className="">
      <header className="bg-gradient-to-br from-zinc-950 to-sky-900 relative">
        <div className="w-full max-w-[1000px] mx-auto h-[40vh] z-10 relative">
          <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
            <p className="text-2xl">Mohamad Rabbani</p>
            <p>Software Engineer</p>
          </div>
        </div>
        <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
          <img
            src="/assets/textile.png"
            alt="textile"
            className="object-cover w-full h-full mx-auto z-0"
            width={500}
            height={200}
          />
        </div>
      </header>
      <main className="flex flex-col items-center gap-4 p-4 h-96 min-h-0">
        <h1 className="text-wrap whitespace-break-spaces">
          Welcome to my website, have a look around!
        </h1>
      </main>
    </div>
  );
}
