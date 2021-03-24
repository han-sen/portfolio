import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import AnimatedLink from "./anim-link"
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
    >
      <AnimatedLink link={props.link}>
        <div className={styles.project_image_inner_wrap}>
          <p>
            View Project <FontAwesomeIcon icon={faAngleDoubleRight} />{" "}
          </p>
        </div>
      </AnimatedLink>
    </div>
  )
}
