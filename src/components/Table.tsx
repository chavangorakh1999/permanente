import React from "react";
import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	ColumnDef,
} from "@tanstack/react-table";
import { ReactComponent as Success } from "../assets/icons/Success.svg";
import { ReactComponent as Failed } from "../assets/icons/Failed.svg";
import { ReactComponent as NotAvailable } from "../assets/icons/NotAvailable.svg";
import { ReactComponent as Waiting } from "../assets/icons/Waiting.svg";
import { ReactComponent as Error } from "../assets/icons/Error.svg";
import { ReactComponent as SuccessIcon } from "../assets/icons/SuccessIcon.svg";
import { ReactComponent as ProfilePlaceholder } from "../assets/icons/ProfilePlaceholder.svg";
import { Patient } from "../types/person";
import IconInfo from "./IconInfo";

const data: Patient[] = [
	{
		id: "1",
		aptDate: "2025-01-15",
		aptTime: "10:00 AM",
		age: "52",
		gender: "Male",
		mrn: "11098",
		honorific: "Mr.",
		name: "William Pointing",
		email: "william.pointing@example.com",
		phone: "+1 (123) 456-7890",
		weight: "175",
		bloodGroup: "O+",
		risk: "High",
		noShow: "No",
		isScheduled: true,
		patientId: "11098 - William Pointing",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "not_available",
		a5: "success",
		a6: "warning",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Escalated",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/wQj5BDN/image.png",
	},
	{
		id: "2",
		aptDate: "2025-01-15",
		aptTime: "11:30 AM",
		age: "45",
		gender: "Male",
		mrn: "11046",
		honorific: "Mr.",
		name: "James Gilchrist",
		email: "james.gilchrist@example.com",
		phone: "+1 (234) 567-8901",
		weight: "168",
		bloodGroup: "B+",
		risk: "Medium",
		noShow: "No",
		isScheduled: true,
		patientId: "11046 - James Gilchrist",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "success",
		a5: "warning",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Work in progress",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/TPMJFcx/image-copy.png",
	},
	{
		id: "3",
		aptDate: "2025-01-15",
		aptTime: "9:00 AM",
		age: "38",
		gender: "Male",
		mrn: "11025",
		honorific: "Mr.",
		name: "Michael Collins",
		email: "michael.collins@example.com",
		phone: "+1 (345) 678-9012",
		weight: "170",
		bloodGroup: "A-",
		risk: "Low",
		noShow: "No",
		isScheduled: true,
		patientId: "11025 - Michael Collins",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "failed",
		a5: "waiting",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Completed",
		},
		patientStatus: {
			patientStatus: "Scheduled",
		},
		imageUrl: "https://i.ibb.co/2MMCZNL/image-copy-4.png",
	},
	{
		id: "4",
		aptDate: "2025-01-15",
		aptTime: "2:00 PM",
		age: "41",
		gender: "Male",
		mrn: "11048",
		honorific: "Mr.",
		name: "Nicholas Trump",
		email: "nicholas.trump@example.com",
		phone: "+1 (456) 789-0123",
		weight: "185",
		bloodGroup: "AB+",
		risk: "Medium",
		noShow: "No",
		isScheduled: true,
		patientId: "11048 - Nicholas Trump",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "not_available",
		a5: "waiting",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Work in progress",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/Lkr2QBX/image-copy-3.png",
	},
	{
		id: "5",
		aptDate: "2025-01-15",
		aptTime: "3:30 PM",
		age: "49",
		gender: "Male",
		mrn: "11020",
		honorific: "Mr.",
		name: "William Pointing",
		email: "william.p2@example.com",
		phone: "+1 (567) 890-1234",
		weight: "172",
		bloodGroup: "O-",
		risk: "High",
		noShow: "Yes",
		isScheduled: true,
		patientId: "11020 - William Pointing",
		a1: "success",
		a2: "success",
		a3: "failed",
		a4: "waiting",
		a5: "waiting",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Escalated",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/BVHstk8/image-copy-2.png",
	},
	{
		id: "1",
		aptDate: "2025-01-15",
		aptTime: "10:00 AM",
		age: "52",
		gender: "Male",
		mrn: "11098",
		honorific: "Mr.",
		name: "William Pointing",
		email: "william.pointing@example.com",
		phone: "+1 (123) 456-7890",
		weight: "175",
		bloodGroup: "O+",
		risk: "High",
		noShow: "No",
		isScheduled: true,
		patientId: "11098 - William Pointing",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "not_available",
		a5: "success",
		a6: "warning",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Escalated",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/wQj5BDN/image.png",
	},
	{
		id: "2",
		aptDate: "2025-01-15",
		aptTime: "11:30 AM",
		age: "45",
		gender: "Male",
		mrn: "11046",
		honorific: "Mr.",
		name: "James Gilchrist",
		email: "james.gilchrist@example.com",
		phone: "+1 (234) 567-8901",
		weight: "168",
		bloodGroup: "B+",
		risk: "Medium",
		noShow: "No",
		isScheduled: true,
		patientId: "11046 - James Gilchrist",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "success",
		a5: "warning",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Work in progress",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/TPMJFcx/image-copy.png",
	},
	{
		id: "3",
		aptDate: "2025-01-15",
		aptTime: "9:00 AM",
		age: "38",
		gender: "Male",
		mrn: "11025",
		honorific: "Mr.",
		name: "Michael Collins",
		email: "michael.collins@example.com",
		phone: "+1 (345) 678-9012",
		weight: "170",
		bloodGroup: "A-",
		risk: "Low",
		noShow: "No",
		isScheduled: true,
		patientId: "11025 - Michael Collins",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "failed",
		a5: "waiting",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Completed",
		},
		patientStatus: {
			patientStatus: "Scheduled",
		},
		imageUrl: "https://i.ibb.co/2MMCZNL/image-copy-4.png",
	},
	{
		id: "4",
		aptDate: "2025-01-15",
		aptTime: "2:00 PM",
		age: "41",
		gender: "Male",
		mrn: "11048",
		honorific: "Mr.",
		name: "Nicholas Trump",
		email: "nicholas.trump@example.com",
		phone: "+1 (456) 789-0123",
		weight: "185",
		bloodGroup: "AB+",
		risk: "Medium",
		noShow: "No",
		isScheduled: true,
		patientId: "11048 - Nicholas Trump",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "not_available",
		a5: "waiting",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Work in progress",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/Lkr2QBX/image-copy-3.png",
	},
	{
		id: "5",
		aptDate: "2025-01-15",
		aptTime: "3:30 PM",
		age: "49",
		gender: "Male",
		mrn: "11020",
		honorific: "Mr.",
		name: "William Pointing",
		email: "william.p2@example.com",
		phone: "+1 (567) 890-1234",
		weight: "172",
		bloodGroup: "O-",
		risk: "High",
		noShow: "Yes",
		isScheduled: true,
		patientId: "11020 - William Pointing",
		a1: "success",
		a2: "success",
		a3: "failed",
		a4: "waiting",
		a5: "waiting",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Escalated",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/BVHstk8/image-copy-2.png",
	},
	{
		id: "1",
		aptDate: "2025-01-15",
		aptTime: "10:00 AM",
		age: "52",
		gender: "Male",
		mrn: "11098",
		honorific: "Mr.",
		name: "William Pointing",
		email: "william.pointing@example.com",
		phone: "+1 (123) 456-7890",
		weight: "175",
		bloodGroup: "O+",
		risk: "High",
		noShow: "No",
		isScheduled: true,
		patientId: "11098 - William Pointing",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "not_available",
		a5: "success",
		a6: "warning",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Escalated",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/wQj5BDN/image.png",
	},
	{
		id: "2",
		aptDate: "2025-01-15",
		aptTime: "11:30 AM",
		age: "45",
		gender: "Male",
		mrn: "11046",
		honorific: "Mr.",
		name: "James Gilchrist",
		email: "james.gilchrist@example.com",
		phone: "+1 (234) 567-8901",
		weight: "168",
		bloodGroup: "B+",
		risk: "Medium",
		noShow: "No",
		isScheduled: true,
		patientId: "11046 - James Gilchrist",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "success",
		a5: "warning",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Work in progress",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/TPMJFcx/image-copy.png",
	},
	{
		id: "3",
		aptDate: "2025-01-15",
		aptTime: "9:00 AM",
		age: "38",
		gender: "Male",
		mrn: "11025",
		honorific: "Mr.",
		name: "Michael Collins",
		email: "michael.collins@example.com",
		phone: "+1 (345) 678-9012",
		weight: "170",
		bloodGroup: "A-",
		risk: "Low",
		noShow: "No",
		isScheduled: true,
		patientId: "11025 - Michael Collins",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "failed",
		a5: "waiting",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Completed",
		},
		patientStatus: {
			patientStatus: "Scheduled",
		},
		imageUrl: "https://i.ibb.co/2MMCZNL/image-copy-4.png",
	},
	{
		id: "4",
		aptDate: "2025-01-15",
		aptTime: "2:00 PM",
		age: "41",
		gender: "Male",
		mrn: "11048",
		honorific: "Mr.",
		name: "Nicholas Trump",
		email: "nicholas.trump@example.com",
		phone: "+1 (456) 789-0123",
		weight: "185",
		bloodGroup: "AB+",
		risk: "Medium",
		noShow: "No",
		isScheduled: true,
		patientId: "11048 - Nicholas Trump",
		a1: "success",
		a2: "success",
		a3: "success",
		a4: "not_available",
		a5: "waiting",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Work in progress",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/Lkr2QBX/image-copy-3.png",
	},
	{
		id: "5",
		aptDate: "2025-01-15",
		aptTime: "3:30 PM",
		age: "49",
		gender: "Male",
		mrn: "11020",
		honorific: "Mr.",
		name: "William Pointing",
		email: "william.p2@example.com",
		phone: "+1 (567) 890-1234",
		weight: "172",
		bloodGroup: "O-",
		risk: "High",
		noShow: "Yes",
		isScheduled: true,
		patientId: "11020 - William Pointing",
		a1: "success",
		a2: "success",
		a3: "failed",
		a4: "waiting",
		a5: "waiting",
		a6: "waiting",
		a7: "waiting",
		a8: "waiting",
		agentStatus: {
			agentStatus: "Escalated",
		},
		patientStatus: {
			patientStatus: "Pending",
		},
		imageUrl: "https://i.ibb.co/BVHstk8/image-copy-2.png",
	},
];

const getStatusIcon = (status: string) => {
	switch (status) {
		case "success":
			return (
				<IconInfo>
					<Success />
				</IconInfo>
			);
		case "failed":
			return (
				<IconInfo>
					<Failed />
				</IconInfo>
			);
		case "not_available":
			return (
				<IconInfo>
					<NotAvailable />
				</IconInfo>
			);
		case "waiting":
			return <Waiting fill="#E2E8F0" />;
		case "error":
			return (
				<IconInfo>
					<Error />
				</IconInfo>
			);
		default:
			return <Waiting fill="#E2E8F0" />;
	}
};

const Table = (props: any) => {
	const {
		isTableMinimised,
		setIsTableMinimised,
		setActivePatient,
		setSelectedRow,
		selectedRow,
	} = props;

	const handleCellClick = (rowData: Patient, index: number) => {
		console.log(rowData);
		!isTableMinimised && setIsTableMinimised(true);
		setActivePatient(rowData);
		setSelectedRow(index);
		return;
	};

	const maxcolumns: ColumnDef<Patient>[] = [
		{
			header: "Active Agents", // Group Header
			columns: [
				{
					accessorKey: "patientId",
					header: "Patient ID / Name",
					cell: (info) => {
						const rowData = info.row.original;
						const index = info.row.index;
						return (
							<div
								className="px-4 py-5 cursor-pointer"
								onClick={() => handleCellClick(rowData, index)}
							>
								{info.getValue()}
							</div>
						);
					},
				},
				{
					header: "A_1",
					columns: [
						{
							accessorKey: "a1",
							header: "Data Collection",
							cell: (info) => {
								let val = info.getValue();
								return (
									<>
										<div className="absolute left-[50%] w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="px-4 py-5">
											<div className="flex justify-center items-center z-5">
												{getStatusIcon(val)}
											</div>
										</div>
									</>
								);
							}, // Custom rendering
						},
					],
				},
				{
					header: "A_2",
					columns: [
						{
							accessorKey: "a2",
							header: "Agent Initiation",
							cell: (info) => {
								let val = info.getValue();
								return (
									<>
										<div className="absolute left-[50%] w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="absolute left-0 w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="px-4 py-5">
											<div className="flex justify-center items-center z-5">
												{getStatusIcon(val)}
											</div>
										</div>
									</>
								);
							},
						},
					],
				},
				{
					header: "A_3",
					columns: [
						{
							accessorKey: "a3",
							header: "SMS / Email",
							cell: (info) => {
								let val = info.getValue();
								return (
									<>
										<div className="absolute left-[50%] w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="absolute left-0 w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="px-4 py-5">
											<div className="flex justify-center items-center z-5">
												{getStatusIcon(val)}
											</div>
										</div>
									</>
								);
							},
						},
					],
				},
				{
					header: "A_4",
					columns: [
						{
							accessorKey: "a4",
							header: "Calls Initiation",
							cell: (info) => {
								let val = info.getValue();
								return (
									<>
										<div className="absolute left-[50%] w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="absolute left-0 w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="px-4 py-5">
											<div className="flex justify-center items-center z-5">
												{getStatusIcon(val)}
											</div>
										</div>
									</>
								);
							},
						},
					],
				},
				{
					header: "A_5",
					columns: [
						{
							accessorKey: "a5",
							header: "Response",
							cell: (info) => {
								let val = info.getValue();
								return (
									<>
										<div className="absolute left-[50%] w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="absolute left-0 w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="px-4 py-5">
											<div className="flex justify-center items-center z-5">
												{getStatusIcon(val)}
											</div>
										</div>
									</>
								);
							},
						},
					],
				},
				{
					header: "A_6",
					columns: [
						{
							accessorKey: "a6",
							header: "Reschedule",
							cell: (info) => {
								let val = info.getValue();
								return (
									<>
										<div className="absolute left-[50%] w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="absolute left-0 w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="px-4 py-5">
											<div className="flex justify-center items-center z-5">
												{getStatusIcon(val)}
											</div>
										</div>
									</>
								);
							},
						},
					],
				},
				{
					header: "A_7",
					columns: [
						{
							accessorKey: "a7",
							header: "Transportation",
							cell: (info) => {
								let val = info.getValue();
								return (
									<>
										<div className="absolute left-[50%] w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="absolute left-0 w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="px-4 py-5">
											<div className="flex justify-center items-center z-5">
												{getStatusIcon(val)}
											</div>
										</div>
									</>
								);
							},
						},
					],
				},
				{
					header: "A_8",
					columns: [
						{
							accessorKey: "a8",
							header: "Escalation",
							cell: (info) => {
								let val = info.getValue();
								return (
									<>
										<div className="absolute left-0 w-[50%] h-[50%] top-[50%] border-dotted border-t-2 border-tertiary"></div>
										<div className="px-4 py-5">
											<div className="flex justify-center items-center z-5">
												{getStatusIcon(val)}
											</div>
										</div>
									</>
								);
							},
						},
					],
				},
				{
					accessorKey: "agentStatus",
					header: "Agent Status",
					cell: (info) => (
						<div className="py-[8px] px-[24px]">
							<div className="flex justify-center items-center bg-[#FFF5F5] h-[20px] rounded-[6px]">
								<h6 className="text-[#E53E3E] text-small font-semibold leading-4">
									{info.getValue().agentStatus}
								</h6>
							</div>
						</div>
					),
				},
				{
					accessorKey: "patientStatus",
					header: "Patient Status",
					cell: (info) => (
						<div className="py-[8px] px-[24px]">
							<div className="bg-[#EDF2F7] flex justify-center items-center h-[20px] rounded-[6px]">
								<h6 className=" text-[#4A5568] text-small font-semibold leading-4">
									{info.getValue().patientStatus}
								</h6>
							</div>
						</div>
					),
				},
			],
		},
	];

	const minimisedColumns: ColumnDef<Patient>[] = [
		{
			header: "Active Agents", // Group Header
			columns: [
				{
					accessorKey: "patientId",
					header: "Patient Details",
					cell: (info) => {
						const rowData = info.row.original;
						const rowIndex = info.row.index;
						return (
							<div
								className="flex flex-row pt-[20px] pb-[19px] pl-[20px] w-full items-center cursor-pointer"
								onClick={() => handleCellClick(rowData, rowIndex)}
							>
								<ProfilePlaceholder />
								<div className="flex flex-col pl-[10px]">
									<h5 className="text-large font-semibold">{rowData.name}</h5>
									<span
										className={`text-small font-light ${
											selectedRow === rowIndex ? "text-white" : "text-[#718096]"
										}`}
									>{`${rowData.age}, ${rowData.gender}, MRN#${rowData.mrn}`}</span>
								</div>
							</div>
						);
					},
				},
				{
					accessorKey: "aptDate",
					header: "Apt Date",
					cell: (info) => {
						const rowData = info.row.original;
						return (
							<div className="">
								<div className="flex flex-col">
									<h5 className="text-large font-semibold">
										{rowData.aptDate}
									</h5>
									<span
										className={`text-small font-light ${
											selectedRow === info.row.index
												? "text-white"
												: "text-[#718096]"
										}`}
									>
										${rowData.aptTime}
									</span>
								</div>
							</div>
						);
					},
				},
				{
					accessorKey: "status",
					header: "Status",
					cell: (info) => {
						// const rowData = info.row.original;
						return (
							<div className="px-4 py-5">
								<SuccessIcon />
							</div>
						);
					},
				},
			],
		},
	];
	let columns = isTableMinimised ? minimisedColumns : maxcolumns;
	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div
			className={`${
				isTableMinimised ? "w-[445px]" : "min-w-full"
			} border-r border-[#E2E8F0]`}
		>
			<table
				className={`${
					isTableMinimised ? "w-[444px]" : "min-w-full"
				} border-collapse divide-y divide-solid divide-[#EBEBEB]`}
			>
				<thead className="h-[45px]">
					{table
						.getHeaderGroups()
						.slice(1) // Skip the first header group
						.map((headerGroup, headerIndex: number) => (
							<tr
								key={headerGroup.id}
								className="divide-x divide-solid divide-[#EBEBEB]"
							>
								{headerGroup.headers.map((header, colIndex: number) =>
									headerIndex === 0 ||
									colIndex === 0 ||
									colIndex === 9 ||
									colIndex === 10 ? (
										<th
											key={header.id}
											colSpan={header.colSpan}
											className="text-normal font-semibold text-gray800 px-3 pb-1 pl-5 text-left"
										>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</th>
									) : (
										<th
											key={header.id}
											colSpan={header.colSpan}
											className="text-small font-light text-gray text-center px-3 pb-2"
										>
											{header.isPlaceholder
												? null
												: flexRender(
														header.column.columnDef.header,
														header.getContext()
												  )}
										</th>
									)
								)}
							</tr>
						))}
				</thead>
				<tbody className="divide-y divide-solid divide-[#EBEBEB]">
					{table.getRowModel().rows.map((row, index) => (
						<tr
							key={row.id}
							className={`${
								selectedRow === index && isTableMinimised
									? "bg-primary text-white"
									: ""
							}`}
						>
							{row.getVisibleCells().map((cell) => (
								<td key={cell.id} className="relative">
									{flexRender(cell.column.columnDef.cell, cell.getContext())}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
