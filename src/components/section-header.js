import React from "react"
import { useSpring, a, config } from "react-spring"
import useIsInViewport from "use-is-in-viewport"
import styles from "../styles/components/section-header.module.scss"

export default function SectionHeader(props) {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20 })
  const { width } = useSpring({
    width: isInViewport ? "80%" : "30%",
    config: config.molasses,
  })
  return (
    <div className={styles.section_header_outer_wrap}>
      <div className={styles.section_header_wrap}>
        <h2 className={styles.project_header}>{props.sectionTitle}</h2>
        <a.div
          className={styles.header_decoration}
          ref={targetRef}
          style={props.animated ? { flexBasis: width } : { flexBasis: "100%" }}
        ></a.div>
        <span className={styles.number}>{props.number}</span>
      </div>
    </div>
  )
}
