import React from "react";
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@pages/homePage"));
const SomePage = lazy(() => import("@pages/somePage"));

export const Router: React.FC = () => {
	return (
		<Routes>
			<Route
				path="some-page/details"
				element={
					<Suspense fallback={<>Loading...</>}>
						<h1>Some Page Details</h1>
					</Suspense>
				}
			/>
			<Route
				path="some-page"
				element={
					<Suspense fallback={<>Loading...</>}>
						<SomePage />
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
