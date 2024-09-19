// src/Components/TripDetails.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import { TripList } from '../Data/Data';
import { Link } from 'react-router-dom';
const TripDetails = () => {
  const { sName } = useParams();
  const navigate = useNavigate(); 

  const trip = TripList.find((t) => t.sName === decodeURIComponent(sName));

  if (!trip) {
    return <p>Trip not found</p>;
  }
  return (
    <div className="w-full min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${trip.bgImg})` }}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-6 mt-28">
          {trip.placeList.map((place) => (
            <div
              key={place.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col w-full sm:w-1/2 md:w-1/3 lg:w-1/4"
            >
              <img
                src={place.image}
                alt={place.sName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">{place.sName}</h3>
                <p className="text-gray-700 flex-grow mb-4">{place.about}</p>
              </div>
            </div>
          ))}
        </div>
        {/* Flex container for button */}
        <div className="flex justify-center mt-8">
          <Link
            to={`/trips/book`}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Cerate Trip
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
