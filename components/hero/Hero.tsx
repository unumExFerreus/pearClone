"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  useGSAP(() => {
    gsap.to("#heroText", { opacity: 1, delay: 0.5, duration: 1 });
    gsap.to("#btn", {
      opacity: 1,
      y: 0,
      delay: 0.5,
      duration: 1,
      ease: "power2.out",
    });
    gsap.to("#textBtn", {
      opacity: 1,
      y: 0,
      delay: 0.75,
      duration: 1,
      ease: "power2.out",
    });
  }, []);

  return (
    <div className="w-full h-[calc(100dvh-48px)] md:h-[calc(100dvh-44px)] relative">
      <div className="absolute flex justify-center items-center w-full py-3 md:py-5 bg-[#1d1d1d]">
        <h2 className="max-w-[250px] md:max-w-[400px] text-[#f5f5f5] text-center text-2xl text-[17px] leading-[1.25] font-normal tracking-[0.03em]">
          Get $170–$630 in credit toward iPhone 15 Pro when you trade in iPhone
          11 or higher
        </h2>
      </div>
      
      <div className="flex flex-col justify-center items-center w-full h-full relative">
        <h1
          id="heroText"
          className="text-center text-[1.375rem] md:text-[1.75rem] leading-[1.14] font-semibold tracking-[-0.007em] text-[#BEB8AE] opacity-0 mb-4 md:mb-[-1.85rem] z-10"
        >
          iPhone 15 Pro
        </h1>

        <div className="flex justify-center">
          {/* <video
            className="w-[97%] md:w-[65%] mb-10 md:mb-0"
            src={
              window.innerWidth > 760
                ? "/videos/hero.mp4"
                : "/videos/smallHero.mp4"
            }
            autoPlay
            muted
            playsInline={true}
          ></video> */}
          <video
            className="block md:hidden w-[97%] max-h-[50dvh] sm:max-h-full mb-10"
            src="/videos/smallHero.mp4"
            autoPlay
            muted
            playsInline={true}
          ></video>
          <video
            className="hidden md:block w-[65%] mb-0"
            src="/videos/hero.mp4"
            autoPlay
            muted
            playsInline={true}
          ></video>
        </div>

        <div className="absolute bottom-0 flex flex-col justify-end items-center mb-6 md:mb-20">
          <a
            id="btn"
            className="w-fit bg-[#0071e3] text-white py-[0.7rem] px-6 mb-6 md:mb-8 rounded-full text-[1.063rem] leading-[1.2] font-normal tracking-[-0.022em] translate-y-[50px] opacity-0"
            href="#"
          >
            Buy
          </a>
          <span
            id="textBtn"
            className="text-[#f5f5f5] text-xl md:text-[1.375rem] leading-[1.4] font-semibold tracking-[-0.011em] mb-5 translate-y-[50px] opacity-0"
          >
            From $999 or $41.62/mo. for 24 mo
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
