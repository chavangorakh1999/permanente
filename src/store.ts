import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Default is localStorage
import { combineReducers } from "redux"; // Import combineReducers
import patientReducer from "./redux/slices/patientSlice";
import authReducer from "./redux/slices/authSlice";

// Persist Config
const persistConfig = {
	key: "root",
	storage,
	whitelist: ["auth", "patients"], // Persist the 'auth' and 'patients' slices
};

// Combine reducers
const rootReducer = combineReducers({
	patients: patientReducer,
	auth: authReducer,
});

// Create persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store Configuration
const store = configureStore({
	reducer: persistedReducer,
	// Optionally add middleware, etc.
});

// Persistor creation
const persistor = persistStore(store);

// Exporting types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
