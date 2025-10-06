import { Card, CardContent } from "@/components/ui/card";
import Wrapper from "@/components/Wrapper";
import Image from "next/image";
import React from "react";

export default function SkillsSection() {
  const SERVICES = [
    {
      title: "Front-End",
      desc: "Modern, responsive, user-friendly",
      img: "/frontend.png",
    },
    {
      title: "Back-End",
      desc: "RESTful APIs, databases, cloud-ready",
      img: "/backend.png",
    },
    {
      title: "Full-Stack",
      desc: "Design, build, and deploy end-to-end",
      img: "/developer.png",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <Wrapper>
        <div className="mb-10 text-center">
          <h2 className="text-3xl lg:text-4xl font-semibold text-foreground mb-4">
            Building Modern Web Applications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Crafting seamless, scalable, and beautiful solutions — from concept
            to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((item) => (
            <Card
              key={item.title}
              className="hover:scale-[1.02] hover:shadow-lg transition-all duration-300 border-border/50 bg-card"
            >
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="relative w-[200px] h-[140px]">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="text-xl font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Wrapper>
    </section>
  );
}
