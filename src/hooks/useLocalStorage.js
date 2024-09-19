// src/hooks/useLocalStorage.js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTrips, setItinerary, setExpenses, setPackingList } from '../redux/actions'; // Assume these actions hydrate state from localStorage

const useLocalStorage = () => {
  const dispatch = useDispatch();
  const saveStateToLocalStorage = (key, state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(key, serializedState);
    } catch (e) {
      console.error("Could not save state", e);
    }
  };
  const loadStateFromLocalStorage = (key) => {
    try {
      const serializedState = localStorage.getItem(key);
      return serializedState ? JSON.parse(serializedState) : undefined;
    } catch (e) {
      console.error("Could not load state", e);
      return undefined;
    }
  };

  useEffect(() => {
    const trips = loadStateFromLocalStorage('trips');
    const itinerary = loadStateFromLocalStorage('itinerary');
    const expenses = loadStateFromLocalStorage('expenses');
    const packingList = loadStateFromLocalStorage('packingList');

    if (trips) dispatch(setTrips(trips));
    if (itinerary) dispatch(setItinerary(itinerary));
    if (expenses) dispatch(setExpenses(expenses));
    if (packingList) dispatch(setPackingList(packingList));
  }, [dispatch]);

  return { saveStateToLocalStorage, loadStateFromLocalStorage };
};

export default useLocalStorage;