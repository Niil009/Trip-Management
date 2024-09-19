import React from 'react';
// import ContactUs from './ContactUs';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div>
          <h2 className="text-xl font-bold mb-4">About Us</h2>
          <p className="text-gray-400">
            We are a travel management platform that helps you organize and manage all aspects of your trips with ease.
          </p>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <a href="#home" className="hover:underline text-gray-400">Home</a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-gray-400">About</a>
            </li>
            <li>
              <a href="#services" className="hover:underline text-gray-400">Services</a>
            </li>
            <Link to="/contactUs" className="hover:underline text-gray-400" >
             Contact us
            </Link>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6c0-1.084.916-2 2-2h2V0h-3c-3.309 0-6 2.691-6 6v2z"/>
              </svg>
            </a>
            <a href="https://twitter.com" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775a4.932 4.932 0 002.165-2.724 9.865 9.865 0 01-3.127 1.196 4.917 4.917 0 00-8.381 4.482A13.941 13.941 0 011.671 3.149 4.917 4.917 0 003.158 9.74a4.901 4.901 0 01-2.229-.616v.062a4.918 4.918 0 003.946 4.827 4.902 4.902 0 01-2.224.084 4.919 4.919 0 004.592 3.417 9.868 9.868 0 01-6.1 2.102c-.395 0-.788-.023-1.174-.068A13.94 13.94 0 007.548 21c9.058 0 14.01-7.496 14.01-13.986 0-.213-.005-.425-.014-.636A10.012 10.012 0 0024 4.557z"/>
              </svg>
            </a>
            <a href="https://instagram.com" className="text-gray-400 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.849.07 1.17.056 1.97.24 2.422.406a4.915 4.915 0 011.775 1.048 4.915 4.915 0 011.048 1.774c.166.453.35 1.252.406 2.423.058 1.264.07 1.645.07 4.848 0 3.204-.012 3.584-.07 4.849-.056 1.17-.24 1.97-.406 2.422a4.912 4.912 0 01-1.048 1.775 4.912 4.912 0 01-1.774 1.048c-.453.166-1.252.35-2.423.406-1.264.058-1.645.07-4.849.07-3.204 0-3.584-.012-4.849-.07-1.17-.056-1.97-.24-2.423-.406a4.912 4.912 0 01-1.775-1.048 4.912 4.912 0 01-1.048-1.774c-.166-.453-.35-1.252-.406-2.423-.058-1.264-.07-1.645-.07-4.849 0-3.204.012-3.584.07-4.849.056-1.17.24-1.97.406-2.423a4.915 4.915 0 011.048-1.774 4.915 4.915 0 011.775-1.048c.453-.166 1.252-.35 2.423-.406 1.264-.058 1.645-.07 4.849-.07zm0-2.163c-3.258 0-3.67.014-4.947.072-1.25.057-2.104.24-2.844.512a6.928 6.928 0 00-2.641 1.69 6.928 6.928 0 00-1.69 2.641c-.272.74-.455 1.594-.512 2.844-.058 1.276-.072 1.689-.072 4.947s.014 3.67.072 4.947c.057 1.25.24 2.104.512 2.844a6.93 6.93 0 001.69 2.641 6.93 6.93 0 002.641 1.69c.74.272 1.594.455 2.844.512 1.276.058 1.689.072 4.947.072s3.67-.014 4.947-.072c1.25-.057 2.104-.24 2.844-.512a6.926 6.926 0 002.641-1.69 6.926 6.926 0 001.69-2.641c.272-.74.455-1.594.512-2.844.058-1.276.072-1.689.072-4.947s-.014-3.67-.072-4.947c-.057-1.25-.24-2.104-.512-2.844a6.928 6.928 0 00-1.69-2.641 6.928 6.928 0 00-2.641-1.69c-.74-.272-1.594-.455-2.844-.512-1.276-.058-1.689-.072-4.947-.072z"/>
                <path d="M12 5.838c-3.404 0-6.162 2.758-6.162 6.162s2.758 6.162 6.162 6.162 6.162-2.758 6.162-6.162-2.758-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 Travel Management. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;