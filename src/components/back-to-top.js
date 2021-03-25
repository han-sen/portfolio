import React, { useEffect, useState } from "react"
import { faChevronCircleUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import styles from "../styles/components/back-to-top.module.scss"

export default function BackToTop() {
  const [show, setShow] = useState(false)

  const showBelow = 400

  useEffect(() => {
    window.addEventListener(`scroll`, handleScroll)
    return () => window.removeEventListener(`scroll`, handleScroll)
  })

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  return (
    <div>
      {show && (
        <button
          className={styles.top_button}
          aria-label="to top"
          onClick={handleClick}
        >
          <span className={styles.icon}>
            <FontAwesomeIcon icon={faChevronCircleUp} />
          </span>
          <span className={styles.text}>To Top</span>
        </button>
      )}
    </div>
  )
}
