const userConfig = require('./config');

module.exports = {
  siteMetadata: {
    title: userConfig.title,
    author: userConfig.author,
    description: userConfig.description,
    siteUrl: userConfig.siteUrl,
  },
  plugins: [
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://nirvana.netlify.app`,
      },
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `react-github-btn`,
    {
      resolve: `gatsby-plugin-humans-txt`,
      options: {
        team: [
          {
            Developer: userConfig.author,
            GitHub: `zakirsajib`
          }
        ],
        thanks: [`Gatsby`, `Node`],
        site: {
          'Last update': `2020/06/13`,
          Standards: `JavaScript`,
          Components: `humans-generator`,
          Softwares: `Visual Studio Code`
        },
        note: `Made in Bangladesh.`
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: userConfig.primaryColor,
        // Disable the loading spinner.
        showSpinner: true,
      },
    },
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
        perPage: userConfig.postsPerPage,
        concurrentRequests: 100,
        auth: {
	        wpcom_app_clientSecret: "I9vu5RxuYCaOSRrIqIObKGp9LYuIHl8UClkxbmINrfXtQU4vpFf9ymiKu4dUKjqb",
			wpcom_app_clientId: "67424",
			wpcom_user: "zakirsajib@gmail.com",
			wpcom_pass: "Ncc007008@",
        },
        includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
        ],
        plugins: [
          `gatsby-wordpress-reading-time`,
        ],
        // Set to true to debug endpoints on 'gatsby build'
        verboseOutput: false,
      },
    },
    {
      resolve: "gatsby-plugin-preconnect",
      options: {
        domains: [
          "https://www.google-analytics.com"
        ]
      }
    },
    'gatsby-plugin-preload-link-crossorigin',
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-prismjs`,
    //         options: {
    //           classPrefix: "language-",
    //           inlineCodeMarker: null,
    //           aliases: {},
    //           showLineNumbers: false,
    //           noInlineHighlight: false,
    //         },
    //       },
    //     ],
    //   },
    // },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ]
      }
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
        icon: 'src/img/nirvana.svg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: userConfig.googleAnalyticsID,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
	      name: "image",
		  path: `${__dirname}/src/img/`,
      },
    },
    {
        // Removes unused css rules
        resolve:'gatsby-plugin-purgecss',
            options: {
                // Activates purging in gatsby develop
                develop: false,
                // Ignore
                ignore: '',
                // Purge only
                purgeOnly: ['styles/', 'templates/', 'components/PostList'],
            },
    }, // must be after other CSS plugins
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
