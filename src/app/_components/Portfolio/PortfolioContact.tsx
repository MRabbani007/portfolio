import MagicButton from "@/components/ui/MagicButton";
import Slide from "@/components/ui/Slide";
import Image from "next/image";
import React from "react";

export default function PortfolioContact() {
  return (
    <div id="contact" className="section-container pt-12 mb-20">
      <section className="px-8">
        <Slide from="left">
          <h2>Contact</h2>
        </Slide>
        <div className="mx-auto flex flex-col sm:flex-row flex-wrap gap-8">
          <Slide from="left" className="w-fit">
            <Image
              src={"/assets/portfolio/contact_me.png"}
              alt="Contact"
              width={300}
              height={700}
              loading="lazy"
              className="object-cover"
            />
          </Slide>
          <form
            method="POST"
            action="https://getform.io/f/483d805c-1fff-47c8-8a66-a6e7375b4d11"
            className="flex flex-1 flex-col gap-4 max-w-[600px]"
          >
            <Slide from="right" delay={0}>
              <p className="py-2">
                Submit the form below or send me an email -{" "}
                <a href="mailto: mrabbani@outlook.com">mrabbani@outlook.com</a>
              </p>
            </Slide>
            <Slide from="right" delay={0.2} className="flex-1">
              <input
                className="bg-zinc-200 p-2 rounded-md w-full"
                type="text"
                placeholder="Name"
                name="name"
              />
            </Slide>
            <Slide from="right" delay={0.4}>
              <input
                className="p-2 bg-zinc-200 rounded-md w-full"
                type="email"
                placeholder="Email"
                name="email"
              />
            </Slide>
            <Slide from="right" delay={0.6}>
              <textarea
                className="bg-zinc-200 p-2 rounded-md w-full"
                name="message"
                rows={10}
                placeholder="Message"
              ></textarea>
            </Slide>
            <Slide from="right" delay={0.6}>
              <MagicButton title="Let's Collaborate">
                <button>Let&apos;s Collaborate</button>
              </MagicButton>
              {/* className="w-fit text-xl group border-none px-6 py-3 mx-auto flex items-center duration-200 rounded-full shadow-md  hover:shadow-blue-500 shadow-blue-500 bg-gradient-to-r from-sky-600 to-sky-400 text-white" */}
            </Slide>
          </form>
        </div>
      </section>
    </div>
  );
}
