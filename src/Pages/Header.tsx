// import { useState } from "react";
// import { TiThMenu } from "react-icons/ti";
// import { RxCross2 } from "react-icons/rx";
// import { SiWondersharefilmora } from "react-icons/si";
// import { FaSearch } from "react-icons/fa";
// import { FaRegHeart } from "react-icons/fa";
// import { ModeToggle } from "../components/mode-toggle";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg dark:from-gray-800 dark:to-gray-900">
//       <div className="container mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo Section */}
//           <a
//             href="/"
//             className="flex items-center space-x-2 text-2xl font-bold"
//           >
//             <SiWondersharefilmora className="h-8 w-8" />
//             <span className="hidden sm:inline">SimpL Movie Search</span>
//             <ModeToggle />
//           </a>

//           {/* Desktop Navigation */}
//           <nav className="hidden md:flex items-center space-x-8">
//             <a
//               href="/"
//               className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
//             >
//               <FaSearch className="h-4 w-4" />
//               <span>Search</span>
//             </a>
//             <a
//               href="/favorites"
//               className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
//             >
//               <FaRegHeart className="h-4 w-4" />
//               <span>Favorites</span>
//             </a>
//           </nav>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsMenuOpen(!isMenuOpen)}
//             className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
//             aria-label="Toggle menu"
//           >
//             {isMenuOpen ? (
//               <RxCross2 className="h-6 w-6" />
//             ) : (
//               <TiThMenu className="h-6 w-6" />
//             )}
//           </button>
//         </div>

//         {/* Mobile Navigation */}
//         {isMenuOpen && (
//           <nav className="md:hidden py-4 space-y-4">
//             <a
//               href="/"
//               className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 transition-colors duration-200"
//             >
//               <FaSearch className="h-4 w-4" />
//               <span>Search</span>
//             </a>
//             <a
//               href="/favorites"
//               className="flex items-center space-x-2 hover:bg-blue-700 rounded-lg p-2 transition-colors duration-200"
//             >
//               <FaRegHeart className="h-4 w-4" />
//               <span>Favorites</span>
//             </a>
//           </nav>
//         )}
//       </div>
//     </header>
//   );
// };

// export default Header;

import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { SiWondersharefilmora } from "react-icons/si";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { ModeToggle } from "../components/mode-toggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg dark:from-gray-800 dark:to-gray-900 sticky top-0 z-50">
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
            <a
              href="/"
              className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
            >
              <FaSearch className="h-4 w-4" />
              <span>Search</span>
            </a>
            <a
              href="/favorites"
              className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200"
            >
              <FaRegHeart className="h-4 w-4" />
              <span>Favorites</span>
            </a>
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
