import React from "react";
import { Link } from "gatsby";

const Layout = (props) => {
	const { title, children } = props;
	const [toggleNav, setToggleNav] = React.useState(false);
	return (
		<div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
			<header className="site-head">
				<div id="menu" className="site-head-container">
					<a
						className="nav-burger"
						href={`#menu`}
						onClick={() => setToggleNav(!toggleNav)}
					>
						<div
							className="hamburger hamburger--collapse"
							aria-label="Menu"
							role="button"
							aria-controls="navigation"
						>
							<div className="hamburger-box">
								<div className="hamburger-inner" />
							</div>{" "}
							<div className="hamburger-text-menu-text hidden">Menu</div>
						</div>
					</a>
					<nav id="swup" className="site-head-left">
						<ul className="nav" role="menu">
							{/* <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li> */}
							<li className="nav-about" role="menuitem">
								<Link to={`/bio`}>Bio</Link>
							</li>
							<li className="nav-elements" role="menuitem">
								<Link to={`/process`}>Process</Link>
							</li>
							<li className="nav-tags" role="menuitem">
								<Link to={`/brief`}>Brief</Link>
							</li>
							<li className="nav-tags" role="menuitem">
								<Link to={`/web-design`}> Web design </Link>
							</li>
						</ul>
					</nav>
					<div className="site-head-center">
						<Link className="site-head-logo" to={`/`}>
							{title}
						</Link>
					</div>
					<div className="site-head-right">
						<div className="social-links">
							<a
								href="https://www.upwork.com/fl/miroslavkrsmanovic"
								title="Upwork"
								target="_blank"
								rel="noopener noreferrer"
							>
								Upwork
							</a>
							{/* <a
								href="https://www.freelancer.com/u/rostovniki"
								title="Freelancer"
								target="_blank"
								rel="noopener noreferrer"
							>
								Freelancer
							</a> */}
							{/* <a
								href="https://dribbble.com/rostovniki"
								title="Dribbble"
								target="_blank"
								rel="noopener noreferrer"
							>
								Dribbble
							</a> */}
						</div>
					</div>
				</div>
			</header>
			<main id="site-main" className="site-main">
				<div id="swup" className="transition-fade">
					{children}
				</div>
			</main>
			<footer className="site-foot">
				&copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
				Built with{" "}
				<a
					href="https://gatsbyjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Gatsby
				</a>
			</footer>
		</div>
	);
};

export default Layout;
