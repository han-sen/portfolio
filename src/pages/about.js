import React from "react"
import Header from "../components/header"
import Nav from "../components/nav"
import Layout from "../components/layout"

export default function About() {
  return (
    <>
      <Nav />
      <Layout>
        <section className="about_wrap">
          <Header headerText="about page" />
          <p>This is the about page</p>
        </section>
      </Layout>
    </>
  )
}
