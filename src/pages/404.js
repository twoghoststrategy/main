import React from 'react'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import { MetaData } from '../components/common/meta'
'use strict';

const NotFoundPage = ({ location }) => (
    <>

        <Layout>
            <MetaData location={location} />


        <div className="container">
            <article className="content" style={{ textAlign: `center` }}>
                <h1 className="content-title">Error 404</h1>
                <section className="content-body">
                    Page not found, <Link to="/">return home</Link> to start over
                </section>
            </article>
        </div>
        </Layout>

    </>
)

export default NotFoundPage
