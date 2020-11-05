import React from "react"
import styles from "../styles/components/about.module.scss"
import imageUrl from "../assets/img/me-ascii.png"

const AboutMe = () => {
  return (
    <section className={styles.about_wrap}>
      <div className={styles.section_header_wrap}>
        <h2 className={styles.about_header}>ABOUT</h2>
      </div>
      <div className={styles.about_inner}>
        <div className={styles.about_text_wrap}>
          <p>
            I'm a front-end developer and web designer based outside of Boston,
            MA. I have experience with: Node, Express, React, Firebase, MongoDB,
            SCSS, and some Ruby.
          </p>
        </div>
        <div className={styles.about_image_wrap}>
          <img className={styles.about_image} src={imageUrl} alt="profile" />
        </div>
      </div>
    </section>
  )
}

export default AboutMe
