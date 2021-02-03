import React from "react";
import Layout from "../components/layout";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import Img from "gatsby-image";
import "../style/normalize.css";
import "../style/all.scss";
import gif_web from "../../content/gif/i.gif";
import waste from "../../content/gif/wasteux.gif";

const PROJECT = [
  {
    name: "video app",
    description: "UI design of video app. Record and upload videos."
  },
  {
    name: "crm dashboard",
    description:
      "industree is a USA startup. It's a hybrid version of facebook and linkedin. Best from both worlds"
  },
  {
    name: "terrakom",
    description:
      "cro telecommunication company. Landing page redesign. Emphasize the pricing package. "
  },

  {
    name: "health+",
    description:
      "health app desgin. User can search all the clinics in specific diameter. Also he can book favorites compare insurance packages and more"
  },
  {
    name: "istock",
    description: "web app for searching and filtering stock article content."
  },
  {
    name: "inemes",
    description: "landing page for evaluators network of Balkan."
  },
  {
    name: "trade-space",
    description:
      "CFO services epmowered by technology. Main target: Financial experts."
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
        <div style={{ textAlign: "center", padding: "3em" }}>
          {" "}
          <h4> Web Design portfolio </h4>{" "}
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingBottom: "20px"
            }}
          >
            <div style={{ maxWidth: "49vw", flexGrow: "1" }}>
              <img src={gif_web} alt="" />
            </div>

            <div
              style={{ flexGrow: "1", paddingLeft: "30px", maxWidth: "30vw" }}
            >
              <h2>Launch</h2>
              <p>
                crm solution for sme businesses. sas product. goal is to build
                simple and easy to use flow.
              </p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              paddingBottom: "20px"
            }}
          >
            <div style={{ maxWidth: "49vw", flexGrow: "1" }}>
              <img src={waste} alt="" />
            </div>

            <div
              style={{ flexGrow: "1", paddingLeft: "30px", maxWidth: "30vw" }}
            >
              <h2>Launch</h2>
              <p>
                crm solution for sme businesses. sas product. goal is to build
                simple and easy to use flow.
              </p>
            </div>
          </div>

          {data.source.edges.map(({ node }, i) => (
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                paddingBottom: "20px"
              }}
            >
              <div style={{ maxWidth: "49vw", flexGrow: "1" }}>
                <Img fluid={node.childImageSharp.fluid} />
              </div>

              <div
                style={{ flexGrow: "1", paddingLeft: "30px", maxWidth: "30vw" }}
              >
                <h2>{PROJECT[i].name}</h2>
                <p>{PROJECT[i].description}</p>
              </div>
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
