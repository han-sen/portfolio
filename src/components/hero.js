import React from "react"
import Header from "../components/header"
import styles from "../styles/components/hero.module.scss"
import Selfie from "../assets/img/me-ascii.png"

export default function Hero() {
  return (
    <section className={styles.hero_wrap}>
      <div className={styles.hero_inner}>
        <div className={styles.hero_headline}>
          <Header headerText="Mike Hansen" />
        </div>
        <div className={styles.hero_splash}>
          <div className={styles.hero_splash_inner}>
            <img src={Selfie} alt="splash art" className={styles.hero_selfie} />
          </div>
        </div>
      </div>
    </section>
  )
}
