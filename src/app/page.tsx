"use client";
import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Teams";
import Services from "@/components/Services";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import Articles from "@/components/Articles";

export default function Home() {
  const [showScroll, setShowScroll] = useState<boolean>(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, [showScroll]);
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Testimonial />
      <About />
      <Services />
      <Team />
      <Articles />
      <div className="fixed bottom-4 right-4 p-4">
        <button
          onClick={scrollTop}
          style={{ display: showScroll ? "flex" : "none" }}
        >
          <FaArrowUp />
        </button>
      </div>
    </main>
  );
}
