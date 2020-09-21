import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styles from "../styles/components/nav.module.scss"

export default function Nav(props) {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <nav className={styles.navbar}>
      <Link to={`/`}>{data.site.siteMetadata.title}</Link>
      <Link to="/about/">About</Link>
    </nav>
  )
}
