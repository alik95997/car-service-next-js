import React from "react";
import {
  Earth,
  Mail,
  MapPin,
  MessagesSquare,
  Phone,
  Share2,
  Toolbox,
} from "lucide-react";

function Footer() {
  return (
    <footer className="w-full flex justify-center py-12 bg-[#0f172a]">
      <section className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-4">

        {/* Logo Section */}
        <div className="flex flex-col gap-3">
          <span className="flex items-center gap-2 font-bold text-lg">
            <span className="text-red-500">
              <Toolbox />
            </span>
            AUTOPRO
          </span>

          <p className="text-sm text-gray-400">
            Expert automotive care you can trust. Since 2014, providing
            high-quality repairs with transparency and precision.
          </p>

          <span className="flex gap-3 text-gray-400">
            <Share2 />
            <Earth />
            <MessagesSquare />
          </span>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <span className="font-bold text-lg">Quick Links</span>
          <ul className="flex flex-col gap-1 text-gray-400">
            <li>Home</li>
            <li>Service</li>
            <li>Pricing</li>
            <li>About Us</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <span className="font-bold text-lg">Contact Info</span>

          <span className="flex gap-2 text-gray-400">
            <MapPin className="text-red-500" />
            123 Mechanic Way, Auto District, New York
          </span>

          <span className="flex gap-2 text-gray-400">
            <Phone className="text-red-500" />
            +1 (555) 123-4567
          </span>

          <span className="flex gap-2 text-gray-400">
            <Mail className="text-red-500" />
            info@autopro.com
          </span>
        </div>

        {/* Map */}
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57866.96071718764!2d67.13022095890418!3d24.976828200812363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33fe8e125a69b%3A0xce55a155ac24a172!2sSohrab%20Goth%20Bus%20Stop!5e0!3m2!1sen!2s!4v1773227988955!5m2!1sen!2s"
            className="w-full h-[200px] rounded-md"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </section>
    </footer>
  );
}

export default Footer;