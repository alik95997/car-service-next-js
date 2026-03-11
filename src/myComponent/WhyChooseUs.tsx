import { ShieldCheck, Banknote, Timer, ClipboardCheck } from "lucide-react";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import whychooseUsImage from "../../public/Image.png";

const WhyChooseUsCard = ({ ...props }) => {
  return (
    <Card className="bg-[#1E293B] max-w-xs h-40">
      <CardHeader>
        <CardTitle className="text-red-500">{props.icon}</CardTitle>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.desc}</CardDescription>
      </CardHeader>
    </Card>
  );
};

function WhyChooseUs() {
  return (
    <div className="w-full flex justify-center py-12 px-4 bg-[#0F172A]">
      <div className="max-w-6xl w-full flex flex-col lg:flex-row gap-10">

        {/* LEFT */}
        <div className="w-full flex flex-col gap-6">

          <div>
            <p className="text-red-500 font-semibold">
              THE AUTO PRO ADVANTAGE
            </p>

            <h1 className="text-3xl md:text-4xl font-bold">
              Why Choose Us For Your Car?
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <WhyChooseUsCard
              icon={<ShieldCheck />}
              title="Certified Technicians"
              desc="ASE-certified experts with deep technical knowledge across all brands."
            />

            <WhyChooseUsCard
              icon={<Banknote />}
              title="Affordable Pricing"
              desc="Transparent quotes and competitive rates without any hidden costs."
            />

            <WhyChooseUsCard
              icon={<Timer />}
              title="Fast Turnaround"
              desc="Quick repairs and maintenance without sacrificing quality."
            />

            <WhyChooseUsCard
              icon={<ClipboardCheck />}
              title="Genuine Spare Parts"
              desc="We only use original manufacturer parts for safety and longevity."
            />

          </div>
        </div>

        {/* RIGHT */}
        <div className="w-full flex justify-center">
          <Image
            src={whychooseUsImage}
            alt="Car service illustration"
            className="w-full max-w-md"
          />
        </div>

      </div>
    </div>
  );
}

export default WhyChooseUs;