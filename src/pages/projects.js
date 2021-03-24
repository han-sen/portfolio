import React from "react"
import { graphql } from "gatsby"
import Nav from "../components/nav"
import ProjectCategory from "../components/project-category"
import SectionHeader from "../components/section-header"
import Footer from "../components/footer"
import ProjectLinks from "../components//project-links"
import ProjectImage from "../components/project-image"
// import styles from "../styles/components/projects-page.module.scss"
import styles from "../styles/components/projects.module.scss"

export default function Projects({ data }) {
  return (
    <>
      <Nav />
      <section className={styles.projects_wrap}>
        <SectionHeader sectionTitle="PROJECTS" number="001" />
        <div className={styles.projects_wrap_inner}>
          {data.allMdx.edges.map(({ node }, i) => (
            <div className={styles.project_wrap} key={i}>
              <div className={styles.project_inner}>
                <ProjectImage
                  url={
                    node.frontmatter.featuredImg.childImageSharp.fluid
                      .originalImg
                  }
                  link={node.fields.slug}
                />
                <div className={styles.project_details_wrap}>
                  <div className={styles.project_icon_wrap}>
                    <ProjectCategory icon={node.frontmatter.icon} />
                    <ProjectLinks
                      github={node.frontmatter.github}
                      liveLink={node.frontmatter.liveLink}
                      title={node.frontmatter.title}
                    />
                  </div>
                  <h3 className={styles.project_title}>
                    <a href={`${node.fields.slug}`}>{node.frontmatter.title}</a>
                  </h3>
                  <p className={styles.project_desc}>
                    {node.frontmatter.description}
                  </p>
                  <ul className={styles.project_stack}>
                    {node.frontmatter.tags.map((tag, i) => (
                      <li className={styles.project_stack_item} key={i}>
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
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
      filter: { frontmatter: {} }
      sort: { fields: frontmatter___date, order: DESC }
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
