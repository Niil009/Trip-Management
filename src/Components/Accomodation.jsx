import React from 'react';
import img4 from "../images/img4.jpg"; 
import { accommodation } from '../Data/Data'; 

const Accomodation = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${img4})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        padding: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '20px',
          justifyContent: 'center',
          maxWidth: '1200px', 
        }}
      >
        {accommodation.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '8px',
              padding: '20px',
              width: '300px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <h2>{item.name}</h2>
            <p><strong>Type:</strong> {item.type}</p>
            <p><strong>Price:</strong> ${item.price}</p>
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Amenities:</strong></p>
            <ul>
              {item.amenities.map((amenity, index) => (
                <li key={index}>{amenity}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accomodation;
