import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/nav"
import Footer from "../components/footer"
import Hero from "../components/hero"
import Projects from "../components/projects"
import AboutMe from "../components/about-me"
import BackToTop from "../components/back-to-top"
import "../styles/global.scss"

export default function Home({ data }) {
  return (
    <main className="page_wrap">
      <Nav />
      <Hero />
      <Projects data={data} />
      <AboutMe />
      <Footer />
      <BackToTop />
    </main>
  )
}

export const query = graphql`
  query IndexQuery {
    allMdx(filter: { frontmatter: {} }, sort: { fields: frontmatter___date }) {
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
          body
          excerpt
          fields {
            slug
          }
        }
      }
    }
  }
`
