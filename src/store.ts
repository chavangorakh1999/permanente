import { configureStore } from "@reduxjs/toolkit";
import tableReducer from "./reducers/tableReducer";

const store = configureStore({
	reducer: {
		table: tableReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
