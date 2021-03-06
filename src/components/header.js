import React from "react"
import CycleText from "./cycle-text"
import styles from "../styles/components/header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Header(props) {
  return (
    <>
      <h1 className={styles.header}>Mike Hansen</h1>
      <div className={styles.subheader}>
        Front-End Dev && some: <CycleText />
      </div>
      <div className={styles.header_link_wrap}>
        <a
          href="https://github.com/han-sen"
          className={styles.header_link}
          aria-label="github"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/mikehansendev/"
          className={styles.header_link}
          aria-label="linkedin"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </>
  )
}
