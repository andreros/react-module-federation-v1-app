import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage: React.FC = () => {
	const navigate = useNavigate();

	useEffect(() => {
		//location.reload();
	}, []);

	return (
		<div className="home-page">
			<button type="button" onClick={() => navigate("/home/mfe1")}>
				Go to "mfe1"
			</button>
			&nbsp;&nbsp;
			<button type="button" onClick={() => navigate("/home/mfe2")}>
				Go to "mfe2"
			</button>
		</div>
	);
};

export default HomePage;
