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
      {props.data.allMarkdownRemark.edges
        .filter(({ node }) => node.frontmatter.post_type === "project")
        .map(({ node }) => (
          <div className={styles.project_wrap}>
            <div className={styles.project_inner}>
              <div className={styles.project_icon_wrap}>
                <div className={styles.projects_cat}>
                  <FontAwesomeIcon icon={faGamepad} />
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
              <h3 className={styles.project_title}>{node.frontmatter.title}</h3>
              <p className={styles.project_desc}>
                {node.frontmatter.description}
              </p>
              <ul className={styles.project_stack}>
                {node.frontmatter.tags.map(tag => (
                  <li className={styles.project_stack_item}>{tag}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      {/* <div className={styles.project_wrap}>
        <div className={styles.project_inner}>
          <div className={styles.project_icon_wrap}>
            <div className={styles.projects_cat}>
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <div className={styles.project_links}>
              <a
                href="https://github.com/han-sen/bit-lobby"
                className={styles.project_links_item}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://bitlobby.herokuapp.com/"
                className={styles.project_links_item}
              >
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </a>
            </div>
          </div>
          <h3 className={styles.project_title}>Bit Lobby</h3>
          <p className={styles.project_desc}>
            A real-time chat app built for code talk. Allows users to create
            rooms by topic.
          </p>
          <ul className={styles.project_stack}>
            <li className={styles.project_stack_item}>Express</li>
            <li className={styles.project_stack_item}>MongoDB</li>
            <li className={styles.project_stack_item}>SocketIO</li>
          </ul>
        </div>
      </div>
      <div className={styles.project_wrap}>
        <div className={styles.project_inner}>
          <div className={styles.project_icon_wrap}>
            <div className={styles.projects_cat}>
              <FontAwesomeIcon icon={faGlobe} />
            </div>
            <div className={styles.project_links}>
              <a
                href="https://github.com/han-sen/bantm_client"
                className={styles.project_links_item}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://bantm-5ac5e.web.app/"
                className={styles.project_links_item}
              >
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </a>
            </div>
          </div>
          <h3 className={styles.project_title}>Bantm</h3>
          <p className={styles.project_desc}>
            Social media pp where users can share messages & customize their
            page.
          </p>
          <ul className={styles.project_stack}>
            <li className={styles.project_stack_item}>React</li>
            <li className={styles.project_stack_item}>Firebase</li>
            <li className={styles.project_stack_item}>Node</li>
          </ul>
        </div>
      </div> */}
    </section>
  )
}

export default Projects
