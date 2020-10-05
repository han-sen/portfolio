import React from "react"
import styles from "../styles/components/header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Header(props) {
  return (
    <>
      <h1 className={styles.header}>{props.headerText}</h1>
      <p className={styles.subheader}>Front-End Dev && Design</p>
      <a href="https://github.com" className={styles.header_link}>
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="https://github.com" className={styles.header_link}>
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </>
  )
}
