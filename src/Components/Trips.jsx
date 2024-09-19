// src/Components/Trips.jsx
import React from 'react';
import img9 from '../images/img9.jpg';
import { data } from '../Data/Data';
import { Link } from 'react-router-dom';

const Trips = () => {
  return (
    <div
      className="w-full min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${img9})` }}
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6 mt-28">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <img
                src={item.image}
                alt={item.sName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{item.sName}</h3>
                <p className="text-gray-700 flex-grow mb-4">{item.about}</p>
                <div className="flex gap-2">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                    Share
                  </button>
                  <Link
                    to={`/trips/${item.sName}`}
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                  >
                    Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trips;


