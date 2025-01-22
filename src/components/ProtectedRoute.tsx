import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props: any) => {
	const { isAuthenticated, children } = props;
	if (!isAuthenticated) {
		// Redirect to sign-in page if not authenticated
		return <Navigate to="/" />;
	}

	// Render the protected content
	return children;
};

export default ProtectedRoute;
