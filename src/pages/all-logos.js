import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function allLogos() {
	return (
		<div>
			<Layout>
				<h2>hellos</h2>
			</Layout>
		</div>
	);
}

const lgos = graphql`query {
  allFile(filter: {absolutePath: {regex:"/content/asset/"}}) {
    edges {
      node {
        id
        relativePath
      
      }
    }
  }
}
`
