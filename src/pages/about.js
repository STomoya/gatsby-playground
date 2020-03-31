import React from 'react'

import Layout from '../components/layout'
import Head from '../components/head'
import {Image} from '../components/image'

const About = () => {
    return (
        <Layout>
            <Head title={"About"}></Head>
            <div className={"jumbotron text-center"}>
                <h1>GatsbyJS Playground</h1>
                <p>This is a sample site for playing around with GatsbyJS.</p>
            </div>

            <div className={"container"}>
                <h3 className={"text-center mb-2"}>What I am Using</h3>
                <div className={"d-flex justify-content-center"}>
                    <div className={"row"}>
                        <div className={"col-md mb-1"}>
                            <a href={"https://www.gatsbyjs.org/"}><Image filename={"gatsby_logo.png"} style={{width: '50px'}}/></a>
                        </div>
                        <div className={"col-md mb-1"}>
                            <a href={"https://reactjs.org/"}><Image filename={"react_logo.png"} style={{width: '50px'}}/></a>
                        </div>
                        <div className={"col-md mb-1"}>
                            <a href={"https://www.docker.com/"}><Image filename={"docker_logo.png"} style={{width: '50px'}}/></a>
                        </div>
                        <div className={"col-md mb-1"}>
                            <a href={"https://getbootstrap.com/"}><Image filename={"bootstrap_logo.png"} style={{width: '50px'}}/></a>
                        </div>
                        <div className={"col-md mb-1"}>
                            <a href={"https://github.com/"}><Image filename={"github_logo.png"} style={{width: '50px'}}/></a>
                        </div>
                    </div>
                </div>
            </div>

            
        </Layout>
    )
}

export default About