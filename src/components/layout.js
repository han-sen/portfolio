import React from "react"

export default function Layout({ children }) {
  return (
    <section
      style={{ margin: `3rem auto`, maxWidth: 650, padding: `0 1rem` }}
      className="layout_wrap"
    >
      {children}
    </section>
  )
}
