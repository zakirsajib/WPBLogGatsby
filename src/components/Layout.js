import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './all.sass'

import '../global-styles'
import userConfig from '../../config'
import GlobalStyle from '../global-styles'
import Footer from './Footer'

const TemplateWrapper = ({ children }) => (
  <div>
  	<GlobalStyle />
    <Helmet title={userConfig.title} />
    <Navbar />
    <div>{children}</div>
    <Footer><p>© 2019 Zakir Sajib. All Rights Reserved.</p>
    <p>Built with WordPress, Gatsby, GitHub and Netlify</p></Footer>
  </div>
)

export default TemplateWrapper
