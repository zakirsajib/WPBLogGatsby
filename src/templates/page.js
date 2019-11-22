import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from 'gatsby-image'
import '../styles/featured.img.css'
import indexStyles from '../styles/index.module.css'

export const PageTemplate = ({ title, content, featureimage }) => {
  return (
    <section className="section section--gradient">
      <div className="container" id="pageTitle">
        <div className="columns">
          <div className="column is-12">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light has-text-centered">{title}</h2>
            </div>
          </div>
        </div>
      </div>  
	  <div className={indexStyles.pageImg}><Img fluid={featureimage}/></div>
      <div className="container">
            <div className="section">        
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
      </div>
    </section>
  )
}

PageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Page = ({ data }) => {
  const { wordpressPage: page } = data

  return (
    <Layout>
      <PageTemplate 
      title={page.title} 
      content={page.content}
	  featureimage={page.featured_media.localFile.childImageSharp.fluid}/>
    </Layout>
  )
}

Page.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Page

export const pageQuery = graphql`
  query PageById($id: String!) {
    wordpressPage(id: { eq: $id }) {
      title
      content
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
