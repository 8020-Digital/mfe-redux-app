import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div>
            <h3>Route 2 do browser</h3>

            <button>
                <Link to="/route3">
                    Navigate to router 3 of browser
                </Link>
            </button>
        </div>
    )
}