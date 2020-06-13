import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Wrapper from './PostList/Wrapper'

let count = 0;

export default class IndexPage extends React.Component {
  render() {
    const { posts, title} = this.props

    return (
        <Wrapper className="section">
            <div className="container">
                <div className="grid">
                    {posts.map(({ node: post }) => (
                        <div className="postList" key={post.id}>
                            <div className="column featuredImage" style={{order: count}}>
              	                <Link to={`/${post.slug}/`}>
			  		                <Img
                                        fluid ={post.featured_media.localFile.childImageSharp.fluid}
                                    />
			  	                </Link>
                            </div>
                            <div className="column">
                                <div className="postContentInner">
                                  <span key={count += 1}></span>
                                  {count == 2 ? (
                                    <span key={count = 0}></span>
                                  ): null }
                                    <div className="part-one">
                                      <h2>
                                        <Link
                                            to={`/${post.slug}/`}
                                            dangerouslySetInnerHTML={{ __html: post.title}}
                                        ></Link>
                                      </h2>
                                      <p
                                        className="readingTime has-text-grey-light"
                                       >
                                       {post.fields.readingTime.text}
                                       </p>
                                    </div>
                              	    <div
                                        className="post-excerpt"
                                        dangerouslySetInnerHTML={{ __html: post.excerpt}}
                                    />

                                    <div className="postMetaDetails">
                                        <div className="publishedDate is-size-7 has-text-grey-lighter">
                                            Published on {post.date}
                                        </div>
                                        <div className="readMore">
                                            <Link className="button is-primary is-outlined" to={post.slug}>
                                            Read more
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Wrapper>
    )
  }
}

IndexPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export const pageQuery = graphql`
  fragment PostListFields on wordpress__POST {
    id
    title
    excerpt
    content
    author {
      name
      slug
      avatar_urls {
        wordpress_48
      }
    }
    fields {
      readingTime {
        text
      }
    }
    featured_media{
	    localFile{
		    childImageSharp{
			    fluid(maxWidth: 500, quality: 100) {
      				...GatsbyImageSharpFluid
   				}
		    }
	    }
    }
    date(formatString: "DD/MM/YYYY")
    slug
  }
`
