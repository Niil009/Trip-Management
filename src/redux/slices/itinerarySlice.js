import { createSlice } from '@reduxjs/toolkit';
const itinerarySlice = createSlice({
  name: 'itinerary',
  initialState: {},
  reducers: {
    addActivity: (state, action) => {
      const { tripId, activity } = action.payload;
      if (!state[tripId]) {
        state[tripId] = [];
      }
      state[tripId].push(activity);
    },
    editActivity: (state, action) => {
      const { tripId, activity } = action.payload;
      const index = state[tripId]?.findIndex(a => a.id === activity.id);
      if (index !== -1) {
        state[tripId][index] = activity;
      }
    },
    deleteActivity: (state, action) => {
      const { tripId, activityId } = action.payload;
      state[tripId] = state[tripId]?.filter(activity => activity.id !== activityId);
    },
    reorderActivity: (state, action) => {
      const { tripId, reorderedActivities } = action.payload;
      state[tripId] = reorderedActivities;
    },
  },
});
export const { addActivity, editActivity, deleteActivity, reorderActivity } = itinerarySlice.actions;
export default itinerarySlice.reducer;