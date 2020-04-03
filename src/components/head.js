import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({title}) => {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }`
    )
    
    return (
        <Helmet title={title} titleTemplate={`%s | ${site.siteMetadata.title}`}>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous"></link>
            <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
        </Helmet>
    )
}

Head.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Head