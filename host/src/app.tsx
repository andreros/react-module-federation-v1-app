import React from "react";
import ReactDOM from "react-dom/client";

import { Router } from "@routes/router";

import "./app.css";

export const App: React.FC = () => {
	return (
		<React.StrictMode>
			<div className="content">
				<h1>Module Federation v1.0</h1>
				<Router />
			</div>
		</React.StrictMode>
	);
};

ReactDOM.createRoot(document.getElementById("root") as Element).render(<App />);
