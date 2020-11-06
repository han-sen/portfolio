import React from "react"
import styles from "../styles/components/about.module.scss"
import imageUrl from "../assets/img/me-ascii.png"
import TechStack from "./tech-stack"

const AboutMe = () => {
  return (
    <section className={styles.about_wrap}>
      <div className={styles.section_header_wrap}>
        <div className={styles.header_decoration}></div>
        <h2 className={styles.about_header}>ABOUT</h2>
      </div>
      <div className={styles.about_inner}>
        <div className={styles.about_text_wrap}>
          <p>
            ✌️ I'm a front-end developer and web designer based outside of
            Boston, MA.
          </p>
          <p>Some tech I have experience with:</p>
          <TechStack />
          <p>
            You can get in touch by finding me on{" "}
            <a href="https://github.com/han-sen">Github</a>,{" "}
            <a href="https://www.linkedin.com/in/mikehansendev/">LinkedIn</a>,{" "}
            <a href="https://codepen.io/mHansen">Codepen</a>, or reach out
            directly via michaelandhansen@gmail.com.
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
