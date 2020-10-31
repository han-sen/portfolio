import React from "react"
import TextLoop from "react-text-loop"
import styles from "../styles/components/header.module.scss"

export default function CycleText() {
  return (
    <TextLoop springConfig={{ stiffness: 120, damping: 12 }}>
      <span className={styles.cycle_text}>design chops</span>
      <span className={styles.cycle_text}>backend exp</span>
      <span className={styles.cycle_text}>high scores</span>
    </TextLoop>
  )
}
