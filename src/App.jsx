import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateAcc from "../components/CreateAcc";
import Login from "../components/Login";

export default function App() {
	return (
		<>
			<Router>
				<Navbar />

				<Routes>
					<Route
						path="/"
						element={<CreateAcc />}
					/>
					<Route
						path="/signup"
						element={<CreateAcc />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
				</Routes>
			</Router>
		</>
	);
}
