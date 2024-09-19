// src/redux/slices/tripDetailsSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  trips: [],
  selectedPackage: null,
};

const tripSlice = createSlice({
  name: "tripDetails",
  initialState,
  reducers: {
    addTrip: (state, action) => {
      state.trips.push(action.payload);
    },
    editTrip: (state, action) => {
      const index = state.trips.findIndex(
        (trip) => trip.id === action.payload.id
      );
      if (index !== -1) {
        state.trips[index] = action.payload;
      }
    },
    deleteTrip: (state, action) => {
      state.trips = state.trips.filter((trip) => trip.id !== action.payload);
    },
    selectPackage: (state, action) => {
      state.selectedPackage = action.payload;
    },
  },
});

export const { addTrip, editTrip, deleteTrip, selectPackage } =
  tripSlice.actions;
export default tripSlice.reducer;
