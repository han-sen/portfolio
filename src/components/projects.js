import React from "react"
import styles from "../styles/components/projects.module.scss"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Projects = props => {
  return (
    <section className={styles.projects_outer_wrap}>
      <h2>PROJECTS</h2>
      <div className={styles.projects_inner_wrap}>
        {props.data.allMarkdownRemark.edges
          .filter(({ node }) => node.frontmatter.post_type === "project")
          .map(({ node }, i) => (
            <div className={styles.project_wrap} key={i}>
              <div className={styles.project_inner}>
                <div className={styles.project_icon_wrap}>
                  <div className={styles.projects_cat}>
                    {node.frontmatter.icon === "faGlobe" ? (
                      <FontAwesomeIcon icon={faGlobe} />
                    ) : (
                      <FontAwesomeIcon icon={faGamepad} />
                    )}
                  </div>
                  <div className={styles.project_links}>
                    <a
                      href={node.frontmatter.github}
                      className={styles.project_links_item}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a
                      href={node.frontmatter.liveLink}
                      className={styles.project_links_item}
                    >
                      <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
                    </a>
                  </div>
                </div>
                <img
                  src={
                    node.frontmatter.featuredImg.childImageSharp.fluid
                      .originalImg
                  }
                  className={styles.project_image}
                />
                <h3 className={styles.project_title}>
                  {node.frontmatter.title}
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
          ))}
      </div>
    </section>
  )
}

export default Projects
