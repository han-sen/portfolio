import React from "react"
import styles from "../styles/components/projects.module.scss"
import ProjectCategory from "./project-category"
import ProjectLinks from "./project-links"
import ProjectImage from "./project-image"

export default function Projects(props) {
  return (
    <section className={styles.projects_outer_wrap}>
      <div className={styles.section_header_wrap}>
        <h2 className={styles.project_header}>PROJECTS</h2>
      </div>
      <div className={styles.projects_inner_wrap}>
        {props.data.allMarkdownRemark.edges
          .filter(({ node }) => node.frontmatter.post_type === "project")
          .map(({ node }, i) => (
            <div className={styles.project_wrap} key={i}>
              <div className={styles.project_inner}>
                <div className={styles.project_details_wrap}>
                  <div className={styles.project_icon_wrap}>
                    <ProjectCategory icon={node.frontmatter.icon} />
                    <ProjectLinks
                      github={node.frontmatter.github}
                      liveLink={node.frontmatter.liveLink}
                    />
                  </div>
                  <ProjectImage
                    url={
                      node.frontmatter.featuredImg.childImageSharp.fluid
                        .originalImg
                    }
                  />
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
  )
}
