import React from "react";
import { StaticQuery, graphql } from "gatsby";

const StaticLogo = () => (
	<StaticQuery
		query={graphql`
			query allimgQuery {
				source: allFile(
					filter: { absolutePath: { regex: "/assets/" } }
					sort: { order: ASC, fields: name }
				) {
					edges {
						node {
							childImageSharp {
								fluid(maxWidth: 1360) {
									...GatsbyImageSharpFluid
									src
								}
							}
						}
					}
				}
			}
		`}
		render={(data) => (
			<div className="post-feed">
				{data.source.edges.map(({ node }, i) => (
					<div
						className="post-card"
						style={{
							backgroundImage: `url(${node.childImageSharp.fluid.src})`,
						}}
					>
						<div className="post-card-content "></div>
					</div>
				))}
			</div>
		)}
	/>
);
export default StaticLogo;
