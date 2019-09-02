import React from 'react'
import { Helmet } from "react-helmet";

export default () => {
    return (
        <div>
            <Helmet>
                <title>My Title</title>
                <meta name="description" content="Helmet application" />
            </Helmet>
            <h3>Route 1</h3>
        </div>
    )

}