import Hero from "@/myComponent/Hero";
import HowItWorks from "@/myComponent/HowItWorks";
import Navbar from "@/myComponent/Navbar";
import OurService from "@/myComponent/OurService";
import Specialization from "@/myComponent/Specialization";
import WhyChooseUs from "@/myComponent/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Specialization />
      <WhyChooseUs />
      <HowItWorks />
      <OurService />
    </>
  );
}
