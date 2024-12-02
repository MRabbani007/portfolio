import React from "react";

export default function BlogBanner() {
  return (
    <div className="relative t-lg">
      {/* Left */}
      <div className="absolute -rotate-90 right-full origin-bottom-right">
        <div className="md:space-y-4 text-center translate-x-3/4">
          <p className="font-light drop-shadow-[0px_0px_10px_rgba(255,255,255,0.7)] text-white">
            Application
          </p>
          <p className="space-x-4 drop-shadow-[0px_0px_10px_rgba(255,255,255,0.6)] text-white lg:mr-32">
            <span className="font-light ">Media</span>
            <span className="font-medium">Business</span>
          </p>
          <p className="pb-4 font-light bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0px_0px_5px_rgba(0,199,252,0.4)]">
            Technology
          </p>
        </div>
      </div>
      {/* Top */}
      <div className="absolute bottom-full text-white drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]">
        <p className="uppercase tracking-wider">Information</p>
        <p className="space-x-6 text-3xl tracking-widest uppercase">
          <span>Mobile</span>
          <span className="text-blue-300">Page</span>
          <span>Data</span>
        </p>
      </div>
      {/* Center */}
      <div className="text-white">
        <div className="flex items-center relative">
          <div className="t-sm drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]">
            <p className="text-blue-400 ">Online</p>
            <p>Office</p>
            <p className="">Design</p>
          </div>
          <p className="t-xl mx-2 md:ml-4 md:mr-6 drop-shadow-[0px_0px_10px_rgba(255,255,255,0.6)]">
            Web
          </p>
          <div className="">
            <p className="space-x-4 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]">
              <span>SEO</span>
              <span>Server</span>
            </p>
            <p className="space-x-4">
              <span className=" text-blue-400 brightness-150 drop-shadow-[0px_0px_20px_rgba(0,199,252,1)]">
                Computer
              </span>
              <span>HTTP</span>
            </p>
          </div>
        </div>
        <p className="t-xl uppercase tracking-widest drop-shadow-[0px_0px_20px_rgba(255,255,255,0.7)]">
          Development
        </p>
      </div>
      {/* Bottom */}
      <div className="absolute top-full">
        <p className="font-light bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300 pb-4 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]">
          Programming
        </p>
      </div>
      {/* Right */}
      <div className="absolute left-full">
        <div className="-rotate-90 origin-top-left text-white translate-y-[00px] sm:translate-x-4 md:space-y-6">
          <p className="font-light bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0px_0px_5px_rgba(0,199,252,0.4)]">
            Software
          </p>
          <p className="font-medium md:ml-10 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]">
            Website
          </p>
        </div>
      </div>
    </div>
  );
}
