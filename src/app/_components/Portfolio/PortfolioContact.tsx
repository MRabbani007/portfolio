import Image from "next/image";
import React from "react";

export default function PortfolioContact() {
  return (
    <div id="contact" className="section-container pt-12">
      <section>
        <h2>Contact</h2>
        <div className="mx-auto flex flex-col sm:flex-row flex-wrap gap-4">
          <div className="">
            <Image
              src={"/assets/portfolio/contact_me.png"}
              alt="Contact"
              width={300}
              height={700}
              loading="lazy"
              className="object-cover"
            />
          </div>
          <form
            method="POST"
            action="https://getform.io/f/483d805c-1fff-47c8-8a66-a6e7375b4d11"
            className="flex flex-1 flex-col gap-4 max-w-[600px]"
          >
            <p className="py-2">
              Submit the form below or send me an email -{" "}
              <a href="mailto: mrabbani@outlook.com">mrabbani@outlook.com</a>
            </p>
            <input
              className="bg-zinc-200 p-2 rounded-md"
              type="text"
              placeholder="Name"
              name="name"
            />
            <input
              className="p-2 bg-zinc-200 rounded-md"
              type="email"
              placeholder="Email"
              name="email"
            />
            <textarea
              className="bg-zinc-200 p-2 rounded-md"
              name="message"
              rows={10}
              placeholder="Message"
            ></textarea>
            <button className="w-fit text-xl group border-none px-6 py-3 mx-auto flex items-center duration-200 rounded-full shadow-lg hover:shadow-xl hover:shadow-blue-500 shadow-blue-500 bg-gradient-to-r from-sky-600 to-sky-400 text-white">
              Let&apos;s Collaborate
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
