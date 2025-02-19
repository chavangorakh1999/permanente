import CountCard from "../components/CountCard";
import { ReactComponent as Agent } from "../assets/icons/Agent.svg";
import { globalColors } from "../utils/colors";
import ProcessStatsChart from "./ProcessStatsChart";
import CalendarComponent from "./Calender";
import BarChartComponent from "../components/BarChart";
import PieChartContainer from "../components/PieChart";

const NurseDashboard = () => {
	return (
		<div className="mt-6 overflow-y-auto no-scrollbar">
			<div className="flex flex-row pt-[22px] justify-between">
				<CountCard
					Title="Total AI Agents"
					Count="42"
					Icon={<Agent stroke={globalColors.secondaryColor} />}
					BgColor="bg-secondary"
					width="w-[312px]"
				/>
				<CountCard
					Title="Active AI Agents"
					Count="17"
					Icon={<Agent stroke={globalColors.lightGreenColor} />}
					BgColor="bg-[#C6F6D5]"
					width="w-[312px]"
				/>
				<CountCard
					Title="Failed AI Agents"
					Count="09"
					Icon={<Agent stroke={"#E53E3E"} />}
					BgColor="bg-[#FED7D7]"
					width="w-[312px]"
				/>
				<CountCard
					Title="Completed AI Agents"
					Count="16"
					Icon={<Agent stroke={"#718096"} />}
					BgColor="bg-[#EDF2F7]"
					width="w-[312px]"
				/>
			</div>
			<div className="mt-8">
				<h5 className="text-xl mb-4">Agents Performance</h5>
				<div className="flex flex-row justify-between">
					<div className="w-[70%] h-[320px] rounded-full bg-white">
						<ProcessStatsChart />
						<div className="flex flex-row justify-between items-center mt-6">
							<div className="h-[317px] w-[430px]">
								<h4 className="mb-6 h-[13px]">Outreach Performance</h4>
								<BarChartComponent />
							</div>
							<div className="h-[317px] w-[430px]">
								<h4 className="mb-6 h-[13px]">Outreach Performance</h4>
								<PieChartContainer />
							</div>
						</div>
					</div>
					<div className="ml-[30px] w-[30%] h-full">
						<CalendarComponent />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NurseDashboard;
