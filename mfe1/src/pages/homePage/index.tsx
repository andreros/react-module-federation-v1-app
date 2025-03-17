import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="mfe1-home-page">
			<h1>MFE 1 Home Page</h1>
			<button type="button" onClick={() => navigate("user")}>
				Go to "User" Page
			</button>
		</div>
	);
};

export default HomePage;
