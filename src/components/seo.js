import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
// import { useLocation } from "@reach/router"
import { useStaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => {
    // const { pathname } = useLocation()
    const { site } = useStaticQuery(query)

    const {
        defaultTitle,
        // titleTemplate,
        defaultDescription,
    } = site.siteMetadata

    const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
    }

    return (
        <Helmet title={seo.title} description={seo.description} defer={false} >
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
        </Helmet>
    )
}

export default SEO

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    article: PropTypes.bool,
}

SEO.defaultProps = {
    title: null,
    description: null,
    image: null,
    article: false,
}

const query = graphql`
query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        siteUrl: url
        defaultImage: image
        twitterUsername
      }
    }
  }
  `

