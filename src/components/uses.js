import React from "react"
import styles from "../styles/components/about.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFileCode } from "@fortawesome/free-solid-svg-icons"
import { faMicrochip } from "@fortawesome/free-solid-svg-icons"

export default function Uses() {
  return (
    <div className={styles.uses_wrap}>
      <h2>Current Work Setup:</h2>
      <div className={styles.uses_inner_wrap}>
        <div className={styles.uses_segment}>
          <h3>
            <FontAwesomeIcon icon={faFileCode} /> Software
          </h3>
          <p>
            Visual Studio{" "}
            <span className={styles.uses_detail}>- code editor</span>
          </p>
          <p>
            Hyper <span className={styles.uses_detail}>- terminal</span>
          </p>
          <p>
            Trello <span className={styles.uses_detail}>- task management</span>
          </p>
          <p>
            InVision <span className={styles.uses_detail}>- wireframing</span>
          </p>
          <p>
            Adobe CC <span className={styles.uses_detail}>- graphics</span>
          </p>
        </div>
        {/* <div className={styles.uses_segment}>
          <h3>
            <FontAwesomeIcon icon={faFileCode} /> Libraries
          </h3>
          <p>
            React-Spring{" "}
            <span className={styles.uses_detail}>- animations</span>
          </p>
          <p>
            Bulma <span className={styles.uses_detail}>- CSS framework</span>
          </p>
          <p>
            Materialize{" "}
            <span className={styles.uses_detail}>- CSS framework</span>
          </p>
          <p>
            FontAwesome <span className={styles.uses_detail}>- icons</span>
          </p>
        </div> */}
        <div className={styles.uses_segment}>
          <h3>
            <FontAwesomeIcon icon={faMicrochip} /> Hardware
          </h3>
          <p>
            Macbook Pro 16" <span className={styles.uses_detail}>- laptop</span>
          </p>
          <p>
            Windows 10 PC <span className={styles.uses_detail}>- desktop</span>
          </p>
          <p>
            GTX 1660 Super{" "}
            <span className={styles.uses_detail}>- graphics card</span>
          </p>
          <p>
            Ryzen 2700x <span className={styles.uses_detail}>- CPU</span>
          </p>
        </div>
      </div>
    </div>
  )
}
