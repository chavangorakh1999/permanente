import React from "react";
import { ReactComponent as ArrowsClockCircle } from "../assets/icons/ArrowsClockCircle.svg";
import { ReactComponent as Mobile } from "../assets/icons/Mobile.svg";
import { ReactComponent as Email } from "../assets/icons/Email.svg";
import { ReactComponent as WaitingClock } from "../assets/icons/WaitingClock.svg";
import { ReactComponent as Template } from "../assets/icons/Template.svg";
import { motion } from "motion/react";
import { SlideUp } from "../animations/SlideUp";
import Dropdown from "../components/DropDown";

const Rules = () => {
	return (
		<motion.div
			className="w-full h-full flex flex-row overflow-y-scroll no-scrollbar pt-[37px]"
			variants={SlideUp}
			initial="hidden"
			transition={{ duration: 0.5 }}
			animate="visible"
		>
			<div className="min-w-[300px] h-fit  mr-[10px] py-4 bg-white rounded-xl">
				<div className="py-4 flex flex-row justify-start items-center px-6">
					<div className="h-5 w-5 mr-3">
						<ArrowsClockCircle height="100%" width="100%" />
					</div>
					<h4 className="text-gray text-xl">No of iterations</h4>
				</div>
				<div className="py-4 flex flex-row justify-start items-center px-6 bg-primary">
					<div className="h-5 w-5 mr-3">
						<WaitingClock height="100%" width="100%" stroke="white" />
					</div>
					<h4 className="text-white text-xl">Response Waiting Time</h4>
				</div>
				<div className="py-4 flex flex-row justify-start items-center px-6">
					<div className="h-5 w-5 mr-3">
						<Mobile height="100%" width="100%" />
					</div>
					<h4 className="text-gray text-xl">AI Agent Mb Number</h4>
				</div>
				<div className="py-4 flex flex-row justify-start items-center px-6">
					<div className="h-5 w-5 mr-3">
						<Email height="100%" width="100%" />
					</div>
					<h4 className="text-gray text-xl">Standard Email ID</h4>
				</div>
				<div className="py-4 flex flex-row justify-start items-center px-6">
					<div className="h-5 w-5 mr-3">
						<Template height="100%" width="100%" />
					</div>
					<h4 className="text-gray text-xl">Default Templates</h4>
				</div>
			</div>
			<div className="w-full h-fit p-8 bg-white rounded-xl">
				<div className="flex flex-row pb-[30px] border-b border-[#E2E8F0]">
					<div className="flex flex-col w-[60%] h-fit">
						<h4 className="mb-2 text-3xl font-semibold text-tertiaryText">
							Response Waiting Time
						</h4>
						<span className="text-normal text-gray">
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley of type and
							scrambled.
						</span>
					</div>
					<div className="w-[40%] flex justify-end items-start">
						<button
							title="Add New"
							type="button"
							className="py-1 px-3 rounded-lg border-1 outline outline-1 outline-primary text-primary text-normal"
						>
							+ Add New
						</button>
					</div>
				</div>
				<div className="flex flex-col pt-[30px]">
					<h6 className="text-xl font-semibold text-tertiaryText mb-[30px]">
						Select AI Agent to set the rule
					</h6>
					<div className="mb-[30px]">
						<input
							id="aiagent"
							name="aiagent"
							type="text"
							placeholder="Type AI agent name or ID"
							className="block w-full bg-gray100 rounded-lg p-4 text-base text-gray-900  placeholder:text-gray-400 focus:outline focus:outline-1 focus:-outline-offset-1 focus:outline-gray sm:text-sm/6"
						/>
					</div>
					<div className="mb-[10px] flex flex-row justify-between items-center">
						<h5 className="text-3xl font-semibold text-tertiaryText">
							Set Threshold
						</h5>
						<h6 className="text-2xl text-gray font-light">
							Before Appointment Day
						</h6>
					</div>
					<div className="flex flex-row justify-between items-center py-[20px] border-b border-[#E2E8F0]">
						<h6 className="text-2xl font-light text-gray">
							SMS/Email Initation
						</h6>
						<div>
							<input
								className="w-[138px] h-[40px] py-[13px] px-[16px] border border-[#DFE5F9] rounded-[5px] mr-[14px] placeholder:text-center"
								placeholder="00"
								type="number"
								name="count"
								id="count"
							/>
							<Dropdown className="w-[138px] h-[40px] py-[13px] px-[16px]" />
						</div>
					</div>
					<div className="flex flex-row justify-between items-center py-[20px] border-b border-[#E2E8F0]">
						<h6 className="text-2xl font-light text-gray">Calls Initiation</h6>
						<div>
							<input
								className="w-[138px] h-[40px] py-[13px] px-[16px] border border-[#DFE5F9] rounded-[5px] mr-[14px] placeholder:text-center"
								placeholder="00"
								type="number"
								name="count"
								id="count"
							/>
							<Dropdown className="w-[138px] h-[40px] py-[13px] px-[16px]" />
						</div>
					</div>
					<div className="flex flex-row justify-between items-center py-[20px] border-b border-[#E2E8F0]">
						<h6 className="text-2xl font-light text-gray">Escalation</h6>
						<div>
							<input
								className="w-[138px] h-[40px] py-[13px] px-[16px] border border-[#DFE5F9] rounded-[5px] mr-[14px] placeholder:text-center"
								placeholder="00"
								type="number"
								name="count"
								id="count"
							/>
							<Dropdown className="w-[138px] h-[40px] py-[13px] px-[16px]" />
						</div>
					</div>
					<div className="pt-6 flex justify-end">
						<button
							type="button"
							className="rounded-md bg-white text-primary border border-primary h-[48px] w-[138px] mr-[14px]"
						>
							Cancel
						</button>

						<button
							type="button"
							className="rounded-md bg-primary text-white h-[48px] w-[138px]"
						>
							Set Rule
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default Rules;
