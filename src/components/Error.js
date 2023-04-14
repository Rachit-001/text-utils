import React from "react";
import { useNavigate } from "react-router-dom";

export default function Error(props) {
	const navigate = useNavigate();
	const goToHome = () => {
		navigate("/");
	};
	return (
		<>
			<div className="container my-3">
				<h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
					Error - 404 Not Found
				</h1>

				<h3 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
					Page Not Found - Something has gone wrong
				</h3>
				<h4 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
					Try again later
				</h4>
			</div>
			<div className="container my-3">
				<button
					className="btn btn-primary mx-1 my-3"
					onClick={() => goToHome()}
				>
					Go to Home
				</button>
				<button
					className="btn btn-primary mx-1 my-3"
					onClick={() => navigate(-1)}
				>
					Go Back
				</button>
				<button
					className="btn btn-primary mx-1 my-3"
					onClick={() => navigate(1)}
				>
					Go Forward
				</button>
			</div>
		</>
	);
}
