import React from "react";
import "./Chart.scss";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name : '0', Total : 0},
  { name : "4" , Total : 0},
  { name : "5" , Total : 250},
  { name : "6" , Total : 300},
  { name : "7" , Total : 200},
  { name : "8" , Total : 400},
  { name : '9' , Total : 1000},
  { name : '10' , Total : 0},
  { name : '11' , Total : 600},
  { name : '12' , Total : 10},
  { name : '13' , Total : 50},
  { name : '14' , Total : 80},
  { name : '15' , Total : 0},
  { name : '16' , Total : 350},
  { name : '17' , Total : 200},
  { name : '18' , Total : 800},
  { name : '19' , Total : 300},
  { name : '20' , Total : 2300},
  { name : '21' , Total : 0},
  { name : '22' , Total : 300},
  { name : '23' , Total : 90},
  { name : '24' , Total : 250},
  { name : '25' , Total : 10},
  { name : '26' , Total : 150},
  { name : '29' , Total : 0},
  
];

const Chart = ( {aspect , title} ) => {
  return (
    <div className="chart">
      <div className="title">{title}</div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
          </defs>
          <XAxis dataKey="name" />
          <YAxis axisLine={false} />
          <CartesianGrid strokeDasharray="3" vertical={false} />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            fillOpacity={1}
            fill="url(#total)"
            strokeWidth={4}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
