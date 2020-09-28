import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const AboutPage = ({ data }, location) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout title={siteTitle}>
			<SEO title="About" keywords={[`desgin`, `logo`, `clean`, `modern`]} />

			<article className="post-content page-template no-image">
				<div className="post-content-body cent">
					<Img
						fluid={data.benchAccounting.childImageSharp.fluid}
						className="avatar"
					/>
					<h2> &#x1F44B; Hi! I'm Miroslav.</h2>
					<p>
						graphic designer from{" "}
						<span>
							<a target="_blank" href="https://en.wikipedia.org/wiki/Belgrade">
								Belgrade
							</a>{" "}
						</span>{" "}
					</p>
					<p>
						I'm focused on creating custom and meaningful logos. Beside logo
						design I'm truly enjoying creating user interfaces and websites. If
						you want to make your site live I can help you with that too!
						&#x1F60E;
					</p>
				</div>
			</article>
		</Layout>
	);
};

const indexQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
		benchAccounting: file(relativePath: { eq: "ff.png" }) {
			childImageSharp {
				fluid(maxWidth: 1360) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`;

export default (props) => (
	<StaticQuery
		query={indexQuery}
		render={(data) => (
			<AboutPage location={props.location} data={data} {...props} />
		)}
	/>
);
