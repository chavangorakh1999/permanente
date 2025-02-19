import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import * as actionTypes from "../actionTypes/authActionTypes";

const API_URL = "https://678b6e2a1a6b89b27a2a59b7.mockapi.io/api";

interface Permission {
	id: string;
	name: string;
	code: string;
}

interface Role {
	id: string;
	name: string;
	permissions: Permission[];
}

interface User {
	id: string;
	name: string;
	email: string;
	roles: Role[];
	permissions: Permission[];
	accessToken?: string;
	refreshToken?: string;
}

interface Credentials {
	email: string;
	password: string;
}

interface RegisterData extends Credentials {
	name: string;
}

interface AuthState {
	user: User | null;
	isAuthenticated: boolean;
	loading: boolean;
	permissionsLoaded: boolean;
	error: string | null;
}

// Async actions
export const login = createAsyncThunk<User, Credentials>(
	actionTypes.LOGIN,
	async (credentials, { rejectWithValue, dispatch }) => {
		try {
			// 1. Authenticate user
			const authResponse = await axios.get<
				{
					user: User;
					accessToken: string;
					refreshToken: string;
				}[]
			>(`${API_URL}/login`);
			let dataIndex =
				credentials.email === "patient@permanente.com"
					? 0
					: credentials.email === "nurse@permanente.com"
					? 2
					: credentials.email === "admin@permanente.com"
					? 1
					: 0;
			// 2. Store tokens securely
			const { accessToken, refreshToken, user } = authResponse.data[dataIndex];
			localStorage.setItem("accessToken", accessToken);
			localStorage.setItem("refreshToken", refreshToken);
			const { persistor } = await import("../../store");
			persistor.purge();
			// 3. Fetch detailed permissions (mock implementation)
			// const permissionsResponse = await axios.get<Permission[]>(
			// 	`${API_URL}/users/${user.id}/permissions`
			// );

			return {
				...user,
				permissions: [
					{ id: "1", name: "admin", code: "admin" },
					{ id: "2", name: "Read Patient", code: "patients.read" },
					{ id: "3", name: "Write Patient", code: "patients.write" },
					{ id: "4", name: "Read AI Agent", code: "aiagent.read" },
					{ id: "5", name: "Read Reports", code: "reports.read" },
					{ id: "6", name: "Read Rules", code: "rules.read" },
				],
				accessToken,
				refreshToken,
			};
		} catch (error: any) {
			console.log("🚀 ~ error:", error);
			return rejectWithValue(error.response?.data || "Login failed");
		}
	}
);

export const loadPermissions = createAsyncThunk<Permission[], void>(
	"auth/loadPermissions",
	async (_, { getState, rejectWithValue }) => {
		try {
			const state = getState() as { auth: AuthState };
			if (!state.auth.user?.id) throw new Error("User not authenticated");

			const response = await axios.get<Permission[]>(
				`${API_URL}/users/${state.auth.user.id}/permissions`
			);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.response?.data || "Permission fetch failed");
		}
	}
);

export const logout = createAsyncThunk<void, void>(
	actionTypes.LOGOUT,
	async (_, { dispatch }) => {
		try {
			// await axios.post(`${API_URL}/logout`, {
			// 	refreshToken: localStorage.getItem("refreshToken"),
			// });
		} finally {
			// Clear client-side tokens
			localStorage.removeItem("accessToken");
			localStorage.removeItem("refreshToken");
		}
	}
);

export const register = createAsyncThunk<User, RegisterData>(
	actionTypes.REGISTER,
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.post<User>(`${API_URL}/register`, {
				...userData,
				roles: ["admin"], // Default role
			});
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.response?.data || "Registration failed");
		}
	}
);

const initialState: AuthState = {
	user: null,
	isAuthenticated: false,
	loading: false,
	permissionsLoaded: false,
	error: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(login.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, action: PayloadAction<User>) => {
				state.loading = false;
				state.user = {
					...action.payload,
					roles: action.payload.roles || [], // Ensure roles array
					permissions: action.payload.permissions || [], // Ensure permissions array
				};
				state.isAuthenticated = true;
				state.permissionsLoaded = true;
			})
			.addCase(login.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
				state.permissionsLoaded = false;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
				state.isAuthenticated = false;
				state.permissionsLoaded = false;
			})
			.addCase(register.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(register.fulfilled, (state, action: PayloadAction<User>) => {
				state.loading = false;
				state.user = action.payload;
				state.isAuthenticated = true;
			})
			.addCase(register.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(loadPermissions.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(loadPermissions.fulfilled, (state, action) => {
				state.loading = false;
				if (state.user) {
					state.user.permissions = action.payload;
				}
				state.permissionsLoaded = true;
			})
			.addCase(loadPermissions.rejected, (state, action) => {
				state.loading = false;
				state.error = action.payload as string;
				state.permissionsLoaded = false;
			});
	},
});

export default authSlice.reducer;
