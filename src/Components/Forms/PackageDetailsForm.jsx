// src/components/PackageDetailsForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectPackage } from '../../redux/slices/tripsSlice'; // Updated import
import { demoPackages } from '../../Data/DemoPackage';

const PackageDetailsForm = ({ onComplete }) => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const dispatch = useDispatch();

  // Access selectedPackage from the combined slice
  const currentPackage = useSelector(state => state.trips.selectedPackage);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(selectPackage(selectedPackage));
    onComplete();
    console.log(currentPackage)
  };

  return (
    <div className="p-6 rounded-lg mt-40 w-full max-w-full mx-auto flex items-center flex-col">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Package & Accommodation</h2>

      <form onSubmit={handleSubmit}>
        {/* Package Selection */}
        <div className="flex gap-6 mb-6">
          {demoPackages.map((pkg) => (
            <div key={pkg.id} className="flex-none w-full sm:w-80 bg-white border rounded-lg shadow-md overflow-hidden">
              <div className="p-4">
                <input
                  type="radio"
                  id={`package-${pkg.id}`}
                  name="package"
                  value={pkg.id}
                  checked={selectedPackage === pkg.id}
                  onChange={() => setSelectedPackage(pkg.id)}
                  className="mr-2"
                />
                <label htmlFor={`package-${pkg.id}`} className="font-medium text-lg block mb-2">
                  {pkg.name}
                </label>
                <p className="text-gray-600 mb-2">{pkg.description}</p>
                <p className="text-gray-800 font-semibold text-xl mb-4">${pkg.price}</p>

                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Transportation:</h4>
                    <p>{pkg.transportation.title}</p>
                    <img src={pkg.transportation.image} alt={pkg.transportation.title} className="w-full h-24 object-cover mt-2" />
                    <p className="text-gray-600 mt-2">{pkg.transportation.caption}</p>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">Accommodation:</h4>
                    <p>{pkg.accommodation.name}</p>
                    <img src={pkg.accommodation.image} alt={pkg.accommodation.name} className="w-full h-24 object-cover mt-2" />
                    <p className="text-gray-600 mt-2">{pkg.accommodation.location}</p>
                    <p className="text-gray-800 font-semibold">Price: ${pkg.accommodation.price}</p>
                    <p className="text-gray-600">Amenities: {pkg.accommodation.amenities.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        >
          Continue
        </button>
      </form>
    </div>
  );
};

export default PackageDetailsForm;
