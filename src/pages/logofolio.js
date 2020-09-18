import React from "react";
import { graphql, StaticQuery } from "gatsby";
import StaticLogo from "../components/staticLogo";
import Layout from "../components/layout";

import "../style/normalize.css";
import "../style/all.scss";

const LogoPage = ({ data }) => {
	const siteTitle = data.site.siteMetadata.title;
	return (
		<Layout title={siteTitle}>
			<StaticLogo />
		</Layout>
	);
};

const indexQuery = graphql`
	query {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;

export default (props) => (
	<StaticQuery
		query={indexQuery}
		render={(data) => (
			<LogoPage location={props.location} props data={data} {...props} />
		)}
	/>
);
