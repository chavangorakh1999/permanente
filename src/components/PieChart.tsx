import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
	{ name: "Group A", value: 400, bgColor: "bg-[#0088FE]", color: "#0088FE" },
	{ name: "Group B", value: 300, bgColor: "bg-[#00C49F]", color: "#00C49F" },
	{ name: "Group C", value: 300, bgColor: "bg-[#FFBB28]", color: "#FFBB28" },
	{ name: "Group D", value: 200, bgColor: "bg-[#FF8042]", color: "#FF8042" },
];
const PieChartContainer = () => {
	return (
		<div className="bg-white px-[30px] py-[40px] rounded-lg shadow-md w-full h-full flex justify-start items-center">
			<ResponsiveContainer width="70%" height="100%">
				<PieChart>
					<Pie
						data={data}
						innerRadius={60}
						outerRadius={100}
						fill="#8884d8"
						paddingAngle={4}
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell key={`cell-${index}`} fill={entry.color} />
						))}
					</Pie>
				</PieChart>
			</ResponsiveContainer>
			<div className="flex flex-col w-[30%] h-full justify-center space-y-3">
				{data.map((item, index) => (
					<span
						key={index}
						className="flex flex-row justify-center items-center"
					>
						<span
							className={`${item.bgColor} rounded-full h-2 w-2 mr-2`}
						></span>
						<span className="font-light text-small mr-[12px]">{item.name}</span>
						<span className="font-light text-small">{item.value}</span>
					</span>
				))}
			</div>
		</div>
	);
};

export default PieChartContainer;
