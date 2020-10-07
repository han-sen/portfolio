import React, { useEffect } from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Hero from "../components/hero"
import Blog from "../components/blog"
import Projects from "../components/projects"
import AboutMe from "../components/AboutMe"

export default function Home({ data }) {
  return (
    <>
      {/* <Nav /> */}
      <Layout>
        <Hero />
        <h2>PROJECTS</h2>
        <Projects data={data} />
        <h2>ABOUT</h2>
        <AboutMe />
        <h2>BLOG</h2>
        <Blog data={data} />
      </Layout>
      <p
        style={{
          textAlign: "center",
          margin: "4rem 0",
          fontFamily: "Fira Mono",
          color: "#bababa",
        }}
      >
        Copyright 2020 Mike Hansen
      </p>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allMarkdownRemark(filter: { frontmatter: {} }) {
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
