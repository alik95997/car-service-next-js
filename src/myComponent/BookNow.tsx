"use client";
import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import SelectServiceType from "@/components/ui/SelectServiceType";
import TextField from "@mui/material/TextField";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";

function BookNow() {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30"),
  );

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
          <form className=" p-12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Row 1 */}
            <div className="flex flex-col gap-2">
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <TextField
                id="outlined-email"
                label="Email"
                variant="outlined"
                type="email"
                placeholder="Email"
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
              />
            </div>

            {/* Row 2 */}
            <div className="flex  flex-col gap-2  ">
              <SelectServiceType />
            </div>

            {/* Row 3 */}
            <div className="flex flex-col gap-2 border border-white">
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateTimePicker
                  label="Select Date & Time"
                  value={value}
                  onChange={(newValue) => setValue(newValue)}
                  slotProps={{
                    textField: {
                      fullWidth: true, // Makes it take up 100% width
                      sx: {
                        // Input Text Color
                        "& .MuiInputBase-input": { color: "white" },
                        // Label Color
                        "& .MuiInputLabel-root": { color: "white" },
                        "& .MuiInputLabel-root.Mui-focused": { color: "white" },
                        // Border Logic
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": { borderColor: "white" },
                          "&:hover fieldset": { borderColor: "white" },
                          "&.Mui-focused fieldset": { borderColor: "white" },
                        },
                        // Icon Color
                        "& .MuiSvgIcon-root": { color: "white" },
                      },
                    },
                  }}
                />
              </LocalizationProvider>
            </div>

            {/* Row 4 */}
            <div className="flex flex-col gap-2">
              <TextField
                id="outlined-basic"
                label="Car Name"
                variant="outlined"
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
              />
            </div>
            <div className="flex flex-col gap-2">
              <TextField
                id="outlined-basic"
                label="Car Model"
                variant="outlined"
                sx={{
                  "& .MuiInputBase-input": { color: "white" },
                  "& .MuiInputLabel-root": { color: "white" },
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "white" },
                    "&:hover fieldset": { borderColor: "white" },
                    "&.Mui-focused fieldset": { borderColor: "white" },
                  },
                }}
              />
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
