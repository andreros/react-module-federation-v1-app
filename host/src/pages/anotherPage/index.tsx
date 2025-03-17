import React from "react";
import { useNavigate } from "react-router-dom";

const AnotherPage: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="another-page">
			<button type="button" onClick={() => navigate("/home")}>
				Go to "Home" page
			</button>
		</div>
	);
};

export default AnotherPage;
