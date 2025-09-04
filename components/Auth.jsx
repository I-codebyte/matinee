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
					/>
					<br />
					<button>Sign Up</button>
				</form>
				<p>
					Already have an account?{" "}
					<a href="#">Login</a>
				</p>
			</div>
		</>
	);
}
