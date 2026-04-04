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
        className="border p-2 mb-3 w-full"
        onChange={(e) => setSearch(e.target.value)}
      />

      {filtered.length === 0 ? (
        <p>No Data Found</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700">
              <th>Date</th>
              <th>Amount</th>
              <th>Category</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((t) => (
              <tr key={t.id} className="text-center">
                <td>{t.date}</td>
                <td>₹{t.amount}</td>
                <td>{t.category}</td>
                <td>{t.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}