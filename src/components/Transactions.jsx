import { useState } from "react";

export default function Transactions({ data }) {
  const [search, setSearch] = useState("");

  const filtered = data.filter((t) =>
    t.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow rounded mt-4">
      <h2 className="text-lg font-bold mb-2">Transactions</h2>

      <input
      type="text"
      placeholder="Search category..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 mb-3 w-full text-black dark:text-white bg-white dark:bg-gray-700"
      />

      {filtered.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        <table className="w-full border border-gray-400 dark:border-gray-500">

  <thead>
    <tr className="bg-gray-200 dark:bg-gray-700">
      <th>Date</th>
      <th>Amount</th>
      <th>Category</th>
      <th>Type</th>
    </tr>
  </thead>

      <tbody className="divide-y divide-gray-400 dark:divide-gray-500">

      {filtered.map((t) => (
    <tr
      key={t.id}
      className="text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition">
        <td className="py-3">{t.date}</td>
        <td className="py-3">₹{t.amount}</td>
        <td className="py-3">{t.category}</td>
        <td className="py-3">{t.type}</td>
      </tr>
    ))}
    </tbody>
    </table>
      )}
    </div>
  );
}