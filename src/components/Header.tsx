import React from "react";
import { ReactComponent as LogoLg } from "../assets/icons/Logo.svg";
import { ReactComponent as Info } from "../assets/icons/Info.svg";
import { ReactComponent as Bell } from "../assets/icons/Bell.svg";
import { ReactComponent as DownArrow } from "../assets/icons/DownArrow.svg";
import { ReactComponent as Profile } from "../assets/icons/Profile.svg";
const Header = (props: any) => {
	let { setIsTableMinimised } = props;
	return (
		<div className="sticky top-0 h-[76px] w-full bg-[#F1F4FB] flex items-center justify-between py-4 z-20">
			<div>
				<LogoLg />
			</div>
			<div className="flex flex-row justify-center items-center h-[42px] gap-x-[10px]">
				<div className="flex justify-center items-center py-4 px-6 rounded-full bg-white">
					<h2 className="font-normal text-normal">Dashboard</h2>
				</div>
				<div
					className="flex justify-center items-center py-4 px-6 rounded-full bg-primary"
					onClick={() => setIsTableMinimised(false)}
				>
					<h2 className="text-white font-normal text-normal">AI Agents</h2>
				</div>
				<div className="flex justify-center items-center py-4 px-6 rounded-full bg-white">
					<h2 className="font-normal text-normal">Reports</h2>
				</div>
				<div className="flex justify-center items-center py-4 px-6 rounded-full bg-white">
					<h2 className="font-normal text-normal">Rules</h2>
				</div>
			</div>
			<div className="flex flex-row justify-center items-center h-[42px] gap-x-[12px]">
				<div className="rounded-full h-full w-[42px] p-[9px] bg-white">
					<Info height="100%" width="100%" />
				</div>
				<div className="rounded-full h-full w-[42px] p-[9px] bg-white">
					<Bell height="100%" width="100%" />
				</div>
				<div className="flex flex-row justify-center items-center rounded-full h-full pl-3 pr-1 py-[6px] bg-white gap-x-[9px]">
					<DownArrow />
					<Profile height="100%" width="100%" />
				</div>
			</div>
		</div>
	);
};

export default Header;
