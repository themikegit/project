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
			<SEO title="Contact" />
			<header className="tag-page-head">
				<h1 className="page-head-title">Get in Touch!</h1>
			</header>
			<form name="contact" method="POST" data-netlify="true">
				<div className="row gtr-uniform">
					<div className="col-6 col-12-xsmall">
						<input
							type="text"
							name="demo-name"
							id="demo-name"
							placeholder="Name"
						/>
					</div>
					<div className="col-6 col-12-xsmall">
						<input
							type="email"
							name="demo-email"
							id="demo-email"
							placeholder="Email"
						/>
					</div>
					{/* Break */}
					<div className="col-12">
						<select name="demo-category" id="demo-category">
							<option value>- Category -</option>
							<option value={1}>Logo Desing</option>
							<option value={1}>WebDesign</option>
							<option value={1}>Web development</option>
							<option value={1}>Other</option>
						</select>
					</div>
					{/* Break */}
					<div className="col-4 col-12-small">
						<input
							type="radio"
							id="demo-priority-low"
							name="demo-priority"
							defaultChecked
						/>
						<label htmlFor="demo-priority-low">Low</label>
					</div>
					<div className="col-4 col-12-small">
						<input
							type="radio"
							id="demo-priority-normal"
							name="demo-priority"
						/>
						<label htmlFor="demo-priority-normal">Normal</label>
					</div>
					<div className="col-4 col-12-small">
						<input type="radio" id="demo-priority-high" name="demo-priority" />
						<label htmlFor="demo-priority-high">High</label>
					</div>
					{/* Break */}
					<div className="col-6 col-12-small">
						<input type="checkbox" id="demo-copy" name="demo-copy" />
						<label htmlFor="demo-copy">Email me a copy</label>
					</div>
					<div className="col-6 col-12-small">
						<input
							type="checkbox"
							id="demo-human"
							name="demo-human"
							defaultChecked
						/>
						<label htmlFor="demo-human">I am a human</label>
					</div>
					{/* Break */}
					<div className="col-12">
						<textarea
							name="demo-message"
							id="demo-message"
							placeholder="Enter your message"
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
