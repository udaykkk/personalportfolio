import React, { useState, useEffect } from "react";
import { Link } from "react-router";

function Header({ avatar = "https://i.ibb.co/R4T4j58x/image.png" }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 150);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav
      className={`w-full fixed top-0 left-0 z-20 transition-all duration-300 h-16 sm:h-20 ${
        isScrolled
          ? "bg-[#141414]"
          : "bg-gradient-to-b from-black from-0% to-transparent to-30%"
      }`}
    >
      <div className="mx-2 sm:m-4 flex items-center gap-2 sm:gap-4 font-normal text-sm sm:text-base justify-between h-12 sm:h-12">
        <div className="flex justify-start items-center gap-2 sm:gap-4 flex-1">
          <Link
            to="/"
            className="flex items-center hover:opacity-80 transition-opacity duration-200 flex-shrink-0"
          >
            <img
              src="https://ibb.co/S4NyMkGL"
              alt="Logo"
              className="h-6 sm:h-8 w-auto max-w-none"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="text-white list-none md:flex flex-row gap-4 hidden">
            <Link
              to="/"
              className="hover:text-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              <div> Home </div>
            </Link>
            <Link
              to="/professional"
              className="hover:text-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              <div> Professional </div>
            </Link>
            <Link
              to="/skills"
              className="hover:text-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              <div> Skills </div>
            </Link>
            <Link
              to="/project"
              className="hover:text-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              <div> Projects</div>
            </Link>
            <Link
              to="/hire"
              className="hover:text-red-500 transition-colors duration-200 whitespace-nowrap"
            >
              <div> Hire Me</div>
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            className="md:hidden text-white flex-shrink-0 ml-auto mr-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <div className="flex-shrink-0">
          <Link
            to={"/"}
            className="hover:opacity-80 transition-opacity duration-200"
          >
            <img
              src={avatar}
              alt="Avatar"
              className="rounded-full h-8 w-8 sm:h-10 sm:w-10"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#141414] border-t border-gray-700">
          <div className="px-4 py-2 space-y-1">
            <Link
              to="/"
              className="block text-white hover:text-red-500 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/professional"
              className="block text-white hover:text-red-500 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Professional
            </Link>
            <Link
              to="/skills"
              className="block text-white hover:text-red-500 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              to="/project"
              className="block text-white hover:text-red-500 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              to="/hire"
              className="block text-white hover:text-red-500 transition-colors duration-200 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
