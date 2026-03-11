import { Star } from "lucide-react";
import Image from "next/image";
import testimonialprofileImage1 from "../../public/testimonialprofile1.png";
const TestimonialsCard = ({ ...props }) => {
  return (
    <div className="flex flex-col gap-4 bg-[#1E293B] p-5 rounded-lg border border-[#334155]">
      <div className="flex">
        <Star className="text-red-500" />
        <Star className="text-red-500" />
        <Star className="text-red-500" />
        <Star className="text-red-500" />
        <Star className="text-red-500" />
      </div>
      <p className="text-gray-300 text-sm">{props.review}</p>
      <div className="flex gap-3">
        <Image
          src={testimonialprofileImage1}
          alt={props.profileName}
          w-10
          h-10
          className="rounded-full object-cover"
        />
        <div className="flex flex-col ">
          <span className="font-medium">{props.profileName}</span>
          <span className="text-sm text-gray-400">{props.owner}</span>
        </div>
      </div>
    </div>
  );
};

function Testimonials() {
  return (
    <main className="w-full py-12 flex justify-center">
      {/* wrapper */}
      <div className="max-w-6xl w-full flex flex-col items-center gap-16">
        <div>
          <h1 className="text-3xl">What Our Client Say</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 ">
          <TestimonialsCard
            review='"Best service in the city. They
diagnosed a recurring engine issue
that two other shops missed. Fast,
professional, and fair pricing."'
            profileName="James Wilson"
            owner="BMW M3 OWNER"
          />
          <TestimonialsCard
            review="The detailing service made my 5-
year-old SUV look brand new. Very
impressed with the attention to detail.
Highly recommend!"
            profileName="Sarah Jenkins"
            owner="Toyota RAV4 OWNER"
          />
          <TestimonialsCard
            review="The detailing service made my 5-
year-old SUV look brand new. Very
impressed with the attention to detail.
Highly recommend!"
            profileName="Sarah Jenkins"
            owner="Toyota RAV4 OWNER"
          />
          <TestimonialsCard
            review="Transparent pricing is what I like
most. They show you exactly what's
wrong before doing any work. Very
trustworth workshop."
            profileName="Robert Chen"
            owner="Audi A6 Owner"
          />
        </div>
      </div>
    </main>
  );
}

export default Testimonials;
