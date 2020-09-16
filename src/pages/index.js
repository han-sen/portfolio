import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import Header from "../components/header"
import Layout from "../components/layout"
import Nav from "../components/nav"

export default function Home({ data }) {
  return (
    <div>
      <Nav />
      <Layout>
        <h1>{data.site.siteMetadata.title}</h1>
        <Header headerText="Front-End Developer & Designer" />
        <img src="https://source.unsplash.com/random/400x200" alt="" />
      </Layout>
    </div>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
