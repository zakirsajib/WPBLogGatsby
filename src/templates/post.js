import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import Footer from '../components/Footer'
import Img from 'gatsby-image'


export const BlogPostTemplate = ({
  content,
  categories,
  tags,
  title,
  date,
  author,
  featureimage
}) => {
  return (
    <section className="section">
      <div className="container content">
        <div className="columns">
          <div className="column is-12">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">
              {title}
            </h1>
           </div>
          </div>
        </div> 
            <div className="full-width-image-container">
            <img src={featureimage.src} alt=""/>
            </div>
        <div className="container content">
        	<div className="columns">
				<div className="column is-12">               
					<div dangerouslySetInnerHTML={{ __html: content }} />
						<div style={{ marginTop: `4rem` }}>
						<p>{date}</p>
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
            </div>
          </div>
        </div>
      </div>
      <div className="container">
		<Footer><p>© 2019 Zakir Sajib. All Rights Reserved.</p>
		<p>Built with WordPress, Gatsby, GitHub and Netlify</p></Footer>
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
        author={post.author}
        featureimage={post.featured_media.localFile.childImageSharp.resolutions}
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
      author {
        name
        slug
      }
      featured_media{
	    localFile{
		    childImageSharp{
			    resolutions(width:1152, height:450){
				    src
				    width
				    height
			    }
		    }
	    }
      }
    }
  }
`
