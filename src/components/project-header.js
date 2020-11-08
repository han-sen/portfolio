import React from "react"
import { useSpring, a, config } from "react-spring"
import useIsInViewport from "use-is-in-viewport"
import styles from "../styles/components/projects.module.scss"

export default function ProjectHeader() {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20 })
  const { width } = useSpring({
    width: isInViewport ? "40%" : "20%",
    config: config.molasses,
  })
  return (
    <a.div
      className={styles.section_header_wrap}
      ref={targetRef}
      style={{ width: width }}
    >
      <div className={styles.header_decoration}></div>
      <h2 className={styles.project_header}>PROJECTS</h2>
    </a.div>
  )
}
