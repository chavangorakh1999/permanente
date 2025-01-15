import React, { useRef, useState, useEffect } from "react";
import { ReactComponent as AgentIcon } from "../assets/icons/Agent.svg";
interface IconInfoProps {
	children: React.ReactNode;
	tooltipContent?: React.ReactNode;
}

const IconInfo: React.FC<IconInfoProps> = ({
	children,
	tooltipContent = "Some text",
}) => {
	const [showAbove, setShowAbove] = useState(true);
	const containerRef = useRef<HTMLSpanElement>(null);
	const tooltipRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		const updatePosition = () => {
			if (containerRef.current && tooltipRef.current) {
				const containerRect = containerRef.current.getBoundingClientRect();
				const tooltipHeight = tooltipRef.current.offsetHeight;

				// Calculate space above and below
				const spaceAbove = containerRect.top;
				const viewportHeight = window.innerHeight;
				const spaceBelow = viewportHeight - containerRect.bottom;

				// Default to showing above if there's enough space
				// or if there's more space above than below
				setShowAbove(spaceAbove >= tooltipHeight || spaceAbove > spaceBelow);
			}
		};

		// Update position when tooltip becomes visible
		const observer = new MutationObserver((mutations) => {
			mutations.forEach((mutation) => {
				if (mutation.target === tooltipRef.current) {
					updatePosition();
				}
			});
		});

		if (tooltipRef.current) {
			observer.observe(tooltipRef.current, {
				attributes: true,
				attributeFilter: ["class"],
			});
		}

		// Initial position check
		updatePosition();

		// Add resize listener
		window.addEventListener("resize", updatePosition);

		return () => {
			observer.disconnect();
			window.removeEventListener("resize", updatePosition);
		};
	}, []);

	return (
		<span
			ref={containerRef}
			className="group relative inline-flex justify-center items-center"
		>
			<span
				ref={tooltipRef}
				className={`
          invisible opacity-0 group-hover:visible group-hover:opacity-100
          absolute min-h-[164px] w-[244px] rounded shadow-lg p-4
          bg-white z-50 transition-all duration-200
          ${showAbove ? "-translate-y-2" : "translate-y-2"}
          ${showAbove ? "bottom-full" : "top-full"}
          left-1/2 -translate-x-1/2
        `}
			>
				<span className="flex flex-col">
					<span>
						<span className="text-large font-semibold text-[#003B71]">
							Voice Call Initiated
						</span>
						<span className="flex flex-row justify-start items-center h-[27px]  my-[16px]">
							<span className="flex justify-center items-center h-[24px] w-[24px] rounded-full bg-primary p-[2px] mr-[8px]">
								<AgentIcon height={"100%"} width={"100%"} stroke="white" />
							</span>
							<span className="flex flex-col">
								<span className="font-semibold text-normal">A_6 Agent</span>
								<span className="text-small font-light text-gray">D3-5000</span>
							</span>
						</span>
					</span>
					<span className="flex flex-col h-[61px] border-t border-dotted border-[#E2E8F0] pt-[13px]">
						<span className="text-xl italic font-semibold text-darkGreen">
							Completed
						</span>
						<span className="text-small font-light text-gray">
							11:15 • Mon Jan7, 2025
						</span>
					</span>
				</span>
			</span>
			{children}
		</span>
	);
};

export default IconInfo;
