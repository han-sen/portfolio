import React from "react"
import styles from "../styles/components/projects.module.scss"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import ProjectCategory from "./project-category"
import ProjectLinks from "./project-links"

export default function Projects(props) {
  return (
    <section className={styles.projects_outer_wrap}>
      <h2>PROJECTS</h2>
      <div className={styles.projects_inner_wrap}>
        {props.data.allMarkdownRemark.edges
          .filter(({ node }) => node.frontmatter.post_type === "project")
          .map(({ node }, i) => (
            <div className={styles.project_wrap} key={i}>
              <div className={styles.project_inner}>
                <img
                  src={
                    node.frontmatter.featuredImg.childImageSharp.fluid
                      .originalImg
                  }
                  className={styles.project_image}
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
            </div>
          ))}
      </div>
    </section>
  )
}
