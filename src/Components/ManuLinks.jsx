import { useState } from "react";
import { FaArrowTrendDown } from "react-icons/fa6";
import { Link } from "react-router";

const MenuLinks = () => {
  const items = ["Home", "Services", "Pages", "Portfolio", "Contact Us"];
  const [hovered, setHovered] = useState(null);

  return (
    <div className="hidden md:flex gap-8 items-center font-semibold">
      {items.map((item) => {
        const isDefault = item === "Home" && !hovered;
        const isHovered = hovered === item;

        const showArrow = isDefault || isHovered;
        const textColor =
          isDefault || isHovered ? "text-yellow-400" : "text-white";

        return (
          <Link
            key={item}
            to="#"
            onMouseEnter={() => setHovered(item)}
            onMouseLeave={() => setHovered(null)}
            className={`relative flex items-center transition-colors duration-300 ${textColor}`}
          >
            {item}

            {/* Arrow */}
            <span
              className={`
                ml-2 inline-block 
                transition-all duration-300 
                ${
                  showArrow
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-2"
                }
              `}
            >
              <span className="text-yellow-400">
                <FaArrowTrendDown />
              </span>
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuLinks;
