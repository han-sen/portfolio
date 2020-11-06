import React from "react"
import styles from "../styles/components/callout.module.scss"

const CallOut = () => {
  return (
    <section className={styles.callout_wrap}>
      <div className={styles.callout_inner_wrap}>
        <p>Get in touch at mike@mikehansen.io</p>
      </div>
    </section>
  )
}

export default CallOut
