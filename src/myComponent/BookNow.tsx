import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function BookNow() {
  return (
    <section
      id="book-now"
      className="w-full flex  py-12 justify-center bg-[#0F172A]"
    >
      {/* wrapper */}
      <div className="max-w-6xl w-full flex flex-col md:flex-row rounded-lg  overflow-hidden">
        {/* left */}
        <section className="bg-[#E6374C]  py-[25] px-[12] justify-center flex flex-col gap-4">
          <h1 className="text-3xl font-bold">Ready to Book</h1>
          <p className="text-gray-300">
            Fill out the form and our team will confirm your appointment within
            30 minutes during business hours.
          </p>
          <span className="flex gap-2 font-bold">
            <Phone /> +92 335034189
          </span>
          <span className="flex gap-2 font-bold">
            <Mail /> autopro@gmail.com
          </span>
          <span className="flex gap-2 font-bold" font-bold>
            <MapPin /> 123 Mechanic Way, Auto City
          </span>
        </section>
        {/* Right  */}
        <section className=" bg-[#334155]">
          <form className=" p-[48px] grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Row 1 */}
            <div className="flex flex-col gap-2">
              <label>Email</label>
              <input
                type="text"
                placeholder="First Name"
                className="border p-2 rounded"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label>Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                className="border p-2 rounded"
              />
            </div>

            {/* Row 2 */}
            <div className="flex  flex-col gap-2  md:col-span-2">
              <label>Email</label>
              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded "
              />
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:col-span-2 gap-2">
              <label>Service Type</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Oil Change">Oil Change</SelectItem>
                    <SelectItem value="Car Wash">Car Wash</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col md:col-span-2 gap-2">
              <label htmlFor="">PREFERRED DATE</label>
              <input type="date" className="border p-2 rounded " />
            </div>
            <div className="flex flex-col md:col-span-2 gap-2">
              <Button className="py-5" variant="red">
                Confirm Booking
              </Button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
}

export default BookNow;
