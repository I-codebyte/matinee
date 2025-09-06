export default function ForgotPassword() {
	return (
		<>
			<div className="form-container">
				<h2>Forgot your password?</h2>
				<p>
					Enter your email address and we'll send
					you a link to reset your password.
				</p>
				<form action="">
					<input
						type="password"
						placeholder="Enter your new password"
						name="password"
						required
					/>
					<br />
					<input
						type="password"
						placeholder="Confirm your new password"
						name="password"
						required
					/>
					<br />
					<button>Reset Password</button>
				</form>
			</div>
		</>
	);
}
