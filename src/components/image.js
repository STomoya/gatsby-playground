import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Image = ({filename, alt, style}) => {
    const data = useStaticQuery(
        graphql`
        query {
            images: allFile {
                edges {
                    node {
                        relativePath
                        name
                        childImageSharp {
                            sizes (maxWidth: 800) {
                                ...GatsbyImageSharpSizes
                            }
                        }
                    }
                }
            }
        }`
    )

    const image = data.images.edges.find( n =>
        n.node.relativePath.includes(filename)
    )

    if (!image) {
        return null;
    }

    const imageSizes = image.node.childImageSharp.sizes
    return (
        <Img
        alt={alt}
        sizes={imageSizes}
        style={style} />
    )
}

Image.defaultProps = {
    alt: '',
    style: {},
}

Image.propTypes = {
    filename: PropTypes.string.isRequired,
    alt: PropTypes.string,
    style: PropTypes.object,
}

export {Image}