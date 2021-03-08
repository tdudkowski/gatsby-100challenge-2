import * as React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import Layout from "../components/layout"
import { Text } from "@chakra-ui/react"

const BlogPage = ({ data }) => {

    const post = data.wpcontent.post
    console.log(post)

    return (
        <Layout>
            <Text as="h2">Blog</Text>
            <Text as="h3">{post.title}</Text>
            <Text as="p">{post.content}</Text>
        </Layout>
    )
}

export default BlogPage

export const query = graphql`
query WPGraphQLPost($id: ID!) {
    wpcontent {
        post(id: $id) {
            id
            content
            slug
            title
            uri
          }
      }
  }
`