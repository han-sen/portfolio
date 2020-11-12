import React, { useState } from "react"
import styles from "../styles/components/nav.module.scss"
import Logo from "../assets/img/logo.svg"

export default function Nav() {
  const [navOpened, setNavOpened] = useState(false)
  const toggleNav = () => setNavOpened(!navOpened)

  return (
    <section className={styles.nav_wrap}>
      <nav className={navOpened ? styles.dropdown_opened : ""}>
        <a className={styles.logo} href="/">
          <img src={Logo} alt="Logo" />
        </a>
        <button
          className={styles.dropdown_toggle}
          aria-hidden="true"
          onClick={toggleNav}
        >
          <span className={styles.burger_span}></span>
          <span className={styles.burger_span}></span>
          <span className={styles.burger_span}></span>
        </button>
        <div className={styles.dropdown_link_wrap}>
          <a href="/projects">Projects</a>
          <a href="/about">About</a>
        </div>
      </nav>
    </section>
  )
}
