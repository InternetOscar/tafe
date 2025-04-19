// pull in data from the external data file
import { property } from "./data";

function FeaturedProperty() {
	// map the content based on each object in the relevant data file (property)
	const properties = property.map((property) => (
		// add a unique property id to make react happy
		<div key={property.id}>
			<div className="item col-md-4" key={property.id}>
				<div className="image">
					<a href="properties-detail.html">
						{/* pull out the heading and location */}
						<h3>{property.heading}</h3>
						<span className="location">{property.location}</span>
					</a>
					<img src="http://placehold.it/760x670" alt="" />
				</div>
				<div className="price">
					{/* pull out the price but prepend the dollar sign, makes the data file nicer */}
					<span>${property.price}</span>
					<p>per night</p>
				</div>
				<ul className="amenities">
					<li>
						<i className="icon-bedrooms" />
						{/* pull out the number of bedrooms */}
						{property.bedrooms}
					</li>
					<li>
						<i className="icon-bathrooms" />
						{/* pull out the number of bathrooms */}
						{property.bathrooms}
					</li>
				</ul>
			</div>
		</div>
	));
	// render out each of the properties
	return <>{properties}</>;
}

// push it out to the main properties component
export default FeaturedProperty;
