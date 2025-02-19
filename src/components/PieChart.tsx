import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { useSelector } from "react-redux";
import { RootState } from "../store"; // adjust path as needed

const PieChartContainer: React.FC = () => {
	// Get patients data from Redux store
	const patients = useSelector((state: RootState) => state.patients.patients);

	// Aggregate patients by their patientStatus (extract string from object)
	const aggregatedData = Object.values(
		patients.reduce((acc, patient) => {
			// Extract the status string from the patientStatus object,
			// default to "Unknown" if not available.
			const status =
				patient.patientStatus && typeof patient.patientStatus === "object"
					? patient.patientStatus.patientStatus
					: (patient.patientStatus as string) || "Unknown";

			if (!acc[status]) {
				acc[status] = { name: status, value: 0 };
			}
			acc[status].value += 1;
			return acc;
		}, {} as { [key: string]: { name: string; value: number } })
	);

	// Define color mapping for each patient status
	const colorMapping: Record<string, { bgColor: string; color: string }> = {
		Confirmed: { bgColor: "bg-[#0088FE]", color: "#0088FE" },
		Pending: { bgColor: "bg-[#00C49F]", color: "#00C49F" },
		Rescheduled: { bgColor: "bg-[#FFBB28]", color: "#FFBB28" },
		Cancelled: { bgColor: "bg-[#FF8042]", color: "#FF8042" },
		Escalated: { bgColor: "bg-[#A020F0]", color: "#A020F0" },
		Unknown: { bgColor: "bg-gray-400", color: "#ccc" },
	};

	// Map aggregated data to include colors
	const data = aggregatedData.map((item) => {
		const colors = colorMapping[item.name] || colorMapping.Unknown;
		return { ...item, bgColor: colors.bgColor, color: colors.color };
	});

	return (
		<div className="bg-white px-[30px] py-[40px] rounded-lg shadow-md w-full h-full flex justify-start items-center">
			<ResponsiveContainer width="70%" height="100%">
				<PieChart>
					<Pie
						data={data}
						innerRadius={60}
						outerRadius={100}
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
						className="flex flex-row justify-start items-center"
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
