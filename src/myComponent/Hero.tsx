import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Calendar, CircleCheck, History } from "lucide-react";
import heroImage from "../../public/Image+Background+Border+Shadow.png";

function Hero() {
  return (
    <div className="w-full flex justify-center px-4 bg-[#0F172A] mt-16">
      <main className="max-w-6xl w-full flex flex-col lg:flex-row items-center gap-10 py-10">
        {/* LEFT CONTENT */}
        <div className="flex flex-col gap-6 text-center lg:text-left">
          <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
            <Button variant="red" className="flex gap-2 items-center">
              Certified Mechanics <CircleCheck size={16} />
            </Button>

            <Button variant="secondary" className="flex gap-2 items-center">
              10+ YEARS EXPERIENCE <History size={16} />
            </Button>
          </div>

          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Reliable Car Service
            </h1>

            <h1 className="text-red-500 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
              & Auto Repair
            </h1>

            <p className="mt-6 text-gray-400 max-w-xl mx-auto lg:mx-0">
              Professional maintenance and repair services for all car brands.
              Experience dealer-level precision at local workshop prices.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a href="#book-now">
              <Button
                variant="red"
                className="flex items-center gap-2 py-4 px-8 cursor-pointer"
              >
                Book Appointment <Calendar size={18} />
              </Button>
            </a>

            <Button variant="secondary">Get Free Quote</Button>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full max-w-md lg:max-w-lg">
          <Image
            src={heroImage}
            alt="Car service hero image"
            className="w-full h-auto"
            priority
          />
        </div>
      </main>
    </div>
  );
}

export default Hero;
