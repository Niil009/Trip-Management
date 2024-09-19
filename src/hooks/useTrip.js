import { useSelector, useDispatch } from 'react-redux';
import { addTrip, editTrip, deleteTrip } from '../redux/slices/tripsSlice';

const useTrips = () => {
  const dispatch = useDispatch();
  const trips = useSelector(state => state.trips);

  const addNewTrip = (trip) => {
    dispatch(addTrip(trip));
  };

  const editExistingTrip = (trip) => {
    dispatch(editTrip(trip));
  };

  const removeTrip = (tripId) => {
    dispatch(deleteTrip(tripId));
  };

  return {
    trips,
    addNewTrip,
    editExistingTrip,
    removeTrip,
  };
};

export default useTrips;