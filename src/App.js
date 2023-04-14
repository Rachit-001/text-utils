import "./App.css";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Error from "./components/Error";
import { useState } from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link,
	Outlet,
} from "react-router-dom";
function App() {
	const [mode, setMode] = useState("light"); //dark mode is enabled or not
	// const [mode2, setMode2] = useState("light"); //dark mode is enabled or not
	const [alert, setAlert] = useState(null); //  alert state variable

	const showAlert = (message, type) => {
		setAlert({
			msg: message,
			type: type,
		});
		setTimeout(() => {
			setAlert(null);
		}, 2000);
	};
	const removeBodyClasses = () => {
		document.body.classList.remove("bg-light");
		document.body.classList.remove("bg-dark");
		document.body.classList.remove("bg-primary");
		document.body.classList.remove("bg-warning");
		document.body.classList.remove("bg-danger");
		document.body.classList.remove("bg-success");
	};
	// const toggleMode = (checked) => { //when using checked value of toggle switch to change mode
	const toggleMode = () => {
		// const toggleMode = (cls) => { // for color paletts
		// removeBodyClasses();
		// console.log(cls);
		// document.body.classList.add("bg-" + cls);
		// if (checked) { // when using true/false vlaue of checked of toggle switch
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#121043";
			showAlert("Dark mode has been enabled", "success");

			document.title = "Text Utils - Dark Mode";
			setTimeout(() => {
				document.title =
					"Text Utils - Word counter | character counter | lowercase to uppercase | uppercae to lowercase";
			}, 2000);

			// to keep title change to below title every 2 seconds
			// setInterval(() => {
			// 	document.title = "Text Utils is amazing";
			// }, 2000);
			// setInterval(() => {
			// 	document.title = "This is TextUtils";
			// }, 1500);
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			showAlert("Light mode has been enabled", "success");

			document.title = "Text Utils - Light Mode";
			setTimeout(() => {
				document.title =
					"Text Utils - Word counter | character counter | lowercase to uppercase | uppercae to lowercase";
			}, 2000);
		}
		// checked ? setMode("dark") : setMode("light");
	};
	// const toggleMode2 = (checked) => {
	// 	if (checked) {
	// 		setMode("dark2");
	// 		// background-color:	#251204
	// 		// navbar-color #7e5000
	// 		//	text-area-color: #705a35
	// 		document.body.style.backgroundColor = "#251204";
	// 		showAlert("Dark mode has been enabled", "success");
	// 	} else {
	// 		setMode("light2");
	// 		document.body.style.backgroundColor = "white";
	// 		showAlert("Light mode has been enabled", "success");
	// 	}
	// 	// checked ? setMode("dark") : setMode("light");
	// };
	return (
		<>
			<Router>
				{/* <div className="App"></div> */}
				<Navbar mode={mode} toggleMode={toggleMode} />
				<Alert alert={alert} />
				<Routes>
					<Route
						path="/"
						element={
							<TextForm
								heading="Enter the Text to analyze below"
								mode={mode}
								showAlert={showAlert}
							/>
						}
					/>
					<Route
						path="about/*"
						element={<About mode={mode} />}
						// errorElement={<div>Oops! There was an error.</div>}
					/>
					<Route path="*" element={<Error mode={mode} />} />

					{/* Nested Routing ----------------------------------------------------------------------------------------------*/}
					{/* outlet */}
					{/* shared and nested routing */}
					{/* <Route
						path="/"
						element={
							<TextForm
								heading="Enter the Text to analyze below"
								mode={mode}
								showAlert={showAlert}
							/>
						}
					>
						<Route
							path="about/*"
							element={<About mode={mode} />}
							// errorElement={<div>Oops! There was an error.</div>}
						/>
						<Route path="*" element={<Error mode={mode} />} />
					</Route>*/}
					{/* ---------------------------------------------------------------------------------------- */}
				</Routes>

				{/* <TextForm />
			<TextForm heading={45} /> */}
			</Router>
		</>
	);
}

export default App;
