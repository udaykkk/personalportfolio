import React, { useState, useEffect } from "react";
import { Link } from "react-router";

function Header({ avatar = "src/assets/Recruiter.png" }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 150);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full fixed top-0 left-0 z-20 transition-all duration-300 h-20 ${
      isScrolled 
        ? 'bg-[#141414]' 
        : 'bg-gradient-to-b from-black from-0% to-transparent to-30%'
    }`}>
      <div className="m-4 flex items-center gap-4 font-normal text-base justify-between h-12">
        <div className="flex justify-start items-center gap-4">
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity duration-200">
            <img
              src="src/assets/ANURAG-BANERJEE-3-6-2025.png"
              alt="Logo"
              className="h-8 w-auto"
            />
          </Link>
          <div className="text-white list-none flex flex-row gap-4">
            <Link to="/" className="hover:text-red-500 transition-colors duration-200">
              <div> Home </div>
            </Link>
            <Link to="/professional" className="hover:text-red-500 transition-colors duration-200">
              <div> Professional </div>
            </Link>
            <Link to="/skills" className="hover:text-red-500 transition-colors duration-200">
              <div> Skills </div>
            </Link>
            <Link to="/project" className="hover:text-red-500 transition-colors duration-200">
              <div> Projects</div>
            </Link>
            <Link to="/hire" className="hover:text-red-500 transition-colors duration-200">
              <div> Hire Me</div>
            </Link>
          </div>
        </div>

        <div>
          <Link to={"/"} className="hover:opacity-80 transition-opacity duration-200">
            <img
              src={avatar}
              alt="Avatar"
              className="rounded-full h-10 w-10"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
