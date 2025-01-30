import React from "react";

const StatsSkeleton = () => {
	return (
		<div className="animate-pulse bg-white rounded-lg p-6">
			<div className="flex justify-between mb-4">
				<div className="h-8 bg-gray300 rounded w-1/4"></div>
				<div className="h-8 bg-gray300 rounded w-1/4"></div>
			</div>

			<div className="grid grid-cols-2 gap-4 mb-6">
				<div className="h-32 bg-gray300 rounded"></div>
				<div className="h-32 bg-gray300 rounded"></div>
			</div>

			<div className="h-24 bg-gray300 rounded mb-4"></div>

			<div className="grid grid-cols-7 gap-4 mb-6">
				{[...Array(7)].map((_, i) => (
					<div key={i} className="h-16 bg-gray300 rounded"></div>
				))}
			</div>

			<div className="h-12 bg-gray300 rounded w-1/4 mb-4"></div>

			<div className="grid grid-cols-2 gap-4">
				<div className="h-32 bg-gray300 rounded"></div>
				<div className="h-32 bg-gray300 rounded"></div>
			</div>
		</div>
	);
};

export default StatsSkeleton;
