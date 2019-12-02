import React from 'react'
//import PropTypes from 'prop-types'
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

  export default props => {
    const post = props.data.wordpressPost;
    const { previous, next } = props.pageContext;

  return (
    <Layout>
      <Helmet title={`${post.title} | Blog`} />
      	<div className={postStyles.postImg}><Img fluid={post.featured_media.localFile.childImageSharp.fluid} alt={post.title} /></div>
        <section className="section">
        <div className={postStyles.entryHeader}>
        <h1 className="title is-size-2 has-text-weight-bold is-bold-light" dangerouslySetInnerHTML={{ __html: post.title}}/>
        <p style={{color: `#f9fafc`}}>{' '}{post.date} - {post.fields.readingTime.text}</p>
       </div> 
      <div className="container content">
        <div className="columns">
          <div className="column is-12">               
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
            <div style={{ marginTop: `4rem` }}>
              {post.categories && post.categories.length ? (
                  <div>
                  <h4>Categories</h4>
                  <ul className="taglist">
                    {post.categories.map(category => (
                      <li key={`${category.slug}cat`}>
                      <Link to={`/categories/${category.slug}/`}>
                        {category.name}
                      </Link>
                      </li>
		                    ))}
                  </ul>
                </div>
		              ) : null}
                  {post.tags && post.tags.length ? (
                  <div>
                  <h4>Tags</h4>
                  <ul className="taglist">
                    {post.tags.map(tag => (
                    <li key={`${tag.slug}tag`}>
                    <Link to={`/tags/${tag.slug}/`}>{tag.name}</Link>
                  </li>
                    ))}
                  </ul>
                </div>
		              ) : null}
              {userConfig.showShareButtons && (
                <Share url={url} title={post.title} />
						  )}
              <div className="pagination is-centered" role="navigation" aria-label="pagination">
                  {previous && (
                    <Link to={`/${previous.slug}`} rel="prev" className="pagination-previous">← Previous post</Link>
                  )}
                  {next && (
                  <Link to={`/${next.slug}`} rel="next" className="pagination-next">Next post →</Link>
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String) {
    site {
      siteMetadata {
        title
        author
      }
    }
    wordpressPost(slug: { eq: $slug }) {
      date(formatString: "MMMM DD, YYYY")
      title
      content
      excerpt
      categories {
        name
        slug
      }
      tags{
        name
        slug
      }
      author {
        name
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
`;