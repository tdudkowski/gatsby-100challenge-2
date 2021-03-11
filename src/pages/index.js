import * as React from "react"
import Layout from "../components/layout"
import { Text, ListItem, UnorderedList } from "@chakra-ui/react"

const IndexPage = () => {

  return (
    <Layout>
      <Text as="h2">Home</Text>
      <div className="index">

        <Text as="h3">#100DaysOfGatsby Challenge</Text>

        <UnorderedList>
          <ListItem>What it is about - <a href="https://www.gatsbyjs.com/blog/100days/">#100DaysOfGatsby</a> Page</ListItem>
          <ListItem><a href="https://www.gatsbyjs.com/blog/100days-challenge-1/">Challenge 1: Proof of Concept</a> -> <a href="https://www.youtube.com/watch?v=rOyE0CTw6Ko">100 Days of Gatsby Challenge 1: Proof of Concept - Solution</a></ListItem>
          <ListItem><a href="https://www.gatsbyjs.com/blog/challenge-2/">Challenge 2: Website Launch</a> -> <a href="https://www.youtube.com/watch?v=TbgSwfkKIfI">100 Days of Gatsby Challenge 2: Website Launch - Solution</a></ListItem></ListItem>
        <ListItem><a href="https://www.gatsbyjs.com/blog/100days-challenge-3/">Challenge 3: WordPress Blog</a> -> <a href="https://www.youtube.com/watch?v=JqF_y5RQbF8">The Gatsby WordPress Integration Workshop with Jason Bahl and Shane Thomas</a></ListItem>
        <ListItem><a href="https://www.gatsbyjs.com/blog/100days-challenge-4/">Challenge 4: Shopify Store</a></ListItem>
        </UnorderedList>

      <Text as="h4">Challenge 1 - POC & Contentful integration</Text>

      <UnorderedList>
        <ListItem>Make a Contentful content and get the <a href="https://www.contentful.com/developers/docs/references/authentication/">Contentful API keys</a></ListItem>
        <ListItem>Build Gatsby site with a few basic pages: home, about, and Contenful integration with API keys.</ListItem>
        <ListItem>Set routing for Contentful content using <a href="https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/">File System Route API</a></ListItem>
        <ListItem>Use <a href="https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image">Gatsby plugin image</a></ListItem>
        <ListItem>Build and deploy the site on <a href="https://www.gatsbyjs.com/docs/how-to/previews-deploys-hosting/">Gatsby Cloud</a>.</ListItem>
      </UnorderedList>

      <Text as="h4">Challenge 2 - Chakra UI, Formium, Preact, PWA, SEO</Text>

      <UnorderedList>
        <ListItem>Use <a href="https://www.gatsbyjs.com/docs/how-to/styling/other-css-frameworks/#chakra-ui">Chakra UI component library</a> for styling all the site</ListItem>
        <ListItem>Add the contact form on a Contact Page using <a href="https://formium.io/docs/react/frameworks/gatsb">Formium</a></ListItem>
        <ListItem>Replace React with <a href="https://www.gatsbyjs.com/plugins/gatsby-plugin-preact/">Preact</a></ListItem>
        <ListItem>Add <a href="https://www.gatsbyjs.com/docs/progressive-web-app">Progressive Web App capabilities</a> to the site</ListItem>
        <ListItem>Follow <a href="https://www.gatsbyjs.com/docs/add-seo-component">Gatsby’s tutorial for optimizing the site for SEO</a></ListItem>
      </UnorderedList>

      <Text as="h4">Challenge 3 - WordPress integration</Text>

      <UnorderedList>
        <ListItem>Set WP site and make a blognote.</ListItem>
        <ListItem>Add Gatsby’s <a href="https://www.gatsbyjs.com/blog/wordpress-integration">WordPress integration</a></ListItem>
        <ListItem>Set a new /blog route for WP content</ListItem>
        <ListItem><a href="https://github.com/gatsbyjs/gatsby/blob/master/packages/gatsby-source-wordpress/docs/hosting.md">Gatsby’s recommendations for hosting the WordPress installation</a></ListItem>
        <ListItem>Add <a href="https://wordpress.org/plugins/wordpress-seo/">Yoast SEO</a> and the <a href="https://wordpress.org/plugins/add-wpgraphql-seo/">WPGraphQL extension to WordPress</a>, and use that data to power the metadata for blog posts.</ListItem>
      </UnorderedList>

      <Text as="h4">Challenge 4 - Shopify store</Text>

      <UnorderedList>
        <ListItem>Sign up for <a href="https://developers.shopify.com/">Shopify Developer account to receive a free API key</a>, and make a shop with two products – a shirt and a hat</ListItem>
        <ListItem>Use the new <a href="https://github.com/gatsbyjs/gatsby-source-shopify-experimental">BETA source integration plugin for Shopify (gatsby-source-shopify-experimental)</a></ListItem>
        <ListItem>Follow the step-by-step <a href="https://github.com/gatsbyjs/gatsby-source-shopify-experimental/blob/master/README.md">instructions in that plugin</a></ListItem>
        <ListItem>Create a landing page, and pages for products</ListItem>
      </UnorderedList>

      </div>
    </Layout >
  )
}

export default IndexPage
