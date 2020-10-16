import React from "react";
import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import "../style/normalize.css";
import "../style/all.scss";

const Web = () => (
	<StaticQuery
		query={graphql`
			query allWeb {
				source: allFile(
					filter: { absolutePath: { regex: "/web/" } }
					sort: { order: ASC, fields: name }
				) {
					edges {
						node {
							childImageSharp {
								fluid {
									...GatsbyImageSharpFluid
								}
							}
						}
					}
				}
			}
		`}
		render={(data) => (
			<Layout title={"Brandmik"}>
				<div style={{ textAlign: "center", padding: "3em" }}>
					{" "}
					<h4> Web Design portfolio </h4>{" "}
				</div>
				<div>
					{data.source.edges.map(({ node }, i) => (
						<Img style={{ margin: "10%" }} fluid={node.childImageSharp.fluid} />
					))}
				</div>
			</Layout>
		)}
	/>
);
export default Web;
