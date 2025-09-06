import { Link } from "react-router-dom";

export default function RestPassword() {
	return (
		<>
			<div className="form-container">
				<h2>Reset Your Password</h2>
				<p>Enter your new password</p>
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
