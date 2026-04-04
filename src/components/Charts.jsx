import { LineChart, Line, PieChart, Pie, Cell, Tooltip } from "recharts";

export default function Charts({ data }) {

  const lineData = data.map((t, i) => ({
    name: i,
    amount: t.amount,
  }));

  const pieData = data.map((t) => ({
  name: t.category,
  value: t.amount,
  type: t.type,
}));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow rounded">
        <h3 className="font-bold mb-2">Trend</h3>
        <LineChart width={300} height={200} data={lineData}>
          <Line dataKey="amount" stroke="#8884d8" />
          <Tooltip />
        </LineChart>
      </div>

      <div className="bg-white dark:bg-gray-800 text-black dark:text-white p-4 shadow rounded">
        <h3 className="font-bold mb-2">Categories</h3>
        <PieChart width={300} height={200}>
        <Pie data={pieData} dataKey="value">
        {pieData.map((entry, index) => (
        <Cell
        key={index}
        fill={entry.type === "income" ? "#ef4444" : "#66c522"}
        />
        ))}
        </Pie>
        </PieChart>
      </div>

    </div>
  );
}