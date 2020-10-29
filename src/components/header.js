import React, { useState, useEffect } from "react"
import styles from "../styles/components/header.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"

export default function Header(props) {
  const [index, setIndex] = useState(0)
  const textOptions = ["design chops", "backend exp", "high scores"]
  const colorOptions = ["d8dbe2", "a9bcd0", "58a4b0"]
  useEffect(() => {
    const interval = setInterval(() => setIndex((index + 1) % 3), 3000)
    return () => clearInterval(interval)
  }, [index])
  return (
    <>
      <h1 className={styles.header}>
        Mike
        <br />
        Hansen
      </h1>
      <p className={styles.subheader}>
        Front-End Dev && some:{" "}
        <span className={styles.cycle_text}>{textOptions[index]}</span>
      </p>
      <div className={styles.header_link_wrap}>
        <a href="https://github.com/han-sen" className={styles.header_link}>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://www.linkedin.com/in/mikehansendev/"
          className={styles.header_link}
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </>
  )
}
