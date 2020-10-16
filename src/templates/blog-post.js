import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Nav from "../components/nav"
import styles from "../styles/components/blog_post.module.scss"

export default function BlogPost({ data }) {
  const post = data.markdownRemark
  return (
    <>
      <Nav />
      <section className={styles.blog_article_wrap}>
        <h1 className={styles.blog_article_title}>{post.frontmatter.title}</h1>
        <p className={styles.blog_article_date}>{post.frontmatter.date}</p>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className={styles.blog_post_body}
        />
        <button>Back to Blog</button>
      </section>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date
      }
    }
  }
`
