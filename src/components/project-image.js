import React from "react"
import styles from "../styles/components/projects.module.scss"

export default function ProjectImage(props) {
  return (
    <div
      className={styles.project_image_wrap}
      style={{
        background: `url(${props.url})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    ></div>
  )
}
