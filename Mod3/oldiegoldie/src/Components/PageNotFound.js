import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/PageNotFound.css"

const PageNotFound = () => {
    return (
        <div className="page-not-found">
            <h1>404-Page Not Found!</h1>
            <button className='errorHomeButton'>
                <Link to="/" >Go back to the homepage!</Link>
            </button>
        </div>
    )
}
export default PageNotFound
