const filterExpensesByCategory = (expenses, category) => {
    return expenses.filter(expense => expense.category === category);
  };
  
  export default filterExpensesByCategory;