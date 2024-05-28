"use client";

import Image from "next/image";
import VideoCarousel from "./VideoCarousel";
import { watch } from "../../public/index";

import { useGSAP } from "@gsap/react";

import { animationTitle } from "@/utils/animations";
import Link from "next/link";

const Highlights = () => {
  useGSAP(() => {
    animationTitle("#title", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
    });

    animationTitle(".link", {
      y: 0,
      opacity: 1,
      duration: 0.8,
      delay: 0.5,
      ease: "power2.out",
      stagger: 0.25,
    });
  }, []);

  return (
    <div className="w-full h-auto bg-[#101010]">
      <div className="w-full max-w-full container flex flex-col md:flex-row md:justify-between pt-[100px] xl:pt-[200px] pb-[38px] md:pb-[40px]">
        <h2
          id="title"
          className="text-3xl md:mx-0 pb-4 md:pb-0 md:text-6xl font-[1000] text-[#868686] opacity-0 translate-y-[30px]"
        >
          Get the highlights.
        </h2>

        <div className="flex flex-col md:flex-row md:items-end">
          <span className="flex pr-7 link opacity-0 translate-y-[30px] md:mx-0">
            <span className="mr-2 text-lg md:text-xl text-[#2997ff] cursor-pointer">
              <Link href={"/"}>Watch the film</Link>
            </span>
            <Image
              src={watch}
              alt="watch icon"
              className="h-fit mt-auto mb-[0.4rem] md:mb-[.375rem] size-4 md:size-5"
            />
          </span>
          <span className="flex link opacity-0 translate-y-[30px] md:mx-0">
            <span className="pr-2 text-lg md:text-xl text-[#2997ff] cursor-pointer">
              <Link href={"/"}> Watch the event</Link>
            </span>
            <svg
              viewBox="0 0 7 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="fill-[#2997ff] h-fit mt-auto mb-[0.5rem] md:mb-[.375rem] size-[0.375rem] md:size-3"
            >
              <path d="M0.768979 11C0.557083 11 0.375946 10.9265 0.225567 10.7796C0.0751891 10.6326 0 10.4532 0 10.2413C0 10.0294 0.0786068 9.84482 0.23582 9.68761L4.37806 5.55563L0.23582 1.42364C0.0786068 1.26643 0 1.08187 0 0.869977C0 0.65808 0.0751891 0.478652 0.225567 0.331692C0.375946 0.184731 0.557083 0.111251 0.768979 0.111251C0.967205 0.111251 1.14492 0.183022 1.30214 0.326565L5.97753 4.98145C6.14158 5.13183 6.22361 5.32322 6.22361 5.55563C6.22361 5.77436 6.14158 5.96575 5.97753 6.1298L1.30214 10.7847C1.1586 10.9282 0.980876 11 0.768979 11Z" />
            </svg>
          </span>
        </div>
      </div>

      <div>
        <VideoCarousel />
      </div>
    </div>
  );
};

export default Highlights;
