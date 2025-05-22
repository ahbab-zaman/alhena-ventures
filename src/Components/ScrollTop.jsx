import { useEffect, useState } from "react";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ y: 0 });

  // Show button when scrolled down more than 300px
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top with smooth behavior
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Animate button upward when clicked
  const handleClick = () => {
    setPosition((prev) => ({ y: prev.y - 50 })); // Move up 50px
    setTimeout(() => {
      scrollToTop();
      setPosition({ y: 0 }); // Reset position after scroll
    }, 300); // Match transition duration
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-2 right-2 bg-yellow-500 text-black p-3 rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-200 z-50 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-all duration-300`}
      style={{
        bottom: `${6 + position.y}rem`, // Initial bottom-6, moves up with position.y
        transform: "translateY(0)", // Ensure smooth movement
      }}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
};

export default ScrollTop;
