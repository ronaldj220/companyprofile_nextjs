import Navbar from "@/components/Navbar";
import Hero from "../components/Hero";
import About from "@/components/About";
import Testimonial from "@/components/Testimonial";
import Team from "@/components/Teams";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <Testimonial />
      <About />
      <Team />
    </main>
  );
}
