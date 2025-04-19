// import logo from "./logo.svg";
import "./App.css";
import "./css/bootstrap.min.css";
import "./css/style.css";

import logo from "./images/logo.png";

import Properties from "./components/featuredProperties.js";
import LastMinuteDealsSection from "./components/lastMinuteDeals.js";

function App() {
	return (
		<>
			<header id="header">
				<div id="top-bar">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<ul id="top-buttons">
									<li>
										<a href="/">
											<i className="fa fa-sign-in" /> Login
										</a>
									</li>
									<li>
										<a href="/">
											<i className="fa fa-pencil-square-o" /> Register
										</a>
									</li>
									<li className="divider" />
									<li>
										<div className="language-switcher">
											<span>
												<i className="fa fa-globe" /> English
											</span>
											<ul>
												<li>
													<a href="/">Deutsch</a>
												</li>
												<li>
													<a href="/">Español</a>
												</li>
												<li>
													<a href="/">Français</a>
												</li>
												<li>
													<a href="/">Português</a>
												</li>
											</ul>
										</div>
									</li>
									{/* BOOTSTRAP SEARCH BEGINS

								<li>
								<form id="site-search">
									<span><i class="fa fa-search"></i></span>
									<input type="text" name="q" placeholder="Search">
								</form>
								</li>

								BOOTSTRAP SEARCH ENDS */}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div id="nav-section">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<a href="index.html" className="nav-logo">
									<img src={logo} alt="One Ring Rentals" />
								</a>
								{/* BEGIN SEARCH */}
								<div id="sb-search" className="sb-search">
									<form>
										<input
											className="sb-search-input"
											placeholder="Search..."
											type="text"
											defaultValue=""
											name="search"
											id="search"
										/>
										<input className="sb-search-submit" type="submit" defaultValue="" />
										<i className="fa fa-search sb-icon-search" />
									</form>
								</div>
								{/* END SEARCH */}
								{/* BEGIN MAIN MENU */}
								<nav className="navbar">
									<button id="nav-mobile-btn">
										<i className="fa fa-bars" />
									</button>
									<ul className="nav navbar-nav">
										<li>
											<a href="/">Find a Rental</a>
										</li>
										<li>
											<a href="/">List your rental</a>
										</li>
										<li>
											<a href="/">Regions</a>
										</li>
										<li>
											<a href="/">Travel Guides</a>
										</li>
										<li>
											<a href="/">About Us</a>
										</li>
										<li>
											<a href="/">Regions</a>
										</li>
									</ul>
								</nav>
								{/* END MAIN MENU */}
							</div>
						</div>
					</div>
				</div>
			</header>
			{/* END HEADER */}
			{/* BEGIN HOME SLIDER SECTION */}
			<div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
				{/* Indicators
		  <ol class="carousel-indicators">
		    <li data-target="#carousel-example-generic" data-slide-to="0" class="active"></li>
		    <li data-target="#carousel-example-generic" data-slide-to="1"></li>
		  </ol> */}
				{/* Wrapper for slides */}
				<div className="carousel-inner" role="listbox">
					<div
						className="item active"
						id="slide1"
						style={{
							background: "url(http://placehold.it/1920x605) no-repeat left center",
							backgroundSize: "cover",
						}}
					>
						{" "}
						{/* Ready for JS Injection */}
						<div className="carousel-caption">
							<div className="caption sfr slider-title">Breathtaking views</div>
							<div className="caption sfl slider-subtitle">
								Relaxation in the Bay of Belfalas
							</div>
							<a href="/" className="caption sfb btn btn-default btn-lg">
								Learn More
							</a>
						</div>
					</div>
					<div
						className="item"
						id="slide2"
						style={{
							background: "url(http://placehold.it/1920x605) no-repeat left center",
							backgroundSize: "cover",
						}}
					>
						<div className="carousel-caption">
							<div className="caption sfr slider-title">The simple life</div>
							<div className="caption sfl slider-subtitle">Lush gardens in Mordor</div>
							<a href="/" className="caption sfb btn btn-default btn-lg">
								Learn More
							</a>
						</div>
					</div>
				</div>
				{/* Blue Filter */}
				<div id="home-search-section" />
				{/* Controls */}
				<a
					className="left carousel-control"
					href="#carousel-example-generic"
					role="button"
					data-slide="prev"
				>
					<span className="glyphicon glyphicon-chevron-left" />
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="right carousel-control"
					href="#carousel-example-generic"
					role="button"
					data-slide="next"
				>
					<span className="glyphicon glyphicon-chevron-right" />
					<span className="sr-only">Next</span>
				</a>
			</div>
			{/* END HOME SLIDER SECTION */}
			{/* BEGIN HOME ADVANCED SEARCH */}
			<div id="home-advanced-search" className="open">
				<div id="opensearch" />
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<form>
								<div className="form-group">
									<div className="form-control-small">
										<div className="input-group date chzn-container" data-datepicker="">
											<input
												placeholder="Arrive on..."
												type="text"
												className="form-control"
												data-date-format="DD/MM/YYYY"
											/>
											<span className="input-group-addon">
												<span className="glyphicon glyphicon-calendar" />
											</span>
										</div>
									</div>
									<div className="form-control-small">
										<select
											id="search_status"
											name="search_status"
											data-placeholder="Stay..."
											className="chzn-done"
											style={{ display: "block" }}
										>
											<option value="">Stay..</option>
											<option value={1}>1 Night</option>
											<option value={2}>2 Nights</option>
											<option value={3}>3 Nights</option>
											<option value={4}>4 Nights</option>
											<option value={5}>5 Nights</option>
											<option value={6}>6 Nights</option>
											<option value={7}>7 Nights</option>
											<option value={8}>8 Nights</option>
											<option value={9}>9 Nights</option>
											<option value={10}>10 Nights</option>
											<option value={11}>11 Nights</option>
											<option value={12}>12 Nights</option>
											<option value={13}>13 Nights</option>
											<option value={14}>14 Nights</option>
										</select>
									</div>
									<div className="form-control-small">
										<select
											id="search_bedrooms"
											name="search_bedrooms"
											data-placeholder="Bedrooms"
										>
											<option value="">Bedrooms</option>
											<option value={0}>0</option>
											<option value={1}>1</option>
											<option value={2}>2</option>
											<option value={3}>3</option>
											<option value={4}>4</option>
											<option value={5}>5</option>
											<option value="5plus">5+</option>
										</select>
									</div>
									<div className="form-control-large">
										<input
											type="text"
											className="form-control"
											name="location"
											placeholder="City, State, Country, etc..."
										/>
									</div>
									<button type="submit" className="btn btn-fullcolor">
										Search
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
			{/* END HOME ADVANCED SEARCH */}

			{/* BEGIN CONTENT WRAPPER */}
			<div className="content">
				<div className="container">
					<div className="row">
						{/* BEGIN MAIN CONTENT */}
						<div className="main col-sm-8">
							<Properties />
							<div className="row">
								<div className="col-sm-12">
									<h1 className="section-title">Popular Regions</h1>
									<div id="regions">
										<div className="item">
											<a href="/">
												<img src="http://placehold.it/194x194" alt="" />
												<h3>Rhovanion</h3>
											</a>
										</div>
										<div className="item">
											<a href="/">
												<img src="http://placehold.it/194x194" alt="" />
												<h3>Eriador</h3>
											</a>
										</div>
										<div className="item">
											<a href="/">
												<img src="http://placehold.it/194x194" alt="" />
												<h3>Bay of Belfalas</h3>
											</a>
										</div>
										<div className="item">
											<a href="/">
												<img src="http://placehold.it/194x194" alt="" />
												<h3>Mordor</h3>
											</a>
										</div>
										<div className="item">
											<a href="/">
												<img src="http://placehold.it/194x194" alt="" />
												<h3>The Southwest</h3>
											</a>
										</div>
										<div className="item">
											<a href="/">
												<img src="http://placehold.it/194x194" alt="" />
												<h3>Arnor</h3>
											</a>
										</div>
									</div>
								</div>
							</div>
							<h1 className="section-title">Recent Articles</h1>
							<div className="grid-style1">
								<div className="item col-md-4">
									<div className="image">
										<a href="/">
											<span className="btn btn-default">
												<i className="fa fa-file-o" /> Read More
											</span>
										</a>
										<img src="http://placehold.it/766x515" alt="" />
									</div>
									<div className="tag">
										<i className="fa fa-file-text" />
									</div>
									<div className="info-blog">
										<ul className="top-info">
											<li>
												<i className="fa fa-calendar" /> July 30, 2014
											</li>
											<li>
												<i className="fa fa-comments-o" /> 2
											</li>
											<li>
												<i className="fa fa-tags" /> Properties, Prices, best deals
											</li>
										</ul>
										<h3>
											<a href="/">How to get your dream property for the best price?</a>
										</h3>
										<p>
											Sed rutrum urna id tellus euismod gravida. Praesent placerat,
											mauris ac pellentesque fringilla, tortor libero condimen.
										</p>
									</div>
								</div>
								<div className="item col-md-4">
									<div className="image">
										<a href="/">
											<span className="btn btn-default">
												<i className="fa fa-file-o" /> Read More
											</span>
										</a>
										<img src="http://placehold.it/766x515" alt="" />
									</div>
									<div className="tag">
										<i className="fa fa-film" />
									</div>
									<div className="info-blog">
										<ul className="top-info">
											<li>
												<i className="fa fa-calendar" /> July 24, 2014
											</li>
											<li>
												<i className="fa fa-comments-o" /> 4
											</li>
											<li>
												<i className="fa fa-tags" /> Tips, Mortgage
											</li>
										</ul>
										<h3>
											<a href="/">7 tips to get the best mortgage.</a>
										</h3>
										<p>
											Sed rutrum urna id tellus euismod gravida. Praesent placerat,
											mauris ac pellentesque fringilla, tortor libero condimen.
										</p>
									</div>
								</div>
								<div className="item col-md-4">
									<div className="image">
										<a href="/">
											<span className="btn btn-default">
												<i className="fa fa-file-o" /> Read More
											</span>
										</a>
										<img src="http://placehold.it/766x515" alt="" />
									</div>
									<div className="tag">
										<i className="fa fa-file-text" />
									</div>
									<div className="info-blog">
										<ul className="top-info">
											<li>
												<i className="fa fa-calendar" /> July 05, 2014
											</li>
											<li>
												<i className="fa fa-comments-o" /> 1
											</li>
											<li>
												<i className="fa fa-tags" /> Location, Price, House
											</li>
										</ul>
										<h3>
											<a href="/">
												House, location or price: What's the most important factor?
											</a>
										</h3>
										<p>
											Sed rutrum urna id tellus euismod gravida. Praesent placerat,
											mauris ac pellentesque fringilla, tortor libero condimen.
										</p>
									</div>
								</div>
							</div>
							<div className="center">
								<a href="/" className="btn btn-default-color">
									View All News
								</a>
							</div>
						</div>
						{/* END MAIN CONTENT */}
						{/* BEGIN SIDEBAR */}
						<div className="sidebar col-sm-4">
							{/* BEGIN SIDEBAR ABOUT */}
							<LastMinuteDealsSection />
							<p className="center">
								<a className="btn btn-fullcolor" href="/">
									More deals
								</a>
							</p>
							{/* END SIDEBAR ABOUT */}
							<div className="col-sm-12">
								<h2 className="section-title">Activity</h2>
								<ul className="activity">
									<li className="col-lg-12">
										<a href="/">
											<img src="http://placehold.it/70x70" alt="" />
										</a>
										<div className="info">
											<h5>
												Sam Minnée reviewed <a href="/">The House With No Windows</a>
											</h5>
											<p>Awesome solitary confinement, mate. Spot on. Sweet as.</p>
											<h6>Just now</h6>
										</div>
									</li>
									<li className="col-lg-12">
										<a href="/">
											<img src="http://placehold.it/70x70" alt="" />
										</a>
										<div className="info">
											<h5>
												Ingo Schoomer asked a question about{" "}
												<a href="/">The Mistake by the Lake</a>
											</h5>
											<p>Has this house been unit tested?</p>
											<h6>37 minutes ago</h6>
										</div>
									</li>
								</ul>
							</div>
						</div>
						{/* END SIDEBAR */}
					</div>
				</div>
			</div>
			{/* END CONTENT WRAPPER */}
			{/* BEGIN FOOTER */}
			<footer id="footer">
				<div id="footer-top" className="container">
					<div className="row">
						<div className="block col-sm-3">
							<a href="/">
								<img src="images/logo.png" alt="One Ring Rentals" />
							</a>
							<br />
							<br />
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam commodo eros
								nibh, et dictum elit tincidunt eget. Pellentesque volutpat quam dignissim,
								convallis elit id, efficitur sem. Vivamus ac scelerisque sem. Aliquam sed
								enim rutrum nibh gravida pellentesque nec at metus.
							</p>
						</div>
						<div className="block col-sm-3">
							<h3>Helpful Links</h3>
							<ul className="footer-links">
								<li>
									<a href="/">All rentals</a>
								</li>
								<li>
									<a href="/">List your rental</a>
								</li>
								<li>
									<a href="/">Read our FAQs</a>
								</li>
							</ul>
						</div>
						<div className="block col-sm-6">
							<h3>Popular regions</h3>
							<div className="row">
								<div className="col-sm-6">
									<ul className="footer-listings">
										<li>
											<div className="image">
												<a href="properties-detail.html">
													<img src="http://placehold.it/760x670" alt="" />
												</a>
											</div>
											<p>
												<a href="properties-detail.html">Rhovanion</a>
											</p>
										</li>
										<li>
											<div className="image">
												<a href="properties-detail.html">
													<img src="http://placehold.it/760x670" alt="" />
												</a>
											</div>
											<p>
												<a href="properties-detail.html">Eriador</a>
											</p>
										</li>
										<li>
											<div className="image">
												<a href="properties-detail.html">
													<img src="http://placehold.it/760x670" alt="" />
												</a>
											</div>
											<p>
												<a href="properties-detail.html">Bay of Belfalas</a>
											</p>
										</li>
									</ul>
								</div>
								<div className="col-sm-6">
									<ul className="footer-listings">
										<li>
											<div className="image">
												<a href="properties-detail.html">
													<img src="http://placehold.it/760x670" alt="" />
												</a>
											</div>
											<p>
												<a href="properties-detail.html">Mordor</a>
											</p>
										</li>
										<li>
											<div className="image">
												<a href="properties-detail.html">
													<img src="http://placehold.it/760x670" alt="" />
												</a>
											</div>
											<p>
												<a href="properties-detail.html">Arnor</a>
											</p>
										</li>
										<li>
											<div className="image">
												<a href="properties-detail.html">
													<img src="http://placehold.it/760x670" alt="" />
												</a>
											</div>
											<p>
												<a href="properties-detail.html">Forlindon</a>
											</p>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* BEGIN COPYRIGHT */}
				<div id="copyright">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								© 2014 One Ring Rentals
								{/* BEGIN SOCIAL NETWORKS */}
								<ul className="social-networks">
									<li>
										<a href="/">
											<i className="fa fa-facebook" />
										</a>
									</li>
									<li>
										<a href="/">
											<i className="fa fa-twitter" />
										</a>
									</li>
									<li>
										<a href="/">
											<i className="fa fa-google" />
										</a>
									</li>
									<li>
										<a href="/">
											<i className="fa fa-pinterest" />
										</a>
									</li>
									<li>
										<a href="/">
											<i className="fa fa-youtube" />
										</a>
									</li>
									<li>
										<a href="/">
											<i className="fa fa-rss" />
										</a>
									</li>
								</ul>
								{/* END SOCIAL NETWORKS */}
							</div>
						</div>
					</div>
				</div>
				{/* END COPYRIGHT */}
			</footer>
			{/* END FOOTER */}
		</>
	);
}

export default App;
