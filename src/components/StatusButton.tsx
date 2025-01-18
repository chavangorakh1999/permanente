import React from "react";

const StatusButton = (props: any) => {
	const { agentStatus, textColor, bgColor } = props;
	return (
		<div
			className={`flex justify-center items-center ${bgColor} h-[20px] rounded-[6px]`}
		>
			<h6 className={`${textColor} text-small font-semibold leading-4`}>
				{agentStatus}
			</h6>
		</div>
	);
};

export default StatusButton;
