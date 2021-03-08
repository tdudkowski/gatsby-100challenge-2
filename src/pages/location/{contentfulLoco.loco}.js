import * as React from "react"
import { Link, graphql } from "gatsby"
import parse from "html-react-parser"
import Layout from "../../components/layout"

const LocoPage = ({ data }) => {
  const loco = (data.contentfulLoco)
  return (
    <Layout>
      <ul className="list-navinlocation">
        <li> <Link to="/">/ home </Link></li>
        <li><Link to="/locations">/ our California locations</Link></li>
      </ul>
      <hr />
      <h2>{loco.loco}</h2>
      <section><strong>GPS:</strong> {loco.gps.lat}, {loco.gps.lon}</section>
      <section><img src={loco.img.fluid.src} alt={loco.img.description} />
        <hr />
        {loco.img.description}
      </section>
      <section> {parse(loco.descriptionOfLoco.raw)}</section>
    </Layout>
  )
}

export default LocoPage

export const query = graphql`
query LocoQuery($loco: String) {
    contentfulLoco (loco: {eq: $loco}) {
        id
    loco
    descriptionOfLoco {
      raw
    }
    gps {
      lat
      lon
    }
    img {
      title
      fluid {
        srcSetWebp
        src
      }
      description
    }
      }
}
`
