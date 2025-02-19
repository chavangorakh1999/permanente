import * as React from "react";
import { ReactComponent as KeyboardArrowLeft } from "../assets/icons/KeyboardArrowLeft.svg";
import { ReactComponent as KeyboardArrowRight } from "../assets/icons/KeyboardArrowRight.svg";

export default function DotsMobileStepper() {
	const scrollRef = React.useRef<HTMLDivElement>(null);
	const [activeDay, setActiveDay] = React.useState(0);

	const scrollLeft = () => {
		scrollRef.current?.scrollBy({ left: -200, behavior: "smooth" });
	};

	const scrollRight = () => {
		scrollRef.current?.scrollBy({ left: 200, behavior: "smooth" });
	};

	return (
		<div className="flex flex-row justify-between items-center p-8">
			<div onClick={scrollLeft}>
				<KeyboardArrowLeft />
			</div>
			<div
				ref={scrollRef}
				className="w-full flex flex-row justify-between overflow-x-auto whitespace-nowrap gap-x-[30px] mx-[30px] no-scrollbar"
			>
				{Array.from({ length: 30 }).map((_, index) => (
					<div className="flex flex-col items-center">
						<div
							key={index}
							onClick={() => {
								setActiveDay(index);
							}}
							className={`text-xl cursor-pointer ${
								activeDay === index ? "text-primary font-semibold" : ""
							}`}
						>
							{index + 1}
						</div>
						<div
							className={`h-1 w-1 rounded-full ${
								activeDay === index ? "bg-primary" : ""
							}`}
						></div>
					</div>
				))}
			</div>
			<div onClick={scrollRight}>
				<KeyboardArrowRight />
			</div>
		</div>
	);
}
