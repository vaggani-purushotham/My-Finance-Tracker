export default function SummaryCard({ title, value }) {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white shadow p-4 rounded">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-xl font-bold">₹{value}</p>
    </div>
  );
}