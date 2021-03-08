import * as React from "react"
import Layout from "../components/layout"
import { Text } from "@chakra-ui/react"

const ShopPage = ({ data }) => {

  return (
    <Layout>
      <Text as="h2">Shop</Text>
    </Layout>
  )
}

export default ShopPage

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