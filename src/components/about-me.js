import React from "react"
import styles from "../styles/components/about.module.scss"

const AboutMe = () => {
  return (
    <section className={styles.about_wrap}>
      <div className={styles.section_header_wrap}>
        <h2 className={styles.project_header}>ABOUT</h2>
      </div>
      <p>
        I'm a front-end developer and designer based outside of Boston, MA. I
        have experience with:
      </p>
      <p style={{ fontFamily: "Fira Mono", color: "tan", marginTop: "0.5rem" }}>
        Node, Express, React, Firebase, MongoDB, SCSS, and some Ruby.
      </p>
    </section>
  )
}

export default AboutMe
