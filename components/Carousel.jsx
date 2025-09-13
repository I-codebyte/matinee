import { clsx } from "clsx";

export default function Carousel({ title, cardlist, scroll }) {
	// const card = cardlist.map((card) => {
	// 	return (
	// 		<div className="card">
	// 			<img
	// 				src="../src/assets/card-img.svg"
	// 				alt="movie-name"
	// 				className="img-card"
	// 			/>
	// 			<p>Echoes of Tomorrow</p>
	// 		</div>
	// 	);
	// });

	const isScrollable = scroll; //boolean

	const caroSwitch = clsx({
		"cards-container": !isScrollable,
		"cards-container scroll": isScrollable,
	});

	return (
		<>
			<h5 className="carousel-title">{title}</h5>
			<div className={caroSwitch}>
				<div className="card">
					<img
						src="../src/assets/card-img.svg"
						alt="movie-name"
						className="card-img"
						width="160"
						height="213"
					/>
					<p>Echoes of Tomorrow</p>
				</div>
				<div className="card">
					<img
						src="../src/assets/card-img.svg"
						alt="movie-name"
						className="img-card"
						width="160"
						height="213"
					/>
					<p>Echoes of Tomorrow</p>
				</div>
				<div className="card">
					<img
						src="../src/assets/card-img.svg"
						alt="movie-name"
						className="img-card"
						width="160"
						height="213"
					/>
					<p>Echoes of Tomorrow</p>
				</div>
				<div className="card">
					<img
						src="../src/assets/card-img.svg"
						alt="movie-name"
						className="img-card"
						width="160"
						height="213"
					/>
					<p>Echoes of Tomorrow</p>
				</div>
				<div className="card">
					<img
						src="../src/assets/card-img.svg"
						alt="movie-name"
						className="img-card"
						width="160"
						height="213"
					/>
					<p>Echoes of Tomorrow</p>
				</div>
				<div className="card">
					<img
						src="../src/assets/card-img.svg"
						alt="movie-name"
						className="img-card"
						width="160"
						height="213"
					/>
					<p>Echoes of Tomorrow</p>
				</div>
				<div className="card">
					<img
						src="../src/assets/card-img.svg"
						alt="movie-name"
						className="img-card"
						width="160"
						height="213"
					/>
					<p>Echoes of Tomorrow</p>
				</div>
				<div className="card">
					<img
						src="../src/assets/card-img.svg"
						alt="movie-name"
						className="img-card"
						width="160"
						height="213"
					/>
					<p>Echoes of Tomorrow</p>
				</div>
				<div className="card">
					<img
						src="../src/assets/card-img.svg"
						alt="movie-name"
						className="img-card"
						width="160"
						height="213"
					/>
					<p>Echoes of Tomorrow</p>
				</div>
			</div>
		</>
	);
}
