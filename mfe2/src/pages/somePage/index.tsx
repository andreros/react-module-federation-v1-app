import React from "react";
import { useNavigate } from "react-router-dom";

const SomePage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="mfe2-some-page">
			<h1>MFE 2 Some Page</h1>
			<button type="button" onClick={() => navigate("details")}>
				Go to "Details" page
			</button>
		</div>
	);
};

export default SomePage;
