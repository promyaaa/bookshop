import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white font-bold text-2xl">Bookshop</h1>
        <div className="space-x-6">
          <NavLink to="/" className="text-white" activeClassName="font-bold">Home</NavLink>
          <NavLink to="/about" className="text-white" activeClassName="font-bold">About</NavLink>
          <NavLink to="/blog" className="text-white" activeClassName="font-bold">Blog</NavLink>
          <NavLink to="/faq" className="text-white" activeClassName="font-bold">FAQ</NavLink>
        </div>
        <div className="space-x-4">
          <button className="bg-blue-500 text-white px-4 py-2">Buy Book</button>
          <button className="bg-gray-500 text-white px-4 py-2">Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
