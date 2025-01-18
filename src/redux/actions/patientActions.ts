import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Patient } from "../../types/patient";
import * as actionTypes from "../actionTypes/actionTypes";

const API_URL = "https://678b6e2a1a6b89b27a2a59b7.mockapi.io/api/";

export const fetchPatients = createAsyncThunk<
	Patient[],
	void,
	{ rejectValue: string }
>(actionTypes.FETCH_PATIENTS, async (_, thunkAPI) => {
	try {
		const response = await axios.get(`${API_URL}fetchPatientsListing`);
		return response.data;
	} catch (error) {
		return thunkAPI.rejectWithValue("Failed to fetch patients");
	}
});

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
