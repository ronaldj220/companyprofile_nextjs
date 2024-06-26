"use client";
import { useRef } from "react";
import CenterAligner from "./CenterAligner";

// Import React Slider
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { testimonials } from "@/utils/testimonial";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

interface ITestimonialProps {}

const Testimonial: React.FunctionComponent<ITestimonialProps> = (props) => {
  const sliderRef = useRef<any>();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <CenterAligner className="bg-[#ffffff] px-5 py-8">
      <h1
        className="text-center text-2xl font-bold sm:text-3xl pb-8"
        id="testimonial"
      >
        Testimonial
      </h1>
      {/* Container for the slider */}
      <section className="max-w-[1100px] mx-auto w-full rounded-xl relative overflow-hidden">
        {/* Main section */}
        <Slider {...settings} ref={sliderRef}>
          {testimonials.map((val, idx) => {
            return (
              <div className="" key={idx}>
                <section className="mx-auto bg-white sm:p-12 grid grid-cols-1 sm:grid-cols-[1fr_3fr] md:grid-cols-[1fr_4fr] items-center gap-5 md:gap-8 rounded-xl overflow-hidden">
                  {/* Left Section */}
                  <div className="space-y-5 text-center">
                    {/* Image */}
                    <div className="border-8 inline-block rounded-full border-purple-200 p-2.5">
                      <div className="mx-auto w-[100px] h-[100px] rounded-full bg-gray-200 overflow-hidden">
                        <Image
                          src={val.img}
                          alt="alt"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                    {/* Other */}
                    <div>
                      <h2 className="text-xl font-medium">{val.name}</h2>
                      <p className="text-gray-600">{val.profession}</p>
                    </div>
                  </div>
                  {/* Right Section */}
                  <div className="text-[16px] sm:text-[18px] space-y-3">
                    {/* Testimonial */}
                    <div className="text-orange-500 text-[40px]">
                      <FaQuoteLeft />
                    </div>
                    <p className="leading-[30px] font-bold">
                      {val.testimonial}
                    </p>
                    <div className="text-orange-500 text-[40px]">
                      <FaQuoteRight className="ml-auto" />
                    </div>
                  </div>
                </section>
              </div>
            );
          })}
        </Slider>

        {/* Custom Buttons */}
        <button
          className="absolute top-[50%] left-[10px] z-10 text-2xl text-gray-600"
          onClick={() => sliderRef?.current?.slickPrev()}
        >
          <MdOutlineArrowBackIos />
        </button>
        <button
          className="absolute top-[50%] right-[10px] z-10 text-2xl text-gray-600"
          onClick={() => sliderRef?.current?.slickNext()}
        >
          <MdOutlineArrowForwardIos />
        </button>
      </section>
    </CenterAligner>
  );
};

export default Testimonial;
