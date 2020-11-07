import React from "react"
import { useSpring, a, config } from "react-spring"
import useIsInViewport from "use-is-in-viewport"
import styles from "../styles/components/about.module.scss"

export default function AboutHeader() {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20 })
  const { width } = useSpring({
    width: isInViewport ? "50%" : "30%",
    config: config.molasses,
  })
  return (
    <a.div
      className={styles.section_header_wrap}
      ref={targetRef}
      style={{ width: width }}
    >
      <div className={styles.header_decoration}></div>
      <h2 className={styles.about_header}>ABOUT</h2>
    </a.div>
  )
}
