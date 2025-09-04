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
					<a href="#">Home</a>
					<a href="#">Movies</a>
					<a href="#">TV Shows</a>
					<a href="#">People</a>
				</nav>
				<div className="action">
					<a className="nav-button" href="#">
						Log In
					</a>
				</div>
			</header>
		</>
	);
}
