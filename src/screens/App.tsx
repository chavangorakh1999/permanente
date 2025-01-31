import "./App.css";
import { BrowserRouter, HashRouter as Router } from "react-router-dom";
import AppRoutes from "../routes/index";

function App() {
	return (
		// <BrowserRouter>
		// 	<AppRoutes />
		// </BrowserRouter>
		<Router>
			<AppRoutes />
		</Router>
	);
}

export default App;
