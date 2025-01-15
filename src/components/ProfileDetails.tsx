import React from "react";
import { ReactComponent as Profile } from "../assets/icons/Profile.svg";
// import { ReactComponent as I } from "../assets/icons/I.svg";
import { ReactComponent as Waiting } from "../assets/icons/Waiting.svg";
import { ReactComponent as WaitingIcon } from "../assets/icons/WaitingIcon.svg";
import { ReactComponent as ScheduleIcon } from "../assets/icons/ScheduleIcon.svg";
import { ReactComponent as RightArrow } from "../assets/icons/RightArrow.svg";
import { ReactComponent as DataIcon } from "../assets/icons/DataIcon.svg";
import { ReactComponent as Success } from "../assets/icons/Success.svg";
import { ReactComponent as NotAvailable } from "../assets/icons/NotAvailable.svg";
import { ReactComponent as AgentIcon } from "../assets/icons/Agent.svg";
import { ReactComponent as Email } from "../assets/icons/Email.svg";
import { ReactComponent as Phone } from "../assets/icons/Phone.svg";
import { ReactComponent as Response } from "../assets/icons/Response.svg";
import { ReactComponent as Reschedule } from "../assets/icons/Reschedule.svg";
import { ReactComponent as Transportation } from "../assets/icons/Transportation.svg";
import { ReactComponent as Escalation } from "../assets/icons/Escalation.svg";

const ProfileDetails = (props: any) => {
	let { activePatient } = props;
	return (
		<div className="h-full px-[24px] py-[24px]">
			<div className="flex flex-row w-[859px] h-[169px] bg-secondary rounded-[8px] p-6">
				<div className="h-[120px] min-w-[120px]">
					{/* <Profile height="100%" width="100%" /> */}
					<img
						src={activePatient?.imageUrl}
						alt="profile"
						className="h-full w-full object"
					/>
				</div>
				<div className="w-full h-full ml-[24px]">
					<div className="w-full flex flex-row justify-between pb-[12px]">
						<div className="flex flex-col">
							<h5 className="text-2xl font-semibold text-primaryText">{`${activePatient?.honorific} ${activePatient?.name}`}</h5>
							<span className="text-normal text-[#2D3748]">{`${activePatient?.age}, ${activePatient?.gender}, MRN#${activePatient?.mrn}`}</span>
						</div>
						<div className="flex flex-row h-[42px] gap-x-[24px] divide-x  divide-gray">
							<div className="flex flex-row gap-x-[24px]">
								<div>
									<WaitingIcon height={"100%"} width={"100%"} />
								</div>
								<div>
									<ScheduleIcon height={"100%"} width={"100%"} />
								</div>
							</div>
							<div className="flex flex-col pl-[12px]">
								<div className="flex felx-row items-center">
									<span className="text-normal font-light text-gray">
										Risk:
										<span className="text-normal font-semibold text-red800 ml-1">
											{activePatient?.risk}
										</span>
									</span>
									{/* <I /> */}
								</div>
								<div className="flex felx-row items-center">
									<span className="text-normal font-light text-gray">
										No Show:
										<span className="text-normal font-semibold text-[#2D3748] ml-1">
											{activePatient?.noShow}
										</span>
									</span>
									{/* <I /> */}
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-row w-full border-t border-dotted border-[#CBD5E0] py-[12px] justify-between items-end">
						<div className="flex flex-row items-center justify-start gap-x-[30px]">
							<div className="flex flex-col">
								<span className="text-small font-light text-secondaryText">
									Mobile
								</span>
								<span className="text-normal font-light text-tertiaryText">
									{activePatient?.phone}
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-small font-light text-secondaryText">
									Email
								</span>
								<span className="text-normal font-light text-tertiaryText">
									{activePatient?.email}
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-small font-light text-secondaryText">
									Weight
								</span>
								<span className="text-normal font-light text-tertiaryText">
									{`${activePatient?.weight} pounds`}
								</span>
							</div>
							<div className="flex flex-col">
								<span className="text-small font-light text-secondaryText">
									Blood Group
								</span>
								<span className="text-normal font-light text-tertiaryText">
									{activePatient?.bloodGroup}
								</span>
							</div>
						</div>
						<div className="flex flex-row items-center gap-x-[8px]">
							<span className="text-normal font-semibold text-secondaryText">
								More Details
							</span>
							<RightArrow />
						</div>
					</div>
				</div>
			</div>
			<div className="mt-[50px] w-full pr-[86px]">
				<div className="w-full flex flex-row items-center justify-between pb-[25px]">
					<div className="flex flex-row items-center w-full h-full gap-x-[16px]">
						<div className="h-full">
							<Waiting fill="#0093B2" />
						</div>
						<div className="flex flex-row items-center gap-x-[16px]">
							<div className="h-[36px] w-[36px]">
								<DataIcon height={"100%"} width={"100%"} />
							</div>
							<div className="flex flex-col ">
								<span className="text-xl font-semibold text-primaryText">
									Data Collection
								</span>
								<span className="text-nsmall text-gray font-light">
									Data pulled from source successfully
								</span>
							</div>
						</div>
					</div>
					<div className="relative flex flex-row justify-between items-center w-full">
						<div className="absolute left-0 top-0 h-[23%] w-full border-b z-0 border-[#CBD5E0]" />
						{/* <div className="flex flex-col justify-center items-center"> */}
						<div className="z-5 flex flex-col items-start">
							<Success />
							<span className="text-nsmall font-light text-gray pt-1">
								Data pulled
							</span>
						</div>
						<div className="z-5 flex flex-col items-end">
							<Success />

							<span className="text-nsmall font-light text-gray pt-1">-</span>
						</div>

						{/* </div> */}
					</div>
				</div>
				<div className="w-full flex flex-row items-center justify-between py-[25px]">
					<div className="flex flex-row items-center w-full h-full gap-x-[16px]">
						<div className="h-full">
							<Waiting fill="#0093B2" />
						</div>
						<div className="flex flex-row items-center gap-x-[16px]">
							<div className="h-[36px] w-[36px]">
								<AgentIcon height={"100%"} width={"100%"} stroke="black" />
							</div>
							<div className="flex flex-col ">
								<span className="text-xl font-semibold text-primaryText">
									Agent Intiation
								</span>
								<span className="text-nsmall text-gray font-light">
									Text Generation Completed Succesfully
								</span>
							</div>
						</div>
					</div>
					<div className="relative flex flex-row justify-between items-center w-full">
						<div className="absolute left-0 top-0 h-[23%] w-full border-b z-0 border-[#CBD5E0]" />
						{/* <div className="flex flex-col justify-center items-center"> */}
						<div className="z-5 flex flex-col items-start">
							<Success />
							<span className="text-nsmall font-light text-gray pt-1">
								Template Generated
							</span>
						</div>
						<div className="z-5 flex flex-col items-end">
							<Waiting fill="#C53030" />
							<span className="text-nsmall font-light text-gray pt-1">
								Priority Set - Very High
							</span>
						</div>
						{/* </div> */}
					</div>
				</div>
				<div className="w-full flex flex-row items-center justify-between py-[25px]">
					<div className="flex flex-row items-center w-full h-full gap-x-[16px]">
						<div className="h-full">
							<Waiting fill="#0093B2" />
						</div>
						<div className="flex flex-row items-center gap-x-[16px]">
							<div className="h-[36px] w-[36px]">
								<Email height={"100%"} width={"100%"} />
							</div>
							<div className="flex flex-col ">
								<span className="text-xl font-semibold text-primaryText">
									Email / SMS Sent
								</span>
								<span className="text-nsmall text-gray font-light">
									The point of using Lorem Ipsum
								</span>
							</div>
						</div>
					</div>
					<div className="relative flex flex-row justify-between items-center w-full">
						<div className="absolute left-0 top-0 h-[23%] w-full border-b z-0 border-[#CBD5E0]" />
						{/* <div className="flex flex-col justify-center items-center"> */}
						<div className="z-5 flex flex-col items-start">
							<Success />
							<span className="text-nsmall font-light text-gray pt-1">
								Email / SMS Sent
							</span>
						</div>
						<div className="z-5 flex flex-col items-end">
							<NotAvailable />
							<span className="text-nsmall font-light text-gray pt-1">
								No Response
							</span>
						</div>
						{/* </div> */}
					</div>
				</div>
				<div className="w-full flex flex-row items-center justify-between py-[25px]">
					<div className="flex flex-row items-center w-full h-full gap-x-[16px]">
						<div className="h-full">
							<Waiting stroke="#0093B2" />
						</div>
						<div className="flex flex-row items-center gap-x-[16px]">
							<div className="h-[36px] w-[36px]">
								<Phone height={"100%"} width={"100%"} />
							</div>
							<div className="flex flex-col ">
								<span className="text-xl font-semibold text-primaryText">
									Voice Call Initiated
								</span>
								<span className="text-nsmall text-gray font-light">
									Call initiated to patient
								</span>
							</div>
						</div>
					</div>
					<div className="relative flex flex-row justify-between items-center w-full">
						<div className="absolute left-0 top-0 h-[23%] w-full border-b z-0 border-[#CBD5E0]" />
						{/* <div className="flex flex-col justify-center items-center"> */}
						<div className="z-5 flex flex-col items-start">
							<Waiting fill="#E2E8F0" />
							<span className="text-nsmall font-light text-gray pt-1">
								Voice Call - Pending
							</span>
						</div>
						<div className="z-5 flex flex-col items-end">
							<Waiting fill="#E2E8F0" />
							<span className="text-nsmall font-light text-gray pt-1">-</span>
						</div>
						{/* </div> */}
					</div>
				</div>
				<div className="w-full flex flex-row items-center justify-between py-[25px]">
					<div className="flex flex-row items-center w-full h-full gap-x-[16px]">
						<div className="h-full">
							<Waiting stroke="#0093B2" />
						</div>
						<div className="flex flex-row items-center gap-x-[16px]">
							<div className="h-[36px] w-[36px]">
								<Response height={"100%"} width={"100%"} />
							</div>
							<div className="flex flex-col ">
								<span className="text-xl font-semibold text-primaryText">
									Response
								</span>
								<span className="text-nsmall text-gray font-light">
									The point of using Lorem Ipsum
								</span>
							</div>
						</div>
					</div>
					<div className="relative flex flex-row justify-between items-center w-full">
						<div className="absolute left-0 top-0 h-[23%] w-full border-b z-0 border-[#CBD5E0]" />
						{/* <div className="flex flex-col justify-center items-center"> */}
						<div className="z-5 flex flex-col items-start">
							<Waiting fill="#E2E8F0" />
							<span className="text-nsmall font-light text-gray pt-1">
								Response - YTR
							</span>
						</div>
						<div className="z-5 flex flex-col items-end">
							<Waiting fill="#E2E8F0" />
							<span className="text-nsmall font-light text-gray pt-1">-</span>
						</div>
						{/* </div> */}
					</div>
				</div>
				<div className="w-full flex flex-row items-center justify-between py-[25px]">
					<div className="flex flex-row items-center w-full h-full gap-x-[16px]">
						<div className="h-full">
							<Waiting stroke="#0093B2" />
						</div>
						<div className="flex flex-row items-center gap-x-[16px]">
							<div className="h-[36px] w-[36px]">
								<Reschedule height={"100%"} width={"100%"} />
							</div>
							<div className="flex flex-col ">
								<span className="text-xl font-semibold text-primaryText">
									Reschedule
								</span>
								<span className="text-nsmall text-gray font-light">
									The point of using Lorem Ipsum
								</span>
							</div>
						</div>
					</div>
					<div className="relative flex flex-row justify-between items-center w-full">
						<div className="absolute left-0 top-0 h-[23%] w-full border-b z-0 border-[#CBD5E0]" />
						{/* <div className="flex flex-col justify-center items-center"> */}
						<div className="z-5 flex flex-col items-start">
							<Waiting fill="#E2E8F0" />
							<span className="text-nsmall font-light text-gray pt-1">NA</span>
						</div>
						<div className="z-5 flex flex-col items-end">
							<Waiting fill="#E2E8F0" />
							<span className="text-nsmall font-light text-gray pt-1">-</span>
						</div>
						{/* </div> */}
					</div>
				</div>
				<div className="w-full flex flex-row items-center justify-between py-[25px]">
					<div className="flex flex-row items-center w-full h-full gap-x-[16px]">
						<div className="h-full">
							<Waiting stroke="#0093B2" />
						</div>
						<div className="flex flex-row items-center gap-x-[16px]">
							<div className="h-[36px] w-[36px]">
								<Transportation height={"100%"} width={"100%"} />
							</div>
							<div className="flex flex-col ">
								<span className="text-xl font-semibold text-primaryText">
									Transaportation
								</span>
								<span className="text-nsmall text-gray font-light">
									The point of using Lorem Ipsum
								</span>
							</div>
						</div>
					</div>
					<div className="relative flex flex-row justify-between items-center w-full">
						<div className="absolute left-0 top-0 h-[23%] w-full border-b z-0 border-[#CBD5E0]" />
						{/* <div className="flex flex-col justify-center items-center"> */}
						<div className="z-5 flex flex-col items-start">
							<Waiting fill="#E2E8F0" />
							<span className="text-nsmall font-light text-gray pt-1">NA</span>
						</div>
						<div className="z-5 flex flex-col items-end">
							<Waiting fill="#E2E8F0" />
							<span className="text-nsmall font-light text-gray pt-1">-</span>
						</div>
						{/* </div> */}
					</div>
				</div>
				<div className="w-full flex flex-row items-center justify-between py-[25px]">
					<div className="flex flex-row items-center w-full h-full gap-x-[16px]">
						<div className="h-full">
							<Waiting stroke="#0093B2" />
						</div>
						<div className="flex flex-row items-center gap-x-[16px]">
							<div className="h-[36px] w-[36px]">
								<Escalation height={"100%"} width={"100%"} />
							</div>
							<div className="flex flex-col ">
								<span className="text-xl font-semibold text-primaryText">
									Escalation
								</span>
								<span className="text-nsmall text-gray font-light">
									The point of using Lorem Ipsum
								</span>
							</div>
						</div>
					</div>
					<div className="relative flex flex-row justify-between items-center w-full">
						<div className="absolute left-0 top-0 h-[23%] w-full border-b z-0 border-[#CBD5E0]" />
						{/* <div className="flex flex-col justify-center items-center"> */}
						<div className="z-5 flex flex-col items-start">
							<Waiting fill="#E2E8F0" />
							<span className="text-nsmall font-light text-gray pt-1">NA</span>
						</div>
						<div className="z-5 flex flex-col items-end">
							<Waiting fill="#E2E8F0" />
							<span className="text-nsmall font-light text-gray pt-1">-</span>
						</div>
						{/* </div> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileDetails;
