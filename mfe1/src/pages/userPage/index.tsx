import React from "react";
import { useNavigate } from "react-router-dom";

const UserPage: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className="mfe1-user-page">
			<h1>MFE 1 User Page</h1>
			<button type="button" onClick={() => navigate("details")}>
				Go to "User Details" page
			</button>
		</div>
	);
};

export default UserPage;
