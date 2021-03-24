import React, { useState } from "react"
import styles from "../styles/components/nav.module.scss"
import AnimatedLink from "./anim-link"
import Logo from "../assets/img/logo.svg"

export default function Nav() {
  const [navOpened, setNavOpened] = useState(false)
  const toggleNav = () => setNavOpened(!navOpened)

  return (
    <section className={styles.nav_wrap}>
      <nav className={navOpened ? styles.dropdown_opened : ""}>
        <AnimatedLink link="/">
          <img src={Logo} alt="Logo" className={styles.logo} />
        </AnimatedLink>
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
          <AnimatedLink link="/projects">Projects</AnimatedLink>
          <AnimatedLink link="/about">About</AnimatedLink>
        </div>
      </nav>
    </section>
  )
}
