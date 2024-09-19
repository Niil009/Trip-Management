import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTrip } from '../redux/slices/tripsSlice'; // Adjust the import based on your actual slice
import backimg from "../images/backImg1.jpg";

const TripHistory = () => {
    const trips = useSelector(state => state.trips.trips);
    const [data, setData] = useState([]);
    const dispatch = useDispatch();

    // Update data whenever trips change
    useEffect(() => {
        setData(trips);
    }, [trips]);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this trip?")) {
            dispatch(deleteTrip(id));
        }
    };

    const handleEdit = (trip) => {
        console.log("Edit trip:", trip);
    };

    return (
        <div style={{
            backgroundImage: `url(${backimg})`,
            backgroundSize: 'cover',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <h2 style={{ textAlign: 'center', color: '#fff' }}>Trip History</h2>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px'
            }}>
                {data.map(trip => (
                    <div key={trip.id} style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)',
                        borderRadius: '8px',
                        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                        padding: '15px',
                        width: '300px',
                        textAlign: 'left'
                    }}>
                        <h3 style={{ margin: '0 0 10px 0' }}>{trip.userName}</h3>
                        <p><strong>Start Date:</strong> {trip.startDate}</p>
                        <p><strong>End Date:</strong> {trip.endDate}</p>
                        <p><strong>Selected Places:</strong> {trip.selectedPlaces.join(', ')}</p>

                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                            <button onClick={() => handleEdit(trip)} style={{
                                backgroundColor: '#007BFF',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                cursor: 'pointer',
                            }}>
                                Edit
                            </button>
                            <button onClick={() => handleDelete(trip.id)} style={{
                                backgroundColor: '#dc3545',
                                color: '#fff',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '5px 10px',
                                cursor: 'pointer',
                            }}>
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TripHistory;


