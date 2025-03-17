import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("@pages/homePage"));
const AnotherPage = lazy(() => import("@pages/anotherPage"));
const Mfe1 = lazy(() => import("mfe1/appPage") as any);

export const Router: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="home/mfe1/*"
					element={
						<Suspense fallback={<>Loading...</>}>
							<Mfe1 />
						</Suspense>
					}
				/>
				<Route
					path="home"
					element={
						<Suspense fallback={<>Loading...</>}>
							<HomePage />
						</Suspense>
					}
				/>
				<Route
					index
					path="*"
					element={
						<Suspense fallback={<>Loading...</>}>
							<AnotherPage />
						</Suspense>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
