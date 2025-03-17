import React from "react";
import { Outlet } from "react-router";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
	const navigate = useNavigate();
	return (
		<div className="home-page">
			<button type="button" onClick={() => navigate("/home/mfe1")}>
				Go to "mfe1"
			</button>
			<Outlet />
		</div>
	);
};

export default HomePage;
