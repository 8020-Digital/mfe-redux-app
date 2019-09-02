import React from 'react'

export default (props) => {

    const { history } = props

    return (
        <div>
            <h3>Route 3 do Browser</h3>
            <button onClick={() => { history.replace("/") }}>Navigate to Home</button>
            <button onClick={() => { history.goBack() }}>Back</button>
            <button onClick={() => { history.push("/route4") }}>Navigate to Route 4</button>
        </div>
    )
}