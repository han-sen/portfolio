import React from "react"
import styles from "../styles/components/projects.module.scss"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Projects = () => {
  return (
    <section className={styles.projects_outer_wrap}>
      <div className={styles.project_wrap}>
        <div className={styles.project_inner}>
          <div className={styles.project_icon_wrap}>
            <div className={styles.projects_cat}>
              <FontAwesomeIcon icon={faGamepad} />
            </div>
            <div className={styles.project_links}>
              <a
                href="https://github.com/han-sen/archers-island"
                className={styles.project_links_item}
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://han-sen.github.io/archers-island/"
                className={styles.project_links_item}
              >
                <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
              </a>
            </div>
          </div>
          <h3 className={styles.project_title}>Archer's Island</h3>
          <p className={styles.project_desc}>
            A canvas-based archery tournament where players battle for the last
            piece of land in sight.
          </p>
          <ul className={styles.project_stack}>
            <li className={styles.project_stack_item}>JS</li>
            <li className={styles.project_stack_item}>Canvas</li>
            <li className={styles.project_stack_item}>CSS</li>
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
            A twitter/instagram clone where users can share pictures and short
            messages, as well as customize their page.
          </p>
          <ul className={styles.project_stack}>
            <li className={styles.project_stack_item}>React</li>
            <li className={styles.project_stack_item}>Firebase</li>
            <li className={styles.project_stack_item}>Node</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Projects
