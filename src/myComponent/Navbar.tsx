"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, Toolbox } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div id="navbar" className="w-full flex justify-center bg-[#0F172A] fixed top-0 z-50">
      <header className="max-w-6xl w-full px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold flex gap-2 items-center"><Toolbox className="text-red-500" /> AUTOPRO</div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#services">Service</a>
              </li>
              <li>
                <a href="#pricing">Pricing</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#reviews">Reviews</a>
              </li>
            </ul>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            <div className="hidden md:block">
              <a href="#book-now" className="flex items-center gap-2">
                <Button variant="red" className="cursor-pointer px-5 py-2">
                  Book Service
                </Button>
              </a>
            </div>

            {/* Hamburger */}
            <button className="md:hidden" onClick={() => setOpen(!open)}>
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col gap-4">
              <li>Home</li>
              <li>Service</li>
              <li>Pricing</li>
              <li>About</li>
              <li>Reviews</li>
              <Button variant="destructive">Book Service</Button>
            </ul>
          </nav>
        )}
      </header>
    </div>
  );
}

export default Navbar;
