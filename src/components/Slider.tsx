"use client";
import { images } from "@/utils/images";
import Image from "next/image";
import * as React from "react";
import Description from "./Description";
import { useState, useEffect } from "react";

interface ISliderProps {}

const Slider: React.FunctionComponent<ISliderProps> = (props) => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    activeImage === images.length - 1
      ? setActiveImage(0)
      : setActiveImage(activeImage + 1);
  };
  const clickPrev = () => {
    activeImage === 0
      ? setActiveImage(images.length - 1)
      : setActiveImage(activeImage - 1);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);
  return (
    <div className=" w-full h-[1000px]">
      <div className="grid place-items-center w-fit mx-auto max-w-5xl rounded-2xl">
        <div
          className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 rounded-2xl`}
        >
          {images.map((pic, idx) => (
            <div
              key={idx}
              className={`${
                idx === activeImage
                  ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                  : "hidden"
              }`}
            >
              <Image
                src={pic.src}
                alt="alt"
                width={400}
                height={400}
                className="w-full h-full object-cover rounded-tl-3xl rounded-bl-3xl flex-1"
              />
            </div>
          ))}
          <Description
            activeImgIndex={activeImage}
            clickPrev={clickPrev}
            cickNext={clickNext}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
