import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/nav"
import ProjectCategory from "../components/project-category"
import SectionHeader from "../components/section-header"
import Footer from "../components/footer"
import styles from "../styles/components/projects-page.module.scss"

export default function Projects({ data }) {
  return (
    <>
      <Nav />
      <section className={styles.projects_wrap}>
        <SectionHeader sectionTitle="PROJECTS" number="001" />
        <div className={styles.projects_wrap_inner}>
          {data.allMdx.edges.map(({ node }) => (
            <div key={node.id} className={styles.project_stub_wrap}>
              <img
                src={
                  node.frontmatter.featuredImg.childImageSharp.fluid.originalImg
                }
                alt={node.frontmatter.title}
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
    allMdx(
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
