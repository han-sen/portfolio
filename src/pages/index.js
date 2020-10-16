import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Blog from "../components/blog"
import Projects from "../components/projects"
import AboutMe from "../components/AboutMe"

export default function Home({ data }) {
  return (
    <>
      <Nav />
      <Hero />
      <Projects data={data} />
      <h2>ABOUT</h2>
      <AboutMe />
      <h2>BLOG</h2>
      <Blog data={data} />
      <Footer />
    </>
  )
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(
      filter: { frontmatter: {} }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            title
            post_type
            description
            feature
            github
            liveLink
            tags
            icon
            featuredImg {
              publicURL
              childImageSharp {
                fluid {
                  originalImg
                }
              }
            }
          }
          html
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
