let totalBudget = 0;
let totalExpenses = 0;
let balance = 0;

function setBudget() {
  totalBudget = parseFloat(document.getElementById('totalAmount').value);
  updateDisplay();
}

function addExpense() {
  const expenseTitle = document.getElementById('expenseTitle').value;
  const expenseAmount = parseFloat(document.getElementById('expenseAmount').value);
  
  if (!isNaN(expenseAmount)) {
    totalExpenses += expenseAmount;
    balance = totalBudget - totalExpenses;

    // Display Expense in the list
    const expenseList = document.getElementById('expenseList');
    const listItem = document.createElement('li');
    listItem.textContent = `${expenseTitle}: $${expenseAmount.toFixed(2)}`;
    expenseList.appendChild(listItem);

    updateDisplay();
  }
}

function updateDisplay() {
  document.getElementById('totalBudgetDisplay').textContent = totalBudget.toFixed(2);
  document.getElementById('totalExpensesDisplay').textContent = totalExpenses.toFixed(2);
  document.getElementById('balanceDisplay').textContent = balance.toFixed(2);
}
