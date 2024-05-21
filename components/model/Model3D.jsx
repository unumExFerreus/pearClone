"use client";

import { useEffect, useRef, useState } from "react";
import ModelView from "./ModelView";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { models, sizes } from "@/utils";
import { yellowImg } from "@/public";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { animationWithGsapTimeline } from "@/utils/animations";

const Model3D = () => {
  const [size, setSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // camera control for the model view
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // model
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // rotation
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  const tl = gsap.timeline();
  useEffect(() => {
    if (size === "large") {
      animationWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 2
      });
    }

    if (size === "small") {
      animationWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {
        transform: "translateX(0%)",
        duration: 2
      });
    }
  });

  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to("#heading", {
      translateY: "0px",
      opacity: 1,
      duration: 0.8,
      ease: "power2.out",
      delay: 0.5,
      scrollTrigger: {
        trigger: "#heading",
        start: "top 80%",
        end: "bottom 100%",
      },
    });
  });

  return (
    <div className="w-full h-auto bg-black">
      <h1
        id="heading"
        className="w-[100dw] px-[16px] md:px-[45px] xl:px-[17%] 2xl:px-[25%] 3xl:px[33%] py-[100px] md:pt-[200px] text-3xl pb-4 md:pb-0 md:text-6xl font-[1000] text-[#868686] opacity-0 translate-y-[30px]"
      >
        Take a closer look.
      </h1>

      <div className="flex flex-col items-center mt-5">
        <div className="w-full h-[75vh] md:h-[90dvh] overflow-hidden relative">
          <ModelView
            index={1}
            groupRef={small}
            gsapType="view1"
            controlRef={cameraControlSmall}
            setRotationState={setSmallRotation}
            item={model}
            size={size}
          />

          <ModelView
            index={2}
            groupRef={large}
            gsapType="view2"
            controlRef={cameraControlLarge}
            setRotationState={setLargeRotation}
            item={model}
            size={size}
          />

          <Canvas
            className="md:w-full md:h-full"
            style={{
              position: "fixed",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              overflow: "hidden",
            }}
            eventSource={document.getElementById("touchTrigger")}
          >
            <View.Port />
          </Canvas>
        </div>

        <div className="mx-auto w-full sticky z-10 bottom-0 pt-10 pb-28 md:py-10">
          <p className="text-[#f5f5f5] text-sm font-light text-center mb-5 select-none">
            {model.title}
          </p>

          <div className="flex justify-center select-none">
            <ul className="flex items-center justify-center px-4 py-4 rounded-full bg-[#2E2E30] backdrop-blur">
              {models.map((item, i) => (
                <li
                  key={i}
                  className="w-6 h-6 rounded-full mx-2 cursor-pointer"
                  style={{
                    backgroundColor: item.color[0],
                  }}
                  onClick={() => setModel(item)}
                />
              ))}
            </ul>

            <button className="flex items-center justify-center p-1 rounded-full bg-[#2E2E30] backdrop-blur ml-3 gap-1">
              {sizes.map(({ label, value }) => (
                <span
                  key={label}
                  className="w-10 h-10 text-base flex justify-center items-center bg-[#F5F5F5] text-black rounded-full transition-all"
                  style={{
                    backgroundColor: size === value ? "white" : "transparent",
                    color: size === value ? "black" : "#F5F5F7",
                  }}
                  onClick={() => setSize(value)}
                >
                  {label}
                </span>
              ))}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model3D;
