import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PATHS from "../routes/paths";
import ProfilePopover from "./ProfilePopover";
import { ReactComponent as LogoLg } from "../assets/icons/Logo.svg";
import { ReactComponent as Info } from "../assets/icons/Info.svg";
import { ReactComponent as Bell } from "../assets/icons/Bell.svg";
import { globalColors } from "../utils/colors";

const Header = (props: any) => {
	const location = useLocation();
	const navigate = useNavigate();
	const navItems = [
		{ path: PATHS.DASHBOARD, label: "Dashboard" },
		{ path: PATHS.PATIENTS, label: "Patients" },
		{ path: PATHS.AI_AGENTS, label: "AI Agents" },
		{ path: PATHS.REPORTS, label: "Reports" },
		{ path: PATHS.RULES, label: "Rules" },
	];

	return (
		<div className="flex-none sticky top-0 h-[76px] bg-blue-100 flex items-center justify-between py-4 z-20">
			<div
				className="cursor-pointer"
				onClick={() => {
					navigate("/dashboard");
				}}
			>
				<LogoLg />
			</div>
			<div className="flex flex-row justify-center items-center h-[42px] gap-x-[10px]">
				{navItems.map((item, index) => (
					<div
						key={index}
						className={`flex justify-center items-center py-4 px-6 rounded-full cursor-pointer  ${
							location.pathname === item.path
								? `${globalColors.secondaryBg} text-white`
								: "bg-white"
						}`}
						onClick={() => {
							navigate(item.path);
						}}
					>
						<h2 className="font-normal text-normal">{item.label}</h2>
					</div>
				))}
			</div>
			<div className="flex flex-row justify-center items-center h-[42px] gap-x-[12px]">
				<div className="rounded-full h-full w-[42px] p-[9px] bg-white">
					<Info height="100%" width="100%" />
				</div>
				<div className="rounded-full h-full w-[42px] p-[9px] bg-white">
					<Bell height="100%" width="100%" />
				</div>
				<ProfilePopover />
			</div>
		</div>
	);
};

export default Header;
