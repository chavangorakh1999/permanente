import React from "react";
import Header from "../components/AdminHeader";
import NurseHeader from "../components/NurseHeader";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import PatientHeader from "../components/PatientHeader";
const DashboardLayout = () => {
	const { user } = useSelector((state: RootState) => state.auth);
	return (
		<div className="flex w-full  min-h-screen  max-h-screen bg-blue-100 justify-center overflow-hidden px-[50px] pb-[20px]">
			<div className="flex flex-col font-normal max-w-full max-h-full overflow-hidden w-[1440px]">
				{user?.roles?.some((role) => role.name === "admin") && <Header />}
				{user?.roles?.some((role) => role.name === "nurse") && <NurseHeader />}
				{user?.roles?.some((role) => role.name === "patient") && (
					<PatientHeader />
				)}
				<Outlet />
			</div>
		</div>
	);
};

export default DashboardLayout;
