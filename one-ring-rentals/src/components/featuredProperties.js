// import featured property components
import FeaturedProperty from "./featuredProperty";

function Properties() {
	return (
		<>
			{/* markup the container to match the existing HTML and tags */}
			<h1 className="section-title">Featured Properties Component</h1>
			<div className="grid-style1 clearfix">
				{/* bring in the featured property components */}
				<FeaturedProperty />
			</div>
		</>
	);
}

// send it out to the destination (App.js)
export default Properties;
