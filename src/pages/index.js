import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Hero from "../components/hero"
import Blog from "../components/blog"

export default function Home({ data }) {
  return (
    <>
      <Nav />
      <Layout>
        <Hero />
        <Blog data={data} />
      </Layout>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
          }
          html
          excerpt
        }
      }
    }
  }
`
