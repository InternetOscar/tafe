// import each "deal"
import Deals from "./deal";

function LastMinuteDealsSection() {
	return (
		<>
			{/* markup the deals to match the existing html */}
			<h2 className="section-title">Last Minute Deals</h2>
			<ul className="latest-news">
				{/* actually render the component. spent too long figuring out why nothing was showing */}
				<Deals />
			</ul>
		</>
	);
}

// send it to App.js (USING PASCAL CASE otherwise it doesn't accept the component)
export default LastMinuteDealsSection;
