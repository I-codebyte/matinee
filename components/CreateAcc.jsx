import { Link } from "react-router-dom";

export default function Auth() {
	return (
		<>
			<div className="form-container">
				<h2>Create Account</h2>
				<form action="">
					<input
						type="email"
						placeholder="Email address"
						name="email"
						required
					/>
					<br />
					<input
						type="text"
						placeholder="Username"
						name="username"
					/>
					<br />
					<input
						type="password"
						placeholder="Password"
						name="password"
						required
					/>
					<br />
					<input
						type="password"
						placeholder="Confirm password"
						name="confirm-password"
						required
					/>
					<br />
					<button>Sign Up</button>
				</form>
				<p>
					Already have an account?{" "}
					<Link to="/login" replace>
						Login
					</Link>
				</p>
			</div>
		</>
	);
}
