const getFormattedExpensesSummary = (expenses) => {
  const summary = {};

  expenses.forEach((expense) => {
    if (!summary[expense.category]) {
      summary[expense.category] = 0;
    }
    summary[expense.category] += expense.amount;
  });

  return Object.entries(summary).map(([category, amount]) => ({
    category,
    amount,
  }));
};

export default getFormattedExpensesSummary;
