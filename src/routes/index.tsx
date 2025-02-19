import React, { Suspense, lazy } from "react";
import { RootState } from "../store";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import DashboardLayout from "../layouts/Dashboard";
import PATHS from "./paths";
import SignIn from "../screens/SignIn";
import ProtectedRoute from "../components/ProtectedRoute";
import StatsSkeleton from "../components/StatsSkeleton";
import { useSelector } from "react-redux";
import AuthorizedRoute from "../components/AuthorizedRoute";
import Appointments from "../components/Appointments";
import NurseDashboard from "../components/NurseDashboard";
import PatientDashboard from "../components/PatientDashboard";

// Lazy load pages
const Dashboard = lazy(() => import("../screens/Dashboard"));
const AIAgents = lazy(() => import("../screens/AiAgent"));
const Reports = lazy(() => import("../screens/Reports"));
const Rules = lazy(() => import("../screens/Rules"));
const Patients = lazy(() => import("../screens/Patients"));
const Unauthorized = lazy(() => import("../screens/Unauthorized"));

const NotFound = () => <div>404 - Page Not Found</div>;

const AppRoutes = () => {
	const { isAuthenticated, user } = useSelector(
		(state: RootState) => state.auth
	);
	const location = useLocation();

	return (
		<Suspense fallback={<StatsSkeleton />}>
			<Routes>
				{/* Public Routes */}
				<Route path={PATHS.SIGN_IN} element={<SignIn />} />
				<Route path={PATHS.UNAUTHORIZED} element={<Unauthorized />} />

				{/* Protected Routes */}
				<Route
					element={
						<ProtectedRoute loadingFallback={<StatsSkeleton />}>
							<DashboardLayout />
						</ProtectedRoute>
					}
				>
					{/* Common Dashboard Route */}
					<Route
						path={PATHS.DASHBOARD}
						element={
							user?.roles?.some((role) => role.name === "admin") ? (
								<Dashboard />
							) : user?.roles?.some((role) => role.name === "nurse") ? (
								<NurseDashboard />
							) : (
								<PatientDashboard />
							)
						}
					/>

					{/* Patient Management */}
					<Route
						path={PATHS.PATIENTS}
						element={
							<AuthorizedRoute
								requiredPermissions={["patients.read"]}
								loadingFallback={<StatsSkeleton />}
							>
								<Patients />
							</AuthorizedRoute>
						}
					/>

					{/* AI Agents (Admin only) */}
					<Route
						path={PATHS.AI_AGENTS}
						element={
							<AuthorizedRoute
								requiredRoles={["admin", "nurse"]}
								loadingFallback={<StatsSkeleton />}
							>
								<AIAgents />
							</AuthorizedRoute>
						}
					/>

					{/* Reports (Medical Staff) */}
					<Route
						path={PATHS.REPORTS}
						element={
							<AuthorizedRoute
								requiredPermissions={["reports.generate"]}
								loadingFallback={<StatsSkeleton />}
							>
								<Reports />
							</AuthorizedRoute>
						}
					/>

					{/* Rules Management (Admin + Senior Staff) */}
					<Route
						path={PATHS.RULES}
						element={
							<AuthorizedRoute
								requiredRoles={["admin", "senior-staff"]}
								requiredPermissions={["rules.manage"]}
								loadingFallback={<StatsSkeleton />}
							>
								<Rules />
							</AuthorizedRoute>
						}
					/>

					<Route
						path={PATHS.APPOINTMENTS}
						element={
							<AuthorizedRoute
								requiredRoles={["patient", "admin"]}
								requiredPermissions={["patient.read"]}
								loadingFallback={<StatsSkeleton />}
							>
								<Appointments />
							</AuthorizedRoute>
						}
					/>
				</Route>

				{/* Redirect handling */}
				<Route
					path={PATHS.ROOT}
					element={
						<Navigate
							to={isAuthenticated ? PATHS.DASHBOARD : PATHS.SIGN_IN}
							state={{ from: location }}
							replace
						/>
					}
				/>

				{/* Catch-all route */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</Suspense>
	);
};

export default AppRoutes;
