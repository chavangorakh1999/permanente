import { useNavigate } from "react-router-dom";
import ProcessStatsChart from "../components/ProcessStatsChart";
import Table from "../components/Table";
import { ReactComponent as Calendar } from "../assets/icons/Calendar.svg";
import { ReactComponent as SuccessIcon } from "../assets/icons/SuccessIcon.svg";
import { ReactComponent as WaitingIcon } from "../assets/icons/WaitingIcon.svg";
import { ReactComponent as FailedIcon } from "../assets/icons/FailedIcon.svg";
import { ReactComponent as CanceledIcon } from "../assets/icons/CanceledIcon.svg";
import BarChartComponent from "../components/BarChart";
import PieChartContainer from "../components/PieChart";

const Dashboard = () => {
	const navigate = useNavigate();
	return (
		<div className="h-full w-full flex flex-row justify-between pt-[37px] no-scrollbar overflow-y-scroll">
			<div className="w-[430px] h-full flex flex-col">
				<div className="mb-[32px]">
					<h4 className="mb-6 text-xl font-light text-tertiaryText">
						Appointments
					</h4>
					<div className="h-[96px] bg-white rounded-lg mb-3 p-6 flex flex-row justify-between">
						<div className="">
							<h3 className="text-gray text-normal font-normal leading-[28px]">
								Total Appointments
							</h3>
							<h3 className="text-black text-3xl font-normal leading-[28px]">
								140
							</h3>
						</div>
						<div className="h-12 w-12 rounded-full bg-primary bg-opacity-10 p-3">
							<Calendar />
						</div>
					</div>
					<div className="h-[80px] flex flex-row justify-between mb-3">
						<div className="w-[210px] rounded-lg bg-white flex flex-row justify-between pl-6 items-center pr-4">
							<div className="">
								<h3 className="text-gray text-normal font-normal leading-[28px]">
									Confirmed
								</h3>
								<h3 className="text-black text-3xl font-normal leading-[28px]">
									58
								</h3>
							</div>
							<div className="h-[30px] w-[30px] rounded-full">
								<SuccessIcon height={"100%"} width={"100%"} />
							</div>
						</div>
						<div className="w-[210px] rounded-lg bg-white flex flex-row justify-between pl-6 items-center pr-4">
							<div className="">
								<h3 className="text-gray text-normal font-normal leading-[28px]">
									In Progress
								</h3>
								<h3 className="text-black text-3xl font-normal leading-[28px]">
									42
								</h3>
							</div>
							<div className="h-[30px] w-[30px] rounded-full">
								<WaitingIcon height={"100%"} width={"100%"} />
							</div>
						</div>
					</div>
					<div className="h-[80px] flex flex-row justify-between">
						<div className="w-[210px] rounded-lg bg-white flex flex-row justify-between pl-6 items-center pr-4">
							<div className="">
								<h3 className="text-gray text-normal font-normal leading-[28px]">
									Canceled
								</h3>
								<h3 className="text-black text-3xl font-normal leading-[28px]">
									10
								</h3>
							</div>
							<div className="h-[30px] w-[30px] rounded-full">
								<CanceledIcon height={"100%"} width={"100%"} />
							</div>
						</div>
						<div className="w-[210px] rounded-lg bg-white flex flex-row justify-between pl-6 items-center pr-4">
							<div className="">
								<h3 className="text-gray text-normal font-normal leading-[28px]">
									Escalated to MA
								</h3>
								<h3 className="text-black text-3xl font-normal leading-[28px]">
									08
								</h3>
							</div>
							<div className="h-[30px] w-[30px] rounded-full">
								<FailedIcon height={"100%"} width={"100%"} />
							</div>
						</div>
					</div>
				</div>
				<div className="min-h-[317px] w-[430px] overflow-y-hidden">
					<h4 className="mb-6">Esclations(03)</h4>
					<div className="bg-white">
						<Table escalated={true} />
					</div>
				</div>
				<div
					className="min-h-[32px] w-full bg-white flex justify-center items-center border-t border-t-[#CBD5E0] cursor-pointer"
					onClick={() => {
						navigate("/patients");
					}}
				>
					<span className="text-primary">View All</span>
				</div>
			</div>
			<div>
				<div className="mb-[32px]">
					<h4 className="mb-6 text-xl font-light text-tertiaryText">
						Process Stats
					</h4>
					<div className="h-[280px] w-[885px] bg-white rounded-lg">
						<ProcessStatsChart />
					</div>
				</div>
				<div className="flex flex-row justify-between items-center">
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
		</div>
	);
};

export default Dashboard;
