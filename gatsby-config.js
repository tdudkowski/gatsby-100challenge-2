require('dotenv').config({
  path: `.env`, // or '.env'
});

module.exports = {
  siteMetadata: {
    title: "AudioC0RE Gatsby100Challenge",
    titleTemplate: "%s · The Real Hero",
    description: "California, headaphones, fun, audio, AudioC0RE, Gatsby100Challenge",
    url: "https://needstobetheproductionurl.com", // No trailing slash allowed!
    siteUrl: "https://needstobetheproductionurl.com",
    image: "/images/icon.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@tdudkowski",
  },
  plugins: [
    "dotenv",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "@chakra-ui/gatsby-plugin",
    `gatsby-plugin-preact`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESSTOKEN,
        spaceId: process.env.GATSBY_CONTENTFUL_SPACEID,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GatsbyJS`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        // icon: `src/images/icon.png`,
        include_favicon: false,
        icons:
          [{
            "src": "src/images/maskable_icon.png",
            "sizes": "196x196",
            "type": "image/png",
            "purpose": "any maskable"
          }],
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/about/`, `/los-angeles/`, `/san-diego/`, `/san-francisco/`, `/locations/`],
      },
    },
    {
      resolve: `gatsby-source-formium`,
      options: {
        // Get your projectId from https://dashboard.formium.io
        projectId: process.env.GATSBY_FORMIUM_PROJECTID,
        // projectId: "601c1775eb18660001a86ac9",
        // formID: "601c17d0eb18660001a86d89",
        // Generate a personal access token by going to https://dashboard.formium.io/account#tokens
        accessToken: process.env.FORMIUM_TOKEN,
        // accessToken: "oP0AsyUlKODgLulRB4HsA8fCF4eeiX9z1TcRAORnCsUmhXjaVu487GBGbpejDFkb",
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Remote schema query type. This is an arbitrary name.
        typeName: "WPGraphQL",
        // Field name under which it will be available. Used in your Gatsby query. This is also an arbitrary name.
        fieldName: "wpcontent",
        // GraphQL endpoint, relative to your WordPress home URL.
        url: "http://tdudkowski.usermd.net/wordpress/headless/graphql",
      },
    },
    {
      resolve: "gatsby-source-shopify-experimental",
      options: {
        apiKey: process.env.SHOPIFY_ADMIN_API_KEY,
        password: process.env.SHOPIFY_ADMIN_PASSWORD,
        storeUrl: process.env.SHOPIFY_STORE_URL,
        downloadImages: true,
      },
    },
  ],
};
