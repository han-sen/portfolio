import React from "react"
import styles from "../styles/components/projects.module.scss"
import { faGamepad } from "@fortawesome/free-solid-svg-icons"
import { faGlobe } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function ProjectCategory(props) {
  return (
    <div className={styles.projects_cat}>
      {props.icon === "faGlobe" ? (
        <FontAwesomeIcon icon={faGlobe} />
      ) : (
        <FontAwesomeIcon icon={faGamepad} />
      )}
    </div>
  )
}
