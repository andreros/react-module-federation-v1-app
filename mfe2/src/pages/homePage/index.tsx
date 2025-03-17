import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="mfe2-home-page">
			<h1>MFE 2 Page</h1>
			<button type="button" onClick={() => navigate("some-page")}>
				Go to "Some" Page
			</button>
		</div>
	);
};

export default HomePage;
