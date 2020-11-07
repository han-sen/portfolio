import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/nav"
import Footer from "../components/footer"
import styles from "../styles/components/projects-page.module.scss"

export default function Projects({ data }) {
  return (
    <>
      <Nav />
      <section className={styles.projects_wrap}>
        <div className={styles.projects_wrap_inner}>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={styles.project_stub_wrap}>
              <h3>
                <a className={styles.project_link} href={node.fields.slug}>
                  {node.frontmatter.title}
                </a>{" "}
                <span className={styles.project_date}>
                  {" "}
                  - {node.frontmatter.date}
                </span>
              </h3>
              <p className={styles.project_excerpt}>{node.excerpt}</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  )
}

export const query = graphql`
  query ProjectsQuery {
    allMarkdownRemark(
      filter: { frontmatter: { post_type: { eq: "project" } } }
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
