import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/hero"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <>
      <Layout>
        <Hero />
        <div style={{ maxWidth: "90%" }}>
          <h1>{post.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
