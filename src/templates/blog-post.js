import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import AnimatedLink from "../components/anim-link"
import Nav from "../components/nav"
import Footer from "../components/footer"
import styles from "../styles/components/blog_post.module.scss"

export default function BlogPost({ data }) {
  const post = data.mdx
  return (
    <>
      <Nav />
      <section className={styles.blog_article_wrap}>
        <img
          src={post.frontmatter.featuredImg.childImageSharp.fluid.originalImg}
          className={styles.blog_img}
          alt="project-preview"
        />
        <div className={styles.top_row}>
          <h1 className={styles.blog_article_title}>
            {post.frontmatter.title}
          </h1>
          <div className={styles.details_wrap}>
            <p className={styles.blog_article_date}>{post.frontmatter.date}</p>
            <p>
              <a
                className={styles.project_ext_link}
                href={post.frontmatter.github}
              >
                Code Repo
              </a>
              <a
                className={styles.project_ext_link}
                href={post.frontmatter.liveLink}
              >
                Live Site
              </a>
            </p>
          </div>
        </div>
        {/* <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className={styles.blog_post_body}
        /> */}
        <div className={styles.blog_post_body}>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
        <p className={styles.built_with}>This project was built with:</p>
        <ul className={styles.project_stack}>
          {post.frontmatter.tags.map((tag, i) => (
            <li className={styles.project_stack_item} key={i}>
              {tag}
            </li>
          ))}
        </ul>
        <div className={styles.more_projects}>
          <AnimatedLink link="/projects">
            <button>
              View All Projects <FontAwesomeIcon icon={faAngleDoubleRight} />
            </button>
          </AnimatedLink>
        </div>
      </section>
      <Footer />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        description
        date
        icon
        title
        post_type
        github
        liveLink
        tags
        featuredImg {
          publicURL
          childImageSharp {
            fluid {
              originalImg
            }
          }
        }
      }
    }
  }
`
