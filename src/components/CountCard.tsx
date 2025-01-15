import React from "react";

const CountCard = (props: any) => {
	const { Title, Count, Icon, BgColor } = props;
	return (
		<>
			<div className="flex flex-row w-[248px] h-[80px] bg-white py-[8px] px-[12px] gap-y-[16px] rounded-lg justify-between items-center">
				<div>
					<h3 className="text-gray text-normal font-normal leading-[28px]">
						{Title}
					</h3>
					<h3 className="text-black text-3xl font-normal leading-[28px]">
						{Count}
					</h3>
				</div>
				<div className={`h-12 w-12 rounded-full ${BgColor} p-3`}>{Icon}</div>
			</div>
		</>
	);
};

export default CountCard;
