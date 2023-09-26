
import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
];

const COLORS = ["#FF444A", "#00C49F"];

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
export default function StatisticsPage() {
  return (
   <div className="w-full h-auto  lg:h-screen flex flex-col items-center justify-center">
     <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={150}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    <div className="flex gap-5 md:gap-14">
        <div className="flex gap-2 items-center">
            <h4 className="text-sm lg:text-lg text-[#0B0B0B]">Your Donation</h4>
            <div className="w-[70px] md:w-[100px] h-[12px] rounded-sm bg-[#00C49F]"></div>
        </div>
        <div>
        <div className="flex gap-2 items-center">
            <h4 className="text-sm lg:text-lg text-[#0B0B0B]">Total Donation</h4>
            <div className="w-[70px] md:w-[100px] h-[12px] rounded-sm bg-[#FF444A]"></div>
        </div>
        </div>
    </div>
   </div>
  );
}
