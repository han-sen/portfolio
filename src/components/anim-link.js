import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default function AnimatedLink(props) {
  const dirArr = ["left", "right", "down", "up"]
  const colors = ["#254bc9", "#80e8c9"]
  const curArr = dirArr[Math.floor(Math.random() * 4)]
  const curColor = colors[Math.floor(Math.random() * 2)]
  return (
    <AniLink cover direction={curArr} to={props.link} bg="#363636">
      {props.children}
    </AniLink>
  )
}
