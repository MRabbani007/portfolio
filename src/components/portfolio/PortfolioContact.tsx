import MagicButton from "@/components/ui/MagicButton";
import Slide from "@/components/animate/Slide";
import Image from "next/image";
import React from "react";
import Reveal from "../animate/Reveal";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";

export default function PortfolioContact() {
  return (
    <div id="contact" className="section-container pt-12 mb-20">
      <section>
        <Slide>
          <h2 className="flex items-center gap-4 mb-4 lg:mb-10">Contact</h2>
        </Slide>
        <div className="mx-auto flex flex-col sm:flex-row flex-wrap gap-8">
          <Slide className="w-fit">
            <Image
              src={"/assets/portfolio/contact_me.png"}
              alt="Contact"
              width={300}
              height={700}
              loading="lazy"
              className="object-cover"
            />
          </Slide>
          <Card>
            <CardHeader>
              <CardTitle>Contact Me</CardTitle>
              <CardDescription>
                Submit the form below or send me an email -{" "}
                <a href="mailto: mrabbani@outlook.com">mrabbani@outlook.com</a>
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form
                method="POST"
                action="https://getform.io/f/483d805c-1fff-47c8-8a66-a6e7375b4d11"
                className="flex flex-1 flex-col gap-4 max-w-[600px]"
              >
                <Reveal delay={0.2} className="flex-1">
                  <Label htmlFor="name">Name</Label>
                  <Input type="text" placeholder="Name" id="name" name="name" />
                </Reveal>
                <Reveal delay={0.3}>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                  />
                </Reveal>
                <Reveal delay={0.4}>
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    className="bg-transparent p-2 rounded-md w-full"
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Message"
                  />
                </Reveal>
              </form>
            </CardContent>
            <CardFooter>
              <Reveal delay={0.5} className="mx-auto">
                <MagicButton title="Let's Collaborate">
                  <button type="submit">Let&apos;s Collaborate</button>
                </MagicButton>
              </Reveal>
            </CardFooter>
          </Card>
        </div>
      </section>
    </div>
  );
}
