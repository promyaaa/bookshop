// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//   return (
//     <nav className="bg-gray-800 p-4">
//         <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
//             <h1 className="text-white font-bold text-2xl">Bookshop</h1>

//             {/* Menu Items for larger screens */}
//             <div className="hidden md:flex space-x-6 mt-4 md:mt-0">
//             <NavLink to="/" className="text-white" activeClassName="font-bold">Home</NavLink>
//             <NavLink to="/about" className="text-white" activeClassName="font-bold">About</NavLink>
//             <NavLink to="/blog" className="text-white" activeClassName="font-bold">Blog</NavLink>
//             <NavLink to="/faq" className="text-white" activeClassName="font-bold">FAQ</NavLink>
//             </div>

//             {/* Buttons for Buy Book and Sign In */}
//             <div className="flex space-x-4 mt-4 md:mt-0">
//             <button className="bg-gray-500 text-white px-4 py-2">Buy Book</button>
//             <button className="bg-gray-500 text-white px-4 py-2">Sign In</button>
//             </div>

//             {/* Hamburger Menu for smaller screens */}
//             <div className="md:hidden">
//             <button className="text-white">Menu</button>
//             </div>
//         </div>
//         </nav>

//   );
// };

// export default Navbar;

import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-2xl">Bookshop</h1>

        {/* Menu button for small screens */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            {isMenuOpen ? "x" : "Menu"}
          </button>
        </div>

        {/* Menu items */}
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto mt-4 md:mt-0 space-x-6`}
        >
          <NavLink to="/" className="text-white" activeClassName="font-bold">
            Home
          </NavLink>
          <NavLink to="/about" className="text-white" activeClassName="font-bold">
            About
          </NavLink>
          <NavLink to="/blog" className="text-white" activeClassName="font-bold">
            Blog
          </NavLink>
          <NavLink to="/faq" className="text-white" activeClassName="font-bold">
            FAQ
          </NavLink>
        </div>

        {/* Buttons for Buy Book and Sign In */}
        <div className="hidden md:flex space-x-4 mt-4 md:mt-0">
          <button className="bg-gray-500 text-white px-4 py-2">Buy Book</button>
          <button className="bg-gray-500 text-white px-4 py-2">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

