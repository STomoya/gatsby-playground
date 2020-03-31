import React from 'react'
import PropTypes from "prop-types"

import Navbar from "../components/navbar"
import Footer from "../components/footer"

const Layout = ({children}) => {
    return (
        <>
            <Navbar></Navbar>
                <main>{children}</main>
            <Footer></Footer>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout