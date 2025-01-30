import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Patient } from "../../types/patient";
import * as actionTypes from "../actionTypes/patientActionTypes";

const API_URL = "https://678b6e2a1a6b89b27a2a59b7.mockapi.io/api";

export const fetchPatients = createAsyncThunk<Patient[]>(
	actionTypes.FETCH_PATIENTS,
	async () => {
		const response = await axios.get(`${API_URL}/fetchPatientsListing`);
		return response.data;
	}
);

export const addPatient = createAsyncThunk<Patient, Patient>(
	actionTypes.ADD_PATIENT,
	async (newPatient) => {
		const response = await axios.post(API_URL, newPatient);
		return response.data;
	}
);

export const updatePatient = createAsyncThunk<Patient, Patient>(
	actionTypes.UPDATE_PATIENT,
	async (updatedPatient) => {
		const response = await axios.put(
			`${API_URL}/${updatedPatient.id}`,
			updatedPatient
		);
		return response.data;
	}
);

export const deletePatient = createAsyncThunk<string, string>(
	actionTypes.DELETE_PATIENT,
	async (id) => {
		await axios.delete(`${API_URL}/${id}`);
		return id;
	}
);

interface PatientsState {
	patients: Patient[];
	status: "idle" | "loading" | "succeeded" | "failed";
	error: string | null;
}

const initialState: PatientsState = {
	patients: [],
	status: "idle",
	error: null,
};

const patientsSlice = createSlice({
	name: "patients",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchPatients.pending, (state) => {
				state.status = "loading";
			})
			.addCase(
				fetchPatients.fulfilled,
				(state, action: PayloadAction<Patient[]>) => {
					state.status = "succeeded";
					state.patients = action.payload;
				}
			)
			.addCase(fetchPatients.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.error.message || null;
			})
			.addCase(
				addPatient.fulfilled,
				(state, action: PayloadAction<Patient>) => {
					state.patients.push(action.payload);
				}
			)
			.addCase(
				updatePatient.fulfilled,
				(state, action: PayloadAction<Patient>) => {
					const index = state.patients.findIndex(
						(patient) => patient.id === action.payload.id
					);
					if (index >= 0) {
						state.patients[index] = action.payload;
					}
				}
			)
			.addCase(
				deletePatient.fulfilled,
				(state, action: PayloadAction<string>) => {
					state.patients = state.patients.filter(
						(patient) => patient.id !== action.payload
					);
				}
			);
	},
});

export default patientsSlice.reducer;
