import React from "react"
import { useSpring, a, config } from "react-spring"
import useIsInViewport from "use-is-in-viewport"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/components/projects.module.scss"
import ProjectCategory from "./project-category"
import ProjectLinks from "./project-links"
import ProjectImage from "./project-image"
import SectionHeader from "./section-header"

export default function Projects(props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20 })
  const { opacity } = useSpring({
    opacity: isInViewport ? 1 : 0.4,
    config: config.molasses,
  })
  return (
    <section className={styles.projects_outer_wrap}>
      <SectionHeader sectionTitle="PROJECTS" number="001" />
      <a.div
        className={styles.projects_inner_wrap}
        ref={targetRef}
        style={{ opacity: opacity }}
      >
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
                  link={node.fields.slug}
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
      </a.div>
      <div className={styles.more_projects}>
        <a href="/projects">
          <button>
            View All Projects <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </a>
      </div>
    </section>
  )
}
