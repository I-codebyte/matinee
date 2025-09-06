import { Link } from "react-router-dom";
export default function Login() {
	return (
		<>
			<div className="form-container">
				<h2>Welcome back</h2>
				<p>Login to continue your movie journey.</p>
				<form action="">
					<input
						type="email"
						placeholder="Email address"
						name="email"
						required
					/>
					<br />
					<input
						type="password"
						placeholder="Password"
						name="password"
						required
					/>
					<br />
					<p className="text-forgot-password">
						<Link
							to="/forgot-password"
							replace
						>
							Forgot password?
						</Link>
					</p>
					<button>Login</button>
				</form>
				<p>
					Don't have an account?{" "}
					<Link to="/signup" replace>
						Sign up
					</Link>
				</p>
			</div>
		</>
	);
}
