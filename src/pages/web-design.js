import React from "react";
import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../style/normalize.css";
import "../style/all.scss";
import gif_web from "../../content/gif/i.gif";
import waste from "../../content/gif/wasteux.gif";
import dashboard from "../../content/gif/ddd.gif";

const PROJECT = [
  {
    name: "video app",
    description: "UI design of video app. record and upload videos."
  },
  {
    name: "crm dashboard",
    description:
      "industree is a USA startup. It's a hybrid version of facebook and linkedin. best from both worlds"
  },
  {
    name: "terrakom",
    description:
      "croatian telecommunication company. landing page redesign. emphasize the pricing package. "
  },

  {
    name: "health+",
    description:
      "health app desgin. User can search all the clinics in specific diameter. also he can book favorites compare insurance packages and more"
  },
  {
    name: "istock",
    description: "web app for searching and filtering stock article content."
  },
  {
    name: "inemes",
    description: "landing page for evaluators network of balkan."
  },
  {
    name: "trade-space",
    description:
      "CFO services epmowered by technology. main target: financial experts."
  },
  {
    name: "intertool",
    description: "tool shop landing page. product category and filtering "
  },
  {
    name: "mktwise analitics",
    description:
      "machine learning algorithms for marketing optimization landing page"
  },
  {
    name: "evolving digital leadership",
    description: "education app. track tutorial progress"
  },
    {
    name: "crypto",
    description: "cryptocurrency portfolio website. check the latest crypto trends"
  },
    {
    name: "game landing page",
    description: "sci-fi game landing page quick intro"
  }
];
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
    render={data => (
      <Layout title={"Brandmik"}>
        <div style={{ maxWidth: "800px", margin: "5rem auto" }}>
          <div
            style={{
              paddingBottom: "20px"
            }}
          >
            <div>
              <h2>Launch</h2>
              <p style={{ color: "#BDBDBE", maxWidth: "400px" }}>
                crm solution for sme businesses. sas product. goal is to build
                simple and easy to use flow.
              </p>
            </div>

            <img src={gif_web} alt="" />
          </div>

          <div
            style={{
              paddingBottom: "20px"
            }}
          >
            <div>
              <h2>Waste management app</h2>
              <p style={{ color: "#BDBDBE", maxWidth: "400px" }}>
                service to help you how to properly recycle your waste.
                materials sorted by category
              </p>
            </div>

            <img src={waste} alt="" />
          </div>



          {data.source.edges.map(({ node }, i) => (
            <div
              style={{
                paddingBottom: "20px"
              }}
            >
              <div>
                <h2>{PROJECT[i].name}</h2>
                <p style={{ color: "#BDBDBE", maxWidth: "400px" }}>
                  {PROJECT[i].description}
                </p>
              </div>
              <Img fluid={node.childImageSharp.fluid} />
            </div>
          ))}
        </div>
        <div className="more-logos">
          <Link to={"/"}>
            <div className="circle">
              <p>BACK TO HOME</p>
            </div>
          </Link>
        </div>
      </Layout>
    )}
  />
);
export default Web;
