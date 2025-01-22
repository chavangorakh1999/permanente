import React from "react";
import {
	ResponsiveContainer,
	CartesianGrid,
	XAxis,
	YAxis,
	Tooltip,
	Area,
	AreaChart,
} from "recharts";

const data = [
	{
		name: "Jan",
		uv: 4000,
		pv: 2400,
		amt: 2400,
	},
	{
		name: "Feb",
		uv: 3000,
		pv: 1398,
		amt: 2210,
	},
	{
		name: "March",
		uv: 2000,
		pv: 9800,
		amt: 2290,
	},
	{
		name: "April",
		uv: 2780,
		pv: 3908,
		amt: 2000,
	},
	{
		name: "May",
		uv: 1890,
		pv: 4800,
		amt: 2181,
		amount: 50000,
	},
	{
		name: "June",
		uv: 2390,
		pv: 3800,
		amt: 2500,
	},
];
const DashboardLayout = () => {
	const formatYAxis = (tick: any) => {
		if (tick >= 1000) {
			return `${tick / 1000}k`; // Convert 10000 to 10k, 20000 to 20k, etc.
		}
		return tick;
	};
	return (
		<div className="h-full w-full flex flex-row justify-between mt-[37px]">
			<div className="w-[430px] h-full flex flex-col">
				<div>
					<h4 className="mb-6 text-xl font-light text-tertiaryText">
						Appointments
					</h4>
					<div className="h-[96px] bg-white rounded-lg mb-3"></div>
					<div className="h-[80px] flex flex-row justify-between mb-3">
						<div className="w-[210px] rounded-lg bg-white"></div>
						<div className="w-[210px] rounded-lg bg-white"></div>
					</div>
					<div className="h-[80px] flex flex-row justify-between">
						<div className="w-[210px] rounded-lg bg-white"></div>
						<div className="w-[210px] rounded-lg bg-white"></div>
					</div>
				</div>
				<div></div>
			</div>
			<div>
				<div>
					<div className="h-[280px] w-[885px] bg-white rounded-lg">
						<ResponsiveContainer>
							<AreaChart
								width={730}
								height={250}
								data={data}
								margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
							>
								<defs>
									<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
										<stop offset="5%" stopColor="#718096" stopOpacity={0.8} />
										<stop offset="95%" stopColor="#ffff" stopOpacity={0} />
									</linearGradient>
									<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
										<stop offset="5%" stopColor="#EBEBEB" stopOpacity={0.8} />
										<stop offset="95%" stopColor="#ffff" stopOpacity={0} />
									</linearGradient>
								</defs>
								<XAxis dataKey="name" />
								<YAxis tickFormatter={formatYAxis} />
								<CartesianGrid strokeDasharray="3 3" />
								<Tooltip />
								<Area
									type="monotone"
									dataKey="uv"
									stroke="#718096"
									fillOpacity={1}
									fill="url(#colorUv)"
								/>
								<Area
									type="monotone"
									dataKey="pv"
									stroke="#EBEBEB"
									fillOpacity={1}
									fill="url(#colorPv)"
								/>
							</AreaChart>
						</ResponsiveContainer>
					</div>
				</div>
				<div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default DashboardLayout;
