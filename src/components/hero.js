import React from "react"
import Header from "../components/header"
import styles from "../styles/hero.module.scss"

export default function Hero() {
  return (
    <section className={styles.hero_wrap}>
      <div className={styles.hero_inner}>
        <div className={styles.hero_headline}>
          <Header headerText="Front-End Developer & Designer" />
        </div>
        <div className={styles.hero_splash}>
          <div className={styles.hero_splash_inner}>
            <img
              src="https://source.unsplash.com/random/400x400"
              alt="splash art"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
