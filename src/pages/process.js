import React from "react";
import { graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const ElementsPage = ({ data }, location) => {
	const siteTitle = data.site.siteMetadata.title;

	return (
		<Layout title={siteTitle}>
			<SEO title="How it works" />

			<article className="post-content page-template no-image">
				<div className="post-content-body">
					<h2>Brief</h2>
					<p>
						The first step is to build a creative{" "}
						<a href="https://www.brandmik.com/brief">design brief.</a> A
						creative design brief is a document intended for a design or
						development project.To understand your needs, I must ask questions
						and develop a clear understanding of your business.
					</p>
					<hr />
				</div>
				<div className="post-content-body">
					<h2>Conceptualization</h2>
					<p>
						Once the answers to the questionnaire are complete, I will go
						through and create a few different concepts. Further questions may
						arise, which can be discussed.
					</p>
					<hr />
				</div>
				<div className="post-content-body">
					<h2>Drafts</h2>
					<p>
						At this stage, the strongest logo concepts will be collated into a
						presentation document.I will show how the logo looks on various
						background colors, at different scales, and alongside some logo
						mockups. This helps the client visualize their logo in a practical
						use.
					</p>
					<hr />
				</div>
				<div className="post-content-body">
					<h2>Revision</h2>
					<p>
						I will spend some time discussing the concepts with you to gather
						feedback. After that, we can move on revisions and work on different
						color schemes.
					</p>
					<hr />
				</div>
				<div className="post-content-body">
					<h2>Delivery</h2>
					<p>
						Everything is created in Adobe Illustrator - vector graphic. This
						means that the same logo design that looks great on a business card
						will also look perfect on a billboard.The standard files are: .AI
						(for future editing if desired), .EPS / .PDF (for printing), .JPEG
						(for viewing) and .PNG (with a transparent background for web use).{" "}
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
		smallPic: file(
			relativePath: { eq: "fabio-comparelli-696506-unsplash.jpg" }
		) {
			childImageSharp {
				fluid(maxWidth: 1360) {
					...GatsbyImageSharpFluid
				}
			}
		}
		medPic: file(relativePath: { eq: "sophia-valkova-30139-unsplash.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1360) {
					...GatsbyImageSharpFluid
				}
			}
		}
		largePic: file(
			relativePath: { eq: "vladimir-malyutin-98174-unsplash.jpg" }
		) {
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
			<ElementsPage location={props.location} data={data} {...props} />
		)}
	/>
);
