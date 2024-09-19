import { useSelector, useDispatch } from 'react-redux';
import { addActivity, editActivity, deleteActivity, reorderActivity } from '../redux/slices/itinerarySlice';

const useItinerary = (tripId) => {
  const dispatch = useDispatch();
  const itinerary = useSelector(state => state.itinerary[tripId] || []);

  const addNewActivity = (activity) => {
    dispatch(addActivity({ tripId, activity }));
  };

  const editExistingActivity = (activity) => {
    dispatch(editActivity({ tripId, activity }));
  };

  const removeActivity = (activityId) => {
    dispatch(deleteActivity({ tripId, activityId }));
  };

  const reorderActivities = (reorderedActivities) => {
    dispatch(reorderActivity({ tripId, reorderedActivities }));
  };

  return {
    itinerary,
    addNewActivity,
    editExistingActivity,
    removeActivity,
    reorderActivities,
  };
};

export default useItinerary;