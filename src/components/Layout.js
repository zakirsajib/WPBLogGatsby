import React from 'react'
import Helmet from 'react-helmet'
import {VerticleButton as ScrollUpButton} from "react-scroll-up-button";
import Navbar from './Navbar'
import './all.sass'

import GlobalStyle from '../global-styles'
import userConfig from '../../config'

import Footer from './Footer'

const TemplateWrapper = ({ children }) => (
  <div>
    <GlobalStyle />
    <Helmet title={`${userConfig.name} | ${userConfig.title}`}>
      <meta name="author" content={`${userConfig.author}`} />
      <meta name="description" content={`${userConfig.description}`} />
      <meta name="keywords" content={`${userConfig.keywords}`}></meta>
    </Helmet>
    <Navbar />
    <div>{children}</div>
    <div><ScrollUpButton /></div>
    <Footer>
      <p>© 2019 Zakir Sajib. All Rights Reserved.</p>
      <p>Built with Gatsby - datasource is WordPress - code on gitHub - hosted on Netlify</p>
    </Footer>
  </div>
)

export default TemplateWrapper
