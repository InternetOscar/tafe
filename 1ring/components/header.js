import Head from "next/head";
import logo from "../images/logo.png";
import Image from "next/image";

export default function Header() {
	return (
		<>
			<Head>
				{/*[if lt IE 7 ]><html class="ie ie6" lang="en"> <![endif]*/}
				{/*[if IE 7 ]><html class="ie ie7" lang="en"> <![endif]*/}
				{/*[if IE 8 ]><html class="ie ie8" lang="en"> <![endif]*/}
				{/*[if (gte IE 9)|!(IE)]><!*/} {/*<![endif]*/}
				<meta charSet="utf-8" />
				{/* Page Title */}
				<title>One Ring Rentals - Home</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
				{/* IE6-8 support of HTML5 elements */}
				{/*[if lt IE 9]>

  <![endif]*/}
				{/* Google Web Font */}
				<link
					href="http://fonts.googleapis.com/css?family=Raleway:300,500,900%7COpen+Sans:400,700,400italic"
					rel="stylesheet"
					type="text/css"
				/>
			</Head>
			<header id="header">
				<div id="top-bar">
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<ul id="top-buttons">
									<li>
										<a href="#">
											<i class="fa fa-sign-in"></i> Login
										</a>
									</li>
									<li>
										<a href="#">
											<i class="fa fa-pencil-square-o"></i> Register
										</a>
									</li>
									<li class="divider"></li>
									<li>
										<div class="language-switcher">
											<span>
												<i class="fa fa-globe"></i> English
											</span>
											<ul>
												<li>
													<a href="#">Deutsch</a>
												</li>
												<li>
													<a href="#">Espa&ntilde;ol</a>
												</li>
												<li>
													<a href="#">Fran&ccedil;ais</a>
												</li>
												<li>
													<a href="#">Portugu&ecirc;s</a>
												</li>
											</ul>
										</div>
									</li>

									{/* <!-- BOOTSTRAP SEARCH BEGINS

								<li>
								<form id="site-search">
									<span><i class="fa fa-search"></i></span>
									<input type="text" name="q" placeholder="Search">
								</form>
								</li>

								BOOTSTRAP SEARCH ENDS --> */}
								</ul>
							</div>
						</div>
					</div>
				</div>

				<div id="nav-section">
					<div class="container">
						<div class="row">
							<div class="col-sm-12">
								<a href="/" class="nav-logo">
									<Image src={logo} width={100} height={100} />
								</a>

								<div id="sb-search" class="sb-search">
									<form>
										<input
											class="sb-search-input"
											placeholder="Search..."
											type="text"
											value=""
											name="search"
											id="search"
										></input>
										<input class="sb-search-submit" type="submit" value=""></input>
										<i class="fa fa-search sb-icon-search"></i>
									</form>
								</div>

								<nav class="navbar">
									<button id="nav-mobile-btn">
										<i class="fa fa-bars"></i>
									</button>

									<ul class="nav navbar-nav">
										<li>
											<a href="#">Find a Rental</a>
										</li>
										<li>
											<a href="#">List your rental</a>
										</li>
										<li>
											<a href="#">Regions</a>
										</li>
										<li>
											<a href="#">Travel Guides</a>
										</li>
										<li>
											<a href="#">About Us</a>
										</li>
										<li>
											<a href="#">Regions</a>
										</li>
									</ul>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>
		</>
	);
}
