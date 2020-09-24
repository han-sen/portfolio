import React from "react"
import { graphql } from "gatsby"
export default function Blog(props) {
  console.log(props.data)

  return (
    <div>
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  )
}
