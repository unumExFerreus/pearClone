"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Image from "next/image";
import { chip, frame } from "@/public";
import { ScrollTrigger } from "gsap/all";
import { animationTitle } from "@/utils/animations";
import { useRef } from "react";

const Chip = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.from("#chip", {
      opacity: 0,
      scale: 2,
      duration: 1.5,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: "#chip",
        start: "100% bottom",
        markers: true
      },
    });

    animationTitle("#chipFeatures", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
      stagger: 0.25,
      ease: "power2.out",
    });
  }, []);

  const mobileVideoRef = useRef<any>();
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        start: "bottom center",
        toggleActions: "play puase reverse restart",
      },
      onComplete: () => {
        mobileVideoRef.current.play();
      },
    });
  }, []);

  return (
    <div className="w-full md:md:max-w-[1050px] mx-auto">
      <div className="flex justify-center px-[45px] py-[100px] pb-[45px] md:pt-[200px] md:pb-[100px]">
        <Image
          id="chip"
          src={chip}
          alt="Chip"
          className="w-[100px] md:w-[180px] h-auto"
        />
      </div>

      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-7xl text-[#f5f5f5] font-bold px-[45px] pb-[40px]">
          A17 Pro chip. <br /> A monster win for gaming.
        </h2>

        <span className="text-xl md:text-4xl text-[#868686] px-[45px] pb-[45px] md:pb-[100px]">
          It’s here. The biggest redesign in the history of Apple GPUs.
        </span>
      </div>

      <div className="flex justify-center relative w-full h-full">
        <Image
          src={frame}
          alt="Frame"
          className="w-[90%] md:w-full mx-auto bg-transparent relative z-20"
        />

        <div className="absolute w-[90%] md:w-full mx-auto h-auto">
          <video
            src="/videos/frame.mp4"
            autoPlay
            muted
            preload="none"
            ref={mobileVideoRef}
            className="rounded-[35px] w-[96%] mx-auto mt-[2%]"
          />
        </div>
      </div>

      <p className="text-[#868686] font-bold text-center mt-3">
        Honkai: Star Rail
      </p>

      <div className="flex flex-col md:flex-row justify-around items-start text-2xl text-[21px] font-bold py-[30px] md:py-[60px]">
        <div className="flex flex-col w-full md:max-w-[33%]">
          <p
            id="chipFeatures"
            className="text-[#868686] w-full px-[45px] md:px-[0px] pb-5 opacity-0 translate-y-[30px]"
          >
            A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
            <span className="text-[#f5f5f5]">
              best graphics performance by far
            </span>
            .
          </p>
          <p
            id="chipFeatures"
            className="text-[#868686] w-full px-[45px] md:px-[0px] pb-5 opacity-0 translate-y-[30px]"
          >
            Mobile{" "}
            <span className="text-[#f5f5f5]">
              games will look and feel so immersive
            </span>
            , with incredibly detailed environments and more realistic
            characters. And with industry-leading speed and efficiency, A17 Pro
            takes fast and runs with it
          </p>
        </div>

        <div>
          <p
            id="chipFeatures"
            className="text-[#868686] w-full px-[45px] md:px-[0px] pb-5 opacity-0 translate-y-[30px]"
          >
            New <br />
            <span className="text-[#f5f5f5] text-3xl md:text-5xl my-2">
              Pro-class GPU <br />
            </span>
            with 6 cores
          </p>
        </div>
      </div>
    </div>
  );
};

export default Chip;
