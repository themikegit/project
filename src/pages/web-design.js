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
			<SEO title="Cooming soon!" />
			<header className="tag-page-head">
				<h1 className="page-head-title">coming soon...</h1>
			</header>
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
