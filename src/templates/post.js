import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'

import userConfig from '../../config'
import Share from '../components/Share'
import '../styles/featured.img.css'
import postStyles from '../styles/post.module.css'

let url = '';
    if (typeof window !== `undefined`) {
      url = window.location.href;
    }


export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  featureimage,
  readingTime
}) => {
  return (
    <section className="section">
      	<div className={postStyles.entryHeader}>
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
        <p style={{color: `#f9fafc`}}>{' '}{date} - {readingTime}</p>
       </div> 
      <div className={postStyles.postImg}><Img fluid={featureimage} alt={title} /></div>
      <div className="container content">
        <div className="columns">
          <div className="column is-12">               
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div style={{ marginTop: `4rem` }}>
              {categories && categories.length ? (
                  <div>
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {categories.map(category => (
                      <li key={`${category.slug}cat`}>
                      <Link to={`/categories/${category.slug}/`}>
                        {category.name}
                      </Link>
                      </li>
		                    ))}
                  </ul>
                </div>
		              ) : null}
              {tags && tags.length ? (
                  <div>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {tags.map(tag => (
                    <li key={`${tag.slug}tag`}>
                    <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                  </li>
                    ))}
                  </ul>
                </div>
		              ) : null}
              {userConfig.showShareButtons && (
                <Share url={url} title={title} />
						)}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  title: PropTypes.string,
}

const BlogPost = ({ data }) => {
  const { wordpressPost: post } = data

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      <BlogPostTemplate
        content={post.content}
        categories={post.categories}
        tags={post.tags}
        title={post.title}
        date={post.date}
        readingTime={post.fields.readingTime.text}
        featureimage={post.featured_media.localFile.childImageSharp.fluid}
      />
    </Layout>
  )
}

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default BlogPost

export const pageQuery = graphql`
  fragment PostFields on wordpress__POST {
    id
    slug
    content
    date(formatString: "MMMM DD, YYYY")
    title
    fields {
      readingTime {
        text
      }
    }
  }
  query BlogPostByID($id: String!) {
    wordpressPost(id: { eq: $id }) {
      id
      title
      slug
      content
      date(formatString: "MMMM DD, YYYY")
      categories {
        name
        slug
      }
      tags {
        name
        slug
      }
      fields {
        readingTime {
          text
        }
      }
      featured_media{
        localFile{
          childImageSharp{
            fluid(maxWidth: 1152, quality: 100) {
                ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
