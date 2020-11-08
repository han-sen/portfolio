import React from "react"
import { useSpring, a, config } from "react-spring"
import useIsInViewport from "use-is-in-viewport"
import styles from "../styles/components/about.module.scss"
import imageUrl from "../assets/img/unnamed.jpg"
import Nav from "../components/nav"
import Footer from "../components/footer"
import TechStack from "../components//tech-stack"
import AboutHeader from "../components//about-header"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons"

export default function AboutMe() {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20 })
  const { opacity } = useSpring({
    opacity: isInViewport ? 1 : 0,
    config: config.molasses,
  })
  return (
    <>
      <Nav />
      <section className={styles.about_wrap} id="about">
        <AboutHeader />
        <a.div
          className={styles.about_inner}
          ref={targetRef}
          style={{ opacity: opacity }}
        >
          <div className={styles.about_text_wrap}>
            <p>
              <span role="img" aria-label="peace sign">
                ✌️
              </span>{" "}
              I'm a front-end developer and designer based outside of Boston,
              MA. I like building web apps, learning game dev, and 3D modeling.
            </p>
            <p>Some tech I have experience with:</p>
            <TechStack />
            <p>
              You can get in touch by finding me on{" "}
              <a href="https://www.linkedin.com/in/mikehansendev/">LinkedIn</a>,{" "}
              <a href="https://github.com/han-sen">Github</a>,{" "}
              <a href="https://codepen.io/mHansen">Codepen</a>, or reach out
              directly via <a href="mailto:michaelandhansen@gmail.com">email</a>
              .
            </p>
          </div>
          <div className={styles.about_image_wrap}>
            <img className={styles.about_image} src={imageUrl} alt="profile" />
          </div>
        </a.div>
        <div className={styles.built_wrap}>
          <p>
            <FontAwesomeIcon icon={faGlobeAmericas} /> This site was built with
            React, Three.js, Gatsby, & deployed on Netlify.
          </p>
        </div>
      </section>
      <Footer />
    </>
  )
}
