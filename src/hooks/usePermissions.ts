// hooks/usePermissions.ts
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useCallback } from "react";

export const usePermissions = () => {
	const { user, permissionsLoaded } = useSelector(
		(state: RootState) => state.auth
	);

	const hasPermission = useCallback(
		(permissionCode: string) => {
			if (!permissionsLoaded || !user) return false;
			return user.permissions.some((p) => p.code === permissionCode);
		},
		[user, permissionsLoaded]
	);

	return { hasPermission, permissionsLoaded };
};
