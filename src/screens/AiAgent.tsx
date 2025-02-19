import React, { useState } from "react";
import CountCard from "../components/CountCard";
import { ReactComponent as People } from "../assets/icons/People.svg";
import Table from "../components/Table";
import ProfileDetails from "../components/ProfileDetails";
import { globalColors } from "../utils/colors";
import { motion } from "motion/react";
import { SlideUp } from "../animations/SlideUp";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const AiAgent = () => {
	//Mainting State for Table
	const [isTableMinimised, setIsTableMinimised] = useState(false);
	const [activePatient, setActivePatient] = useState({});
	const [activeTab, setActiveTab] = useState("active");
	const [selectedRow, setSelectedRow] = useState<number | null>(null);
	const { state } = useLocation();

	// Retrieve all patients from Redux
	const patients = useSelector((state: RootState) => state.patients.patients);

	// Total patients count
	const totalPatients = patients.length;

	// Aggregate counts based on patient status
	const statusCounts = patients.reduce((acc, patient) => {
		// If patientStatus is an object, extract its patientStatus property; otherwise, use it directly.
		const status =
			patient.patientStatus && typeof patient.patientStatus === "object"
				? patient.patientStatus.patientStatus
				: (patient.patientStatus as string) || "Unknown";
		acc[status] = (acc[status] || 0) + 1;
		return acc;
	}, {} as Record<string, number>);

	return (
		<motion.div
			className="h-full"
			variants={SlideUp}
			initial="hidden"
			transition={{ duration: 0.5 }}
			animate="visible"
		>
			{!isTableMinimised && (
				<div className="flex flex-row pt-[22px] gap-x-[25px]">
					<CountCard
						Title="Total Patients"
						Count={totalPatients || 0}
						Icon={<People fill={globalColors.secondaryColor} />}
						BgColor="bg-secondary"
					/>
					<CountCard
						Title="Confirmed"
						Count={statusCounts["Confirmed"] || 0}
						Icon={<People fill={globalColors.lightGreenBg} />}
						BgColor="bg-lightGreen"
					/>
					<CountCard
						Title="Rescheduled"
						Count={statusCounts["Rescheduled"] || 0}
						Icon={<People fill="#A0AEC0" />}
						BgColor="bg-[#F7FAFC]"
					/>
					<CountCard
						Title="Cancelled"
						Count={statusCounts["Cancelled"] || 0}
						Icon={<People fill="#ED8936" />}
						BgColor="bg-[#FFFAF0]"
					/>
					<CountCard
						Title="Escalations"
						Count={statusCounts["Escalated"] || 0}
						Icon={<People fill="#E53E3E" />}
						BgColor="bg-[#FFF5F5]"
					/>
				</div>
			)}
			<div
				className={`flex ${
					isTableMinimised ? "flex-row" : "flex-col"
				} w-full h-full bg-white mt-[22px] mb-[100px] rounded-xl divide-y divide-solid divide-[#EBEBEB]`}
			>
				{!isTableMinimised && (
					<div className="flex flex-row">
						<div
							className={`h-[60px] ${
								activeTab === "active" ? "bg-[#EBF8FF]" : ""
							} flex justify-center items-center ml-1 mt-1 rounded-tl-lg px-6`}
							onClick={() => {
								setActiveTab("active");
							}}
						>
							<h3
								className={`${
									activeTab === "active"
										? "text-primary text-xl font-semibold"
										: "text-gray text-[17px] font-normal"
								}  leading-[16px]`}
							>
								Active Agents
							</h3>
						</div>
						<div
							className={`h-[60px] flex justify-center ml-1 mt-1 items-center px-6 ${
								activeTab === "completed" ? "bg-[#EBF8FF]" : ""
							}`}
							onClick={() => {
								setActiveTab("completed");
							}}
						>
							<h3
								className={`leading-[16px] ${
									activeTab === "completed"
										? "text-primary text-xl font-semibold"
										: "text-gray text-[17px] font-normal"
								}`}
							>
								Completed Agents
							</h3>
						</div>
					</div>
				)}
				<Table
					isTableMinimised={isTableMinimised}
					activeTab={activeTab}
					setIsTableMinimised={setIsTableMinimised}
					setActivePatient={setActivePatient}
					selectedRow={selectedRow}
					sortBy={state?.sortBy}
					setSelectedRow={setSelectedRow}
				/>
				{isTableMinimised && (
					<ProfileDetails
						activePatient={activePatient}
						setActivePatient={setActivePatient}
					/>
				)}
			</div>
		</motion.div>
	);
};

export default AiAgent;
