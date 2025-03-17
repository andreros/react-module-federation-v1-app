import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";

import { Router } from "@routes/router";

import "./app.css";

export const App: React.FC = () => {
	
	useEffect(() => {
		// workaround to force "home" page reload on browser back button click
		const onPopState = () => {
			if (!location.pathname.endsWith('home')) return;
			location.reload();
		}
		window.addEventListener('popstate', onPopState);
		return () => window.removeEventListener('popstate', onPopState);
	}, []);
	
	return (
		<React.StrictMode>
			<div className="content">
				<h1 className="header">Module Federation v1.0</h1>
				<Router />
			</div>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root") as Element).render(<App />);
