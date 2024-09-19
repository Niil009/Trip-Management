import { configureStore } from '@reduxjs/toolkit';
import tripsReducer from './slices/tripsSlice';
import itineraryReducer from './slices/itinerarySlice';
import expensesReducer from './slices/expensesSlice';
import packingListReducer from './slices/packingListSlice';
import tripDtl from "./slices/tripDetailSlice"
export const store = configureStore({
  reducer: {
    trips: tripsReducer,
    itinerary: itineraryReducer,
    expenses: expensesReducer,
    packingList: packingListReducer,
    // tripDetail:tripDtl
  },
});