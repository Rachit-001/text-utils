import React from "react";

export default function About(props) {
	let aboutStyle = {
		color: props.mode === "light" ? "black" : "white",
		backgroundColor: props.mode === "light" ? "white" : "#244a68",
		// "#244a68",
		// "#042743",
	};
	// const [aboutStyle, setAboutStyle] = useState({
	// 	color: "black",
	// 	backgroundColor: "white",
	// });
	// const [btnText, setBtnText] = useState("Enable Dark Mode");
	// const toggleAboutStyle = () => {
	// 	if (aboutStyle.color === "white") {
	// 		setAboutStyle({
	// 			color: "black",
	// 			backgroundColor: "white",
	// 		});
	// 		setBtnText("Enable Dark Mode");
	// 	} else {
	// 		setAboutStyle({
	// 			color: "white",
	// 			backgroundColor: "black",
	// 			// border: " 1px solid white",
	// 		});
	// 		setBtnText("Enable Light Mode");
	// 	}
	// };
	return (
		<>
			<div className="container">
				<h1
					className="my-3"
					style={{ color: props.mode === "dark" ? "white" : "#042743" }}
				>
					About Us
				</h1>
				<div id="accordion">
					<div className="card">
						<div
							className="card-header"
							id="headingOne"
							data-toggle="collapse"
							data-target="#collapseOne"
							aria-expanded="true"
							aria-controls="collapseOne"
							style={aboutStyle}
						>
							<h5 className="mb-0">
								<button
									className="btn btn-link"
									data-toggle="collapse"
									data-target="#collapseOne"
									aria-expanded="true"
									aria-controls="collapseOne"
									style={aboutStyle}
								>
									<strong>Analyze your text</strong>
								</button>
							</h5>
						</div>

						<div
							id="collapseOne"
							className="collapse show"
							aria-labelledby="headingOne"
							data-parent="#accordion"
						>
							<div className="card-body" style={aboutStyle}>
								Text Utils gives you a way to analyze your text quickly and
								efficiently. Be it word count or character count
							</div>
						</div>
					</div>
					<div className="card">
						<div
							className="card-header"
							id="headingTwo"
							data-toggle="collapse"
							data-target="#collapseTwo"
							aria-expanded="true"
							aria-controls="collapseTwo"
							style={aboutStyle}
						>
							<h5 className="mb-0">
								<button
									className="btn btn-link collapsed"
									data-toggle="collapse"
									data-target="#collapseTwo"
									aria-expanded="false"
									aria-controls="collapseTwo"
									style={aboutStyle}
								>
									<strong>Free to use</strong>
								</button>
							</h5>
						</div>
						<div
							id="collapseTwo"
							className="collapse"
							aria-labelledby="headingTwo"
							data-parent="#accordion"
						>
							<div className="card-body" style={aboutStyle}>
								Text Utils is afree character counter tool that pro ides instant
								character count 7 word count statistics for a given text. Text
								Utils reports the nummber of words and characters. thus it is
								suitable for writing text with word/character limit.
							</div>
						</div>
					</div>
					<div className="card">
						<div
							className="card-header"
							id="headingThree"
							data-toggle="collapse"
							data-target="#collapseThree"
							aria-expanded="true"
							aria-controls="collapseThree"
							style={aboutStyle}
						>
							<h5 className="mb-0">
								<button
									className="btn btn-link collapsed"
									data-toggle="collapse"
									data-target="#collapseThree"
									aria-expanded="false"
									aria-controls="collapseThree"
									style={aboutStyle}
								>
									<strong>Browser Compatible</strong>
								</button>
							</h5>
						</div>
						<div
							id="collapseThree"
							className="collapse"
							aria-labelledby="headingThree"
							data-parent="#accordion"
						>
							<div className="card-body" style={aboutStyle}>
								This word counter works in any web browser such as chrome,
								firefox, edge, etc. It suits to count charcters in facebook,
								blog, books, excel document , pdf documents, essays, etc.
							</div>
						</div>
					</div>
				</div>
				{/* <div className="container my-3">
					<button className="btn btn-primary my-3" onClick={toggleAboutStyle}>
						{btnText}
					</button>
				</div> */}
			</div>
		</>
	);
}
