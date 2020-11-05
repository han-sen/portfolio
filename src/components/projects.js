import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/components/projects.module.scss"
import ProjectCategory from "./project-category"
import ProjectLinks from "./project-links"
import ProjectImage from "./project-image"

export default function Projects(props) {
  return (
    <section className={styles.projects_outer_wrap}>
      <div className={styles.section_header_wrap}>
        <div className={styles.header_decoration}></div>
        <h2 className={styles.project_header}>PROJECTS</h2>
      </div>
      <div className={styles.projects_inner_wrap}>
        {props.data.allMarkdownRemark.edges
          .filter(({ node }) => node.frontmatter.feature)
          .map(({ node }, i) => (
            <div className={styles.project_wrap} key={i}>
              <div className={styles.project_inner}>
                <ProjectImage
                  url={
                    node.frontmatter.featuredImg.childImageSharp.fluid
                      .originalImg
                  }
                />
                <div className={styles.project_details_wrap}>
                  <div className={styles.project_icon_wrap}>
                    <ProjectCategory icon={node.frontmatter.icon} />
                    <ProjectLinks
                      github={node.frontmatter.github}
                      liveLink={node.frontmatter.liveLink}
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
      <div className={styles.more_projects}>
        <button>
          View All Projects <FontAwesomeIcon icon={faAngleDoubleRight} />
        </button>
      </div>
    </section>
  )
}
