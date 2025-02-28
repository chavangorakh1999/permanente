import React from "react";
import ProcessStatsChart from "../components/ProcessStatsChart";
import BarChartComponent from "../components/BarChart";
import SingleLineChart from "../components/SingleLineChart";
import SectionPieChart from "../components/SectionPieChart";
import { motion } from "motion/react";
import { SlideUp } from "../animations/SlideUp";

const Reports = () => {
	return (
		<motion.div
			className="h-full flex flex-col overflow-y-scroll no-scrollbar pt-[37px]"
			variants={SlideUp}
			initial="hidden"
			transition={{ duration: 0.5 }}
			animate="visible"
		>
			<div className="flex flex-row justify-between w-full">
				<div className="mb-[32px]">
					<h4 className="mb-6 text-xl font-light text-tertiaryText">
						Process Stats
					</h4>
					<div className="h-[280px] w-[885px] bg-white rounded-lg">
						<ProcessStatsChart />
					</div>
				</div>
				<div className="mb-[32px] w-[32%]">
					<h4 className="mb-6 text-xl font-light text-tertiaryText">
						Weekly Visitors
					</h4>
					<div className="h-[280px] w-full bg-white rounded-lg">
						<SingleLineChart />
					</div>
				</div>
			</div>
			<div className="flex flex-row justify-between">
				<div className="h-[317px] w-[430px]">
					<h4 className="mb-6 h-[13px]">Visit By Time</h4>
					<BarChartComponent />
				</div>
				<div className="h-[317px] w-[430px]">
					<h4 className="mb-6 h-[13px]">Visit By Agent</h4>
					<BarChartComponent />
				</div>
				<div className="h-[317px] w-[430px]">
					<h4 className="mb-6 h-[13px]">Appointments</h4>
					<SectionPieChart />
				</div>
			</div>
		</motion.div>
	);
};

export default Reports;
