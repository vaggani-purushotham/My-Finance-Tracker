import { useState } from "react";
import SummaryCard from "./components/SummaryCard";
import Charts from "./components/Charts";
import { transactionsData } from "./data/mockData";
import Transactions from "./components/Transactions";
import Insights from "./components/Insights";

function App() {

  const [dark, setDark] = useState(false);
  const income = transactionsData
  .filter(t => t.type === "income")
  .reduce((sum, t) => sum + t.amount, 0);

const expenses = transactionsData
  .filter(t => t.type === "expense")
  .reduce((sum, t) => sum + t.amount, 0);

const balance = income - expenses;

  return (

    <div className={dark ? "bg-gray-900 text-white min-h-screen p-4" : "bg-gray-100 min-h-screen p-4"}>
      <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
  <h1 className="text-2xl font-bold">Finance Dashboard</h1>
    <button
    onClick={() => setDark(!dark)}
    className="border px-3 py-1 rounded"
  >
    {dark ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
    </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SummaryCard title="Balance" value={balance} />
        <SummaryCard title="Income" value={income} />
        <SummaryCard title="Expenses" value={expenses} />
      </div>

      <Charts data={transactionsData} />
      <Transactions data={transactionsData} />
      <Insights data={transactionsData} />
    </div> 
    </div>
  );
}

export default App;