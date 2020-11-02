import React, { useState } from "react"
import styles from "../styles/components/nav.module.scss"

export default function Nav() {
  const [navOpened, setNavOpened] = useState(false)
  const toggleNav = () => setNavOpened(!navOpened)
  return (
    <nav className={navOpened ? styles.dropdown_opened : ""}>
      <a className={styles.logo} href="/">
        <img
          src="https://bonoget.com/wp-content/uploads/2019/03/x.venox_.png"
          alt="Logo"
        />
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
        <a href="/blog">Blog</a>
        <a href="/projects">Projects</a>
      </div>
    </nav>
  )
}
