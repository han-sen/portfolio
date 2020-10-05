import React from "react"
import PostLink from "./post-link"
import styles from "../styles/components/blog.module.scss"

export default function Blog(props) {
  return (
    <div>
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id} className={styles.blog_article_wrap}>
          <h3>
            <a className={styles.blog_link} href={node.fields.slug}>
              {node.frontmatter.title}
            </a>{" "}
            <span className={styles.blog_date}> - {node.frontmatter.date}</span>
          </h3>
          <p className={styles.blog_excerpt}>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
