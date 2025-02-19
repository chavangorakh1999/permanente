// components/ProtectedRoute.tsx
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../store";
import { ReactNode, useEffect, useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

interface ProtectedRouteProps {
	children: ReactNode;
	loadingFallback?: ReactNode;
}

const ProtectedRoute = ({
	children,
	loadingFallback = <LoadingSpinner />,
}: ProtectedRouteProps): JSX.Element => {
	const location = useLocation();
	const { isAuthenticated, loading } = useSelector(
		(state: RootState) => state.auth
	);
	const [isCheckingAuth, setIsCheckingAuth] = useState(true);

	useEffect(() => {
		// Simulate auth check delay
		const timer = setTimeout(() => setIsCheckingAuth(false), 500);
		return () => clearTimeout(timer);
	}, []);

	// Loading state
	if (loading || isCheckingAuth) {
		return <>{loadingFallback}</>;
	}

	// Unauthenticated state
	if (!isAuthenticated) {
		return <Navigate to="/sign-in" state={{ from: location }} replace />;
	}

	// Authenticated state
	return <>{children}</>;
};

export default ProtectedRoute;
