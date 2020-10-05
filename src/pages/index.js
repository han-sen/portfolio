import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Hero from "../components/hero"
import Blog from "../components/blog"
import Projects from "../components/projects"

export default function Home({ data }) {
  return (
    <>
      {/* <Nav /> */}
      <Layout>
        <Hero />
        <h2>PROJECTS</h2>
        <Projects />
        <h2>BLOG</h2>
        <Blog data={data} />
      </Layout>
      <p
        style={{
          textAlign: "center",
          margin: "4rem 0",
          fontFamily: "Fira Mono",
        }}
      >
        Copyright 2020 Mike Hansen
      </p>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { frontmatter: { post_type: { eq: "blog" } } }) {
      edges {
        node {
          id
          frontmatter {
            date
            title
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
