import React from "react";
import { BadgeCheck, CarFront, ClipboardClock, Wrench } from "lucide-react";

const steps = [
  {
    icon: <ClipboardClock />,
    title: "Book Appointment",
    desc: "Schedule online or call us anytime",
  },
  {
    icon: <CarFront />,
    title: "Bring Your Car",
    desc: "Drop it off or use our pick-up service",
  },
  {
    icon: <Wrench />,
    title: "We Service It",
    desc: "Expert care with real-time updates",
  },
  {
    icon: <BadgeCheck />,
    title: "Drive Away Safely",
    desc: "Ready to hit the road with peace of mind",
  },
];

function HowItWorks() {
  return (
    <main className="relative w-full flex justify-center py-16 bg-[#0F172A]">
      <div className="max-w-6xl w-full flex flex-col items-center gap-12 px-4">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold">
          How it Works
        </h1>

        {/* Timeline */}
        <div className="relative w-full">

          {/* line */}
          <div className="hidden md:block absolute top-6 left-0 w-full border-t border-gray-300"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center relative">

            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center gap-3">

                <div className="p-4 rounded-full bg-red-500 text-white z-10">
                  {step.icon}
                </div>

                <p className="text-lg font-semibold">
                  {step.title}
                </p>

                <p className="text-sm text-gray-500 max-w-[200px]">
                  {step.desc}
                </p>

              </div>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}

export default HowItWorks;