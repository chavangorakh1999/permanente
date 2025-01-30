import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
const DashboardLayout = () => {
	return (
		<div className="flex w-full  min-h-screen  max-h-screen bg-blue-100 justify-center overflow-hidden px-[50px] pb-[20px]">
			<div className="flex flex-col font-normal max-w-full max-h-full overflow-hidden w-[1440px]">
				<Header />
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
