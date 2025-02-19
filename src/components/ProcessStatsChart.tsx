import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import { RootState } from "../store"; // adjust the import based on your project structure

// The component now gets patients data from the Redux store
const ProcessStatsChart = () => {
	// Get patients data from Redux
	const patients = useSelector((state: RootState) => state.patients.patients);

	// Y-axis formatter
	const formatYAxis = (tick: any) => {
		if (tick / 1000 === 0) return tick;
		return `${tick / 1000}K`;
	};

	// State for selected dataset/timeframe
	const [selectedTimeframe, setSelectedTimeframe] = useState<
		"Month" | "Week" | "Year"
	>("Month");

	// Aggregation logic: group patients by month, week, or year
	const getAggregatedData = () => {
		if (!patients || patients.length === 0) return [];

		if (selectedTimeframe === "Month") {
			// Group by month (Jan-Dec)
			const monthNames = [
				"Jan",
				"Feb",
				"Mar",
				"Apr",
				"May",
				"Jun",
				"Jul",
				"Aug",
				"Sep",
				"Oct",
				"Nov",
				"Dec",
			];
			const monthlyCounts = monthNames.map((m) => ({
				name: m,
				thisMonth: 0,
				lastMonth: 0,
			}));

			patients.forEach((p) => {
				// Assume aptDate is in ISO format ("YYYY-MM-DD")
				const dateObj = new Date(p.aptDate);
				const month = dateObj.getMonth(); // 0-11
				monthlyCounts[month].thisMonth += 1;
			});

			// Simulate lastMonth values (for example, thisMonth - 1, min 0)
			monthlyCounts.forEach((item) => {
				item.lastMonth = Math.max(item.thisMonth - 1, 0);
			});

			return monthlyCounts;
		} else if (selectedTimeframe === "Week") {
			// Group by day of week (Sun-Sat)
			const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
			const weeklyCounts = dayNames.map((d) => ({
				name: d,
				thisMonth: 0,
				lastMonth: 0,
			}));

			patients.forEach((p) => {
				const dateObj = new Date(p.aptDate);
				const day = dateObj.getDay(); // 0-6
				weeklyCounts[day].thisMonth += 1;
			});

			weeklyCounts.forEach((item) => {
				item.lastMonth = Math.max(item.thisMonth - 1, 0);
			});

			return weeklyCounts;
		} else if (selectedTimeframe === "Year") {
			// Group by year (if there are multiple years)
			const yearsMap: { [year: string]: number } = {};
			patients.forEach((p) => {
				const year = new Date(p.aptDate).getFullYear().toString();
				yearsMap[year] = (yearsMap[year] || 0) + 1;
			});
			const yearsArray = Object.keys(yearsMap).map((year) => ({
				name: year,
				thisMonth: yearsMap[year],
				lastMonth: Math.max(yearsMap[year] - 1, 0),
			}));
			return yearsArray;
		}
		return [];
	};

	// Determine data to show in chart based on selectedTimeframe
	const chartData = getAggregatedData();

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
				<LineChart data={chartData}>
					<CartesianGrid strokeDasharray="3 3" stroke="#e4e4e4" />
					<XAxis
						dataKey="name"
						tick={{ fontSize: 12 }}
						axisLine={false}
						tickLine={false}
					/>
					<YAxis
						tickFormatter={formatYAxis}
						tick={{ fontSize: 12 }}
						axisLine={false}
					/>
					<Tooltip />
					<Legend
						verticalAlign="top"
						align="left"
						wrapperStyle={{ paddingBottom: "10px", fontSize: "14px" }}
					/>
					<Line
						type="monotone"
						dataKey="thisMonth"
						stroke="#000000"
						strokeWidth={2}
						name="This Month"
					/>
					<Line
						type="monotone"
						dataKey="lastMonth"
						stroke="#3e82fc"
						strokeDasharray="5 5"
						strokeWidth={2}
						name="Last Month"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default ProcessStatsChart;
