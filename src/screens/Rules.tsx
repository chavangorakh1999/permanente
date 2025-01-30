import React from "react";
import { ReactComponent as ArrowsClockCircle } from "../assets/icons/ArrowsClockCircle.svg";
import { ReactComponent as Mobile } from "../assets/icons/Mobile.svg";
import { ReactComponent as Email } from "../assets/icons/Email.svg";
const Rules = () => {
	return (
		<div className="w-full h-full flex flex-row overflow-y-scroll no-scrollbar pt-[37px]">
			<div className="min-w-[300px] h-fit  mr-[10px] py-4 bg-white rounded-xl">
				<div className="py-4 flex flex-row justify-start items-center px-6">
					<div className="h-5 w-5 mr-3">
						<ArrowsClockCircle height="100%" width="100%" />
					</div>
					<h4 className="text-gray text-xl">No of iterations</h4>
				</div>
				<div className="py-4 flex flex-row justify-start items-center px-6">
					<div className="h-5 w-5 mr-3">
						<ArrowsClockCircle height="100%" width="100%" />
					</div>
					<h4 className="text-gray text-xl">Response Waiting Time</h4>
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
						<ArrowsClockCircle height="100%" width="100%" />
					</div>
					<h4 className="text-gray text-xl">Default Templates</h4>
				</div>
			</div>
			<div className="w-full h-fit p-8 bg-white rounded-xl">
				<div className="flex flex-row">
					<div></div>
					<div></div>
				</div>
				<div className="flex flex-col">
					<div></div>
					<div className="mb-[20px]">
						<input
							id="email"
							name="email"
							type="email"
							placeholder="Type AI agent name or ID"
							required
							autoComplete="email"
							className="block w-full bg-gray100 rounded-lg p-4 text-base text-gray-900  placeholder:text-gray-400 focus:outline focus:outline-1 focus:-outline-offset-1 focus:outline-gray sm:text-sm/6"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Rules;
