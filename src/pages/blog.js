import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/nav"
import Footer from "../components/footer"
import styles from "../styles/components/blog.module.scss"

export default function Blog({ data }) {
  return (
    <>
      <Nav />
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.id} className={styles.blog_article_wrap}>
          <h3>
            <a className={styles.blog_link} href={node.fields.slug}>
              {node.frontmatter.title}
            </a>{" "}
            <span className={styles.blog_date}> - {node.frontmatter.date}</span>
          </h3>
          <p className={styles.blog_excerpt}>{node.excerpt}</p>
        </div>
      ))}
      <Footer />
    </>
  )
}

export const query = graphql`
  query BlogQuery {
    allMdx(
      filter: { frontmatter: { post_type: { eq: "blog" } } }
      sort: { fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          frontmatter {
            date
            title
            post_type
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
