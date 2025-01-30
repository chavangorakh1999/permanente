import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import * as actionTypes from "../actionTypes/authActionTypes";

const API_URL = "https://678b6e2a1a6b89b27a2a59b7.mockapi.io/api";

// Define types
interface User {
	id: string;
	name: string;
	email: string;
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
	error: string | null;
}

// Async actions
export const login = createAsyncThunk<User, Credentials>(
	actionTypes.LOGIN,
	async (credentials, { rejectWithValue }) => {
		try {
			const response = await axios.post<User>(`${API_URL}/login`, credentials);
			return response.data;
		} catch (error: any) {
			return rejectWithValue(error.response?.data || "Login failed");
		}
	}
);

export const logout = createAsyncThunk<void, void>(
	actionTypes.LOGOUT,
	async () => {
		await axios.post(`${API_URL}/logout`);
	}
);

export const register = createAsyncThunk<User, RegisterData>(
	actionTypes.REGISTER,
	async (userData, { rejectWithValue }) => {
		try {
			const response = await axios.post<User>(`${API_URL}/register`, userData);
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
				state.user = action.payload;
				state.isAuthenticated = true;
			})
			.addCase(login.rejected, (state, action: PayloadAction<any>) => {
				state.loading = false;
				state.error = action.payload;
			})
			.addCase(logout.fulfilled, (state) => {
				state.user = null;
				state.isAuthenticated = false;
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
			});
	},
});

export default authSlice.reducer;
