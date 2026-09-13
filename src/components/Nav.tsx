import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo-text.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white">
{/*original Navbar*/}
      <div className="container mx-auto flex h-[81px] max-w-[1215px] items-center justify-between px-5 md:px-0">

{/* MobileMenu*/}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center justify-center text-[#78716C] md:hidden"
        >
          {menuOpen ? (
            <HiX className="h-[20px] w-[20px]" />
          ) : (
            <HiMenu className="h-[18px] w-[18px]" />
          )}
        </button>

        {/*Logo*/}
        <img
          src={Logo}
          alt="Dev Stack"
          className="h-[29px] w-[122px] object-contain md:h-[32px] md:w-auto"
        />
 {/* Desktop Navigation */}
        <ul className="hidden items-center gap-7 text-[14px] md:flex">
          <li>
            <a href="#" className="font-medium text-[#334155] hover:text-indigo-600">
              Home
            </a>
          </li>

          <li>
            <a
              href="#technologies"
              className="font-medium text-[#334155] hover:text-indigo-600"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="font-medium text-[#334155] hover:text-indigo-600"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="font-medium text-[#334155] hover:text-indigo-600"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="font-medium text-[#334155] hover:text-indigo-600"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* login In & Sign Up */}
        <div className="flex items-center gap-[10px] md:gap-5">
          <button
            type="button"
            className="h-[29px] whitespace-nowrap text-[14px] font-semibold text-[#334155] md:h-auto md:font-medium"
          >
            Sign In
          </button>
          <button
            type="button"
            className="h-[26px] w-[85px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-600 text-[14px] font-semibold text-white shadow-sm md:h-[39px] md:w-[92px]"
          >
        Sign Up
          </button>
        </div>
      </div>
      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="flex flex-col gap-4 border-t border-gray-100 bg-white px-6 py-5 text-[14px] md:hidden">
          <li>
            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-semibold text-indigo-600"
            >
             Home
            </a>
          </li>
          <li>
            <a
              href="#technologies"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#334155] hover:text-indigo-600"
            >
            Technologies
            </a>
          </li>

          <li>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-[#334155]"
            >
            Projects
            </a>
          </li>

          <li>
            <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="font-medium text-[#334155]"
            >
              About
            </a>
          </li>
          <li>
            <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
              className="font-medium text-[#334155]"
            >
              Contact
            </a>
          </li>
        </ul>
      )}

    </nav>
  );
};

export default Nav;