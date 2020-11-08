import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/nav"
import ProjectCategory from "../components/project-category"
import Footer from "../components/footer"
import styles from "../styles/components/projects-page.module.scss"

export default function Projects({ data }) {
  return (
    <>
      <Nav />
      <section className={styles.projects_wrap}>
        <div className={styles.projects_wrap_inner}>
          <h1 className={styles.projects_header}>PROJECTS</h1>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <div key={node.id} className={styles.project_stub_wrap}>
              <img
                src={
                  node.frontmatter.featuredImg.childImageSharp.fluid.originalImg
                }
                className={styles.project_stub_img}
              />
              <div className={styles.text_wrap}>
                <div className={styles.top_row}>
                  <ProjectCategory icon={node.frontmatter.icon} />
                  <h3>
                    <a className={styles.project_link} href={node.fields.slug}>
                      {node.frontmatter.title}
                    </a>
                  </h3>
                  <p className={styles.project_date}>{node.frontmatter.date}</p>
                </div>
                <p className={styles.project_desc}>
                  {node.frontmatter.description}
                </p>
                <p>
                  <a
                    className={styles.project_ext_link}
                    href={node.frontmatter.github}
                  >
                    Code Repo
                  </a>
                  <a
                    className={styles.project_ext_link}
                    href={node.frontmatter.liveLink}
                  >
                    Live Site
                  </a>
                </p>
              </div>
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
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            description
            date
            icon
            title
            post_type
            github
            liveLink
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
