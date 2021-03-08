import * as React from "react"
import { graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../components/layout"
import { Text, Link, ListItem, UnorderedList } from "@chakra-ui/react"

const ShopPage = ({ data }) => {

  const items = (data.allShopifyProduct.edges)

  return (
    <Layout>
      <Text as="h2">Shop</Text>
      <hr />
      <Text as="h3">Gatsby Swag Shop</Text>
      <UnorderedList className="list-shop">
        {items.map(item => (
          <ListItem key={item.node.storefrontId}>
            {/* <Link as={GatsbyLink} to={post.node.title}>{post.node.title}</Link> */}
            <Text as="h3">{parse(item.node.title)}</Text>
            <img src={item.node.featuredImage.originalSrc} alt={item.node.description} width="300" />
            <Text as="p">{parse(item.node.description)}</Text>
          </ListItem>
        ))}
      </UnorderedList>
    </Layout>
  )
}

export default ShopPage

export const query = graphql`
query ShopifyQuery {
  allShopifyProduct {
   edges {
     node {
       title
       description
       images {
         src
         originalSrc
       }
       storefrontId
       featuredImage {
        originalSrc
        localFile {
          absolutePath
        }
      }
     }
   }
 }
}
`
// export const query = graphql`
// products: allShopifyProduct(
//     sort: { fields: [publishedAt], order: ASC }
//   ) {
//     edges {
//       node {
//         id
//         storefrontId
//         featuredImage {
//           id
//           altText
//           gatsbyImageData(width: 910, height: 910)
//         }
//       }
//     }
//   }
//   `