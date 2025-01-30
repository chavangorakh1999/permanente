import React, { Suspense, lazy } from "react";
import { RootState } from "../store";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/Dashboard";
import PATHS from "./paths";
import SignIn from "../screens/SignIn";
import ProtectedRoute from "../components/ProtectedRoute";
import StatsSkeleton from "../components/StatsSkeleton";
import { useSelector } from "react-redux";

// Lazy load pages
const Dashboard = lazy(() => import("../screens/Dashboard"));
const AIAgents = lazy(() => import("../screens/AiAgent"));
const Reports = lazy(() => import("../screens/Reports"));
const Rules = lazy(() => import("../screens/Rules"));
const Patients = lazy(() => import("../screens/Patients"));

const NotFound = () => <div>404 - Page Not Found</div>; // Simple 404 Component

const AppRoutes = () => {
	const isAuthenticated = useSelector(
		(state: RootState) => state.auth.isAuthenticated
	);
	return (
		<Suspense fallback={<StatsSkeleton />}>
			<Routes>
				{/* Public Route */}
				<Route path={PATHS.SIGN_IN} element={<SignIn />} />

				{/* Protected Routes */}
				<Route
					element={
						<ProtectedRoute isAuthenticated={isAuthenticated}>
							<DashboardLayout />
						</ProtectedRoute>
					}
				>
					<Route path={PATHS.DASHBOARD} element={<Dashboard />} />
					<Route path={PATHS.PATIENTS} element={<Patients />} />
					<Route path={PATHS.AI_AGENTS} element={<AIAgents />} />
					<Route path={PATHS.REPORTS} element={<Reports />} />
					<Route path={PATHS.RULES} element={<Rules />} />
				</Route>

				{/* Redirect root */}
				<Route
					path={PATHS.ROOT}
					element={
						<Navigate
							to={isAuthenticated ? PATHS.DASHBOARD : PATHS.SIGN_IN}
							replace
						/>
					}
				/>

				{/* 404 route */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
