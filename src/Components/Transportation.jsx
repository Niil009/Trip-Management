// src/Components/Transportation.jsx
import React from 'react';
import img8 from "../images/img8.jpeg";
import { transport } from "../Data/Data";

const Transportation = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${img8})` }}>
      <div className="container mx-auto px-4 py-8 mt-16">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Modes of Transportation</h1>
        <div className="flex flex-wrap justify-center gap-6">
          {transport.map(item => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
              <div className="relative w-full h-48">
                <img src={item.image} alt={item.mode} className="absolute inset-0 w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
                <p className="text-gray-700">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Transportation;
