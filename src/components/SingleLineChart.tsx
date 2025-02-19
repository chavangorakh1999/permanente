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
import { useSelector } from "react-redux";
import { RootState } from "../store"; // adjust path as needed

const SingleLineChart: React.FC = () => {
	// Y-axis formatter (e.g., 1000 -> 1K)
	const formatYAxis = (tick: number) => {
		if (tick / 1000 === 0) {
			return tick.toString();
		}
		return `${tick / 1000}K`;
	};

	// State for selected timeframe: Month, Week, or Year
	const [selectedTimeframe, setSelectedTimeframe] = useState<
		"Month" | "Week" | "Year"
	>("Week");

	// Retrieve patients data from Redux store
	const patients = useSelector((state: RootState) => state.patients.patients);

	// Function to aggregate appointments (patients visited) based on selected timeframe
	const getData = () => {
		if (!patients || patients.length === 0) return [];

		if (selectedTimeframe === "Month") {
			// Group by month for the current year
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
			const currentYear = new Date().getFullYear();
			const monthlyCounts = monthNames.map((m) => ({ name: m, thisMonth: 0 }));

			patients.forEach((p) => {
				const date = new Date(p.aptDate);
				if (date.getFullYear() === currentYear) {
					const month = date.getMonth(); // 0-11
					monthlyCounts[month].thisMonth += 1;
				}
			});
			return monthlyCounts;
		} else if (selectedTimeframe === "Week") {
			// Group by day of week in order: Mon, Tue, Wed, Thu, Fri, Sat, Sun
			const dayNames = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
			const weeklyCounts = dayNames.map((d) => ({ name: d, thisMonth: 0 }));

			patients.forEach((p) => {
				const date = new Date(p.aptDate);
				// getDay() returns 0 for Sunday, 1 for Monday, etc.
				// To order Monday first, adjust: (day + 6) % 7 gives Monday as index 0.
				const dayIndex = (date.getDay() + 6) % 7;
				weeklyCounts[dayIndex].thisMonth += 1;
			});
			return weeklyCounts;
		} else if (selectedTimeframe === "Year") {
			// Group by year
			const yearCounts: { [year: string]: number } = {};
			patients.forEach((p) => {
				const year = new Date(p.aptDate).getFullYear().toString();
				yearCounts[year] = (yearCounts[year] || 0) + 1;
			});
			const yearsArray = Object.keys(yearCounts).map((year) => ({
				name: year,
				thisMonth: yearCounts[year],
			}));
			return yearsArray;
		}
		return [];
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
						name="Patients Visited"
					/>
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default SingleLineChart;
