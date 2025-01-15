import React from "react";
import "./App.css";
import AiAgent from "./AiAgent";

function App() {
	return (
		<div className="flex w-full h-full min-h-screen bg-[#F1F4FB] justify-center">
			<div className="font-normal px-[50px] max-w-[1440px] h-full">
				<AiAgent />
			</div>
		</div>
	);
}

export default App;
