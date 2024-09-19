import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=" container fixed bg-transaprent mx-auto p-4 flex justify-between items-center z-[9999]">
      <div className="text-slate-600 text-lg font-semibold">
        <NavLink to='/' className="text-green-700 text-3xl" >VoyageVista</NavLink>
      </div>
      <div className="hidden md:flex md:items-center md:space-x-6">
        <Link to="/trips" className="text-stone-400 text-xl hover:text-yellow-400 transition-colors duration-300">Trips</Link>
        {/* <Link to="/itinerary" className="text-white text-xl hover:text-yellow-400 transition-colors duration-300">Itinerary</Link> */}
        <Link to="/transportation" className="text-white text-xl hover:text-yellow-400 transition-colors duration-300">Transportation</Link>
        <Link to="/accommodation" className="text-white text-xl hover:text-yellow-400 transition-colors duration-300">Accommodation</Link>
        <Link to="/expenses" className="text-white text-xl hover:text-yellow-400 transition-colors duration-300">Expenses</Link>
        <Link to="/packing" className="text-white text-xl hover:text-yellow-400 transition-colors duration-300">Packing List</Link>
        <Link to="/triphistory" className="text-white text-xl hover:text-yellow-400 transition-colors duration-300">Trip History</Link>
      </div>
      <div className="flex space-x-4">
        <Link to="/login" className="text-white text-xl  hover:text-gray-200">Login</Link>
        <Link to="/SignUp" className="text-white text-xl hover:text-gray-200">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;

