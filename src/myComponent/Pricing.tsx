"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleCheck, CircleX } from "lucide-react";

const plans = [
  {
    title: "Basic Maintenance",
    price: 99,
    popular: false,
    features: [
      { name: "Oil & Filter Change", available: true },
      { name: "25-Point Inspection", available: true },
      { name: "Fluid Level Top-up", available: true },
      { name: "Brake Calibration", available: false },
    ],
  },
  {
    title: "Standard Service",
    price: 199,
    popular: true,
    features: [
      { name: "Everything in Basic", available: true },
      { name: "Computer Diagnostics", available: true },
      { name: "Brake Inspection", available: true },
      { name: "Tire Rotation", available: true },
    ],
  },
  {
    title: "Premium Full Service",
    price: 349,
    popular: false,
    features: [
      { name: "Everything in Standard", available: true },
      { name: "Full Interior Detail", available: true },
      { name: "Spark Plug Replacement", available: true },
      { name: "Road Safety Testing", available: true },
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="w-full flex justify-center py-20 bg-[#0F172A] ">
      <div className="max-w-6xl w-full flex flex-col items-center gap-12">
        {/* Heading */}
        <div className="text-center">
          <p className="text-red-500 text-sm tracking-widest">CLEAR & SIMPLE</p>
          <h2 className="text-4xl font-bold text-white">Service Packages</h2>
        </div>

        {/* Cards */}
        <div className="flex gap-8 flex-wrap justify-center">
          {plans.map((plan, index) => (
            <Card key={index}
              className={`relative overflow-visible w-[300px] bg-slate-800 text-white p-6 border
  ${plan.popular ? "border-red-500 scale-105 shadow-xl" : "border-slate-700"}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-xs px-3 py-1 rounded-full font-medium ">
                  POPULAR CHOICE
                </span>
              )}

              <CardHeader className="p-0 mb-4">
                <CardTitle className="text-lg">{plan.title}</CardTitle>
              </CardHeader>

              <CardContent className="p-0 space-y-4">
                {/* Price */}
                <p className="text-4xl font-bold">
                  ${plan.price}
                  <span className="text-sm font-normal text-gray-400">
                    {" "}
                    /service
                  </span>
                </p>

                {/* Features */}
                <div className="space-y-2 pt-2">
                  {plan.features.map((feature, i) => (
                    <div
                      key={i}
                      className={`flex items-center gap-2 text-sm ${
                        !feature.available && "text-gray-500 line-through"
                      }`}
                    >
                      {feature.available ? (
                        <CircleCheck className="w-4 h-4 text-red-500" />
                      ) : (
                        <CircleX className="w-4 h-4 text-gray-500" />
                      )}

                      {feature.name}
                    </div>
                  ))}
                </div>

                {/* Button */}
                <Button
                  className={`w-full mt-6 ${
                    plan.popular
                      ? "bg-red-500 hover:bg-red-600 text-white"
                      : "bg-transparent border border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
                  }`}
                >
                  Select Plan
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
