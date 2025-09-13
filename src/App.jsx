import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import CreateAcc from "../components/CreateAcc";
import Login from "../components/Login";
import ForgotPassword from "../components/ForgotPassword";
import Home from "../components/Home";
import Movies from "../components/Movies";
import Tv from "../components/Tv";
import People from "../components/People";

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
						path="/home"
						element={<Home />}
					/>
					<Route
						path="/signup"
						element={<CreateAcc />}
					/>
					<Route
						path="/login"
						element={<Login />}
					/>
					<Route
						path="/forgot-password"
						element={<ForgotPassword />}
					/>
					<Route
						path="/movies"
						element={<Movies />}
					/>
					<Route
						path="/tv-shows"
						element={<Tv />}
					/>
					<Route
						path="/people"
						element={<People />}
					/>
				</Routes>
			</Router>
		</>
	);
}
