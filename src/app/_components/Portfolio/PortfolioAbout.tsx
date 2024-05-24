import React from "react";

export default function PortfolioAbout() {
  return (
    <div id="about" className="section-container pt-12">
      <section>
        <h2 className="">About</h2>
        <div className="font-light mx-auto flex flex-col lg:flex-row items-center my-2 gap-4">
          <div className="">
            <img
              src="/assets/portfolio/tech.png"
              alt="technology"
              width={250}
              height={500}
            />
          </div>
          <div className="flex flex-col gap-4 flex-1 text-justify text-xl">
            <p className="text-left text-lg sm:text-xl md:text-2xl font-normal">
              Mission-driven engineer with a passion for thoughtful UI design
              and a futuristic user experience.
            </p>
            {/* <p className="py-2">
              Motivated individual with a passion for software development
              aspiring to build innovative and cutting-edge business solutions
              for a refined user experience.
            </p> */}
            <p className="">
              8 years of experience in oil & gas mega projects and the skills to
              complete work in a well-organized and professional manner.
            </p>
            <p className="">
              Well experienced in working with small and large teams of diverse
              backgrounds across multiple companies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
