import React from "react"
import styles from "../styles/components/projects.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons"
import { faGithub } from "@fortawesome/free-brands-svg-icons"

export default function ProjectLinks(props) {
  return (
    <div className={styles.project_links}>
      <a
        aria-label={props.title}
        href={props.github}
        className={styles.project_links_item}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        aria-label={props.title}
        href={props.liveLink}
        className={styles.project_links_item}
      >
        <FontAwesomeIcon icon={faExternalLinkSquareAlt} />
      </a>
    </div>
  )
}
