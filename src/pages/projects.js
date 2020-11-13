import React, { useRef } from "react"
import { graphql } from "gatsby"
import { useSpring, a, config } from "react-spring"
import useIsInViewport from "use-is-in-viewport"
import Nav from "../components/nav"
import ProjectCategory from "../components/project-category"
import SectionHeader from "../components/section-header"
import Footer from "../components/footer"
import styles from "../styles/components/projects-page.module.scss"

export default function Projects({ data }) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20 })
  const { opacity } = useSpring({
    opacity: isInViewport ? 1 : 0.5,
    config: config.molasses,
  })
  return (
    <>
      <Nav />
      <a.section
        className={styles.projects_wrap}
        ref={targetRef}
        style={{ opacity: opacity }}
      >
        <SectionHeader sectionTitle="PROJECTS" number="001" />
        <div className={styles.projects_wrap_inner}>
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
      </a.section>
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
