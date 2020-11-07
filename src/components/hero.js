import React from "react"
import Header from "./header"
import Scene from "./scene"
import styles from "../styles/components/hero.module.scss"

export default function Hero() {
  return (
    <section className={styles.hero_wrap}>
      <div className={styles.hero_inner}>
        <div className={styles.hero_headline}>
          <Header />
        </div>
      </div>
      {/* <div className={styles.hero_email}>
        <p>mike@mikehansen.io</p>
      </div> */}
      <Scene />
    </section>
  )
}
