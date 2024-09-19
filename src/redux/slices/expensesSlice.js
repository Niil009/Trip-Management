import { createSlice } from '@reduxjs/toolkit';
const expensesSlice = createSlice({
  name: 'expenses',
  initialState: {},
  reducers: {
    addExpense: (state, action) => {
      const { tripId, expense } = action.payload;
      if (!state[tripId]) {
        state[tripId] = [];
      }
      state[tripId].push(expense);
    },
    editExpense: (state, action) => {
      const { tripId, expense } = action.payload;
      const index = state[tripId]?.findIndex(e => e.id === expense.id);
      if (index !== -1) {
        state[tripId][index] = expense;
      }
    },
    deleteExpense: (state, action) => {
      const { tripId, expenseId } = action.payload;
      state[tripId] = state[tripId]?.filter(expense => expense.id !== expenseId);
    },
  },
});

export const { addExpense, editExpense, deleteExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
