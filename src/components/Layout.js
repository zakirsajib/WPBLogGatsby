import React from 'react'
import Helmet from 'react-helmet'

import Navbar from './Navbar'
import './all.sass'

import '../global-styles'
import userConfig from '../../config';
import GlobalStyle from '../global-styles'


const TemplateWrapper = ({ children }) => (
  <div>
  	<GlobalStyle />
    <Helmet title={userConfig.title} />
    <Navbar />
    <div>{children}</div>
  </div>
)

export default TemplateWrapper
