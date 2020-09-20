import React from "react"
import Layout from "../components/layout"
import Nav from "../components/nav"
import Hero from "../components/hero"

export default function Home() {
  return (
    <>
      <Nav />
      <Layout>
        <Hero />
      </Layout>
    </>
  )
}
