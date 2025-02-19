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
import { useSelector } from "react-redux";
import { RootState } from "../store";

// Function to create fully rounded bar paths
const getPath = (x: number, y: number, width: number, height: number) => {
	const correctedHeight = Math.max(height, 0);
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
	// Get patients data from Redux store
	const patients = useSelector((state: RootState) => state.patients.patients);

	// Aggregate patients by risk
	const riskCounts = patients.reduce((acc, patient) => {
		let risk = patient.risk || "Unknown";
		// Normalize common cases
		const lowerRisk = risk.toLowerCase();
		if (lowerRisk === "very high") risk = "High";
		else if (lowerRisk === "medium") risk = "Med";
		else if (lowerRisk === "low") risk = "Low";
		// For "Reschedule" and "Transport", leave as is
		if (!acc[risk]) {
			acc[risk] = { name: risk, value: 0 };
		}
		acc[risk].value += 1;
		return acc;
	}, {} as { [key: string]: { name: string; value: number } });

	const aggregatedData = Object.values(riskCounts);

	// Map risk categories to colors (same as your sample)
	const riskColorMapping: { [key: string]: string } = {
		Low: "#9de1d3",
		Med: "#f8b26a",
		High: "#b21f23",
		Reschedule: "#c7d9f8",
		Transport: "#a7e5a5",
	};

	const data = aggregatedData.map((item) => ({
		...item,
		fill: riskColorMapping[item.name] || "#ccc",
	}));

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
