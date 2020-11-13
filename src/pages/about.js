import React from "react"
import { useSpring, a, config } from "react-spring"
import useIsInViewport from "use-is-in-viewport"
import styles from "../styles/components/about.module.scss"
import imageUrl from "../assets/img/unnamed.jpg"
import Nav from "../components/nav"
import Footer from "../components/footer"
import TechStack from "../components//tech-stack"
import Uses from "../components/uses"
import SectionHeader from "../components/section-header"

export default function AboutMe() {
  const [isInViewport, targetRef] = useIsInViewport({ threshold: 20 })
  const { opacity } = useSpring({
    opacity: isInViewport ? 1 : 0,
    config: config.molasses,
  })
  return (
    <>
      <Nav />
      <a.section
        className={styles.about_wrap}
        ref={targetRef}
        style={{ opacity: opacity }}
      >
        <SectionHeader sectionTitle="ABOUT" number="002" />
        <div className={styles.about_page_inner}>
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
        </div>
        <Uses />
      </a.section>
      <Footer />
    </>
  )
}
