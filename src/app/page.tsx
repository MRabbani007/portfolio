export default function HomePage() {
  return (
    <main className="flex flex-col items-center gap-4 min-h-screen">
      <div className="bg-gradient-to-br from-zinc-950 to-sky-900 w-full h-[40vh] relative">
        <img
          src="/assets/textile.png"
          alt="textile"
          className="object-cover w-full h-full mx-auto"
        />
        <div className="text-zinc-50 absolute left-0 bottom-0 p-4">
          <p className="text-2xl">Mohamad Rabbani</p>
          <p>Software Engineer</p>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <h1>Welcome to my website, have a look around!</h1>
      </div>
    </main>
  );
}
