import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function AnimatedLink(props) {
  const dirArr = ["left", "right", "down", "up"]
  const curArr = dirArr[Math.floor(Math.random() * 4)]
  return (
    <AniLink cover direction={curArr} to={props.link} bg="#363636">
      {props.children}
    </AniLink>
  )
}
