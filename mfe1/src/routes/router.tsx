import React from "react";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@pages/homePage"));
const UserPage = lazy(() => import("@pages/userPage"));

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route
				path="user/detail"
				element={
					<Suspense fallback={<>Loading...</>}>
						<h1>User Detail</h1>
					</Suspense>
				}
			/>
			<Route
				path="user"
				element={
					<Suspense fallback={<>Loading...</>}>
						<UserPage />
					</Suspense>
				}
			/>
			<Route
				index
				path="*"
				element={
					<Suspense fallback={<>Loading...</>}>
						<HomePage />
					</Suspense>
				}
			/>
		</Routes>
	);
};
