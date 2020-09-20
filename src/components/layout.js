import React from "react"
import "../styles/global.scss"
import styles from "../styles/layout.module.scss"

export default function Layout({ children }) {
  return <section className={styles.layout_wrap}>{children}</section>
}
