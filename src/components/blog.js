import React from "react"
import PostLink from "./post-link"
export default function Blog(props) {
  return (
    <div>
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            <a href={node.fields.slug}>{node.frontmatter.title}</a>{" "}
            <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
