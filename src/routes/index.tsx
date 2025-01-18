import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layouts/Dashboard";
import PATHS from "./paths";

// Lazy load pages
const Dashboard = lazy(() => import("../screens/Dashboard"));
const AIAgents = lazy(() => import("../screens/AiAgent"));
const Reports = lazy(() => import("../screens/Reports"));
const Rules = lazy(() => import("../screens/Rules"));

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<DashboardLayout />}>
				{/* Redirect root to dashboard */}
				<Route
					path={PATHS.ROOT}
					element={<Navigate to={PATHS.DASHBOARD} replace />}
				/>

				{/* Main routes */}
				<Route
					path={PATHS.DASHBOARD}
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Dashboard />
						</Suspense>
					}
				/>
				<Route
					path={PATHS.AI_AGENTS}
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<AIAgents />
						</Suspense>
					}
				/>
				<Route
					path={PATHS.REPORTS}
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Reports />
						</Suspense>
					}
				/>
				<Route
					path={PATHS.RULES}
					element={
						<Suspense fallback={<div>Loading...</div>}>
							<Rules />
						</Suspense>
					}
				/>

				{/* 404 route */}
				<Route path="*" element={<Navigate to={PATHS.DASHBOARD} replace />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;
