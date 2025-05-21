// import { Link } from "react-router";
// import { useState } from "react";
// import { AnimatePresence, motion } from "framer-motion";
// import logo from "../assets/software-logo.svg";
// import phone from "../assets/phone.png";
// import { ChevronDown } from "lucide-react"; // Optional, for arrow icons
// import { GiTireIronCross } from "react-icons/gi";
// import { FaHamburger } from "react-icons/fa";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [openSection, setOpenSection] = useState(null);

//   const toggleSection = (section) => {
//     setOpenSection((prev) => (prev === section ? null : section));
//   };

//   return (
//     <nav>
//       {/* Header */}
//       <header className="bg-[#1A1A1A] text-white py-4 px-6 flex justify-between items-center border-b border-white relative z-50">
//         {/* Logo */}
//         <img className="w-[175px]" src={logo} alt="Logo" />

//         {/* Desktop Nav Links */}
//         <div className="hidden md:flex gap-8 items-center text-white font-semibold">
//           {["Home", "Services", "Pages", "Portfolio", "Contact Us"].map((item) => (
//             <Link
//               key={item}
//               className="hover:text-yellow-400 transition-all duration-500"
//               to="#"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>

//         {/* Contact & Button (Desktop) */}
//         <div className="hidden md:flex items-center gap-4">
//           <div className="flex items-center gap-2 text-right">
//             <img className="w-8" src={phone} alt="Phone" />
//             <div>
//               <p className="text-gray-300">To More Inquiry</p>
//               <p className="font-semibold text-white">+990-737 621 432</p>
//             </div>
//           </div>
//           <button className="relative overflow-hidden px-5 py-2 rounded-full font-semibold shadow-md text-black bg-white transition-colors duration-300 z-10 group">
//             <span className="relative z-20">Get in Touch</span>
//             <span className="absolute inset-0 bg-yellow-400 scale-x-0 origin-center group-hover:scale-x-100 transition-transform duration-300 ease-out z-10 rounded-full"></span>
//           </button>
//         </div>

//         {/* Fancy Mobile Toggle Button */}
//         <button onClick={() => setIsOpen(!isOpen)} className="md:hidden z-50">
//           <motion.div
//             initial={false}
//             animate={{ rotate: isOpen ? 135 : 0 }}
//             transition={{ type: "spring", stiffness: 260, damping: 20 }}
//             className="w-8 h-8 flex items-center justify-center text-white"
//           >
//             <motion.span className="block w-6 h-[2px] bg-white mb-1 rounded" />
//             <motion.span
//               className="block w-6 h-[2px] bg-white mb-1 rounded"
//               animate={{ scaleX: isOpen ? 0 : 1 }}
//               transition={{ duration: 0.3 }}
//             />
//             <motion.span className="block w-6 h-[2px] bg-white rounded" />
//           </motion.div>
//         </button>
//       </header>

//       {/* Mobile Sidebar */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "100vh", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.5, ease: "easeInOut" }}
//             className="fixed top-0 left-0 w-full bg-white text-black z-40 overflow-y-auto px-6 py-8 md:hidden shadow-xl"
//           >
//             {/* Logo and Close */}
//             <div className="flex justify-between items-center mb-6">
//               <img src={logo} className="w-[150px]" alt="Logo" />
//               <button onClick={() => setIsOpen(false)} className="text-2xl">
//                 <GiTireIronCross />
//               </button>
//             </div>

//             {/* Collapsible Menu Sections */}
//             <div className="space-y-2 font-bold text-lg">
//               {["Home", "Services", "Pages", "Portfolio", "Contact Us"].map(
//                 (section, idx) => (
//                   <div key={idx} className="border-b">
//                     <button
//                       onClick={() => toggleSection(idx)}
//                       className="w-full flex justify-between items-center py-2"
//                     >
//                       <span>{section}</span>
//                       <motion.span
//                         animate={{ rotate: openSection === idx ? 180 : 0 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <FaHamburger></FaHamburger>
//                       </motion.span>
//                     </button>

//                     <AnimatePresence>
//                       {openSection === idx && (
//                         <motion.div
//                           initial={{ height: 0, opacity: 0 }}
//                           animate={{ height: "auto", opacity: 1 }}
//                           exit={{ height: 0, opacity: 0 }}
//                           transition={{ duration: 0.3 }}
//                           className="pl-4 pb-2 text-sm text-gray-600"
//                         >
//                           <p>Subcontent 1</p>
//                           <p>Subcontent 2</p>
//                           <p>Subcontent 3</p>
//                         </motion.div>
//                       )}
//                     </AnimatePresence>
//                   </div>
//                 )
//               )}
//             </div>

//             {/* Contact Info */}
//             <div className="mt-6 space-y-2 text-sm">
//               <div className="flex items-center gap-2">
//                 <img src={phone} className="w-5" alt="Phone" />
//                 <span className="font-medium">+991 - 763 684 4563</span>
//               </div>
//               <p>info@alhenaventures.com</p>
//               <p>Saver, Office-02, Road-11, House-3B/B, Section-H</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// };

// export default Navbar;

import { Link } from "react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/software-logo.svg";
import phone from "../assets/phone.png";
import { Menu, X, ChevronDown } from "lucide-react"; // Modern icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  return (
    <nav>
      {/* Header */}
      <header className="bg-[#1A1A1A] text-white py-4 px-6 flex justify-between items-center border-b border-white relative z-50">
        {/* Logo */}
        <img className="w-[175px]" src={logo} alt="Logo" />

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 items-center text-white font-semibold">
          {["Home", "Services", "Pages", "Portfolio", "Contact Us"].map(
            (item) => (
              <Link
                key={item}
                className="hover:text-yellow-400 transition-all duration-500"
                to="#"
              >
                {item}
              </Link>
            )
          )}
        </div>

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
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "100vh", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full bg-white text-black z-40 overflow-y-auto px-6 py-8 md:hidden shadow-xl"
          >
            {/* Logo and Close */}
            <div className="flex justify-between items-center mb-6">
              <img src={logo} className="w-[150px]" alt="Logo" />
              <button onClick={() => setIsOpen(false)}>
                <X className="w-8 h-8 text-black hover:text-yellow-500 transition-transform duration-300 hover:rotate-90" />
              </button>
            </div>

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
                          <p className="border-b-1 border-[#eee] pb-2">Subcontent 1</p>
                          <p className="border-b-1 border-[#eee] pb-2">Subcontent 2</p>
                          <p className="border-b-1 border-[#eee] pb-2">Subcontent 3</p>
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
