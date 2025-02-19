import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { format } from "date-fns";
import "../styles/calendar.css";
import { ReactComponent as Profile } from "../assets/icons/Profile.svg";

const CalendarComponent: React.FC = () => {
	const [date, setDate] = useState<Date>(new Date());
	const [showPopover, setShowPopover] = useState<boolean>(false);
	const [selectedYear, setSelectedYear] = useState<number>(
		new Date().getFullYear()
	);
	const [selectedMonth, setSelectedMonth] = useState<number>(
		new Date().getMonth()
	);

	const handleYearChange = (change: number) => {
		setSelectedYear((prev) => prev + change);
	};

	const handleMonthSelect = (month: number) => {
		setSelectedMonth(month);
		const newDate = new Date(selectedYear, month, 1);
		setDate(newDate);
		setShowPopover(false);
	};

	return (
		<div className="bg-white p-6 rounded-xl shadow-lg">
			<div className="flex justify-between items-center mb-2">
				<h5 className="text-2xl font-semibold">Calendar</h5>
				<div className="relative">
					<button
						onClick={() => setShowPopover(!showPopover)}
						className="bg-white text-black px-4 py-2 rounded-lg border"
					>
						{format(date, "MMM yyyy")}
					</button>
					{showPopover && (
						<div className="absolute right-10 bg-white shadow-lg p-4 rounded-lg w-64">
							<div className="flex justify-between items-center mb-2">
								<button onClick={() => handleYearChange(-1)}>&#8592;</button>
								<h6 className="text-lg font-bold">{selectedYear}</h6>
								<button onClick={() => handleYearChange(1)}>&#8594;</button>
							</div>
							<div className="grid grid-cols-3 gap-2">
								{[
									"Jan",
									"Feb",
									"Mar",
									"Apr",
									"May",
									"Jun",
									"Jul",
									"Aug",
									"Sep",
									"Oct",
									"Nov",
									"Dec",
								].map((monthLabel, index) => (
									<button
										key={index}
										onClick={() => handleMonthSelect(index)}
										className={`px-4 py-2 rounded-lg border ${
											selectedMonth === index ? "bg-primary text-white" : ""
										}`}
									>
										{monthLabel}
									</button>
								))}
							</div>
							<div className="flex justify-between mt-4">
								<button
									onClick={() => setDate(new Date())}
									className="text-red-500"
								>
									Clear
								</button>
								<button
									onClick={() => setShowPopover(false)}
									className="bg-black text-white px-4 py-2 rounded-lg"
								>
									Done
								</button>
							</div>
						</div>
					)}
				</div>
			</div>

			<Calendar
				onChange={(value) => {
					const newSelectedDate = new Date(value as Date);
					setSelectedMonth(newSelectedDate.getMonth());
					setDate(newSelectedDate);
					console.log("Selected date:", newSelectedDate);
				}}
				value={date}
				activeStartDate={new Date(selectedYear, selectedMonth, 1)}
				tileClassName={({ date: tileDate }) =>
					tileDate.toDateString() === date.toDateString() ? "selected-day" : ""
				}
				view="month"
				className="custom-calendar border-none"
			/>

			<div className="flex justify-between my-6">
				<h5 className="text-xl font-semibold">Today’s appointments</h5>
				<span className="text-normal text-primary font-semibold">View All</span>
			</div>
			<div className="flex felx-row rounded-lg overflow-hidden w-full mt-5">
				<div className="w-2 bg-[#FFDAA7]"></div>
				<div className="bg-[#EDF2F7] w-full">
					<div className="pl-3 py-3 flex flex-row justify-start items-center">
						<div className="h-[50px] w-[50px]">
							<Profile height={"100%"} width={"100%"} />
						</div>
						<div className="pl-3">
							<h5 className="text-large font-[700]">Rachel Greene</h5>
							<span className="text-small font-light text-[#93939A]">
								Video Consultancy
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="flex felx-row rounded-lg overflow-hidden w-full mt-5">
				<div className="w-2 bg-[#FFDAA7]"></div>
				<div className="bg-[#EDF2F7] w-full">
					<div className="pl-3 py-3 flex flex-row justify-start items-center">
						<div className="h-[50px] w-[50px]">
							<Profile height={"100%"} width={"100%"} />
						</div>
						<div className="pl-3">
							<h5 className="text-large font-[700]">Rachel Greene</h5>
							<span className="text-small font-light text-[#93939A]">
								Video Consultancy
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CalendarComponent;
