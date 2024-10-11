import FadeInRight from "../../animation/FadeInRight";
import HeroContent from "./HeroContent";
import HeroThumbs from "./HeroThumbs";

function HeroSection() {
	return (
		<div className="aximo-hero-section mote-bg1">
			<div className="container position-relative">
				<div className="row">
					<div className="col-lg-8">
						<HeroContent />
					</div>
					<div className="col-lg-4">
						<FadeInRight>
							<HeroThumbs />
						</FadeInRight>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
