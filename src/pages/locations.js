import * as React from "react"
import { Link as GatsbyLink, graphql } from "gatsby"
import Layout from "../components/layout"
import { Text, Link, ListItem, UnorderedList } from "@chakra-ui/react"

// markup
const LocationsPage = ({ data }) => {

  const locos = (data.allContentfulLoco.edges)

  return (
    <Layout>
      <Text as="h2">Locations</Text>
      <Text as="h3">Our California Locations</Text>
      <UnorderedList className="list-locations">
        {locos.map(loco => (
          <ListItem key={loco.node.id}>
            <Link as={GatsbyLink} to={loco.node.locoPath}>{loco.node.loco}</Link>
          </ListItem>
        ))}
      </UnorderedList>
    </Layout>
  )
}

export default LocationsPage

export const query = graphql`
query LocationsQuery {
  allContentfulLoco {
    edges {
      node {
        loco
        descriptionOfLoco {
          raw
        }
        locoPath: gatsbyPath(filePath: "/location/{contentfulLoco.loco}")
        gps {
          lat
          lon
        }
        img {
          title
          description
          id
        }
        id
      }
    }
    
  }
}
`
