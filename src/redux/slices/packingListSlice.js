import { createSlice } from '@reduxjs/toolkit';
const packingListSlice = createSlice({
  name: 'packingList',
  initialState: {},
  reducers: {
    addPackingItem: (state, action) => {
      const { tripId, item } = action.payload;
      if (!state[tripId]) {
        state[tripId] = [];
      }
      state[tripId].push(item);
    },
    editPackingItem: (state, action) => {
      const { tripId, item } = action.payload;
      const index = state[tripId]?.findIndex(i => i.id === item.id);
      if (index !== -1) {
        state[tripId][index] = item;
      }
    },
    deletePackingItem: (state, action) => {
      const { tripId, itemId } = action.payload;
      state[tripId] = state[tripId]?.filter(item => item.id !== itemId);
    },
    togglePackedStatus: (state, action) => {
      const { tripId, itemId } = action.payload;
      const item = state[tripId]?.find(item => item.id === itemId);
      if (item) {
        item.packed = !item.packed;
      }
    },
  },
});
export const { addPackingItem, editPackingItem, deletePackingItem, togglePackedStatus } = packingListSlice.actions;
export default packingListSlice.reducer;