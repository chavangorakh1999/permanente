import React from "react";
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";

const data = [
	{ name: "Low", value: 30, fill: "#9de1d3" },
	{ name: "Med", value: 20, fill: "#f8b26a" },
	{ name: "High", value: 35, fill: "#b21f23" },
	{ name: "Reschedule", value: 10, fill: "#c7d9f8" },
	{ name: "Transport", value: 25, fill: "#a7e5a5" },
];

// Function to create fully rounded bar paths
const getPath = (x: number, y: number, width: number, height: number) => {
	// Ensure height is valid
	const correctedHeight = Math.max(height, 0);
	// Ensure radius does not exceed half of the width
	const radius = Math.min(width / 4, correctedHeight / 2);

	return `
    M${x + radius},${y} 
    h${width - 2 * radius} 
    a${radius},${radius} 0 0 1 ${radius},${radius} 
    v${correctedHeight - 2 * radius} 
    a${radius},${radius} 0 0 1 -${radius},${radius} 
    h-${width - 2 * radius} 
    a${radius},${radius} 0 0 1 -${radius},-${radius} 
    v-${correctedHeight - 2 * radius} 
    a${radius},${radius} 0 0 1 ${radius},-${radius} 
    Z
  `;
};

// Custom Bar Component
const CustomBar = (props: any) => {
	const { fill, x, y, width, height } = props;
	return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

const BarChartComponent = () => {
	const formatYAxis = (tick: any) => `${tick}K`;

	return (
		<div className="bg-white p-4 rounded-lg shadow-md w-full h-full">
			<ResponsiveContainer width="100%" height="100%">
				<BarChart data={data} barCategoryGap={16}>
					<XAxis dataKey="name" tick={{ fontSize: 12 }} axisLine={false} />
					<YAxis
						tickFormatter={formatYAxis}
						tick={{ fontSize: 14 }}
						axisLine={false}
					/>
					<Tooltip />
					<Legend />
					<Bar dataKey="value" shape={<CustomBar />} />
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};

export default BarChartComponent;
