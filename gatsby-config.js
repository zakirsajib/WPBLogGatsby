const userConfig = require('./config');

module.exports = {
  siteMetadata: {
    title: userConfig.title,
    author: userConfig.author,
    description: userConfig.description,
    siteUrl: userConfig.siteUrl,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-source-wordpress',
      options: {
        // The base url to your WP site.
        baseUrl: 'zsbloggatsby.wordpress.com',
        // WP.com sites set to true, WP.org set to false
        hostingWPCOM: true,
        // The protocol. This can be http or https.
        protocol: 'https',
        // Use 'Advanced Custom Fields' Wordpress plugin
        useACF: false,
        perPage: 50,
        concurrentRequests: 10,
        auth: {
	        wpcom_app_clientSecret: "I9vu5RxuYCaOSRrIqIObKGp9LYuIHl8UClkxbmINrfXtQU4vpFf9ymiKu4dUKjqb",
			    wpcom_app_clientId: "67424",
			    wpcom_user: "zakirsajib@gmail.com",
          wpcom_pass: "Ncc007008@",
        },
        searchAndReplaceContentUrls: {
          sourceUrl: "https://zsbloggatsby.wordpress.com",
          replacementUrl: "https://nirvana.netlify.com"
        },
        plugins: [
          `gatsby-wordpress-reading-time`,
        ],
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },   
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: userConfig.title,
        short_name: userConfig.title,
        start_url: userConfig.siteUrl,
        background_color: '#f9fafc',
        theme_color: userConfig.primaryColor,
        display: 'minimal-ui',
        icon: 'src/img/main.jpg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-152596464-1`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      // Removes unused css rules
      resolve:'gatsby-plugin-purgecss',
      options: {
        // Activates purging in gatsby develop
        develop: true,
        // Ignore
        ignore: ['styles/page.css'],
        // Purge only the main css file
        purgeOnly: ['/all.sass','styles/featured-img.css','styles/global.css','styles/index-module.css','styles/post-module.css', 'styles/postList.css'],
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
