
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { getStoredDonation } from "../LocalStorage/LocalStorage";


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
    const storedData = getStoredDonation();

    const data = [
        { name: "Total Donation", value: 12 - storedData.length },
        { name: "Your Donation", value: storedData.length },
      ];

  return (
  
    <div className="min-h-screen flex flex-col items-center pt-16 md:pt-24 lg:pt-44">
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
    <ResponsiveContainer width="100%" height={500} >
     <PieChart>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
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
    </ResponsiveContainer>
    </div>
    <div className="flex gap-5 -mt-10  md:gap-14">
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
