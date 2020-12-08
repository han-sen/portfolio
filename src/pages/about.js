import React from "react"
import styles from "../styles/components/about.module.scss"
import imageUrl from "../assets/img/unnamed.jpg"
import Nav from "../components/nav"
import Footer from "../components/footer"
import TechStack from "../components//tech-stack"
import Uses from "../components/uses"
import SectionHeader from "../components/section-header"

export default function AboutMe() {
  return (
    <>
      <Nav />
      <section className={styles.about_wrap}>
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
      </section>
      <Footer />
    </>
  )
}
