import React, { useState, useEffect, useRef } from "react";

const Dropdown = (props: any) => {
	const { selectedTimeframe, setSelectedTimeframe } = props;
	const [isOpen, setIsOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);
	const [selectedOption, setSelectedOption] = useState(selectedTimeframe);

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	const handleOptionClick = (option: string) => {
		setSelectedOption(option);
		setSelectedTimeframe(option);
		setIsOpen(false); // Close dropdown after selecting an option
	};

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	return (
		<div className="relative inline-block" ref={dropdownRef}>
			{/* Dropdown Button */}
			<button
				onClick={toggleDropdown}
				className="flex items-center px-2 py-1 text-normal font-medium text-[#000000] bg-gray800 bg-opacity-10 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
			>
				{selectedOption}
				<svg
					className="w-4 h-4 ml-2"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fillRule="evenodd"
						d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
						clipRule="evenodd"
					/>
				</svg>
			</button>

			{/* Dropdown Menu */}
			{isOpen && (
				<div className="absolute right-0 z-10 w-40 mt-2 origin-top-right bg-white rounded-lg shadow-lg">
					<ul className="py-1">
						<li>
							<button
								onClick={() => handleOptionClick("Month")}
								className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 hover:bg-primary hover:bg-opacity-10"
							>
								Month
							</button>
						</li>
						<li>
							<button
								onClick={() => handleOptionClick("Week")}
								className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100  hover:bg-primary hover:bg-opacity-10"
							>
								Week
							</button>
						</li>
						<li>
							<button
								onClick={() => handleOptionClick("Year")}
								className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100  hover:bg-primary hover:bg-opacity-10"
							>
								Year
							</button>
						</li>
					</ul>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
