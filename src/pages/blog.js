import * as React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import { Text, Link, ListItem, UnorderedList } from "@chakra-ui/react"

const BlogPage = ({ data }) => {

  const posts = data.wpcontent.posts.edges

  return (
    <Layout>
      <Text as="h2">Blog</Text>

      <UnorderedList className="list-locations">
        {posts.map(post => (
          <ListItem key={post.node.id}>
            {/* <Link as={GatsbyLink} to={post.node.title}>{post.node.title}</Link> */}
            <Text as="h3">{parse(post.node.title)}</Text>
            <Text as="p">{parse(post.node.content)}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Layout>
  )
}

export default BlogPage

export const query = graphql`
query WPGraphQL {
    wpcontent {
        posts {
          edges {
            node {
              content
              title
              slug
              id
              uri
            } 
          }
        }
      }
  }
`