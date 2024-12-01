import React from "react";

export default function BlogBanner() {
  return (
    <div className="relative">
      {/* Left */}
      <div className="absolute right-full">
        <div className="-rotate-90 space-y-4 text-center origin-top-right -translate-y-[10rem] -translate-x-1/2">
          <p className="text-6xl font-light drop-shadow-[0px_0px_10px_rgba(255,255,255,0.7)] text-white">
            Application
          </p>
          <p className="text-6xl space-x-4 drop-shadow-[0px_0px_10px_rgba(255,255,255,0.6)] text-white">
            <span className="font-light ">Media</span>
            <span className="font-medium">Business</span>
          </p>
          <p className="text-6xl pb-4 font-light bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0px_0px_5px_rgba(0,199,252,0.4)]">
            Technology
          </p>
        </div>
      </div>
      {/* Top */}
      <div className="absolute bottom-full text-white drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]">
        <p className="text-5xl uppercase tracking-wider">Information</p>
        <p className="space-x-6 text-3xl tracking-widest uppercase">
          <span>Mobile</span>
          <span className="text-blue-300">Page</span>
          <span>Data</span>
        </p>
      </div>
      {/* Center */}
      <div>
        <div className=" text-white">
          <div className="flex items-center relative">
            <div className="text-2xl drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]">
              <p className="text-blue-400 ">Online</p>
              <p>Office</p>
              <p className="">Design</p>
            </div>
            <p className="text-9xl ml-4 mr-6 drop-shadow-[0px_0px_10px_rgba(255,255,255,0.6)]">
              Web
            </p>
            <div className="text-5xl">
              <p className="text-6xl space-x-4 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]">
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
          <p className="text-8xl ml- uppercase tracking-widest drop-shadow-[0px_0px_20px_rgba(255,255,255,0.7)]">
            Development
          </p>
        </div>
      </div>
      {/* Bottom */}
      <div className="absolute top-full">
        <p className="text-6xl font-light bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-300 pb-4 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]">
          Programming
        </p>
      </div>
      {/* Right */}
      <div className="absolute left-full">
        <div className="-rotate-90 origin-top-left text-white translate-y-[00px] translate-x-4 space-y-6">
          <p className="text-6xl font-light bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-500 drop-shadow-[0px_0px_5px_rgba(0,199,252,0.4)]">
            Software
          </p>
          <p className="text-6xl font-medium ml-10 drop-shadow-[0px_0px_5px_rgba(255,255,255,0.6)]">
            Website
          </p>
        </div>
      </div>
    </div>
  );
}
