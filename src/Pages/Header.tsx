import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { SiWondersharefilmora } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ModeToggle } from "../components/mode-toggle";
import { RiMovie2AiLine } from "react-icons/ri";
import { MdOutlineFiberNew } from "react-icons/md";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r bg-[#d6d8e1] text-gray-800 shadow-lg dark:from-gray-800 dark:to-gray-900 sticky top-0 z-50 dark:text-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <a
            href="/"
            className="flex items-center space-x-2 text-2xl font-bold"
          >
            <SiWondersharefilmora className="h-8 w-8" />
            <span className="hidden sm:inline">SimpL Movie Search</span>
            <ModeToggle />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <p
              className="flex cursor-pointer items-center space-x-1 hover:text-purple-600 hover:dark:text-purple-300 transition-colors duration-200 hover:dark:text-[]"
            >
              <RiMovie2AiLine className="h-4 w-4" />
              <span>Tv Shows</span>
            </p>
            <p
              className="flex items-center cursor-pointer space-x-1 hover:text-purple-600 hover:dark:text-purple-300 transition-colors duration-200"
            >
              <MdOutlineFiberNew className="h-4 w-4" />
              <span>New Releases</span>
            </p>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <RxCross2 className="h-6 w-6" />
            ) : (
              <TiThMenu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 space-y-4">
            <a
              href="/"
              className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 transition-colors duration-200"
            >
              <FaSearch className="h-4 w-4" />
              <span>Search</span>
            </a>
            <a
              href="/favorites"
              className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 transition-colors duration-200"
            >
              <FaRegHeart className="h-4 w-4" />
              <span>Favorites</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
