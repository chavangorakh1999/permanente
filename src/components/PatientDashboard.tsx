import { ReactComponent as Profile } from "../assets/icons/Profile.svg";
import {
	LineChart,
	Line,
	XAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";
import Slider from "./Slider";

const dataMonth = [
	{ name: "Jan", thisMonth: 10000, lastMonth: 8000 },
	{ name: "Feb", thisMonth: 12000, lastMonth: 11000 },
	{ name: "Mar", thisMonth: 15000, lastMonth: 14000 },
	{ name: "Apr", thisMonth: 20000, lastMonth: 16000 },
	{ name: "May", thisMonth: 25000, lastMonth: 23000 },
	{ name: "Jun", thisMonth: 30000, lastMonth: 27000 },
	{ name: "Jul", thisMonth: 28000, lastMonth: 29000 },
];
const PatientDashboard = () => {
	return (
		<div className="h-full w-full flex flex-row mt-6 overflow-y-auto no-scrollbar">
			<div className="w-[32%] h-full mr-6">
				<div className="relative w-full h-[32%] min-h-[222px] flex flex-col items-center  mt-12 bg-white rounded-lg">
					<div className="absolute h-24 w-24 rounded-full left-[39%] top-[-3rem] border-[2px] border-white drop-shadow-xl">
						<Profile height="100%" width="100%" />
					</div>
					<div className="flex flex-col items-center mt-16">
						<h3 className="text-2xl font-semibold">Mrs. Jennifer Mandela</h3>
						<p className="text-normal text-secondaryText">
							26 years, California
						</p>
					</div>
					<div className="flex flex-row w-full justify-between px-[74px] mt-8">
						<div className="flex flex-col items-center">
							<h6 className="text-normal text-secondaryText">Blood</h6>
							<h5 className="text-xl font-light">A+</h5>
						</div>
						<div className="flex flex-col items-center">
							<h6 className="text-normal text-secondaryText">Height</h6>
							<h5 className="text-xl font-light">172 cm</h5>
						</div>
						<div className="flex flex-col items-center">
							<h6 className="text-normal text-secondaryText">Weight</h6>
							<h5 className="text-xl font-light">132 lb</h5>
						</div>
					</div>
				</div>
				<div className="mt-[30px]">
					<h6 className="text-xl font-light">Appointments</h6>
					<div className="rounded-lg mt-4 h-full bg-white p-[30px]">
						<div className="flex flex-row">
							<div className="h-12 w-12 rounded-full">
								<Profile height="100%" width="100%" />
							</div>
							<div className="flex flex-col ml-3">
								<h3 className="text-2xl font-semibold">
									Mrs. Jennifer Mandela
								</h3>
								<p className="text-normal text-secondaryText">
									26 years, California
								</p>
							</div>
						</div>
						<div className="mt-[30px]">
							<h4 className="text-2xl font-semibold">Neurologist</h4>
							<h6 className="text-normal font-light text-gray">
								Spinal cord and Nerves
							</h6>
						</div>
						<div className="flex flex-row pt-[26px] pb-[32px] border-b border-b-borderPrimary">
							<div>
								<h6 className="text-normal text-primary font-light">Date</h6>
								<h5 className="text-2xl font-semibold">26 Jan 2025</h5>
							</div>
							<div className="ml-[90px]">
								<h6 className="text-normal text-primary font-light">Time</h6>
								<h5 className="text-2xl font-semibold">04:30 PM</h5>
							</div>
						</div>
						<div className="mt-[30px]">
							<div className="flex flex-row justify-between">
								<div>
									<h5 className="text-2xl font-semibold">Amlodipine</h5>
								</div>
								<div>
									<h6 className="text-xl font-light text-secondaryText">
										10mg
									</h6>
								</div>
							</div>
							<div className="flex flex-row gap-x-6 mt-[25px]">
								<div>
									<h6 className="text-normal font-semibold text-primary">
										MON
									</h6>
								</div>
								<div>
									<h6 className="text-normal font-semibold text-primary">
										WED
									</h6>
								</div>
								<div>
									<h6 className="text-normal font-semibold text-primary">
										FRI
									</h6>
								</div>
								<div>
									<h6 className="text-normal font-semibold text-primary">
										SUN
									</h6>
								</div>
							</div>
							<div className="mt-4">
								<p className="text-normal text-gray">
									2 times in a day after food
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="w-[68%] h-fit bg-white rounded-lg p-[30px]">
				<div>
					<div className="flex flex-row justify-between">
						<h2 className="text-2xl font-semibold">Examinations</h2>
						<span className="text-primary font-semibold">See All</span>
					</div>
					<div className="flex flex-row gap-x-6 mt-6">
						<div className="flex flex-row rounded overflow-hidden w-[248px]">
							<div className="w-1 bg-[#F56565] h-full"></div>
							<div className="pl-4 bg-[#FFF5F5] py-5 w-full">
								<span className="text-normal font-light">21 Dec, 2024</span>
								<h5 className="text-[22px] font-light">Hypetensive crisis</h5>
							</div>
						</div>
						<div className="flex flex-row rounded overflow-hidden w-[248px]">
							<div className="w-1 bg-[#ED8936] h-full"></div>
							<div className="pl-4 bg-[#FFFAF0] py-5 w-full">
								<span className="text-normal font-light">12 Dec, 2024</span>
								<h5 className="text-[22px] font-light">Osteoporosis</h5>
							</div>
						</div>
						<div className="flex flex-row rounded overflow-hidden w-[248px]">
							<div className="w-1 bg-[#48BB78] h-full"></div>
							<div className="pl-4 bg-[#F0FFF4] py-5 w-full">
								<span className="text-normal font-light">29 Nov, 2024</span>
								<h5 className="text-[22px] font-light">Hypetensive crisis</h5>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-[35px] flex felx-row justify-between">
					<div>
						<h2 className="text-2xl font-semibold">Health Aveage</h2>
					</div>
					<div className="flex flex-row gap-x-2">
						<div className="h-7 w-7 rounded-[6px] bg-[#EDF2F7] text-[#718096] font-semibold flex items-center justify-center">
							D
						</div>
						<div className="h-7 w-7 rounded-[6px] bg-[#EDF2F7] text-[#718096] font-semibold flex items-center justify-center">
							W
						</div>
						<div className="h-7 w-7 rounded-[6px] bg-primary text-white font-semibold flex items-center justify-center">
							M
						</div>
						<div className="h-7 w-7 rounded-[6px] bg-[#EDF2F7] text-[#718096] font-semibold flex items-center justify-center">
							Y
						</div>
					</div>
				</div>
				<div className="h-[360px] mt-9">
					<ResponsiveContainer width="100%" height="100%">
						<LineChart data={dataMonth}>
							{/* Grid */}
							<CartesianGrid strokeDasharray="3 3" stroke="#e4e4e4" />
							{/* X-Axis */}
							<XAxis
								dataKey="name"
								tick={{ fontSize: 12 }}
								axisLine={false}
								tickLine={false}
							/>
							<Tooltip />
							{/* Legend */}
							<Legend
								verticalAlign="bottom"
								align="left"
								wrapperStyle={{ paddingBottom: "10px", fontSize: "14px" }}
							/>
							{/* Lines */}
							<Line
								type="monotone"
								dataKey="thisMonth"
								stroke="#FF9500"
								strokeWidth={2}
								name="This Month"
							/>
							<Line
								type="monotone"
								dataKey="lastMonth"
								stroke="#347AE2"
								strokeWidth={2}
								name="Last Month"
							/>
						</LineChart>
					</ResponsiveContainer>
				</div>
				<div className="flex flex-row justify-between items-center w-full mt-[30px]">
					<div className="flex flex-col">
						<h4 className="text-2xl font-semibold mb-3">
							Nearest Appointments
						</h4>
						<span className="text-xl font-light">January 2025</span>
					</div>
					<div className="w-[581px] h-fit bg-[#EDF2F7] rounded-lg">
						<Slider />
					</div>
				</div>
			</div>
		</div>
	);
};

export default PatientDashboard;
