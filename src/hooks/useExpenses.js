import { useSelector, useDispatch } from "react-redux";
import {
  addExpense,
  editExpense,
  deleteExpense,
} from "../redux/slices/expensesSlice";
import calculateTotalExpenses from "../redux/slices/expensesSlice";

const useExpenses = (tripId) => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.expenses[tripId] || []);

  const addNewExpense = (expense) => {
    dispatch(addExpense({ tripId, expense }));
  };

  const editExistingExpense = (expense) => {
    dispatch(editExpense({ tripId, expense }));
  };

  const removeExpense = (expenseId) => {
    dispatch(deleteExpense({ tripId, expenseId }));
  };

  const totalExpenses = calculateTotalExpenses(expenses);

  return {
    expenses,
    addNewExpense,
    editExistingExpense,
    removeExpense,
    totalExpenses,
  };
};

export default useExpenses;
