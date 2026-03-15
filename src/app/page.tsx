import BookNow from "@/myComponent/BookNow";
import Footer from "@/myComponent/Footer";
import Hero from "@/myComponent/Hero";
import HowItWorks from "@/myComponent/HowItWorks";
import Navbar from "@/myComponent/Navbar";
import Pricing from "@/myComponent/Pricing";
import Services from "@/myComponent/Services";
import Testimonials from "@/myComponent/Testimonials";
import WhyChooseUs from "@/myComponent/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <BookNow />
      <Footer />
    </>
  );
}
