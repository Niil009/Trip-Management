// src/components/BasicTripDetailsForm.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTrip } from '../../redux/slices/tripsSlice'; // Updated import
import { TripList } from '../../Data/Data';

const BasicTripDetailsForm = ({ onComplete }) => {
  const [selectedTrip, setSelectedTrip] = useState(null);
  const [selectedPlaces, setSelectedPlaces] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [userName, setUserName] = useState('');
  const [errors, setErrors] = useState({});

  const trips = useSelector(state => state.trips.trips); // Updated to use the combined slice
  const dispatch = useDispatch();

  const handleTripChange = (e) => {
    const tripId = e.target.value;
    const trip = TripList.find(t => t.tripId === tripId);
    setSelectedTrip(trip);
    setSelectedPlaces([]);
  };

  const handlePlaceChange = (placeId) => {
    setSelectedPlaces(prevSelectedPlaces =>
      prevSelectedPlaces.includes(placeId)
        ? prevSelectedPlaces.filter(id => id !== placeId)
        : [...prevSelectedPlaces, placeId]
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!userName) newErrors.userName = 'User name is required.';
    if (!startDate) newErrors.startDate = 'Start date is required.';
    if (!endDate) newErrors.endDate = 'End date is required.';
    if (selectedPlaces.length === 0) newErrors.selectedPlaces = 'Please select at least one place.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    dispatch(addTrip({
      id: new Date().getTime(),
      userName,
      startDate,
      endDate,
      selectedPlaces
    }));

    // Reset form fields
    setUserName('');
    setStartDate('');
    setEndDate('');
    setErrors({});
    setSelectedTrip(null);
    setSelectedPlaces([]);
    onComplete();
    console.log(trips)
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-center text-gray-800">Trip Details</h2>

      <form onSubmit={handleSubmit}>
        {/* User Name Input */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="userName">User Name</label>
          <input
            type="text"
            id="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
          {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
        </div>

        {/* Select Trip */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="trip">Select Trip</label>
          <select
            id="trip"
            onChange={handleTripChange}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
            required
          >
            <option value="">Select a trip</option>
            {TripList.map(trip => (
              <option key={trip.tripId} value={trip.tripId}>
                {trip.tripName || 'No Name'}
              </option>
            ))}
          </select>
        </div>

        {/* Select Places */}
        {selectedTrip && (
          <div className="mb-3">
            <label className="block text-gray-700 font-medium mb-1" htmlFor="places">Select Places</label>
            <div id="places" className="space-y-2">
              {selectedTrip.placeList.map(place => (
                <div key={place.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`place-${place.id}`}
                    checked={selectedPlaces.includes(place.id)}
                    onChange={() => handlePlaceChange(place.id)}
                    className="mr-2 h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label htmlFor={`place-${place.id}`} className="text-gray-700">{place.sName}</label>
                </div>
              ))}
            </div>
            {errors.selectedPlaces && <p className="text-red-500 text-sm">{errors.selectedPlaces}</p>}
          </div>
        )}

        {/* Start Date Input */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="startDate">Start Date</label>
          <input
            type="date"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
          {errors.startDate && <p className="text-red-500 text-sm">{errors.startDate}</p>}
        </div>

        {/* End Date Input */}
        <div className="mb-3">
          <label className="block text-gray-700 font-medium mb-1" htmlFor="endDate">End Date</label>
          <input
            type="date"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="w-full px-3 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring focus:border-blue-500"
            required
          />
          {errors.endDate && <p className="text-red-500 text-sm">{errors.endDate}</p>}
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

export default BasicTripDetailsForm;
