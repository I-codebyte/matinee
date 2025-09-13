import { Link } from "react-router-dom";
import logo from "../src/assets/logo.svg";

export default function Navbar() {
	return (
		<>
			<header>
				<div className="logo">
					<img src={logo} alt="img-logo" />
					<h1>Matinee</h1>
				</div>
				<nav className="navigation">
					<Link to="/home" replace>
						Home
					</Link>
					<Link to="/movies" replace>
						Movies
					</Link>
					<Link to="/tv-shows" replace>
						TV Shows
					</Link>
					<Link to="/people" replace>
						People
					</Link>
				</nav>
				<div className="action">
					<Link
						className="nav-button"
						to="/login"
						replace
					>
						Log In
					</Link>
				</div>
			</header>
		</>
	);
}
