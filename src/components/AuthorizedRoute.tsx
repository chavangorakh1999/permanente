// components/AuthorizedRoute.tsx
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "../store";
import { ReactNode, useEffect, useState } from "react";

interface AuthorizedRouteProps {
	children: ReactNode;
	requiredRoles?: string[];
	requiredPermissions?: string[];
	loadingFallback?: ReactNode;
}

const AuthorizedRoute = ({
	children,
	requiredRoles,
	requiredPermissions,
	loadingFallback = null,
}: AuthorizedRouteProps): JSX.Element => {
	const location = useLocation();
	const { user, permissionsLoaded } = useSelector(
		(state: RootState) => state.auth
	);
	const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

	useEffect(() => {
		const checkAuthorization = () => {
			let authorized = true;

			// Check roles
			if (requiredRoles?.length) {
				authorized = requiredRoles.some((role) =>
					user?.roles.some((userRole) => userRole.name === role)
				);
			}

			// Check permissions
			// if (authorized && requiredPermissions?.length) {
			// 	authorized = requiredPermissions.every((permission) =>
			// 		user?.permissions.some((userPerm) => userPerm.code === permission)
			// 	);
			// }

			setIsAuthorized(authorized);
		};

		checkAuthorization();
	}, [user, requiredRoles, requiredPermissions]);

	// Loading state
	if (!permissionsLoaded || isAuthorized === null) {
		return <>{loadingFallback}</>;
	}

	// Unauthorized state
	if (!isAuthorized) {
		return <Navigate to="/unauthorized" state={{ from: location }} replace />;
	}

	// Authorized state
	return <>{children}</>;
};

export default AuthorizedRoute;
