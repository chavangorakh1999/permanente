import { configureStore } from "@reduxjs/toolkit";
// import tableReducer from "./reducers/tableReducer";
import patientReducer from "./redux/slices/patientSlice";
import authReducer from "./redux/slices/authSlice";

const store = configureStore({
	reducer: {
		patients: patientReducer,
		auth: authReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
