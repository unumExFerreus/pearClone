"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import Image from "next/image";

import { explore1, explore2 } from "@/public";
import { useRef } from "react";
import { animationTitle, animationVideo } from "@/utils/animations";

const Features = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    animationTitle("#features", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
    });

    animationVideo(
      "#explore",
      {
        scale: 1,
        opacity: 1,
        duration: 4,
        ease: "power1",
      },
      { scrub: 3 }
    );

    animationTitle("#featuresDetails", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.25,
      ease: "power2.out",
    });
  }, []);

  const exploreVideoRef = useRef<any>();
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        start: "59% center",
        toggleActions: "play puase reverse restart",
      },
      onComplete: () => {
        exploreVideoRef.current.play();
      },
    });
  }, []);

  return (
    <div className="w-full h-auto bg-[#101010] relative">
      <h2
        id="features"
        className="w-[100dw] container py-[100px] md:pt-[200px] text-3xl pb-4 md:pb-0 md:text-6xl font-[1000] text-[#868686] opacity-0 translate-y-[30px]"
      >
        Explore the full story.
      </h2>

      <div className="w-full md:max-w-[1050px] flex-col justify-start items-center mx-auto">
        <div className="flex-col text-4xl md:text-7xl text-[#f5f5f5] font-bold px-[45px] py-[100px] md:pt-[200px] md:pb-[100px]">
          <h2 className="flex">iPhone.</h2>
          <h2 className="flex">Forged in titanium.</h2>
        </div>

        <div>
          <div className="flex items-end w-full h-[480px] bg-black mb-7 md:mb-4">
            <video
              id="#exploreVideo"
              muted
              preload="none"
              autoPlay
              ref={exploreVideoRef}
              src="/videos/explore.mp4"
              className="w-full h-[75%] md:h-auto object-cover"
            />
          </div>

          <div className="grid grid-rows-1 md:grid-cols-1 gap-2">
            <div className="md:flex justify-between">
              <div className="bg-black w-full h-[460px] md:size-[515px] overflow-hidden mb-7 md:mb-0">
                <Image
                  id="explore"
                  src={explore1}
                  alt="the first iPhone to feature an aerospace‑grade titanium design"
                  className="w-full h-full bg-contain opacity-30 scale-150"
                />
              </div>

              <div className="bg-black w-full h-[460px] md:size-[515px] overflow-hidden mb-7 md:mb-0">
                <div className="flex w-full h-full items-center">
                  <Image
                    id="explore"
                    src={explore2}
                    alt="lightest Pro models ever"
                    className="w-full h-[90%] bg-contain opacity-30 scale-150"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex-col md:flex md:flex-row justify-around items-center text-2xl text-[21px] font-bold py-[30px] md:py-[60px]">
            <p
              id="featuresDetails"
              className="text-[#868686] w-full md:max-w-[33%] px-[45px] md:px-[0px] pb-5 opacity-0 translate-y-[30px]"
            >
              iPhone 15 Pro is{" "}
              <span className="text-[#f5f5f5]">
                the first iPhone to feature an aerospace‑grade titanium design
              </span>
              , using the same alloy that spacecraft use for missions to Mars.
            </p>
            <p
              id="featuresDetails"
              className="text-[#868686] w-full md:max-w-[33%] px-[45px] md:px-[0px] pb-5 opacity-0 translate-y-[30px]"
            >
              Titanium has one of the best strength‑to‑weight ratios of any
              metal, making these our{" "}
              <span className="text-[#f5f5f5]">lightest Pro models ever</span>.
              You’ll notice the difference the moment you pick one up.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
