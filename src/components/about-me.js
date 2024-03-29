import React from "react"
import styles from "../styles/components/about.module.scss"
import imageUrl from "../assets/img/portrait.jpg"
import TechStack from "./tech-stack"
import AnimatedLink from "./anim-link"
import SectionHeader from "./section-header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

export default function AboutMe() {
  return (
    <section className={styles.about_wrap} id="about">
      <SectionHeader sectionTitle="ABOUT" number="002" animated={true} />
      <div className={styles.about_inner}>
        <div className={styles.about_text_wrap}>
          <p>
            <span role="img" aria-label="peace sign">
              ✌️
            </span>{" "}
            I'm a UI engineer based outside of Boston, MA. I like front-end dev
            and design, learning game dev, and 3D modeling.
          </p>
          <p>Some tech I have experience with:</p>
          <TechStack />
          <p>
            You can get in touch by finding me on{" "}
            <a href="https://www.linkedin.com/in/mikehansendev/">LinkedIn</a>,{" "}
            <a href="https://github.com/han-sen">Github</a>,{" "}
            <a href="https://codepen.io/mHansen">Codepen</a>, or reach out
            directly via <a href="mailto:mike@mikehansen.io">email</a>.
          </p>
        </div>
        <div className={styles.about_image_wrap}>
          <img className={styles.about_image} src={imageUrl} alt="profile" />
        </div>
      </div>
      <div className={styles.more_about}>
        <AnimatedLink link="/about">
          <button>
            More About Me <FontAwesomeIcon icon={faAngleDoubleRight} />
          </button>
        </AnimatedLink>
      </div>
      <div className={styles.built_wrap}>
        <p>
          <FontAwesomeIcon icon={faGlobeAmericas} /> This site was built with
          React, Three.js, Gatsby, & deployed on Netlify.
        </p>
      </div>
    </section>
  )
}
