export default function Insights({ data }) {
  const totalIncome = data
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = data
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const expenses = data.filter(t => t.type === "expense");

    const highest = expenses.reduce((max, t) =>
    t.amount > max.amount ? t : max,
    expenses[0]

);

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow rounded mt-4">
      <h2 className="text-lg font-bold mb-2">Insights</h2>

      <p>Total Income: ₹{totalIncome}</p>
      <p>Total Expenses: ₹{totalExpense}</p>
      <p>Total Transactions: {data.length}</p>
      <p>Highest Spending: {highest?.category} (₹{highest?.amount})</p>

      <p className="mt-2 font-semibold">
        {totalIncome > totalExpense
  ?     "Great! You are saving money"
  :     "Warning! Your expenses are higher"}
      </p>
    </div>
  );
}