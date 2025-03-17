import React from "react";

import { Router } from "@routes/router";

import "./app.css";

const App: React.FC = () => {
	return (
		<React.StrictMode>
			<Router />
		</React.StrictMode>
	);
};

export default App;
