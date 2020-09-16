import React from "react"
import { useStaticQuery, Link, graphql } from "gatsby"

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
    <nav>
      <Link to={`/`}>{data.site.siteMetadata.title}</Link>
      <Link to="/about/">About</Link>
    </nav>
  )
}
