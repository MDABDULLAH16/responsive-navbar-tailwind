import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ZAxis,
} from "recharts";

const Dashboard = () => {
  const marks = [
    { id: 1, name: "John Doe", bangla: 85, math: 90, english: 78 },
    { id: 2, name: "Jane Smith", bangla: 92, math: 88, english: 95 },
    { id: 3, name: "Alice Johnson", bangla: 78, math: 85, english: 90 },
    { id: 4, name: "Bob Williams", bangla: 80, math: 89, english: 75 },
    { id: 5, name: "Eva Davis", bangla: 88, math: 93, english: 82 },
    { id: 6, name: "Chris Anderson", bangla: 76, math: 87, english: 91 },
    { id: 7, name: "Sophia Brown", bangla: 94, math: 82, english: 89 },
    { id: 8, name: "David Miller", bangla: 85, math: 91, english: 79 },
    { id: 9, name: "Emma Wilson", bangla: 90, math: 84, english: 88 },
    { id: 10, name: "Michael Taylor", bangla: 79, math: 92, english: 86 },
    { id: 11, name: "Olivia White", bangla: 87, math: 86, english: 94 },
    { id: 12, name: "William Harris", bangla: 83, math: 88, english: 93 },
  ];

  return (
    <div>
      <LineChart width={1000} height={300} data={marks}>
        <Line stroke="#ee1289" dataKey="bangla"></Line>
        <Line stroke="#6930a3" dataKey="math"></Line>
        <Line stroke="#d11de7" dataKey="english"></Line>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Tooltip></Tooltip>
      </LineChart>
    </div>
  );
};

export default Dashboard;
