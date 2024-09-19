const calculateTotalExpenses = (expenses) => {
  return expenses.reduce((total, expense) => total + expense.amount, 0);
};

const calculateExpensesByCategory = (expenses) => {
  return expenses.reduce((acc, expense) => {
    if (!acc[expense.type]) {
      acc[expense.type] = 0;
    }
    acc[expense.type] += expense.amount;
    return acc;
  }, {});
};

export { calculateTotalExpenses, calculateExpensesByCategory };
