import React, { useState } from "react";
import Header from "../components/Header";
import CountCard from "../components/CountCard";
import { ReactComponent as People } from "../assets/icons/People.svg";
import Table from "../components/Table";
import ProfileDetails from "../components/ProfileDetails";
const AiAgent = () => {
	//Mainting State for Table
	const [isTableMinimised, setIsTableMinimised] = useState(false);
	const [activePatient, setActivePatient] = useState({});
	return (
		<div className="h-full">
			<Header setIsTableMinimised={setIsTableMinimised} />
			{!isTableMinimised && (
				<div className="flex flex-row pt-[22px] gap-x-[25px]">
					<CountCard
						Title="Total Agents"
						Count="108"
						Icon={<People fill="#009CBD" />}
						BgColor="bg-secondary"
					/>
					<CountCard
						Title="Confirmed"
						Count="72"
						Icon={<People fill="#25855A" />}
						BgColor="bg-lightGreen"
					/>
					<CountCard
						Title="Rescheduled"
						Count="23"
						Icon={<People fill="#A0AEC0" />}
						BgColor="bg-[#F7FAFC]"
					/>
					<CountCard
						Title="Cancelled"
						Count="07"
						Icon={<People fill="#ED8936" />}
						BgColor="bg-[#FFFAF0]"
					/>
					<CountCard
						Title="Escalations"
						Count="08"
						Icon={<People fill="#E53E3E" />}
						BgColor="bg-[#FFF5F5]"
					/>
				</div>
			)}
			<div
				className={`flex ${
					isTableMinimised ? "flex-row" : "flex-col"
				} w-full h-full bg-white mt-[22px] rounded-xl divide-y divide-solid divide-[#EBEBEB]`}
			>
				{!isTableMinimised && (
					<div className="flex flex-row">
						<div className="h-[60px] w-[161px] bg-[#EBF8FF] flex justify-center items-center ml-1 mt-1 rounded-tl-lg">
							<h3 className="text-primary text-xl font-semibold leading-[16px]">
								Active Agents
							</h3>
						</div>
						<div className="h-[60px] w-[161px] flex justify-center items-center rounded-tl-lg">
							<h3 className="text-[17px] font-normal leading-[16px] text-gray">
								Completed Agents
							</h3>
						</div>
					</div>
				)}
				<Table
					isTableMinimised={isTableMinimised}
					setIsTableMinimised={setIsTableMinimised}
					setActivePatient={setActivePatient}
				/>
				{isTableMinimised && (
					<ProfileDetails
						activePatient={activePatient}
						setActivePatient={setActivePatient}
					/>
				)}
			</div>
		</div>
	);
};

export default AiAgent;
