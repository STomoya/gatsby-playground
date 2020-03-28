import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

const Navbar = () => {
    const {site} = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                    }
                }
            }`
    )

    return (
        <nav
        className={"navbar navbar-expand-lg navbar-light bg-light"}>
            <Link to={"/"} className={"navbar-brand"}>{site.siteMetadata.title}</Link>
            <button className={"navbar-toggler"} type={"button"} data-toggle={"collapse"} data-target={"#navbarNavDropdown"} aria-controls={"navbarNavDropdown"} aria-expanded={"false"} aria-label={"Toggle navigation"}>
                <span className={"navbar-toggler-icon"}></span>
            </button>

            <div className={"collapse navbar-collapse"} id={"navbarNavDropdown"}>
                <div className={"navbar-nav"}>
                    <Link to={"/"} className={"navbar-item nav-link"} activeClassName={"active"}>Home</Link>
                    <Link to={"/about"} className={"navbar-item nav-link"} activeClassName={"active"}>About</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar