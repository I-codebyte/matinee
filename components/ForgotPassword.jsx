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
						type="email"
						placeholder="Enter your email address"
						name="email"
						required
					/>
					<br />
					<button>Send Reset Link</button>
				</form>
			</div>
		</>
	);
}
