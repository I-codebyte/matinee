import Carousel from "./Carousel";

export default function Home() {
	return (
		<>
			<div>
				<section className="hero">
					<div className="l-gradient">
						<h1>The Last Stand</h1>
						<p>
							A thrilling action film
							a lone hero's fight
							against injustice.
							Witness epic battles and
							a story of courage
							against all odds.
						</p>
						<div className="hero-action">
							<button className="play">
								Play
							</button>
							<button className="more-info">
								More Info
							</button>
						</div>
					</div>
				</section>
				<section className="content-movies">
					<Carousel title="Recommended for you" scroll={true} />
					<Carousel title="Trending" scroll={true} />
					<Carousel title="New Releases" scroll={true} />
					<Carousel title="Popular Movies" scroll={true} />
				</section>
			</div>
		</>
	);
}
