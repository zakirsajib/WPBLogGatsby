# Gatsby v2 WordPress Starter

This starter is forked from the
[gatsby-starter-netlify-cms](https://github.com/netlify-templates/gatsby-starter-netlify-cms)
and modified to use WordPress instead of netlify-cms, using the [gatsby-source-wordpress](https://github.com/gatsbyjs/gatsby/tree/master/packages/gatsby-source-wordpress) plugin as the data connector.

Demo: https://nirvana.netlify.com

[![Netlify Status](https://api.netlify.com/api/v1/badges/43eb90a5-e89b-452e-b7b2-358f951320b6/deploy-status)](https://app.netlify.com/sites/nirvana/deploys)

## Use It Now

    gatsby new NAME https://github.com/zakirsajib/WPBLogGatsby

* Edit `gatsby-config.js`, change `baseUrl`
  - Make sure you have at least 1 post and 1 page on your WordPress site
  - Make sure at least 1 post has at least 1 tag
* Ensure the permalink structure in your WordPress installation is set to `Post Name` instead of the deafult `Plain`, or else the `gatsby-source-wordpress` plugin won't be able to communicate with WordPress

### Already Done

* Implemented post featured image
* Share buttons
* Integrated Google fonts
* Integrated Bulma CSS famework
* Integrated Google analytics
* Integrated PWA
* Responsive image
* Pagination both index and single page
* Implemented menu and burger menu
* Integrated reading time
* Sitemap
* Canonical url
* Lazyload
* Contact form
* Comments by just comments

### To Be Done

* Conditional check on featured image
* Related posts
* Search functionality
* Gravity form integration
* Portfolio
* Instagram integration


### Known Limitations

* This is based on the [netlify starter](https://github.com/netlify-templates/gatsby-starter-netlify-cms) which uses [bulma](https://bulma.io). This adds 150KB to every built page.
* Your WordPress site must have at least 1 post with 1 tag, or the starter will crash
* Nested pages / categories will not render with nested pages
  - A WordPress page like `/about/team/` will render on Gatsby as `/team/`
  - Likewise for categories
  - Discussion here https://github.com/zakirsajib/WPBLogGatsby/issues

## CSS Processing

This plugin uses [gatsby-plugin-purgecss](https://www.gatsbyjs.org/packages/gatsby-plugin-purgecss/) and [bulma](https://bulma.io/). The bulma build would otherwise be ~170K which adds 170K to each of your built HTML pages. However, with purgecss this is reduced 90%.

## WordPress Setup

* If you use WordPress.com, then you won't need to install any plugins. But if you use self hosted WordPress.org, then you need to install graphQL plugin (https://github.com/wp-graphql/wp-graphql). Installation guidance: https://docs.wpgraphql.com/getting-started/install-and-activate/
* If you want to host on netlify and want to updates netlify (trigger build process) when contents of wordpress changes then you need to install netlify plugin (https://wordpress.org/plugins/webhook-netlify-deploy/) in your wordpress site. 


## Contributors


[![Netlify Status](https://api.netlify.com/api/v1/badges/43eb90a5-e89b-452e-b7b2-358f951320b6/deploy-status)](https://app.netlify.com/sites/nirvana/deploys)