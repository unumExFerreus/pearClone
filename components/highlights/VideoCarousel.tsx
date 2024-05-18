import { hightlightsSlides } from "@/db";
import { useEffect, useRef, useState } from "react";
import { pauseImg, playImg, replayImg } from "../../public/index";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const VideoCarousel: React.FC = () => {
  const videoRef = useRef<any>([]);
  const videoSpanRef = useRef<HTMLSpanElement[]>([]);
  const videoDivRef = useRef<HTMLSpanElement[]>([]);

  const [video, setVideo] = useState<{
    isEnd: boolean;
    startPlay: boolean;
    videoId: number;
    isLastVideo: boolean;
    isPlaying: boolean;
  }>({
    isEnd: false,
    startPlay: false,
    videoId: 0,
    isLastVideo: false,
    isPlaying: false,
  });

  const [loadedData, setLoadedData] = useState<HTMLVideoElement[]>([]);

  const { isEnd, startPlay, videoId, isLastVideo, isPlaying } = video;

  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });

    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((pre) => ({
          ...pre,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
  }, [isEnd, videoId]);

  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;

    if (span[videoId]) {
      let anim = gsap.to(span[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);

          if (progress != currentProgress) {
            currentProgress = progress;

            gsap.to(videoDivRef.current[videoId], {
              width: "60px",
              minWidth: "60px"
            })

            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "#fff",
            });
          }
        },

        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "8px",
              backgroundColor: "#fff",
              duration: 0.5
            });
            gsap.to(span[videoId], {
              backgroundColor: "#CECED1",
            });
          }
        },
      });

      if (videoId === 0) {
        anim.restart();
      }

      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightsSlides[videoId].videoDuration
        );
      };

      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);

  useEffect(() => {
    if (!isPlaying) {
      videoRef.current[videoId].pause();
    } else {
      startPlay && videoRef.current[videoId].play();
    }
  }, [startPlay, videoId, isPlaying, loadedData]);

  const handleProcess = (type: any, i: any) => {
    switch (type) {
      case "video-end":
        setVideo((pre) => ({ ...pre, isEnd: true, videoId: i + 1 }));
        break;

      case "video-last":
        setVideo((pre) => ({ ...pre, isLastVideo: true }));
        break;

      case "video-reset":
        setVideo((pre) => ({ ...pre, isLastVideo: false, videoId: 0 }));
        break;

      case "play":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      case "pause":
        setVideo((pre) => ({ ...pre, isPlaying: !pre.isPlaying }));
        break;

      default:
        return video;
    }
  };

  const handleLoadedMetaData = (i: any, e: any) =>
    setLoadedData((pre) => [...pre, e]);
  return (
    <>
      <div className="w-full max-w-[100dw] h-[560px] md:h-[680px] overflow-x-scroll no-scrollbar relative  pointer-events-none select-none">
        <div className="flex items-center xl:mx-[calc(17%-45px)] 2xl:mx-[calc(25%-45px)] 3xl:mx-[calc(34%-45px)]">
          {hightlightsSlides.map((list: any, i: number) => (
            <div
              id="slider"
              key={list.id}
              className="inset-0 relative md:px-[45px]"
            >
              <div className="w-[100vw] md:w-[calc(100vw-105px)] xl:w-[1260px] h-full md:rounded-3xl bg-black overflow-hidden relative">
                <video
                  id="video"
                  playsInline={true}
                  muted
                  preload="auto"
                  ref={(el: any) => (videoRef.current[i] = el)}
                  onEnded={() =>
                    i !== 3
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last", i)
                  }
                  onPlay={() =>
                    setVideo((pre) => ({ ...pre, isPlaying: true }))
                  }
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                  className={`h-[560px] md:h-[680px] object-cover md:rounded-3xl z-10 ${
                    list.id === 2 && "translate-x-14 md:translate-x-44 !object-contain"
                  }`}
                >
                  <source src={list.video} type="video/mp4" />
                </video>
              </div>

              <div>
                <div className="absolute top-12 left-[5%] z-10">
                  {list.textLists.map((text: string) => (
                    <p
                      key={text}
                      className="text-xl md:text-3xl font-semibold text-[#f5f5f5]"
                    >
                      {text}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="sticky z-10 bottom-10 pt-10 pb-28 md:py-20">
        <div className="relative flex justify-center select-none">
          <div className="flex justify-center items-center py-5 bg-[#333335] backdrop-blur rounded-full min-w-[150px] min-h-[56px]">
            {videoRef.current.map((_: any, i: number) => (
              <span
                key={i}
                ref={(e: any) => (videoDivRef.current[i] = e)}
                className="mx-2 w-2 !min-w-2 h-2 bg-[#CECECE] rounded-full relative"
              >
                <span
                  className="absolute h-full w-full rounded-full"
                  ref={(e: any) => (videoSpanRef.current[i] = e)}
                ></span>
              </span>
            ))}
          </div>

          <button className="bg-[#333] rounded-full px-4 mx-3">
            <Image
              onClick={
                isLastVideo
                  ? () => handleProcess("video-reset", 0)
                  : !isPlaying
                  ? () => handleProcess("play", 0)
                  : () => handleProcess("pause", 0)
              }
              src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
              alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoCarousel;
