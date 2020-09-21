import React from "react"

export default function Header(props) {
  return (
    <>
      <h1>{props.headerText}</h1>
      <p>Interactive Front-End Developer</p>
      <button>About Me</button>
    </>
  )
}
