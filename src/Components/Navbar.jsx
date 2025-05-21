import { Link } from "react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/software-logo.svg";
import phone from "../assets/phone.png";
import { Menu, X, ChevronDown } from "lucide-react"; // Modern icons
import MenuLinks from "./ManuLinks";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <nav>
      {/* Header */}
      <header className="w-full bg-[#1A1A1A] text-white py-4 px-6 flex justify-between items-center border-b border-white relative z-50">
        {/* Logo */}
        <img className="w-[175px]" src={logo} alt="Logo" />
        <MenuLinks />

        {/* Contact & Button (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2 text-right">
            <img className="w-8" src={phone} alt="Phone" />
            <div>
              <p className="text-gray-300">To More Inquiry</p>
              <p className="font-semibold text-white">+990-737 621 432</p>
            </div>
          </div>
          <button className="relative overflow-hidden px-5 py-2 rounded-full font-semibold shadow-md text-black bg-white transition-colors duration-300 z-10 group">
            <span className="relative z-20">Get in Touch</span>
            <span className="absolute inset-0 bg-yellow-400 scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300 ease-out z-10 rounded-full"></span>
          </button>
        </div>

        {/* Fancy Mobile Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
          {isOpen ? (
            <X className="w-8 h-8 text-yellow-400 transition-transform duration-300 hover:rotate-90" />
          ) : (
            <Menu className="w-8 h-8 text-yellow-400 transition-transform duration-300 hover:scale-110" />
          )}
        </button>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.9, ease: "easeInOut" }}
            className="inset-0 bg-white text-black px-6 py-8 md:hidden shadow-xl z-40"
          >
            {/* Logo and Close */}

            {/* Collapsible Menu Sections */}
            <div className="space-y-2 font-bold text-lg border-1 border-[#eee]  p-2 pb-0">
              {["Home", "Services", "Pages", "Portfolio", "Contact Us"].map(
                (section, idx) => (
                  <div key={idx} className="border-b-1 border-[#eee]">
                    <button
                      onClick={() => toggleSection(idx)}
                      className="w-full flex justify-between items-center py-2"
                    >
                      <span>{section}</span>
                      <motion.span
                        animate={{ rotate: openSection === idx ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-5 h-5" />
                      </motion.span>
                    </button>

                    <AnimatePresence>
                      {openSection === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="pl-4 pb-2 text-sm text-gray-600"
                        >
                          <p className="border-b-1 border-[#eee] pb-2">
                            Subcontent 1
                          </p>
                          <p className="border-b-1 border-[#eee] pb-2">
                            Subcontent 2
                          </p>
                          <p className="border-b-1 border-[#eee] pb-2">
                            Subcontent 3
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              )}
            </div>

            {/* Contact Info */}
            <div className="mt-6 space-y-6 text-sm text-black font-medium">
              {/* Header */}
              <h2 className="text-lg font-bold flex items-center gap-2">
                Get in Touch <span className="text-xl">↗</span>
              </h2>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <span className="text-xl">📞</span>
                <div>
                  <p className="text-gray-600">Phone</p>
                  <p className="text-black font-semibold">
                    +991 - 763 684 4563
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <span className="text-xl">✉️</span>
                <div>
                  <p className="text-gray-600">Email Now</p>
                  <p className="text-black font-semibold">
                    info@alhenaventures.com
                  </p>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="text-xl">📍</span>
                <div>
                  <p className="text-gray-600">dhaka Office</p>
                  <p className="text-black font-semibold">
                    saver, Office-02, Road-11,
                    <br />
                    House-3B/B, Section-H
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h2 className="text-lg font-bold flex items-center gap-2">
                  Social Link <span className="text-xl">↗</span>
                </h2>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Dribbble", "Behance", "LinkedIn", "Facebook"].map(
                    (platform) => (
                      <button
                        key={platform}
                        className="px-3 py-1 rounded-full border border-gray-300 hover:border-black transition-colors text-sm"
                      >
                        {platform}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
