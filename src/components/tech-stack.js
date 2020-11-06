import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCaretSquareRight } from "@fortawesome/free-solid-svg-icons"
import styles from "../styles/components/about.module.scss"

const TechStack = () => {
  const techOne = ["Node", "Express", "React", "Mongo"]
  const techTwo = ["Firebase", "HTML", "CSS", "Git"]

  return (
    <div className={styles.tech_stack_wrap}>
      <ul className={styles.tech_stack}>
        {techOne.map(item => {
          return (
            <li key={item}>
              <FontAwesomeIcon icon={faCaretSquareRight} />
              {item}
            </li>
          )
        })}
      </ul>
      <ul className={styles.tech_stack}>
        {techTwo.map(item => {
          return (
            <li key={item}>
              <FontAwesomeIcon icon={faCaretSquareRight} />
              {item}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TechStack
