import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import H2 from './H2'
import '../styles/postList.css'

import indexStyles from '../styles/index.module.css'

let count = 0;

export default class IndexPage extends React.Component {
  render() {
    const { posts, title} = this.props
		
    return (
      <section className="section" id="mobileSection">
        <div className="container">
          <div className="columns" style={{paddingBottom: `15px`}}>
            <H2 style={{color: `#e0e1e2`}} dangerouslySetInnerHTML={{ __html: title}}></H2>
          </div>
          

          {posts.map(({ node: post }) => (
            <div
              className="columns postList"
              key={post.id}
            >
              <div className="column featuredImage" style={{order: count}}>
              <Link to={post.slug}><Img fluid ={post.featured_media.localFile.childImageSharp.fluid}/></Link> 
              </div>
              <div className="column" id={indexStyles.postContent}>
              <div className="postContentInner">
              <span key={count += 1}></span>
              {count == 2 ? (
                <span key={count = 0}></span>
              ): null }
              <H2>
                <Link to={post.slug} dangerouslySetInnerHTML={{ __html: post.title}}></Link>
              </H2>
              <p style={{marginBottom: `15px`}}>{post.fields.readingTime.text}</p>
              <div>              
              <div dangerouslySetInnerHTML={{ __html: post.excerpt}}/>
              <div className={indexStyles.postMeta}>
              <div className="postMetaDetails">  
            <div className="publishedDate"><small>Published on {post.date}</small></div>
               <div className="readMore"> 
               <Link className="readMoreLink" to={post.slug}>
                  Read more
               </Link></div></div>
               </div>
              </div>
              </div>
            </div>
            </div>
          ))}
        </div>
      </section>
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
