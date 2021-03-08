import React from "react"
import SEO from './seo';
import { Link as GatsbyLink } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { Box, Text, Link, ListItem, UnorderedList } from "@chakra-ui/react"
import "./layout.css"

const Layout = ({ children }) => {
    return (
        <Box as="div" className="container">
            <SEO />
            <Box as="header">
                <Link as={GatsbyLink} activeClassName="menuLinkActive" className="link-header" to="/">
                    <Text as="h1">AudioC0RE</Text>

                    <StaticImage
                        src="../images/headphones-smallo.gif"
                        alt="Headaphone"
                        placeholder="blurred"
                        layout="fixed"
                        width={80}
                        height={80}
                    />
                </Link>
                <UnorderedList className="menu">
                    <ListItem><Link as={GatsbyLink} activeClassName="menuLinkActive" to="/">home</Link></ListItem>
                    <ListItem><Link as={GatsbyLink} activeClassName="menuLinkActive" to="/shop">shop</Link></ListItem>
                    <ListItem><Link as={GatsbyLink} activeClassName="menuLinkActive" to="/blog">blog</Link></ListItem>
                    <ListItem><Link as={GatsbyLink} activeClassName="menuLinkActive" to="/locations">locations</Link></ListItem>
                    <ListItem><Link as={GatsbyLink} activeClassName="menuLinkActive" to="/about">about / contact</Link></ListItem>
                </UnorderedList>
            </Box>
            <Box as="main">
                {children}
            </Box>
            <Box as="footer" className="footer">
                <hr />
                <Text as="p"><a href="https://www.gatsbyjs.com/blog/100days/">#100DaysOfGatsby @ 2021</a></Text>
            </Box>
            {/* <ul>
                    <li><Link to="/404">404</Link></li>
                    <li><Link to="/index-orig">orig</Link></li>
                </ul> */}
        </Box>
    )
}

export default Layout
