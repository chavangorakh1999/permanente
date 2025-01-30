import React, { useState } from "react";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import Dropdown from "./DropDown";
import { ReactComponent as LineGraph } from "../assets/icons/LineGraph.svg";
import { ReactComponent as ThreeDots } from "../assets/icons/Threedot.svg";

// Sample datasets
const dataMonth = [
	{ name: "Jan", thisMonth: 10000, lastMonth: 8000 },
	{ name: "Feb", thisMonth: 12000, lastMonth: 11000 },
	{ name: "Mar", thisMonth: 15000, lastMonth: 14000 },
	{ name: "Apr", thisMonth: 20000, lastMonth: 16000 },
	{ name: "May", thisMonth: 25000, lastMonth: 23000 },
	{ name: "Jun", thisMonth: 30000, lastMonth: 27000 },
	{ name: "Jul", thisMonth: 28000, lastMonth: 29000 },
];

const dataWeek = [
	{ name: "Mon", thisMonth: 3000, lastMonth: 2500 },
	{ name: "Tue", thisMonth: 4000, lastMonth: 3200 },
	{ name: "Wed", thisMonth: 5000, lastMonth: 4200 },
	{ name: "Thu", thisMonth: 7000, lastMonth: 5200 },
	{ name: "Fri", thisMonth: 6000, lastMonth: 5000 },
	{ name: "Sat", thisMonth: 8000, lastMonth: 7000 },
	{ name: "Sun", thisMonth: 9000, lastMonth: 8000 },
];

const dataYear = [
	{ name: "2021", thisMonth: 150000, lastMonth: 130000 },
	{ name: "2022", thisMonth: 180000, lastMonth: 170000 },
	{ name: "2023", thisMonth: 200000, lastMonth: 190000 },
	{ name: "2024", thisMonth: 230000, lastMonth: 210000 },
];

const SingleLineChart = () => {
	// Y-axis formatter
	const formatYAxis = (tick: any) => {
		if (tick / 1000 === 0) {
			return tick;
		}
		return `${tick / 1000}K`;
	};

	// State for selected dataset
	const [selectedTimeframe, setSelectedTimeframe] = useState<
		"Month" | "Week" | "Year"
	>("Month");

	// Dynamic dataset based on filter
	const getData = () => {
		switch (selectedTimeframe) {
			case "Week":
				return dataWeek;
			case "Year":
				return dataYear;
			default:
				return dataMonth;
		}
	};

	return (
		<div className="px-6 pb-4 pt-2 bg-white rounded-lg shadow h-full w-full">
			{/* Top Filters */}
			<div className="flex justify-between items-center mb-2">
				<div>
					<span className="opacity-40">Operating Status</span>
				</div>
				<div className="flex items-center gap-2">
					<div className="flex flex-row">
						<Dropdown
							selectedTimeframe={selectedTimeframe}
							setSelectedTimeframe={setSelectedTimeframe}
						/>
						<div className="py-1 px-2 mx-2 bg-gray800 bg-opacity-10 rounded-lg flex flex-row justify-center items-center">
							<LineGraph />
							<svg
								className="w-4 h-4 ml-2"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
							>
								<path
									fillRule="evenodd"
									d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</div>
						<div className="py-1 px-2 bg-gray800 bg-opacity-10 rounded-lg flex flex-row justify-center items-center">
							<ThreeDots />
						</div>
					</div>
				</div>
			</div>

			{/* Chart */}
			<ResponsiveContainer width="100%" height="90%">
				<LineChart data={getData()}>
					{/* Grid */}
					<CartesianGrid strokeDasharray="3 3" stroke="#e4e4e4" />
					{/* X-Axis */}
					<XAxis
						dataKey="name"
						tick={{ fontSize: 12 }}
						axisLine={false}
						tickLine={false}
					/>
					{/* Y-Axis */}
					<YAxis
						tickFormatter={formatYAxis}
						tick={{ fontSize: 12 }}
						axisLine={false}
					/>
					{/* Tooltip */}
					<Tooltip />
					{/* Legend */}
					<Legend
						verticalAlign="top"
						align="left"
						wrapperStyle={{ paddingBottom: "10px", fontSize: "14px" }}
					/>
					{/* Lines */}
					<Line
						type="monotone"
						dataKey="thisMonth"
						stroke="#000000"
						strokeWidth={2}
						name="This Month"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SingleLineChart;
