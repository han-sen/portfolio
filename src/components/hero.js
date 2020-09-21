import React from "react"
import Header from "../components/header"
import styles from "../styles/components/hero.module.scss"

export default function Hero() {
  return (
    <section className={styles.hero_wrap}>
      <div className={styles.hero_inner}>
        <div className={styles.hero_headline}>
          <Header headerText="Mike Hansen" />
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
