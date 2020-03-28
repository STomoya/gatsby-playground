import React from 'react'
import { useStaticQuery, graphql } from'gatsby'

const Footer = () => {
    const {site} = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        author
                        copyright_year
                    }
                }
            }`
    )

    return (
        <footer className={"footer mt-auto py-3 text-center"}>
            <div className={"container"}>
                <small className={"text-muted"}>&copy; {site.siteMetadata.copyright_year} {site.siteMetadata.author} all rights reserved</small>
            </div>
        </footer>
    )
}

export default Footer