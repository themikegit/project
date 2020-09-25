import React from "react";
import _ from "lodash";
import { Link } from "gatsby";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import "../style/normalize.css";
import "../style/all.scss";

const TagIndex = ({ data }) => {
	const siteTitle = data.site.siteMetadata.title;
	const tags = data.allMarkdownRemark.distinct;

	return (
		<Layout title={siteTitle}>
			<SEO title="Brief" />
			<header className="tag-page-head">
				<h1 className="page-head-title">Design Brief</h1>
			</header>
			<form
				name="contact"
				method="POST"
				data-netlify="true"
				data-netlify-honeypot="bot-field"
			>
				<input type="hidden" name="form-name" value="contact" />
				<div className="row gtr-uniform">
					<div className="col-6 col-12-xsmall">
						<h6>Company Name</h6>
						<input
							type="text"
							name="company-name"
							id="company-name"
							placeholder="Name you want to include in the logo"
						/>
					</div>
					<div className="col-6 col-12-xsmall">
						<h6>Company Slogan</h6>
						<input
							type="text"
							name="company-tagline"
							id="company-tagline"
							placeholder="If any. Optional"
						/>
					</div>
					<div className="col-12">
						<h6>Company Bio</h6>
						<textarea
							name="company-bio"
							id="company-bio"
							placeholder="The bio section is where you communicate your design goals and provide insight into your company’s culture."
							rows={6}
							defaultValue={""}
						/>
					</div>
					<div className="col-12">
						<h6>Mood Board</h6>
						<textarea
							name="company-board"
							id="company-board"
							placeholder="Here you can include link of logo applications you have in mind, photos featuring elements of other logos you like, or even a pre-existing logo your business might have that you want to evolve."
							rows={6}
							defaultValue={""}
						/>
					</div>
					{/* Break */}
					<div className="col-12">
						<ul className="actions">
							<li>
								<input
									type="submit"
									defaultValue="Send Message"
									className="primary"
								/>
							</li>
							<li>
								<input type="reset" defaultValue="Reset" />
							</li>
						</ul>
					</div>
				</div>
			</form>
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
		allMarkdownRemark {
			distinct(field: frontmatter___tags)
		}
	}
`;

export default (props) => (
	<StaticQuery
		query={indexQuery}
		render={(data) => <TagIndex props data={data} />}
	/>
);
