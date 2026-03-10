import { Card } from "@/components/ui/card";
import {
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Zap, ChevronRight } from "lucide-react";

const  SpecializationCard = ({ ...props })=> {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-red-500">{props.icon}</CardTitle>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="flex text-red-500 font-bold">
          {props.action} {props.actionIcon}
        </p>
      </CardContent>
    </Card>
  );
}


function Specialization() {
  return (
    <main className="w-full  flex justify-center py-12">
      {/* wrapper */}
      <div className="max-w-6xl w-full flex flex-col gap-6 items-center px-4">
        <div className="text-center max-w-2xl">
          <p className="text-red-500 text-2xl">Our Specialization</p>

          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-balance">
            Premium Auto Services
          </h1>

          <p>
            We provide a full range of automotive solutions using
            state-of-the-art diagnostic equipment and genuine manufacturer
            parts.
          </p>
        </div>

        {/* cards area */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 w-full">
          <SpecializationCard
            icon={<Zap />}
            title="Oil Change"
            desc="Complete synthetic or conventional oil and filter replacement to keep your engine running smoothly."
            action="Learn More"
            actionIcon={<ChevronRight />}
          />

          <SpecializationCard
            icon={<Zap />}
            title="Engine Diagnostics"
            desc="Advanced computer scanning to
pinpoint performance issues and
sensor failures with 100% accuracy."
            action="Learn More"
            actionIcon={<ChevronRight />}
          />

          <SpecializationCard
            icon={<Zap />}
            title="Brake Repair"
            desc="Full inspection and replacement of
pads, rotors, and fluid to ensure your
safety on every journey."
            action="Learn More"
            actionIcon={<ChevronRight />}
          />

          <SpecializationCard
            icon={<Zap />}
            title="Tire Replacement"
            desc="Precision tire fitting, computerized
balancing, and digital alignment for
optimal road grip and fuel efficiency."
            action="Learn More"
            actionIcon={<ChevronRight />}
          />

          <SpecializationCard
            icon={<Zap />}
            title="Battery Service"
            desc="Load testing, terminal cleaning, and
replacement with premium long-life
car batteries."
            action="Learn More"
            actionIcon={<ChevronRight />}
          />

          <SpecializationCard
            icon={<Zap />}
            title="Car Detailing"
            desc="Full interior deep cleaning and
exterior ceramic coating to restore
your car to showroom condition."
            action="Learn More"
            actionIcon={<ChevronRight />}
          />
        </div>
      </div>
    </main>
  );
}

export default Specialization;
