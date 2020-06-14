import React from 'react'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import userConfig from '../../config'
import ReadingProgress from 'react-reading-progress'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  PocketShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PocketIcon,
  EmailIcon
} from 'react-share'

import PostStyle from './PostStyle/Wrapper'
import postStyles from './PostStyle/post.module.scss'
import ShareWrapper from '../components/Share'
import { FacebookProvider, Comments } from 'react-facebook'

    let url
    if (typeof window !== `undefined`) {
      url = window.location.href;
      require("smooth-scroll")('a[href*="#"]')
    }

  export default props => {
    const post = props.data.wordpressPost;
    const { previous, next } = props.pageContext;

  return (
    <Layout>
      <Helmet title={`${post.title} | ${userConfig.title}`}>
        <meta name="description" content={`${post.excerpt}`}/>
      </Helmet>
      <ReadingProgress targetEl="#post-content" />
        <PostStyle>
        <div className={postStyles.postImg}>
            <Img
                fluid={post.featured_media.localFile.childImageSharp.fluid}
                alt={post.title}
            />
            <div className="container entryHeader">
                <h1
                    className="title is-size-1-desktop is-size-2-mobile has-text-weight-bold is-bold-light has-text-white is-capitalized"
                    dangerouslySetInnerHTML={{ __html: post.title}}
                />
                <p
                    className="has-text-light"
                >
                {' '}{post.date} - {post.fields.readingTime.text}
                </p>
                {post.date != post.modified ? (
                    <p className="has-text-light"><b>Last updated on:</b>{' '}{post.modified}</p>
                ): null }
            </div>
        </div>
        <section className="section">
            <div className="container content" id="post-content">
                <div className="columns is-centered">
                  <div className="column is-12">
                    <div dangerouslySetInnerHTML={{ __html: post.content }} />

                    <article className="message is-success mt-6">
                      <div className="message-body">
                        <b>Last updated on:</b>{' '}{post.modified}
                      </div>
                    </article>

                 </div>
                </div>
            </div>
            <div className="container content">
                <div className="columns is-centered">
                    <div className="column is-12">
                        <div>
                          {post.categories && post.categories.length ? (
                              <div class="field is-grouped is-grouped-multiline">
                                {post.categories.map(category => (
                                    <div class="control" key={`${category.slug}cat`}>
                                        <div class="tags has-addons">
                                            <span class="tag is-dark">
                                                <Link
                                                    to={`/categories/${category.slug}/`}
                                                    className="has-text-white"
                                                >
                                                {category.name}
                                                </Link>
                                            </span>
                                            <span class="tag is-success">categories</span>
                                        </div>
                                    </div>
            		            ))}
                            </div>
            		        ) : null}
                              {post.tags && post.tags.length ? (

                              <div class="field is-grouped is-grouped-multiline">
                                {post.tags.map(tag => (
                                    <div class="control" key={`${tag.slug}tag`}>
                                        <div class="tags has-addons">
                                            <span class="tag is-dark">
                                                <Link
                                                    to={`/tags/${tag.slug}/`}
                                                    className="has-text-white"
                                                >{tag.name}
                                                </Link>
                                            </span>
                                            <span class="tag is-success">tags</span>
                                        </div>
                                    </div>
                                ))}

                            </div>
            		        ) : null}
                             <ShareWrapper>
                              {userConfig.showShareButtons && (
                               <div className="Demo__some-network">
                                <FacebookShareButton url={url} quote={post.title}
                                className="Demo__some-network__share-button">
                                <FacebookIcon size={32} round={false} />
                                </FacebookShareButton>
                                </div>
                              )}
                             {userConfig.showShareButtons && (
                             <div className="Demo__some-network">
                             <TwitterShareButton url={url} title={post.title}
                                className="Demo__some-network__share-button">
                                <TwitterIcon size={32} round={false} />
                              </TwitterShareButton>
                              </div>
                						  )}
                              {userConfig.showShareButtons && (
                              <div className="Demo__some-network">
                              <LinkedinShareButton
                                url={url}
                                windowWidth={750}
                                windowHeight={600}
                                className="Demo__some-network__share-button">
                                <LinkedinIcon size={32} round={false} />
                              </LinkedinShareButton>
                              </div>
                              )}
                              {userConfig.showShareButtons && (
                              <div className="Demo__some-network">
                              <PocketShareButton
                                url={url}
                                subject={post.title}
                                className="Demo__some-network__share-button">
                                <PocketIcon size={32} round={false} />
                              </PocketShareButton>
                              </div>
                              )}
                              {userConfig.showShareButtons && (
                              <div className="Demo__some-network">
                              <EmailShareButton
                                url={url}
                                subject={post.title}
                                body="body"
                                className="Demo__some-network__share-button">
                                <EmailIcon size={32} round={false} />
                              </EmailShareButton>
                              </div>
                              )}
                              </ShareWrapper>

                            <div
                                className={"pagination is-centered" + " " + postStyles.pagination}
                                role="navigation" aria-label="pagination"
                            >
                          {previous && (
                            <Link
                                to={`/${previous.slug}`}
                                rel="prev"
                                className="pagination-previous button is-primary is-medium"
                            >← Previous post</Link>
                          )}
                          {next && (
                            <Link
                                  to={`/${next.slug}`}
                                  rel="next"
                                  className="pagination-next button is-primary is-medium"
                            >Next post →</Link>
                          )}
                      </div>
                      <FacebookProvider appId={userConfig.facebookAPPID}>
        			  	<Comments href="https://nirvana.netlify.app" />
        			  </FacebookProvider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </PostStyle>
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
      date(formatString: "MMMM DD, YYYY h:mma")
      modified(formatString: "MMMM DD, YYYY h:mma")
      title
      content
      excerpt
      link
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
