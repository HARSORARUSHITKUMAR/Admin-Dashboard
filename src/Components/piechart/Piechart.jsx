import "./Piechart.scss";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const pieData = [
  { name: "Air conditioning", value: 400 },
  { name: "Spices", value: 200 },
  { name: "Pulses", value: 100 },
  { name: "Snacks & Kurkure", value: 150 },
  { name: "Refrigerator", value: 50 },
  { name: "Footwear", value: 500 },
  { name: "Toys", value: 350 },
  { name: "Fruits", value: 250 },
  { name: "Dry Fruits", value: 300 },
  { name: "Computers", value: 100 },
  //   { name: "", value: 300 },
  //   { name: "", value: 200 },
  //   { name: "", value: 400 },
  //   { name: "", value: 300 },
  //   { name: "", value: 300 },
  //   { name: "", value: 200 },
];
const items = [
  "Air conditioning",
  "Spices",
  "Dal, Pulses",
  "Snacks  Kurkure",
  "Refrigerator",
  "Footwear",
  "Toys",
  "Fruits",
  "Dry Fruits",
  "Computers",
];

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#4B0082",
  "#800080",
  "#2E8B57",
  "#D2691E",
  "#800000",
  "#1E90FF",
];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const ChartPie = () => {
  return (
    <div className="pieChart">
      <PieChart width={400} height={400}>
        <Pie
          data={pieData}
          cx={200}
          cy={200}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="item-list">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ChartPie;
