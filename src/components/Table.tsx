import React, { useEffect } from "react";
import {
	useReactTable,
	getCoreRowModel,
	flexRender,
	ColumnDef,
} from "@tanstack/react-table";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../redux/actions/patientActions";
import { RootState, AppDispatch } from "../store";
import { ReactComponent as Success } from "../assets/icons/Success.svg";
import { ReactComponent as Failed } from "../assets/icons/Failed.svg";
import { ReactComponent as NotAvailable } from "../assets/icons/NotAvailable.svg";
import { ReactComponent as Waiting } from "../assets/icons/Waiting.svg";
import { ReactComponent as Error } from "../assets/icons/Error.svg";
import { ReactComponent as SuccessIcon } from "../assets/icons/SuccessIcon.svg";
import { ReactComponent as ProfilePlaceholder } from "../assets/icons/ProfilePlaceholder.svg";
import { Patient } from "../types/patient";
import IconInfo from "./IconInfo";
import StatusButton from "./StatusButton";

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

const getStatusFormatting = (status: { label: string; id: string }) => {
	switch (status.id) {
		case "pending":
			return (
				<StatusButton
					agentStatus={status.label}
					textColor={"text-[#4A5568]"}
					bgColor={"bg-[#EDF2F7]"}
				/>
			);
		case "escalated":
			return (
				<StatusButton
					agentStatus={status.label}
					textColor={"text-[#E53E3E]"}
					bgColor={"bg-[#FFF5F5]"}
				/>
			);
		case "work-in-progress":
			return (
				<StatusButton
					agentStatus={status.label}
					textColor={"text-[#4A5568]"}
					bgColor={"bg-[#EDF2F7]"}
				/>
			);
		case "completed":
			return (
				<StatusButton
					agentStatus={status.label}
					textColor={"text-[#22543D]"}
					bgColor={"bg-[#C6F6D5]"}
				/>
			);
		case "scheduled":
			return (
				<StatusButton
					agentStatus={status.label}
					textColor={"text-[#2B6CB0]"}
					bgColor={"bg-[#EBF8FF]"}
				/>
			);
		case "cancelled":
			return (
				<StatusButton
					agentStatus={status.label}
					textColor={"text-[#DD6B20]"}
					bgColor={"bg-[#FFFAF0]"}
				/>
			);
		default:
			return (
				<StatusButton
					agentStatus={status.label}
					textColor={"text-[#4A5568]"}
					bgColor={"bg-[#EDF2F7]"}
				/>
			);
	}
};
const Table = (props: any) => {
	const dispatch = useDispatch<AppDispatch>();
	const patients = useSelector((state: RootState) => state.patients.patients);

	useEffect(() => {
		dispatch(fetchPatients());
	}, [dispatch]);
	const {
		isTableMinimised,
		setIsTableMinimised,
		setActivePatient,
		setSelectedRow,
		selectedRow,
		escalated = false,
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
							{getStatusFormatting({
								id: info.getValue().agentStatusId,
								label: info.getValue().agentStatus,
							})}
						</div>
					),
				},
				{
					accessorKey: "patientStatus",
					header: "Patient Status",
					cell: (info) => (
						<div className="py-[8px] px-[24px]">
							{getStatusFormatting({
								id: info.getValue().patientStatusId,
								label: info.getValue().patientStatus,
							})}
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
								className="flex flex-row pt-[20px] pb-[19px] pl-[10px] w-full items-center cursor-pointer"
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

	const escalationColumns: ColumnDef<Patient>[] = [
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
							<div className="flex flex-row pt-[20px] pb-[19px] pl-[10px] w-full items-center cursor-pointer">
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
					accessorKey: "risk",
					header: "Risk",
					cell: (info) => {
						const rowData = info.row.original;
						return (
							<div className="px-4 py-5">
								<h5 className="text-large font-semibold">
									{`${rowData.risk ?? ""}`}
								</h5>
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
			],
		},
	];
	let columns = escalated
		? escalationColumns
		: isTableMinimised
		? minimisedColumns
		: maxcolumns;
	const table = useReactTable({
		data: patients,
		columns,
		getCoreRowModel: getCoreRowModel(),
	});

	return (
		<div
			className={`${
				isTableMinimised ? "w-[444px]" : "min-w-full"
			} border-r border-[#E2E8F0] max-h-full ${
				!escalated ? "overflow-y-scroll" : ""
			}`}
		>
			<table
				className={`${
					isTableMinimised ? "w-[444px]" : "min-w-full"
				} border-collapse divide-y divide-solid divide-[#EBEBEB] max-h-full`}
			>
				<thead
					className={`h-[45px] sticky top-0  z-[10] ${
						escalated ? "bg-primary" : "bg-white"
					}`}
				>
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
											className={`text-normal font-semibold ${
												escalated ? "text-white" : "text-gray800"
											} px-3 pb-1 pl-5 text-left`}
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
