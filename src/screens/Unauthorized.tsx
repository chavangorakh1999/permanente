import { useLocation } from "react-router-dom";
import PATHS from "../routes/paths";

import { Navigate } from "react-router-dom";

const Unauthorized = () => {
	const location = useLocation();

	return (
		<div>
			<h1>⛔ Access Denied</h1>
			<p>
				You don't have permission to access{" "}
				<code>{location.state?.from?.pathname || "this page"}</code>
			</p>
			<Navigate to={PATHS.DASHBOARD} replace />
		</div>
	);
};

export default Unauthorized;
