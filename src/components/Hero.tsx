"use client";
import * as React from "react";
import Container from "./Container";
import Image from "next/image";
import { ReactTyped } from "react-typed";
interface IHeroProps {}

const Hero: React.FunctionComponent<IHeroProps> = (props) => {
  return (
    <Container>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center overflow-hidden z-50 bg-[#f8f8f8]">
          <div className="relative mx-auto h-full px-4  pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div className="flex flex-col items-center justify-between lg:flex-row py-16">
              <div className="relative">
                <div className="lg:max-w-xl lg:pr-5 relative z-40">
                  <p className="max-w-lg text-[64px] font-semibold sm:text-[64px] md:text-justify text-center">
                    We Code
                  </p>
                  <p className="max-w-lg text-[64px] font-semibold sm:text-[64px] md:text-justify text-center">
                    We Deliver
                  </p>
                  <div className="flex justify-center">
                    <ReactTyped
                      className="max-w-lg text-[20px] font-semibold sm:text-[20px] md:text-center"
                      strings={["Web Developer", "UI/UX Design", "Mobile Apps"]}
                      backSpeed={140}
                      typeSpeed={120}
                      loop
                    />
                  </div>
                </div>
                <p className="text-sm text-gray-700 md:text-justify text-center mt-10">
                  Twiscode specializes in developing high-performing mobile and
                  web applications.
                </p>
              </div>
              <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 17l-4 4m0 0l-4-4m4 4V3"
                  ></path>
                </svg>
                <div className="abg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
                  <Image
                    src="/assets/img/Rectangle 2.png"
                    alt="alt"
                    width={400}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Hero;
