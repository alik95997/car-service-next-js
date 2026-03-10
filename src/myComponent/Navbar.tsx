"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full flex justify-center ">
      <header className="max-w-6xl w-full px-4 py-4">

        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="text-xl font-bold">AUTOPRO</div>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>Home</li>
              <li>Service</li>
              <li>Pricing</li>
              <li>About</li>
              <li>Reviews</li>
            </ul>
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">

            <div className="hidden md:block">
              <Button variant="destructive">Book Service</Button>
            </div>

            {/* Hamburger */}
            <button
              className="md:hidden"
              onClick={() => setOpen(!open)}
            >
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